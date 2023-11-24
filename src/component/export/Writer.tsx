'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
}

export default function Writer({ content }: Props) {
  return (
    <div className="inline">
      {content.text}
      <span className=" bg-emerald-400">{content.writer}</span>
    </div>
  );
}
