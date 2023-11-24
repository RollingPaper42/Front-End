'use client';
import { calm, cyan, green, strcat, themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import Image from 'next/image';

interface Props {
  name: string;
  src: string;
  alt: string;
  onClick: () => void;
}
export default function ExportTheme({ name, src, alt, onClick }: Props) {
  const [Theme, setTheme] = useRecoilState(themeState);
  const handleThemeChange = (newTheme: themeState) => {
    setTheme(newTheme);
  };
  return (
    <div>
      <Image src={src} width={52} height={52} alt={alt} onClick={onClick} />
      <div className={`text-center ${Theme.DefaultFontColor} `}>{name}</div>
    </div>
  );
}
