'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
}

export default function LineBreak({ content }: Props) {
  return (
    <div className="mb-5">{`${content.text} From ${
      content.writer === '' ? '익명의 스트링캣' : content.writer
    }`}</div>
  );
}
