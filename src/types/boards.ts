import { content } from './content';

export interface board {
  id: number;
  title: string;
  theme: 'strcat' | 'calm' | 'green' | 'cyan';
  content: content[];
}
