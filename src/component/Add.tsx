'use client';
import BottomButton from '@/component/BottomButton';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import useModal from '@/hooks/useModal';
import Error from '@/component/Modal/Error';
import { confirm } from '@/utils/confirm';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { AxiosError } from 'axios';
import { content } from '@/types/content';
import PhotoUpload from './PhotoUpload';

interface AddProps {
  id: string;
  setContent: Dispatch<SetStateAction<content[]>>;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

export default function Add({ id, setIsAdd, setContent }: AddProps) {
  const [text, setText] = useInput('');
  const [writer, , handleWriter] = useInput('');
  const router = useRouter();
  const [openModal, closeModal] = useModal();
  const [theme] = useRecoilState(themeState);
  const [image, setImage] = useInput<Blob | null>(null);

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
      try {
        console.log('here');
        const photoRes = await axiosInstance.post(
          `/boards/${id}/contents/pictures`,
          image,
        );
        console.log(photoRes);
        const data = {
          text: text,
          photoUrl: photoRes.data,
          writer: writer,
        };
        const contentRes = await axiosInstance.post(
          `/boards/${id}/contents`,
          data,
        );
        setContent((prevContent: content[]) => [
          ...prevContent,
          { id: contentRes.data.id, ...data },
        ]);
        setIsAdd(false);
        console.log(contentRes);
      } catch (err) {
        const error = err as AxiosError;
        console.log(error);
        if (error.response?.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      }
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

  return (
    <div className="inline w-full">
      <div
        id="text"
        contentEditable="true"
        suppressContentEditableWarning
        onInput={(e) => setText(e.currentTarget.innerText)}
        onKeyDown={(e) => handleInputText(e)}
        className={`${theme.highlightText} bottom-[200px] ml-5 inline w-full text-justify text-[22px] outline-none`}
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
      <div className="fixed bottom-5 left-0 flex w-full items-center justify-center">
        <div className="flex w-full max-w-md flex-row px-[24px]">
          <BottomButton
            height="h-[42px]"
            color="bg-white"
            name="취소"
            width="basis-1/5"
            onClickHandler={() => setIsAdd(false)}
            disabled={false}
          />
          <PhotoUpload setImage={setImage} />
          <BottomButton
            height="h-[42px]"
            color={`${theme.rightCTA} mx-2`}
            name="완료"
            width="basis-1/2"
            onClickHandler={handleClick}
            disabled={text === '' || text.length > 1000 || writer.length > 10}
          />
        </div>
      </div>
    </div>
  );
}
