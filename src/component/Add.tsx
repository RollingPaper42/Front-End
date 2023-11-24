'use client';
import BottomButton from '@/component/BottomButton';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useRef } from 'react';
import Image from 'next/image';
// import { useRecoilState } from 'recoil';

interface AddProps {
  id: string;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

export default function Add({ id, setIsAdd }: AddProps) {
  const [text, setText] = useInput('');
  const [imgFile, setImgFile] = useInput('');
  const [writer, , handleWriter] = useInput('');
  const router = useRouter();
  // const [modal, setModal] = useRecoilState(modalState);
  const imgRef = useRef<HTMLInputElement>(null);

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    router.push('/');
    // redirect 해야함 -> main으로?
  }

  const handleClick = () => {
    if (text === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (writer === '') {
      alert('작성자명을 입력해주세요');
    }
    //const isConfirmed = await useConfirm('작성한 글을 이어붙이시겠습니까?', setModal);
    const isConfirmed = true;
    if (isConfirmed) {
      const data = {
        text: text,
        photo: imgFile,
        writer: writer,
      };

      axiosInstance
        .post(`/board/${id}/content`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response.status === 406) {
            alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
          }
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

  // 이미지 업로드 input의 onChange
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
        className="bottom-[200px] ml-5 inline w-full text-justify text-[20px] text-purple-700 outline-none"
      />
      {text === '' && (
        <div className="inline text-[20px] text-purple-200" onClick={focusText}>
          20자 이상 내용을 입력해주세요
        </div>
      )}
      {text?.length > 900 && (
        <div
          className={`text-right ${
            text.length > 1000 ? 'text-red-600' : 'text-black'
          }`}
        >
          {text.length}/1000자
        </div>
      )}
      <div className="z-10 w-full">
        <div className="m-2 flex w-80 items-center">
          From :
          <input
            type="text"
            id="writer"
            value={writer}
            className="h-8 w-[180px] px-2 outline-none placeholder:text-[#CACACA]"
            placeholder="10글자 제한"
            maxLength={11}
            onChange={handleWriter}
          />
          <div
            className={`text-right ${
              writer.length > 10 ? 'text-red-600' : 'text-[#CACACA]'
            }`}
          >
            {writer.length}/10자
          </div>
        </div>
      </div>
      <div className=" bottom-5 flex w-full flex-row">
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
          disabled={
            text === '' ||
            writer === '' ||
            text.length > 1000 ||
            writer.length > 10
          }
        />
      </div>
    </div>
  );
}
