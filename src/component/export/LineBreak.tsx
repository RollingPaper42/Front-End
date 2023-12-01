'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
  color: string;
}
export default function LineBreak({ content, color }: Props) {
  return <div className={`${color} mb-[30px]`}>{`${content.text} `}</div>;
}
