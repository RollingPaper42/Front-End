import { content } from './content';

export interface board {
  id: number;
  title: string;
  backgroundColor: string;
  content: content[];
}
