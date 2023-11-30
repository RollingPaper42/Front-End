'use client';

import { useEffect, useRef, useState } from 'react';
import { board } from '@/types/boards';
import { exportThemeButton, exportThemeEnum } from '@/types/export';
import { axiosInstance } from '@/utils/axios';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import BottomButton from '@/component/BottomButton';
import ExportSuccess from '@/component/Modal/ExportSuccess';
import ExportBoard from '@/component/export/ExportBoard';
import ExportTheme from '@/component/export/ExportTheme';
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import StrcatGroupTitle from '@/component/StrcatGroupTitle';
import HeaderLayout from '@/component/HeaderLayout';

export default function Export({ params }: { params: { id: string } }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [openModal, closeModal] = useModal();
  const [title, setTitle] = useState<string>('');
  const [boardsTitle, setBoardsTitle] = useState<board[]>([]);
  const [boardsConetent, setBoardsContent] = useState<board[]>([]);
  const [theme] = useRecoilState(themeState);
  const [exportTheme, setExportTheme] = useState<string>(
    exportThemeEnum.default,
  );

  const handleSave = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 4 });
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
      console.error('Error converting div to image:', error);
    }
  };

  useEffect(() => {
    const id = params.id;
    if (id === null) return;
    axiosInstance
      .get(`/board-groups/${id}`)
      .then((data) => {
        console.log(data);
        setTitle(data.data.title);
        setBoardsTitle(data.data.boards);
        setBoardsContent(data.data.boards);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={`${theme.background} ${theme.defaultText} h-full `}>
      <HeaderLayout />
      <div ref={divRef} className={`${theme.background} mt-[78px] h-full`}>
        <div className={`mx-[24px] pb-[24px]  text-[24px]`}>{title}</div>
        {boardsTitle?.map((board: board) => {
          return (
            <StrcatGroupTitle
              key={board.id}
              board={board}
              scrollToId={() => {}}
            />
          );
        })}
        {boardsConetent?.map((board) => {
          return (
            <ExportBoard
              key={board.id}
              title={board.title}
              content={board.contents}
              exportTheme={exportTheme}
              boardTheme={board.theme}
            />
          );
        })}
      </div>
      <div className=" fixed bottom-5 w-full max-w-md">
        <div className=" mb-5 flex w-full flex-row items-center justify-around">
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
          width="w-[370px]"
          onClickHandler={handleSave}
          disabled={false}
        />
      </div>
    </div>
  );
}
