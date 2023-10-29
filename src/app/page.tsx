'use client';

import ObserveComponent from '@/component/ObserveComponent';
import { content } from '@/types/ content';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setTextState] = useState<content[]>([]);
  useEffect(() => {
    axios
      .get('/api/text', { withCredentials: true })
      .then((data) => {
        setTextState(data.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" bg-lime-300">
      <div className=" p-5">
        {text.map((item) => {
          return (
            <a className="">
              <ObserveComponent content={item.content}></ObserveComponent>
            </a>
          );
        })}
      </div>
    </div>
  );
}
