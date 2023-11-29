'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
  color: string;
}

export default function Writer({ content, color }: Props) {
  return (
    <div className="inline">
      {content.text}
      <span className={`${color}`}>
        {content.writer === '' ? '익명의 스트링캣' : content.writer}
      </span>
    </div>
  );
}
