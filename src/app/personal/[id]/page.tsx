'use client';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import { content } from '@/types/content';
import StrcatComponent from '@/component/StrcatComponent';
import Add from '@/component/Add';
import BottomButton from '@/component/BottomButton';
import PhotoComponent from '@/component/PhotoComponent';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [boardId, setBoardId] = useState(0);
  const [data, setData] = useState<content[] | undefined>(undefined);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      .then((data) => {
        setBoardId(data.data.board.id);
        setTitle(data.data.board.title);
        setData(data.data.board.content);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
  };

  return (
    <div className=" relative w-full p-[24px] text-justify">
      <StrcatComponent boardId={boardId} title={title} data={data} />
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
      <PhotoComponent />
    </div>
  );
}
