'use client';

import { AxiosError } from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '@/component/BottomButton';
import Error from '@/component/Modal/Error';
import PhotoUpload from '@/component/PhotoUpload';
import PreviewPhoto from '@/component/PreviewPhoto';
import Textarea from '@/component/Textarea';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { themeState } from '@/recoil/theme/theme';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';

export default function Add({ params }: { params: { id: string } }) {
  const [text, setText] = useState('');
  const [writer, , handleWriter] = useInput('');
  const [openModal, closeModal] = useModal();
  const [theme] = useRecoilState(themeState);
  const [image, setImage] = useInput<File | null>(null);
  const [preview, setPreview] = useState<string>('');

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
            `/boards/${params.id}/contents/pictures`,
            { picture: image },
          );
          data = { ...data, photoUrl: photoRes.data };
        }
        axiosInstance.defaults.headers.common['Content-Type'] =
          'application/json';
        const contentRes = await axiosInstance.post(
          `/boards/${params.id}/contents`,
          data,
        );
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
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <>
      <div className={`w-full h-full ${theme.bgTheme.background}`}>
        <div className="pt-[84px]" />
        {preview && (
          <div className="mb-[4px] mt-[16px]">
            <PreviewPhoto
              preview={preview}
              setPreview={setPreview}
              setImage={setImage}
            />
          </div>
        )}
        <div className="px-[24px]">
          <div className="mt-[16px] flex justify-center items-center">
            <Textarea
              width="w-full"
              height="h-[160px]"
              placeholder="내용을 입력해주세요."
              textColor="text-white "
              maxLength={400}
              onTextChange={handleTextChange}
            />
          </div>
          <div className="mt-[20px] mb-[12px] text-body-size2 font-semibold text-white/70 tracking-[-0.32px] ">
            From
          </div>
          <div className="h-[51px] pl-[16px] w-full flex items-center justify-center rounded-lg bg-white/10">
            <input
              className="text-body-size2 w-full h-full outline-none bg-transparent placeholder:text-white/50 text-white"
              maxLength={11}
              value={writer}
              onChange={handleWriter}
              placeholder="익명의 스트링캣"
            />
            <div
              className={`pr-[16px] text-caption-size2 ${
                writer.length > 10 ? 'text-[#DE6565]/50' : 'text-white/50'
              }`}
            >
              {writer.length}/10
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-0 z-button flex w-full items-center justify-center">
        <div className="flex w-full max-w-md flex-row px-[24px]">
          <PhotoUpload setImage={setImage} setPreview={setPreview} />
          <BottomButton
            textColor="text-[#212121]"
            height="h-[42px]"
            color="bg-[#FDFFB0]"
            name="완료"
            width="basis-1/2"
            onClickHandler={handleClick}
            disabled={text === '' || text.length > 400 || writer.length > 10}
          />
        </div>
      </div>
    </>
  );
}