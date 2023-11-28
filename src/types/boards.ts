import { content } from './content';

export interface board {
  id: string;
  title: string;
  theme: 'strcat' | 'calm' | 'green' | 'cyan';
  contents: content[];
}
