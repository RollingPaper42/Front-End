'use client';
import BottomButton from '@/component/BottomButton';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useRef } from 'react';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import Error from '@/component/Modal/Error';
import { confirm } from '@/utils/confirm';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';

interface AddProps {
  id: string;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

export default function Add({ id, setIsAdd }: AddProps) {
  const [text, setText] = useInput('');
  const [imgFile, setImgFile] = useInput('');
  const [writer, , handleWriter] = useInput('');
  const router = useRouter();
  const [openModal, closeModal] = useModal();
  const imgRef = useRef<HTMLInputElement>(null);
  const [theme] = useRecoilState(themeState);

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    router.push('/');
  }

  const handleClick = async () => {
    if (text.length < 20) {
      openModal(
        <Error
          content="이어 쓸 스트링을 20자 이상 입력해주세요"
          handleModalClose={closeModal}
        />,
      );
      return;
    }
    const isConfirmed = await confirm(
      '작성한 스트링을 이어붙이시겠습니까?',
      openModal,
      closeModal,
    );
    if (isConfirmed) {
      // photo upload전 1MB이하로 압축하기
      axiosInstance
        .post(`/boards/${id}/contents`, imgFile)
        .then((res) => {
          console.log(res);
          const data = {
            text: text,
            photo: res.data,
            writer: writer,
          };
          axiosInstance
            .post(`/boards/${id}/contents`, data)
            .then((res) => {
              setIsAdd(false);
              console.log(res);
            })
            .catch((err) => {
              if (err.response.status === 406) {
                alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const focusText = () => {
    const textDiv = document.getElementById('text');
    textDiv?.focus();
  };

  const handleInputText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const saveImgFile = () => {
    if (!imgRef.current?.files) return;
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result as string);
    };
  };

  return (
    <div className="inline w-full">
      <div
        id="text"
        contentEditable="true"
        suppressContentEditableWarning
        onInput={(e) => setText(e.currentTarget.innerText)}
        onKeyDown={(e) => handleInputText(e)}
        className={`${theme.highlightText} bottom-[200px] ml-5 inline w-full text-justify text-[22px] outline-none`}
        style={{ cursor: 'padding:0 6px;' }}
      />
      {text === '' && (
        <div
          className={`inline text-[20px] ${theme.highlightText} opacity-50 `}
          onClick={focusText}
        >
          20자 이상 내용을 입력해주세요
        </div>
      )}
      {text?.length >= 1000 && (
        <div
          className={`text-right ${
            text.length > 1000 ? 'text-red-600' : 'text-strcat-default-white'
          }`}
        >
          {text.length}/1000자
        </div>
      )}
      <div className="z-10 mt-[24px] flex w-full items-center justify-center">
        <div className="flex w-full items-center justify-center space-x-[16px]">
          <div className={`${theme.defaultText} w-fit text-[16px]`}>From :</div>
          <input
            type="text"
            id="writer"
            value={writer}
            className={`${theme.defaultText} w-[163px] bg-transparent text-[16px] outline-none placeholder:text-[#909090]`}
            placeholder="익명의 스트링캣"
            maxLength={11}
            onChange={handleWriter}
          />
          <div
            className={`w-16 text-right text-[16px] 
            ${
              writer === ''
                ? 'text-[#909090]'
                : writer.length > 10
                ? 'text-red-600'
                : 'text-strcat-default-white'
            }
           `}
          >
            {writer.length}/10자
          </div>
        </div>
      </div>
      <div className="sticky bottom-5 flex w-full flex-row">
        <BottomButton
          name="취소"
          width="basis-1/5"
          onClickHandler={() => setIsAdd(false)}
          disabled={false}
        />
        <form className="mx-2 flex basis-1/5 items-center justify-center rounded-lg bg-[#CCCCCC]">
          {imgFile ? (
            <>
              <Image width={63} height={63} src={imgFile} alt="프로필 이미지" />
              <div className="top-0 z-10 h-full" onClick={() => setImgFile('')}>
                x
              </div>
            </>
          ) : (
            <>
              <label className="img-label text-xl text-white" htmlFor="imgFile">
                사진
              </label>
              <input
                type="file"
                accept="image/*"
                id="imgFile"
                onChange={saveImgFile}
                ref={imgRef}
                className="img-input hidden"
              />
            </>
          )}
        </form>
        <BottomButton
          name="완료"
          width="basis-3/5"
          onClickHandler={handleClick}
          disabled={text === '' || text.length > 1000 || writer.length > 10}
        />
      </div>
    </div>
  );
}
