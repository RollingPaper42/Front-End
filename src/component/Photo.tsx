import Image from 'next/image';

interface Props {
  photoUrl: string;
}

export default function Photo({ photoUrl }: Props) {
  return (
    <div className="relative flex max-h-[280px] w-full flex-col items-center justify-center">
      <Image
        src={photoUrl}
        alt="사진"
        width={innerWidth}
        height={innerHeight}
        className="h-auto max-h-[280px] w-auto"
      />
    </div>
  );
}
