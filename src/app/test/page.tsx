'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSprings } from 'react-spring';

import SwipeCard from '@/component/SwipeCard';
import { content } from '@/types/content';

interface Props {
  content: string;
}
const ShowData = ({ content }: Props) => {
  return <div className="p-20 placeholder-gray-500">{content}</div>;
};

export default function Test() {
  const [data, setData] = useState<content[]>();

  useEffect(() => {
    axios.get('/api/personal').then((res) => {
      console.log(res.data.board);
      setData(res.data.board.contents);
    });
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <SwipeCard content={data} />
    </div>
  );
}
