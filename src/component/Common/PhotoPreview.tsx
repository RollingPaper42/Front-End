import Image from 'next/image';

import PhotoPreviewIcon from './Icon/PhotoPreview';

interface Props {
  photoUrl: string;
  color: string;
  handleClickPhoto: () => void;
}

export default function PhotoPreview({
  photoUrl,
  color,
  handleClickPhoto,
}: Props) {
  return (
    <div className="absolute top-[-51px]">
      <div className="w-[44px] h-[50px] relative" onClick={handleClickPhoto}>
        <div className="w-[42px] h-[42px] absolute left-[1px] top-[1px]">
          <Image
            src={photoUrl}
            width={innerWidth}
            height={innerHeight}
            className="rounded-[10px] w-full h-full"
            alt="photo preview"
          />
        </div>
        <div className="absolute">
          <PhotoPreviewIcon color={color} />
        </div>
      </div>
    </div>
  );
}
