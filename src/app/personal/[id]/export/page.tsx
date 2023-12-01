'use client';

import { useEffect, useRef, useState } from 'react';
import { exportThemeButton, exportThemeEnum } from '@/types/export';
import { axiosInstance } from '@/utils/axios';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import BottomButton from '@/component/BottomButton';
import ExportSuccess from '@/component/Modal/ExportSuccess';
import ExportBoard from '@/component/export/ExportBoard';
import ExportTheme from '@/component/export/ExportTheme';
import useModal from '@/hooks/useModal';
import Error from '@/component/Modal/Error';
import { board } from '@/types/boards';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Back from '@/component/Icon/Back';
import { useRouter } from 'next/navigation';
import { handleBackground } from '@/utils/handleBackground';

export default function Export({ params }: { params: { id: string } }) {
  const [openModal, closeModal] = useModal();
  const [title, setTitle] = useState<string>('');
  const [board, setBoard] = useState<board | undefined>(undefined);
  const divRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useRecoilState(themeState);
  const router = useRouter();
  const [exportTheme, setExportTheme] = useState<string>(
    exportThemeEnum.default,
  );

  useEffect(() => {
    const id = params.id;
    if (id === null) return;
    axiosInstance
      .get(`/boards/${id}`)
      .then((data) => {
        setTitle(data.data.board.title);
        setBoard(data.data.board);
        const themename: 'strcat' | 'cyan' | 'green' | 'calm' =
          data.data.board.theme;
        setTheme(themeObj[themename]);
      })
      .catch((error) => {
        if (error.response?.status === 406) {
          router.push('/not-found');
        }
      });
  }, []);

  const handleSave = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `strcat_${title}.png`);
        }
      });
      openModal(
        <ExportSuccess
          content="스트링캣이 저장되었습니다!"
          handleModalClose={closeModal}
        />,
      );
    } catch (error) {
      console.log(error);
      openModal(
        <Error
          content="페이지를 이미지화하는 데\n실패했습니다.\n잠시 후 다시 시도해주세요"
          handleModalClose={closeModal}
        />,
      );
    }
  };

  return (
    <div
      className={`${theme.background} ${theme.defaultText} h-full w-full max-w-md`}
    >
      <div className={`${theme.background} flex h-full w-full flex-col`}>
        <div className={`basis-1/6`}>
          <div className={` ${theme.background} flex w-full flex-row`}>
            <div
              className=" basis-1/6 items-center justify-center pl-[24px] pt-[16px]"
              onClick={() => router.back()}
            >
              <Back color={theme.backIcon} />
            </div>
            <div className=" basis-4/6">
              <div
                className={`text-center text-[18px] ${theme.defaultText} mt-[16px]`}
              >
                스트링캣 내보내기
              </div>
            </div>
            <div className=" basis-1/6"></div>
          </div>
        </div>
        <div className="basis-5/6">
          <div
            ref={divRef}
            className={`${theme.background} mt-[55px] h-auto break-all text-[22px]`}
          >
            <ExportBoard
              key={title}
              title={title}
              content={board?.contents}
              exportTheme={exportTheme}
              boardTheme={board?.theme}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-[24px] flex w-full max-w-md flex-col items-center justify-center px-[24px]">
        <div className="flex w-full flex-row items-center justify-around">
          {exportThemeButton.map((item) => (
            <ExportTheme
              key={item.alt}
              name={item.name}
              src={item.src}
              alt={item.alt}
              onClick={() => setExportTheme(item.select)}
            />
          ))}
        </div>
        <BottomButton
          height="h-[42px]"
          color={theme.rightCTA}
          name="저장하기"
          width="w-[312px]"
          onClickHandler={handleSave}
          disabled={false}
        />
      </div>
    </div>
  );
}
