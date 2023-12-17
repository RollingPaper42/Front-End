import imageCompression from 'browser-image-compression';
import React, { Dispatch } from 'react';

import Error from './Modal/Error';
import useModal from '@/hooks/useModal';

interface Props {
  setImage: Dispatch<React.SetStateAction<File | null>>;
  setPreview: Dispatch<React.SetStateAction<string>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export default function PhotoUpload({
  setImage,
  setPreview,
  setIsLoading,
}: Props) {
  const [openModal, closeModal] = useModal();

  const heicToJpeg = async (file: File) => {
    const heic2any = require('heic2any');
    const convertedBlob = await heic2any({
      blob: file,
      toType: 'image/jpeg',
      quality: 0.1,
    });
    return new File(
      [convertedBlob as BlobPart],
      file.name.split('.')[0] + '.jpeg',
      {
        type: 'image/jpeg',
      },
    );
  };

  const compressFile = async (file: File) => {
    const options = {
      maxSizeMB: 1,
      alwaysKeepResolution: true,
      useWebWorker: true,
      maxIteration: 3,
      initialQuality: 0.5,
    };
    return await imageCompression(file, options);
  };

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setPreview('');
    if (e.target.files === null) return;
    let file = e.target?.files[0];
    try {
      if (file.type === 'image/heic') {
        //heic파일을 png로 변환
        file = await heicToJpeg(file);
      }
      if (file.size > 1024 * 1024) {
        //1mb 이상이면 압축
        file = await compressFile(file);
        if (file.size > 1024 * 1024) {
          //1mb 이상이면 에러모달
          openModal(
            <Error
              mainContent="1MB 이하의 사진을 올려주세요"
              handleModalClose={closeModal}
            />,
          );
          return;
        }
      }
      setImage(file);
      // 이미지를 프리뷰로 띄우기 위해 base64로 변환
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex h-[46px] basis-1/2 items-center justify-center">
      <label
        htmlFor="imgFile"
        className={`relative flex h-full w-full cursor-pointer select-none items-center justify-center
           rounded-[5px] bg-[#4D4D4D] text-body-size2 font-bold text-white/90`}
      >
        사진 첨부
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/heic"
        id="imgFile"
        onChange={handleChangeImage}
        className="img-input hidden"
      />
    </form>
  );
}
