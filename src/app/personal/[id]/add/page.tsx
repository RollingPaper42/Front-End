'use client';

import { AxiosError } from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Writer from './Writer';
import BottomButton from '@/component/BottomButton';
import Loading from '@/component/Loading';
import Error from '@/component/Modal/Error';
import PhotoUpload from '@/component/PhotoUpload';
import PreviewPhoto from '@/component/PreviewPhoto';
import Textarea from '@/component/Textarea';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { addContentState } from '@/recoil/content';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';
import { defaultState } from '@/utils/theme/default';
import { useRouter } from 'next/navigation';

export default function Add({ params }: { params: { id: string } }) {
  const [text, setText] = useState('');
  const [writer, , handleWriter] = useInput('');
  const [openModal, closeModal] = useModal();
  const [, setAddContent] = useRecoilState(addContentState);
  const [image, setImage] = useInput<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    const postPictures = async () => {
      return await axiosInstance.post(
        `/boards/${params.id}/contents/pictures`,
        { picture: image },
      );
    };

    const postContents = async (photoUrl: string) => {
      return await axiosInstance
        .post(`/boards/${params.id}/contents`, {
          text: text,
          writer: writer,
          photoUrl: photoUrl,
        })
        .then((res) => {
          setAddContent(res.data);
        });
    };

    const changeAxiosHeader = (type: string) => {
      axiosInstance.defaults.headers.common['Content-Type'] = type;
    };

    const isConfirmed = await confirm(openModal, closeModal, '완료하시겠어요?');
    if (isConfirmed) {
      try {
        let photoRes = { data: '' };
        if (image !== null) {
          changeAxiosHeader('multipart/form-data');
          photoRes = await postPictures();
        }
        changeAxiosHeader('application/json');
        await postContents(photoRes.data);
        router.push(`/personal/${params.id}`);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status === 406) {
          openModal(
            <Error
              mainContent="일시적으로 문제가 발생했어요 🥲"
              subContent="잠시 후 다시 시도해주세요."
              handleModalClose={closeModal}
            />,
          );
        }
      }
    }
  };

  return (
    <div className={`h-full w-full ${defaultState.background}`}>
      <div className="pt-[100px]" />
      {isLoading && <Loading />}
      {preview && (
        <div className="mb-[4px] mt-[16px]">
          <PreviewPhoto
            preview={preview}
            setPreview={setPreview}
            setImage={setImage}
          />
        </div>
      )}
      <div className={`px-[24px] ${defaultState.background}`}>
        <div className="mt-[16px] flex items-center justify-center">
          <Textarea
            width="w-full"
            maxHeight="max-h-[250px]"
            placeholder="내용을 입력해주세요."
            textColor="text-white "
            text={text}
            setText={setText}
            maxLength={400}
            handleFocus={() => setIsFixed(true)}
          />
        </div>
        <div className="mb-[12px] mt-[20px] cursor-default select-none text-body-size2 font-semibold tracking-[-0.32px] text-[#BCBCBC] ">
          From
        </div>
        <Writer
          writer={writer}
          handleWriter={handleWriter}
          setIsFixed={setIsFixed}
        />
      </div>
      <div
        className={`${
          isFixed
            ? `relative mt-[50px] ${defaultState.background}`
            : 'fixed bottom-0 left-0'
        } z-button flex w-full items-center justify-center`}
      >
        <div
          className={`flex h-[70px] w-full max-w-md flex-row items-center space-x-[12px] px-[24px]`}
        >
          <PhotoUpload
            setImage={setImage}
            setPreview={setPreview}
            setIsLoading={setIsLoading}
          />
          <BottomButton
            textColor=""
            color="bg-strcat-bright-yellow"
            name="완료"
            width="basis-1/2"
            onClickHandler={handleClick}
            disabled={text === '' || text.length > 400 || writer.length > 10}
          />
        </div>
      </div>
    </div>
  );
}
