import React, { Dispatch, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import imageCompression from 'browser-image-compression';
/* eslint-disable @next/next/no-img-element */

interface Props {
  setImage: Dispatch<React.SetStateAction<Blob | null>>;
}
const PhotoUpload = ({ setImage }: Props) => {
  const [theme] = useRecoilState(themeState);
  const [preview, setPreview] = useState('');

  const handleImageDelete = () => {
    setImage(null);
    setPreview('');
  };

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedImage = e.target.files[0];
    // if (selectedImage) {
    //   const imageUrl = URL.createObjectURL(selectedImage);
    //   setPreview(imageUrl);
    //   setImage(selectedImage);
    // }

    if (e.target.files === null) return;
    let file = e.target?.files[0];
    const options = {
      maxSizeMB: 1,
      alwaysKeepResolution: true,
    };

    try {
      if (file.size > 1024) {
        const compressedFile = await imageCompression(file, options);
        setImage(compressedFile);
        const dataUrl =
          await imageCompression.getDataUrlFromFile(compressedFile);
        setPreview(dataUrl);
      } else {
        setImage(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {preview ? (
        <div className="relative h-[63px] w-[63px] ">
          <div className="h-[56px] w-[56px]">
            <img
              src={preview}
              alt="프로필 이미지"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div
            className="absolute right-0 top-0 z-10 h-full cursor-pointer"
            onClick={handleImageDelete}
          >
            x
          </div>
        </div>
      ) : (
        <form className="flex basis-1/5 items-center justify-center">
          <label htmlFor="imgFile" className="relative mx-2 h-full w-full">
            <div className="absolute inset-0 w-full bg-white">
              <div
                className={`relative bottom-[4.5px] left-[2px] h-12 w-full bg-white`}
                style={{ lineHeight: '3rem' }}
              />
            </div>
            <h1 className="absolute inset-0 flex w-full items-center justify-center text-xl text-black">
              사진
            </h1>
          </label>
          <input
            type="file"
            accept="image/*"
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
