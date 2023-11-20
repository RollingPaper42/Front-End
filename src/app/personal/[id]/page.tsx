'use client';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import { content } from '@/types/content';
import StrcatComponent from '@/component/StrcatComponent';
import Add from '@/component/Add';
import BottomButton from '@/component/BottomButton';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<content[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      .then((data) => {
        setTitle(data.data.board.title);
        setData(data.data.board.content);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
  };

  return (
    <div className="w-full p-[24px] text-justify">
      <StrcatComponent title={title} data={data}></StrcatComponent>
      {isAdd ? (
        <Add id="1" setIsAdd={setIsAdd} />
      ) : (
        <div className="sticky bottom-5 w-full">
          <BottomButton
            name="글 작성"
            width="w-full"
            onClickHandler={handleClick}
            disabled={false}
          />
        </div>
      )}
    </div>
  );
}
