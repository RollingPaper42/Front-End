export interface textThemeState {
  default: string;
  highlight: string;
  writer: string;
  explainRightCTA: string;
  explainLeftCTA: string;
  unHighlight: string;
  title: string;
  placeholder: string;
  summary: string;
}

export const strcatText: textThemeState = {
  default: 'text-strcat-default-white',
  unHighlight: 'text-strcat-unhighlighted',
  highlight: 'text-black',
  writer: 'text-strcat-bright-yellow',
  explainLeftCTA: 'text-strcat-default-green',
  explainRightCTA: 'text-strcat-default-cyan',
  title: 'text-strcat-default-white',
  placeholder: 'placeholder:text-strcat-default-white',
  summary: 'text-strcat-default-white',
};

export const calmText: textThemeState = {
  default: 'text-strcat-calm-black',
  unHighlight: 'text-strcat-unhighlighted',
  highlight: 'text-strcat-calm-orange',
  writer: 'text-strcat-calm-black',
  explainLeftCTA: 'text-strcat-calm-text-green',
  explainRightCTA: 'text-strcat-calm-text-cyan',
  title: 'text-strcat-calm-black',
  placeholder: 'placeholder:text-strcat-default-black',
  summary: 'text-strcat-calm-black',
};

export const greenText: textThemeState = {
  default: 'text-strcat-green-yellow',
  unHighlight: 'text-strcat-unhighlighted',
  highlight: 'text-strcat-green-black',
  writer: 'text-strcat-green-black',
  title: 'text-strcat-green-black',
  placeholder: 'placeholder:text-strcat-default-yellow',
  summary: 'text-strcat-green-black',
  explainLeftCTA: 'text-strcat-cyan-black',
  explainRightCTA: 'text-strcat-cyan-black',
};

export const cyanText: textThemeState = {
  default: 'text-strcat-cyan-white',
  unHighlight: 'text-strcat-unhighlighted',
  highlight: 'text-strcat-cyan-yellow',
  writer: 'text-strcat-cyan-black',
  explainLeftCTA: 'text-strcat-cyan-black',
  explainRightCTA: 'text-strcat-cyan-black',
  title: 'text-strcat-cyan-white',
  placeholder: 'placeholder:text-strcat-default-white',
  summary: 'text-strcat-cyan-black',
};
