import Image from 'next/image';

export default function PreviewTheme({ isPreview }: { isPreview: string }) {
  const images = [
    { id: '1', src: '/preview/sul.png', alt: '설날' },
    { id: '2', src: '/preview/night.png', alt: '고요한밤' },
    { id: '3', src: '/preview/peach.png', alt: '복숭아' },
    { id: '4', src: '/preview/lilac.png', alt: '라일락' },
    { id: '5', src: '/preview/chris.png', alt: '크리스' },
    { id: '6', src: '/preview/mas.png', alt: '마스' },
  ];
  const selectedImage = images.find((image) => image.id === isPreview);
  if (!selectedImage) {
    return null;
  }

  return (
    <div className="flex mt-[16px] pb-[70px] h-full w-full flex-col items-center">
      <Image
        src={selectedImage.src}
        width={270}
        height={398}
        alt={selectedImage.alt}
        loading="eager"
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}
