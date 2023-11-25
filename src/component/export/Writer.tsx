'use client';

import { content } from '@/types/content';

export default function Writer({ content }: { content: content }) {
  return (
    <div className="inline">
      {content.text}
      <span className=" bg-emerald-400">{content.writer}</span>
    </div>
  );
}
