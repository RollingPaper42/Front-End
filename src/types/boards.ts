import { content } from './content';

export interface board {
  id: string;
  title: string;
  theme: 'night' | 'peach' | 'lilac' | 'christ' | 'mas';
  contents: content[];
}
