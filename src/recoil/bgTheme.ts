export interface bgThemeState {
  background: string;
  writerContainer: string;
  rightCTA: string;
  leftCTA: string;
  activeDropItem: string;
}

export const strcatBg: bgThemeState = {
  background: 'bg-strcat-default-black',
  writerContainer: 'bg-strcat-default-yellow',
  rightCTA: 'bg-strcat-default-cyan',
  leftCTA: 'bg-strcat-default-green',
  activeDropItem: 'bg-strcat-default-yellow',
};

export const calmBg: bgThemeState = {
  background: 'bg-strcat-calm-white',
  writerContainer: 'bg-strcat-calm-orange',
  rightCTA: 'bg-strcat-calm-cyan',
  leftCTA: 'bg-strcat-calm-green',
  activeDropItem: 'bg-strcat-calm-orange',
};

export const greenBg: bgThemeState = {
  background: 'bg-strcat-green-green',
  writerContainer: 'bg-strcat-green-yellow',
  rightCTA: 'bg-strcat-green-cyan',
  leftCTA: 'bg-strcat-green-yellow',
  activeDropItem: 'bg-strcat-green-yellow',
};

export const cyanBg: bgThemeState = {
  background: 'bg-strcat-cyan-cyan',
  writerContainer: 'bg-strcat-cyan-yellow',
  rightCTA: 'bg-strcat-cyan-green',
  leftCTA: 'bg-strcat-cyan-yellow',
  activeDropItem: 'bg-strcat-cyan-yellow',
};
