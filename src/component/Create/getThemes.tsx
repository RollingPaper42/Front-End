import { ThemeArray } from '@/types/ThemeArray';

interface Theme {
  name: string;
  image?: string;
  bgStyle: string;
  preview: string;
}

export const getThemes = (...themelist: string[]): ThemeArray[] => {
  const allThemes: Record<string, Theme> = {
    sul: {
      name: '설날',
      image: '/create/sulHat.svg',
      bgStyle: 'bg-strcat-sul',
      preview: '/preview/sul.png',
    },
    night: {
      name: '고요한 밤',
      bgStyle: 'bg-strcat-night',
      preview: '/preview/night.png',
    },
    peach: {
      name: '복숭아',
      bgStyle: 'bg-strcat-peach',
      preview: '/preview/peach.png',
    },
    lilac: {
      name: '라일락',
      bgStyle: 'bg-strcat-lilac',
      preview: '/preview/lilac.png',
    },
    chris: {
      name: '크리스',
      image: '/create/chrisCat.svg',
      bgStyle: 'bg-strcat-chris',
      preview: '/preview/chris.png',
    },
    mas: {
      name: '마스',
      image: '/create/masCat.svg',
      bgStyle: 'bg-strcat-mas',
      preview: '/preview/mas.png',
    },
  };

  return themelist.map((theme: string, index) => {
    return {
      id: index + 1,
      ...allThemes[theme],
    };
  });
};
