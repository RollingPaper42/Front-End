'use client';

import axios from 'axios';
import Image from 'next/image';
import { content } from '@/types/content';
import { useEffect, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';

export default function Home() {
  const [text, setTextState] = useState<content[]>([]);
  const [cat, setCat] = useState<string>('/cat1.png');
  const [catLocationX, setCatLocationX] = useState(0);
  useEffect(() => {
    axios
      .get('/api/text')
      .then((data) => {
        setTextState(data.data.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setCat('/catgif1.gif');
    const catMove = setInterval(() => {
      setCatLocationX((prev) => Math.random() * 500 + 1);
    }, 1000);

    return () => clearInterval(catMove);
  }, []);

  return (
    <div className=" bg-lime-300">
      <Image
        className={` fixed`}
        style={{ left: `${catLocationX}px` }}
        src={`${cat}`}
        alt="cat1"
        width={100}
        height={100}
      />

      <div className=" p-5">
        {text.map((item) => {
          return (
            <ObserveComponent
              key={item.id}
              content={item.content}
            ></ObserveComponent>
          );
        })}
      </div>
    </div>
  );
}
