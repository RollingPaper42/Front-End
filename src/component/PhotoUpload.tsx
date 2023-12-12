import imageCompression from 'browser-image-compression';
import React, { Dispatch } from 'react';

interface Props {
  setImage: Dispatch<React.SetStateAction<File | null>>;
  setPreview: Dispatch<React.SetStateAction<string>>;
}

export default function PhotoUpload({ setImage, setPreview }: Props) {
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    let file = e.target?.files[0];
    try {
      if (file.size > 1024) {
        //1mb 이상이면 압축
        const options = {
          maxSizeMB: 1,
          alwaysKeepResolution: true,
        };
        file = await imageCompression(file, options);
      }
      setImage(file);
      // 이미지를 프리뷰로 띄우기 위해 base64로 변환
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex h-[42px] basis-1/2 items-center justify-center">
      <label
        htmlFor="imgFile"
        className={`h-full w-full flex items-center justify-center rounded relative
           text-white/90 bg-[#4D4D4D] text-body-size2`}
      >
        사진 첨부
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="imgFile"
        onChange={handleChangeImage}
        className="img-input hidden"
      />
    </form>
  );
}
