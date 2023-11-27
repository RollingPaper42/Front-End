import Image from 'next/image';

export default function PreviewPhoto({
  preview,
  setPreview,
}: {
  preview: string;
  setPreview: any;
}) {
  return (
    <div className="fixed top-[120px] h-[120px] max-w-[332px]">
      <Image
        src={'/GroupStrcatMake.png'}
        alt="사진"
        width={innerWidth}
        height={innerHeight}
        className="mt-[20px] h-[100px] w-auto max-w-[332px] pr-[20px]"
      />
      <Image
        src="/Delete.svg"
        alt="pictureDeleteIcon"
        width={20}
        height={20}
        className="absolute right-[10px] top-[10px]"
        onClick={() => {
          setPreview(null);
        }}
      />
    </div>
  );
}
