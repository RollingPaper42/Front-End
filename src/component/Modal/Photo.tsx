import Image from 'next/image';

export default function Photo(photo: any) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <Image
        src={photo.photo}
        alt="사진"
        width={innerWidth}
        height={innerHeight}
        className="h-auto max-h-[50%] w-auto max-w-[312px] "
      />
    </div>
  );
}
