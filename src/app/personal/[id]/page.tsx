'use client';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import { content } from '@/types/content';
import StrcatComponent from '@/component/StrcatComponent';
import Add from '@/component/Add';
import BottomButton from '@/component/BottomButton';
import PhotoComponent from '@/component/PhotoComponent';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { useParams } from 'next/navigation';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [boardId, setBoardId] = useState(0);
  const [data, setData] = useState<content[] | undefined>(undefined);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [theme] = useRecoilState(themeState);
  const params = useParams();
  useEffect(() => {
    axiosInstance
      //.get(`/api/personal`)
      .get(`/boards/${params.id}/contents`)
      .then((data) => {
        setBoardId(data.data.id);
        setTitle(data.data.title);
        setData(data.data.contents);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
  };

  return (
    <div
      className={`relative w-full  p-[24px] text-justify ${theme.BgColor} pb-[500px]`}
    >
      <StrcatComponent boardId={boardId} title={title} data={data} />
      {isAdd ? (
        <Add id="Vvs_JTGorbxqVWXr6aH0cg==" setIsAdd={setIsAdd} />
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
