export interface textThemeState {
  highlight: string;
  addExplainRightCTA: string;
  writer: string;
  explainRightCTA: string;
}

export const nightText: textThemeState = {
  highlight: 'text-default-black',
  addExplainRightCTA: 'text-default-black',
  explainRightCTA: 'text-night-highlight',
  writer: 'text-night-highlight',
};

export const peachText: textThemeState = {
  writer: 'text-peach-highlight',
  addExplainRightCTA: 'text-default-black',
  highlight: 'text-default-black',
  explainRightCTA: 'text-peach-highlight',
};

export const lilacText: textThemeState = {
  writer: 'text-lilac-highlight',
  addExplainRightCTA: 'text-default-black',
  highlight: 'text-default-black',
  explainRightCTA: 'text-lilac-highlight',
};

export const chrisText: textThemeState = {
  writer: 'text-chris-highlight',
  addExplainRightCTA: 'text-default-white',
  highlight: 'text-default-white',
  explainRightCTA: 'text-default-white',
};

export const masText: textThemeState = {
  writer: 'text-mas-highlight',
  addExplainRightCTA: 'text-default-white',
  highlight: 'text-default-white',
  explainRightCTA: 'text-default-white',
};
