'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
}

export default function LineBreak({ content }: Props) {
  return <div className="mb-5">{`${content.text} From ${content.writer}`}</div>;
}
