import Image from 'next/image';

export default function Photo(photo: any) {
  console.log(photo.photo);
  return (
    <div className=" flex h-full w-full flex-col bg-green-700">
      <div>
        <Image src={photo.photo} alt="사진" fill />
      </div>
    </div>
  );
}
