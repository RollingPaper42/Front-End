'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import ExportTheme from './ExportTheme';
import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import BottomButton from '@/component/BottomButton';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import useModal from '@/hooks/useModal';
import ExportSuccess from '@/component/Modal/ExportSuccess';
import { board } from '@/types/boards';
import Board from './Board';
import { exportThemeButton, exportThemeEnum } from '@/types/export';

export default function Export() {
  const divRef = useRef<HTMLDivElement>(null);
  const [openModal, closeModal] = useModal();
  const [title, setTitle] = useState<string>('');
  const [boardsTitle, setBoardsTitle] = useState<board[]>([]);
  const [boardsConetent, setBoardsContent] = useState<board[]>([]);
  const [exportTheme, setExportTheme] = useState<string>(
    exportThemeEnum.default,
  );

  useEffect(() => {
    axiosInstance
      .get(`/api/group`)
      .then((data) => {
        setTitle(data.data.titleData.title);
        setBoardsTitle(data.data.titleData.boards);
        setBoardsContent(data.data.contentData);
      })
      .catch((error) => {});
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
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div className="mb-10">
      <Drawer />
      <StrcatHeader />
      <div ref={divRef} className="mx-5">
        {boardsTitle.map((board: board) => {
          return (
            <div key={board.title} className=" mb-5  text-[32px]">
              {board.title}
            </div>
          );
        })}
        {boardsConetent.map((board) => {
          return (
            <Board
              key={board.id}
              title={board.title}
              data={board.content}
              exportTheme={exportTheme}
            />
          );
        })}
      </div>
      <div className=" fixed bottom-5 w-full max-w-[calc(100vh*0.6)]">
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
          name="저장하기"
          // w-full 안됨 왜??
          width="w-[370px]"
          onClickHandler={handleSave}
          disabled={false}
        />
      </div>
    </div>
  );
}
