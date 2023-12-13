import Image from 'next/image';

interface Props {
  photoUrl: string;
  handleClickPhoto: () => void;
}

export default function PhotoPreview({ photoUrl, handleClickPhoto }: Props) {
  return (
    <div className="pb-[5px]">
      <div className="w-[44px] h-[46px] relative" onClick={handleClickPhoto}>
        <div className="w-[40px] h-[40px] absolute left-[2px]">
          <img
            src={photoUrl}
            className="rounded-[10px] w-full h-full"
            alt="photo preview"
          />
        </div>
        <Image
          className="absolute rounded-[10px]"
          src={'/PhotoPreview.svg'}
          fill
          alt="photo preview"
        ></Image>
      </div>
    </div>
  );
}
