'use client';

import { content } from '@/types/content';
import { useEffect, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import axios from 'axios';

export default function Home() {
  const [text, setTextState] = useState<content[]>([]);
  useEffect(() => {
    axios
      .get('/api/text')
      .then()
      .catch()
      .then((data) => {
        setTextState(data.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" bg-lime-300">
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
