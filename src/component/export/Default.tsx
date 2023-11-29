'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
  color: string;
  highlightcolor: string;
}
export default function Default({ content, color, highlightcolor }: Props) {
  return (
    <div className={`${color} inline`}>
      {content.id % 2 === 0 ? (
        <span>{content.text}</span>
      ) : (
        <span className={`${highlightcolor}`}>{content.text}</span>
      )}
    </div>
  );
}
