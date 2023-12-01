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
    <div>
      <Image src={src} width={52} height={52} alt={alt} onClick={onClick} />
      <div className={`text-center`}>{name}</div>
    </div>
  );
}
