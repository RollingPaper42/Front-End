'use client';

import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { AxiosError } from 'axios';
import { content } from '@/types/content';
import useModal from '@/hooks/useModal';
import Error from '@/component/Modal/Error';
import { confirm } from '@/utils/confirm';
import BottomButton from '@/component/BottomButton';
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
  const [image, setImage] = useInput<File | null>(null);

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    router.push('/');
  }

  const handleClick = async () => {
    const isConfirmed = await confirm(
      '작성한 스트링을 이어붙이시겠습니까?',
      openModal,
      closeModal,
    );
    if (isConfirmed) {
      try {
        let data = {
          text: text,
          writer: writer,
          photoUrl: '',
        };
        if (image !== null) {
          axiosInstance.defaults.headers.common['Content-Type'] =
            'multipart/form-data';
          const photoRes = await axiosInstance.post(
            `/boards/${id}/contents/pictures`,
            { picture: image },
          );
          data = { ...data, photoUrl: photoRes.data };
        }
        axiosInstance.defaults.headers.common['Content-Type'] =
          'application/json';
        const contentRes = await axiosInstance.post(
          `/boards/${id}/contents`,
          data,
        );
        setIsAdd(false);
        setContent((prevContent: content[]) => [
          ...prevContent,
          { id: contentRes.data, ...data },
        ]);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status === 406) {
          openModal(
            <Error
              content="올바르지 않은 입력입니다. 다시 작성해주세요."
              handleModalClose={closeModal}
            />,
          );
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
        className={`${theme.highlightText} bottom-[200px] ml-[8px] inline w-full text-justify text-[18px] outline-none`}
      />
      {text === '' && (
        <div
          className={`inline text-[18px] ${theme.highlightText} opacity-50 `}
          onClick={focusText}
        >
          20자 이상 내용을 입력해주세요
        </div>
      )}
      <div
        className={`ml-[8px] inline text-right 
        ${
          text.length > 1000 || text.length < 20
            ? 'text-strcat-error'
            : `${theme.highlightText}`
        }`}
      >
        {text != '' && text.length < 20
          ? '20자 이상 내용을 입력해주세요'
          : `${text.length}/1000자`}
      </div>
      <div className="sticky bottom-[88px] z-10 mt-[24px] flex w-full items-center justify-center">
        <div className="flex w-full items-center justify-center space-x-[16px]">
          <div className={`${theme.defaultText} w-fit text-[16px]`}>From :</div>
          <input
            type="text"
            id="writer"
            value={writer}
            className={`${theme.defaultText} w-[163px] bg-transparent text-[16px] outline-none ${theme.placeholder} placeholder:text-opacity-50`}
            placeholder="익명의 스트링캣"
            maxLength={11}
            onChange={handleWriter}
          />
          <div
            className={`flex w-16 items-center justify-center text-right text-[16px]
              ${
                writer.length > 10
                  ? 'text-strcat-error'
                  : `${theme.defaultText}`
              }
              ${writer === '' && ' text-opacity-50'}
              `}
          >
            {writer.length}/10자
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-0 z-10 flex w-full items-center justify-center">
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
            color={`${theme.rightCTA}`}
            name="완료"
            width="basis-3/5"
            onClickHandler={handleClick}
            disabled={
              text === '' ||
              text.length > 1000 ||
              text.length < 20 ||
              writer.length > 10
            }
          />
        </div>
      </div>
    </div>
  );
}
