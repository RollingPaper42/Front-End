'use client';
import Image from 'next/image';

interface Props {
  name: string;
  src: string;
  alt: string;
  onClick: () => void;
}

export default function ExportTheme({ name, src, alt, onClick }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={src} width={52} height={52} alt={alt} onClick={onClick} />
      {name}
    </div>
  );
}
