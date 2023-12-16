import Image from 'next/image';

export default function PreviewTheme({ isPreview }: { isPreview: string }) {
  const images = [
    { id: '1', src: '/preview/chris.png', alt: '크리스' },
    { id: '2', src: '/preview/mas.png', alt: '마스' },
    { id: '3', src: '/preview/night.png', alt: '고요한밤' },
    { id: '4', src: '/preview/peach.png', alt: '복숭아' },
    { id: '5', src: '/preview/lilac.png', alt: '라일락' },
  ];
  const selectedImage = images.find((image) => image.id === isPreview);
  if (!selectedImage) {
    return null;
  }

  return (
    <div className="flex basis-[485px] flex-col items-center">
      <div key={selectedImage.id} className="h-full w-full contents">
        <Image
          src={selectedImage.src}
          width={270}
          height={398}
          alt={selectedImage.alt}
          loading="eager"
        />
      </div>
    </div>
  );
}
