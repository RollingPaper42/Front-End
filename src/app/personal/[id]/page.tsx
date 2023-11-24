'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import { content } from '@/types/content';
import StrcatBoard from '@/component/StrcatBoard';
import Add from '@/component/Add';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [boardId, setBoardId] = useState(0);
  const [data, setData] = useState<content[] | undefined>(undefined);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [theme] = useRecoilState(themeState);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const router = useRouter();

  const scrollToId = (itemId: number) => {
    const map = getMap();
    const node = map.get(itemId);
    const height = node.offsetHeight;
    const offset = node.offsetTop + height - 500; // 하단의 여백을 500만큼 줬으므로 그만큼 빼준다.
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  const getMap = () => {
    return itemsRef.current;
  };
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      //.get(`/boards/${params.id}/contents`)
      .then((data) => {
        setBoardId(data.data.id);
        setTitle(data.data.title);
        setData(data.data.contents);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
    scrollToId(boardId);
  };

  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div
        className={`relative w-full  p-[24px] text-justify ${theme.BgColor} pb-[500px]`}
      >
        <StrcatBoard
          ref={(node) => {
            const map = getMap();
            if (node) {
              map.set(boardId, node);
            } else {
              map.delete(boardId);
            }
          }}
          boardId={boardId}
          title={title}
          data={data}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
        />
        {!isAdd && (
          <div className="sticky bottom-5 flex w-full">
            <BottomButton
              name="저장"
              width="basis-1/5"
              onClickHandler={() => router.push('./export')}
              disabled={false}
              color={`bg-white`}
            />
            <BottomButton
              name="공유"
              width="basis-1/5"
              onClickHandler={() => router.push('./summary')}
              disabled={false}
              color={`bg-[#7CED43]`}
            />
            <BottomButton
              name="글 작성"
              width="basis-3/5"
              onClickHandler={handleClick}
              disabled={!observe.boardId}
              color={`bg-[#6CD8ED]`}
            />
          </div>
        )}
        {!isAdd && <ContentPhoto />}
      </div>
    </>
  );
}
