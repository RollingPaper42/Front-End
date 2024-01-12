import Image from 'next/image';

export default function PreviewPhoto({
  preview,
  setPreview,
  setImage,
}: {
  preview: string;
  setPreview: any;
  setImage: any;
}) {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="relative w-fit">
        <Image
          id="preview"
          src={preview}
          alt="사진"
          width={innerWidth}
          height={innerHeight}
          className="relative w-auto max-h-[280px]"
        />
        <Image
          src="/Delete.svg"
          alt="pictureDeleteIcon"
          width={24}
          height={24}
          className="absolute right-[20px] cursor-pointer top-[20px]"
          onClick={() => {
            setImage(null);
            setPreview('');
          }}
        />
      </div>
    </div>
  );
}
