'use client';

import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import PhotoUpload from './PhotoUpload';
import BottomButton from '@/component/BottomButton';
import Error from '@/component/Modal/Error';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { bodyFont, captionFont } from '@/recoil/font';
import { themeObj, themeState } from '@/recoil/theme/theme';
import { content } from '@/types/content';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';
import { useRouter } from 'next/navigation';

interface AddProps {
  id: string;
  setContent: Dispatch<SetStateAction<content[]>>;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  boardTheme: 'strcat' | 'green' | 'cyan' | 'calm';
}

export default function Add({
  id,
  setIsAdd,
  setContent,
  boardTheme,
}: AddProps) {
  const [text, setText] = useInput('');
  const [writer, , handleWriter] = useInput('');
  const router = useRouter();
  const [openModal, closeModal] = useModal();
  const [theme, setTheme] = useRecoilState(themeState);
  const [image, setImage] = useInput<File | null>(null);

  useEffect(() => {
    setTheme(themeObj[boardTheme]);
  }, []);
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

  useEffect(() => {
    const textDiv = document.getElementById('text');
    textDiv?.focus();
  }, []);

  const focusText = () => {
    const textDiv = document.getElementById('text');
    const selection = window.getSelection();
    textDiv?.focus();
    selection?.setPosition(textDiv, 0);
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
        className={`${theme.textTheme.highlight} bottom-[200px] ml-[8px] inline w-full text-justify  ${bodyFont.category1} outline-none`}
      />
      {text === '' && (
        <div
          className={`inline ${bodyFont.category1} ${theme.textTheme.highlight} opacity-50 `}
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
            : `${theme.textTheme.highlight} text-opacity-50`
        }`}
      >
        {text != '' && text.length < 20
          ? '20자 이상 내용을 입력해주세요'
          : `${text.length}/1000자`}
      </div>
      <div className="sticky bottom-[88px] z-10 mt-[24px] flex w-full items-center justify-center">
        <div className="flex w-full items-center justify-between px-[16px]">
          <div className="flex flex-row">
            <div
              className={`${theme.textTheme.default} mr-[16px] w-fit min-w-fit ${captionFont.category1}`}
            >
              From :
            </div>
            <input
              type="text"
              id="writer"
              value={writer}
              className={`${theme.textTheme.default} w-fit bg-transparent ${captionFont.category1} outline-none ${theme.textTheme.placeholder} placeholder:text-opacity-50`}
              placeholder="익명의 스트링캣"
              maxLength={11}
              onChange={handleWriter}
            />
          </div>
          <div
            className={`flex w-fit min-w-fit items-center justify-center text-right ${
              captionFont.category1
            }
            ${
              writer.length > 10
                ? 'text-strcat-error'
                : `${theme.textTheme.default}`
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
            color={`${theme.bgTheme.rightCTA}`}
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
