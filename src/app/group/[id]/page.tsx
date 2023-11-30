'use client';

import { useEffect, useState, useRef } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import { board } from '@/types/boards';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import BottomButton from '@/component/BottomButton';
import { observeState } from '@/recoil/observe';
import StrcatGroupTitle from '@/component/StrcatGroupTitle';
import { scrollToAdd, setMap } from '@/utils/scrollTo';
import { useRouter } from 'next/navigation';
import ShortCut from '@/component/Icon/ShortCut';
import { headlineFont } from '@/recoil/font';

export default function Group({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState<string | null>();
  const [boards, setBoards] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [theme] = useRecoilState(themeState);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const router = useRouter();
  const scrollToId = (itemId: string) => {
    const map = itemsRef.current;
    const node = map.get(itemId);
    const offset = node.offsetTop - 56; //헤더 높이만큼 빼준다.
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick = () => {
    setIsAdd(true);
    scrollToAdd(observe.boardId, itemsRef);
  };
  useEffect(() => {
    //axios
    axiosInstance
      //.get(`/api/group`)
      .get(`/board-groups/${params.id}`)
      .then((data) => {
        setBoards(data.data.boards);
        setTitle(data.data.title);
        setIsOwner(data.data.isOwner);
      })
      .catch((err) => {});
  }, [params.id]);
  return (
    <div className={`h-[100vh] ${theme.background}`}>
      <Drawer />
      <StrcatHeader />
      <div
        className={`relative w-full py-[24px] pt-[56px] ${theme.background}`}
      >
        <div className="mb-[20px]">
          <h1
            className={`${theme.defaultText} mx-[24px] ${headlineFont.category1}`}
          >
            {`${title}`}
          </h1>
        </div>
        <div>
          {boards.map((board: board) => {
            return (
              <StrcatGroupTitle
                key={board.id}
                board={board}
                scrollToId={scrollToId}
              />
            );
          })}
        </div>
        <div className="pb-[500px] text-justify">
          {boards.map((board) => {
            return (
              <StrcatBoard
                setIsAdd={setIsAdd}
                isAdd={isAdd}
                ref={(node: any) => setMap(node, board, itemsRef)}
                key={board.id}
                board={board}
              />
            );
          })}
        </div>
        <div className="fixed bottom-5 z-20 w-full max-w-md px-[24px]">
          <button
            className="absolute bottom-[4.5rem] right-0 flex h-20 w-20 "
            onClick={scrollToTop}
          >
            <ShortCut color={theme.defaultIcon} />
          </button>
          {!isAdd &&
            (isOwner ? (
              <div className="flex w-full max-w-md">
                <BottomButton
                  height="h-[42px]"
                  color={`bg-white`}
                  name="저장"
                  width="basis-1/4"
                  onClickHandler={() => router.push(`./${params.id}/export`)}
                  disabled={false}
                />
                <BottomButton
                  height="h-[42px]"
                  color={`bg-white`}
                  name="공유"
                  width="basis-1/4"
                  onClickHandler={() => router.push(`./${params.id}/summary`)}
                  disabled={false}
                />
                <BottomButton
                  height="h-[42px]"
                  color={`${theme.leftCTA}`}
                  name="만들기"
                  width="basis-1/4"
                  onClickHandler={() =>
                    router.push(`/create?groupId=${params.id}`)
                  }
                  disabled={false}
                />
                <BottomButton
                  height="h-[42px]"
                  color={`${theme.rightCTA}`}
                  name="글 작성"
                  width="basis-1/4"
                  onClickHandler={handleClick}
                  disabled={!observe.boardId}
                />
              </div>
            ) : (
              <div className="flex w-full max-w-md">
                <BottomButton
                  height="h-[42px]"
                  color={`${theme.leftCTA}`}
                  name="스트링캣 만들기"
                  width="basis-1/2"
                  onClickHandler={() => router.push(`/create`)}
                  disabled={false}
                />
                <BottomButton
                  height="h-[42px]"
                  color={`${theme.rightCTA}`}
                  name="이어서 글쓰기"
                  width="basis-1/2"
                  onClickHandler={handleClick}
                  disabled={!observe.boardId}
                />
              </div>
            ))}
        </div>
        {!isAdd && <ContentPhoto />}
      </div>
    </div>
  );
}
