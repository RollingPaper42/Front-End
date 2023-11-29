'use client';

import { useEffect, useRef, useState } from 'react';
import { content } from '@/types/content';
import { exportThemeButton, exportThemeEnum } from '@/types/export';
import { axiosInstance } from '@/utils/axios';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import BottomButton from '@/component/BottomButton';
import ExportSuccess from '@/component/Modal/ExportSuccess';
import ExportBoard from '@/component/export/ExportBoard';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import ExportTheme from '@/component/export/ExportTheme';
import useModal from '@/hooks/useModal';
import { usePathname } from 'next/navigation';

export default function Export() {
  const [openModal, closeModal] = useModal();
  const [title, setTitle] = useState<string>('');
  const [board, setBoard] = useState<content[] | undefined>(undefined);
  const divRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [exportTheme, setExportTheme] = useState<string>(
    exportThemeEnum.default,
  );

  useEffect(() => {
    const regex = /\/personal\/(.*?)\/export/;
    const match = pathname.match(regex);
    if (match === null) return;
    axiosInstance
      .get(`/boards/${match[1]}`)
      .then((data) => {
        console.log(data);
        setTitle(data.data.board.title);
        setBoard(data.data.board.contents);
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
    <div ref={divRef}>
      <Drawer />
      <StrcatHeader />
      <div className=" mx-5 mt-[78px] text-[22px]">
        <ExportBoard
          key={title}
          title={title}
          data={board}
          exportTheme={exportTheme}
        />
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
          color={'white'}
          name="저장하기"
          width="w-full"
          onClickHandler={handleSave}
          disabled={false}
        />
      </div>
    </div>
  );
}
