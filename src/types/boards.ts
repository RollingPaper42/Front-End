import { content } from './content';

export interface board {
  id: string;
  title: string;
  theme: 'yellow' | 'peach' | 'lilac' | 'christ' | 'mas';
  contents: content[];
}
