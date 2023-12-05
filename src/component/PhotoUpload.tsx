import React, { Dispatch, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';
import PreviewPhoto from './PreviewPhoto';
import { titleFont } from '@/recoil/font';

interface Props {
  setImage: Dispatch<React.SetStateAction<File | null>>;
}
const PhotoUpload = ({ setImage }: Props) => {
  const [theme] = useRecoilState(themeState);
  const [preview, setPreview] = useState<string>();

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target?.files[0];
    const options = {
      maxSizeMB: 1,
      alwaysKeepResolution: true,
    };
    try {
      if (file.size > 1024) {
        const compressedFile = await imageCompression(file, options);
        const preview = new File([compressedFile], compressedFile.name, {
          type: compressedFile.type,
        });
        setImage(preview);
      } else {
        setImage(file);
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {preview ? (
        <>
          <PreviewPhoto
            preview={preview}
            setPreview={setPreview}
            setImage={setImage}
          />
          <div className="relative mx-2 h-[42px] w-full basis-1/5 ">
            <div
              className={`absolute top-[3px] h-[39px] w-full ${theme.leftCTA}`}
            />
            <div
              className={`absolute left-[2px] top-0 h-[39px] w-full ${theme.leftCTA}`}
            />
            <div className="absolute left-[1px] top-[4px] flex h-[33px] w-full items-center justify-center text-black">
              <Image
                src="/Picture.svg"
                alt="pictureIcon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </>
      ) : (
        <form className="mx-2 flex h-[42px] basis-1/5 items-center justify-center">
          <label htmlFor="imgFile" className="relative h-full w-full">
            <div
              className={`absolute top-[3px] h-[39px] w-full ${theme.leftCTA}`}
            />
            <div
              className={`absolute left-[2px] top-0 h-[39px] w-full ${theme.leftCTA}`}
            />
            <h1
              className={`absolute left-[1px] top-[4px] flex h-[33px] w-full select-none items-center justify-center ${titleFont.category1} text-strcat-default-black`}
            >
              사진
            </h1>
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="imgFile"
            onChange={handleChangeImage}
            className="img-input hidden"
          />
        </form>
      )}
    </>
  );
};
export default PhotoUpload;
