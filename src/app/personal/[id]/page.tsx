'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useRouter } from 'next/navigation';

import Loading from '@/component/Common/Loading';
import StrcatBoard from '@/component/Common/StrcatBoard';
import Toast from '@/component/Common/Toast';
import {
  BottomAnimationImage,
  OwnerButtonLayer,
  SnowAnimation,
  WriterButtonLayer,
} from '@/component/Personal';
import FirstContent from '@/component/Personal/FirstContent';
import { useLogin } from '@/hooks/useLogin';
import { useScroll } from '@/hooks/useScroll';
import { titleState } from '@/recoil/title';
import { logging } from '@/services/mixpanel';
import { board } from '@/types/boards';
import { History } from '@/types/history';
import { personalPage } from '@/types/mixpanel';
import { noneTheme, themeState } from '@/types/theme';
import { chris, lilac, mas, night, peach, sul } from '@/types/theme';
import { axiosGetBoard } from '@/utils/apiInterface';
import { defaultState } from '@/utils/theme/default';

require('intersection-observer');
export default function Personal({ params }: { params: { id: string } }) {
  const [board, isOwner, title, theme, loggingProp, error] = useData(params.id);
  const router = useRouter();
  const [isLogin] = useLogin();
  const { isHidden, setIsHidden } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  const timestamp = () => {
    var now = new Date();
    now.setHours(now.getHours() + 9);
    return now.toISOString().replace('T', ' ').substring(0, 19);
  };

  useEffect(() => {
    const token = localStorage.getItem('strcat_token');
    if (token) return;
    const history = localStorage.getItem('history');
    let historyArray: History[] = history ? JSON.parse(history) : [];
    if (history) {
      const existingIndex = historyArray.findIndex(
        (history) => history.encryptedBoardId === params.id,
      );
      if (existingIndex !== -1) {
        historyArray.splice(existingIndex, 1);
      }
      while (historyArray.length >= 10) {
        historyArray.shift();
      }
    }
    historyArray.push({
      visitTime: timestamp(),
      encryptedBoardId: params.id,
      title: title,
    });
    localStorage.setItem('history', JSON.stringify(historyArray));
  }, [params.id, title]);

  useEffect(() => {
    if (window) setWindowHeight(window.innerHeight);
    setIsHidden(false);
  }, []);

  useEffect(() => {
    if (!loggingProp) return;
    logging('show_read_board', 'personal', loggingProp);
  }, [loggingProp]);

  const handleClickWrite = () => {
    logging('click_add_content', 'personal', loggingProp);
    router.push(`${params.id}/add`);
  };

  const handleClickCreate = () => {
    logging('click_create_board', 'personal', loggingProp);
    if (!isLogin) {
      localStorage.setItem('strcat_login_success_url', '/create');
      router.push('/login');
    } else {
      router.push('/create');
    }
  };

  const handleClickDownload = () => {
    logging('click_download', 'personal', loggingProp);
    setToastMessage('저장기능은 준비중이에요!');
  };

  const handleCopyClipBoard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setToastMessage('링크가 복사되었어요!');
    } catch (error) {
      setToastMessage('링크 복사에 실패했어요 🥲');
    }
  };

  const handleClickBackground = () => {
    setIsHidden(!isHidden);
  };

  const handleClickShare = async () => {
    const url = `https://strcat.me/personal/${params.id}`;
    if (navigator.share) {
      await navigator.share({
        title: 'strcat',
        text: `[${title}]📮\n\n함께 롤링페이퍼를 끊임없이 이어주세요!`,
        url: url,
      });
    } else {
      handleCopyClipBoard(url);
    }
  };

  if (error === 406) {
    router.push('/not-found');
  }

  if (!board.length) {
    return (
      <div
        className={`fixed flex items-center justify-center h-screen max-w-md w-full z-[99] ${defaultState.background}`}
      >
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className={`${defaultState.background} min-h-full`}>
        <div onClick={handleClickBackground}>
          <SnowAnimation themeName={theme.name} />
          <div className="z-text relative">
            <FirstContent
              boardLength={board[0].contents.length}
              windowHeight={windowHeight}
              id={params.id}
              handleClickNonContent={handleClickWrite}
            />
            <StrcatBoard board={board[0]} theme={theme} />
            <div style={{ minHeight: `${windowHeight * 0.7}px` }}></div>
          </div>
        </div>
        <div
          className={`fixed bottom-0 pb-[12px] left-0 z-button flex w-full items-center justify-center transition-transform duration-300 ${
            isHidden ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <BottomAnimationImage themeName={theme.name} />
          <div className="flex w-full max-w-md items-center justify-center px-[24px] space-x-[12px]">
            {isOwner ? (
              <OwnerButtonLayer
                handleClickDownload={handleClickDownload}
                handleClickShare={handleClickShare}
                handleClickWrite={handleClickWrite}
                theme={theme}
              />
            ) : (
              <WriterButtonLayer
                handleClickCreate={handleClickCreate}
                handleClickWrite={handleClickWrite}
                theme={theme}
              />
            )}
          </div>
        </div>
      </div>
      {toastMessage !== '' && (
        <Toast message={toastMessage} setToast={setToastMessage} />
      )}
    </>
  );
}

const useData = (
  id: string,
): [
  board: board[],
  isOwner: boolean,
  title: any,
  theme: themeState,
  loggingProp: personalPage | undefined,
  error: number,
] => {
  const [board, setBoard] = useState<board[]>([]);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [title, setTitle] = useRecoilState(titleState);
  const [theme, setTheme] = useState<themeState>(noneTheme);
  const [loggingProp, setLoggingProp] = useState<personalPage | undefined>(
    undefined,
  );
  const [error, setError] = useState<number>(0);
  useEffect(() => {
    axiosGetBoard(id)
      .then((data) => {
        const resData = data.data;
        setBoard([resData.board]);
        setTitle(resData.board.title);
        setTheme(getTheme(resData.board.theme));
        setIsOwner(resData.isOwner);
        setLoggingProp({
          boardId: resData.board.id,
          isOwner: resData.isOwner,
          contentCount: resData.board.contents.length,
          totalLength: resData.board.contents.length,
          theme: resData.board.theme,
        });
      })
      .catch((err) => {
        if (err.response.status === 406) {
          setError(406);
        }
      });
  }, []);

  return [board, isOwner, title, theme, loggingProp, error];
};

const getTheme = (themeName: string): themeState => {
  if (themeName === 'chris') return chris;
  if (themeName === 'mas') return mas;
  if (themeName === 'night') return night;
  if (themeName === 'peach') return peach;
  if (themeName === 'lilac') return lilac;
  if (themeName === 'sul') return sul;
  return night;
};
