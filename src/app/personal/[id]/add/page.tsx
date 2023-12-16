'use client';

import { AxiosError } from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Writer from './Writer';
import BottomButton from '@/component/BottomButton';
import Error from '@/component/Modal/Error';
import PhotoUpload from '@/component/PhotoUpload';
import PreviewPhoto from '@/component/PreviewPhoto';
import Textarea from '@/component/Textarea';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { useScroll } from '@/hooks/useScroll';
import { themeState } from '@/recoil/theme/theme';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';
import { useRouter } from 'next/navigation';

export default function Add({ params }: { params: { id: string } }) {
  const [text, setText] = useState('');
  const [writer, , handleWriter] = useInput('');
  const [openModal, closeModal] = useModal();
  const [theme] = useRecoilState(themeState);
  const [image, setImage] = useInput<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const router = useRouter();
  const { isHidden, setIsHidden } = useScroll({
    scrollEvent: false,
  });

  const handleClick = async () => {
    const isConfirmed = await confirm(openModal, closeModal, '완료하시겠어요?');
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
    <>
      <div className={`h-full w-full ${theme.bgTheme.background}`}>
        <div className="pt-[100px]" />
        {preview && (
          <div className="mb-[4px] mt-[16px]">
            <PreviewPhoto
              preview={preview}
              setPreview={setPreview}
              setImage={setImage}
            />
          </div>
        )}
        <div className={`px-[24px] ${theme.bgTheme.background}`}>
          <div className="mt-[16px] flex items-center justify-center">
            <Textarea
              width="w-full"
              maxHeight="max-h-[250px]"
              placeholder="내용을 입력해주세요."
              textColor="text-white "
              text={text}
              setText={setText}
              maxLength={400}
              handleFocus={() => {
                setIsHidden(true);
              }}
              handleBlur={() => {
                setIsHidden(false);
              }}
            />
          </div>
          <div className="mb-[12px] mt-[20px] text-body-size2 font-semibold tracking-[-0.32px] text-[#BCBCBC] ">
            From
          </div>
          <Writer
            writer={writer}
            handleWriter={handleWriter}
            setIsHidden={setIsHidden}
          />
          <div className="pb-[154px]" />
        </div>
      </div>
      <div
        className={`fixed bottom-0 left-0 z-button flex w-full items-center justify-center transition-transform duration-300 ${
          isHidden ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`flex h-[70px] w-full max-w-md flex-row items-center space-x-[12px] px-[24px] ${theme.bgTheme.background}`}
        >
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
