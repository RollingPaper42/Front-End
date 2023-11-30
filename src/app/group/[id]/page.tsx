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
import { content } from '@/types/content';
import ShareButton from '@/component/ShareButton';
import { useLogin } from '@/hooks/useLogin';
import Loading from '@/component/Loading';
import CatAnimation from '@/component/CatAnimation';
import { useCat } from '@/hooks/useCat';
import { catAction } from '@/types/animation';

export default function Group({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState<string>('');
  const [boards, setBoards] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [theme] = useRecoilState(themeState);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [content, setContent] = useState<content[]>([]);
  const [isLogin] = useLogin();
  const [runCatAnimation] = useCat();

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

  const handleClickCreate = () => {
    if (!isLogin) {
      localStorage.setItem(
        'strcat_login_success_url',
        `create?groupId=${params.id}`,
      );
      router.push('/login');
    } else {
      router.push(`create?groupId=${params.id}`);
    }
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

  useEffect(() => {
    if (boards) {
      runCatAnimation('catHeader', catAction.out, 1000);
      runCatAnimation('strcatCreate', catAction.sit, 5000);
    }
  }, [boards]);

  useEffect(() => {
    runCatAnimation('strcatCreate', catAction.sit, 0);
  }, [theme]);

  return (
    <div className={`${theme.background} h-full`}>
      <Drawer />
      <StrcatHeader />
      <CatAnimation />
      <div
        className={`relative w-full py-[24px] pt-[56px] ${theme.background}
        `}
      >
        {title === '' ? (
          <Loading />
        ) : (
          <>
            <div className="mb-[20px]">
              <h1 className={`${theme.defaultText} mx-[24px] text-[26px]`}>
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
            <div
              className={`${boards.length ? 'pb-[500px]' : ''} text-justify`}
            >
              {boards.map((board) => {
                return (
                  <StrcatBoard
                    setIsAdd={setIsAdd}
                    isAdd={isAdd}
                    ref={(node: any) => setMap(node, board, itemsRef)}
                    key={board.id}
                    board={board}
                    isPersonal={false}
                  />
                );
              })}
            </div>
          </>
        )}
        <div className="fixed bottom-5 z-20 w-full max-w-md px-[24px]">
          <button
            className="absolute bottom-[4.5rem] right-0 flex h-20 w-20 "
            onClick={scrollToTop}
          >
            <ShortCut color={theme.defaultIcon} />
          </button>
          {!isAdd &&
            (isOwner ? (
              <div className="flex w-full max-w-md" id="strcatCreate">
                <BottomButton
                  height="h-[42px]"
                  color={`bg-white`}
                  name="저장"
                  width="basis-1/4"
                  onClickHandler={() => router.push(`${params.id}/export`)}
                  disabled={false}
                />
                <BottomButton
                  height="h-[42px]"
                  color={`bg-white`}
                  name="공유"
                  width="basis-1/4"
                  onClickHandler={() => router.push(`${params.id}/summary`)}
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
              <div className="flex w-full max-w-md" id="strcatCreate">
                <BottomButton
                  height="h-[42px]"
                  color={`${theme.leftCTA}`}
                  name="스트링캣 만들기"
                  width="basis-1/2"
                  onClickHandler={handleClickCreate}
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
        {!boards.length && title !== '' && (
          <div className="absolute top-[200px]">
            <ShareButton params={`/group/${params.id}`} />
          </div>
        )}
      </div>
    </div>
  );
}
