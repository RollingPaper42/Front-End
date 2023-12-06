export interface iconThemeState {
  default: string;
  login: string;
  back: string;
}

export const strcatIcon: iconThemeState = {
  default: '#FBFF36', //strcat-default-yellow
  login: '#6CD8ED', //strcat-default-cyan
  back: '#FFFFFF', //strcat-default-white
};

export const calmIcon: iconThemeState = {
  default: '#FFA857', //strcat-calm-orange
  login: '#557FE4', //strcat-calm-text-cyan
  back: '#463F3A', //strcat-calm-text-black
};

export const greenIcon: iconThemeState = {
  default: '#212121', //strcat-green-black
  login: 'FF43A8', // strcat-default-magenta
  back: '#212121', //strcat-green-black
};

export const cyanIcon: iconThemeState = {
  login: '#FBFF36', //strcat-cyan-yellow
  default: '#FFFFFF', //strcat-cyan-white
  back: '#FFFFFF', //strcat-cyan-white
};
