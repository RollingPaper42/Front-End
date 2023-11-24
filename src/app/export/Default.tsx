'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
}
export default function Default({ content }: Props) {
  return (
    <div className="inline">
      {content.id % 2 === 0 ? (
        <span>{content.text}</span>
      ) : (
        <span className=" text-fuchsia-500">{content.text}</span>
      )}
    </div>
  );
}
