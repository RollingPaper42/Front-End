import Image from 'next/image';

export default function Photo(photo: any) {
  return (
    <div className="relative flex h-full w-full flex-col">
      <Image src={photo.photo} alt="사진" fill />
    </div>
  );
}
