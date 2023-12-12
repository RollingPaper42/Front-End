export interface bgThemeState {
  background: string;
  writerContainer: string;
  contentContainer: string;
  rightCTA: string;
  leftCTA: string;
  activeDropItem: string;
}

export const strcatBg: bgThemeState = {
  background: 'bg-strcat-default-black',
  writerContainer: 'bg-strcat-default-yellow',
  contentContainer: 'bg-strcat-bright-yellow',
  rightCTA: 'bg-strcat-sub',
  leftCTA: 'bg-strcat-gray2',
  activeDropItem: 'bg-strcat-default-yellow',
};

export const calmBg: bgThemeState = {
  background: 'bg-strcat-calm-white',
  writerContainer: 'bg-strcat-calm-orange',
  contentContainer: 'bg-strcat-bright-yellow',
  rightCTA: 'bg-strcat-calm-cyan',
  leftCTA: 'bg-strcat-calm-green',
  activeDropItem: 'bg-strcat-calm-orange',
};

export const greenBg: bgThemeState = {
  background: 'bg-strcat-green-green',
  writerContainer: 'bg-strcat-green-yellow',
  contentContainer: 'bg-strcat-bright-yellow',
  rightCTA: 'bg-strcat-green-cyan',
  leftCTA: 'bg-strcat-green-yellow',
  activeDropItem: 'bg-strcat-green-yellow',
};

export const cyanBg: bgThemeState = {
  background: 'bg-strcat-cyan-cyan',
  writerContainer: 'bg-strcat-cyan-yellow',
  contentContainer: 'bg-strcat-bright-yellow',
  rightCTA: 'bg-strcat-cyan-green',
  leftCTA: 'bg-strcat-cyan-yellow',
  activeDropItem: 'bg-strcat-cyan-yellow',
};
