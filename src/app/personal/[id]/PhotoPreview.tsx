import Image from 'next/image';

export default function PhotoPreview({ photoUrl }: { photoUrl: string }) {
  return (
    <div>
      <div className="w-[44px] h-[46px] relative">
        <div className="w-[40px] h-[40px] absolute left-[2px]">
          <Image
            src={photoUrl}
            className="rounded-[10px]"
            fill
            alt="photo preview"
          ></Image>
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
