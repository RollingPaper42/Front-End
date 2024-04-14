import Image from 'next/image';

import { ThemeArray } from '@/types/ThemeArray';

interface Props {
  themes: ThemeArray[];
  preview: number;
}

export default function PreviewTheme({ preview, themes }: Props) {
  const selectedTheme = themes[preview - 1];

  return (
    <div className="flex mt-[16px] pb-[70px] h-full w-full flex-col items-center">
      <Image
        src={selectedTheme.preview}
        width={270}
        height={398}
        alt={selectedTheme.name}
        loading="eager"
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}
