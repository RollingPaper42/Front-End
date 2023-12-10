import { useEffect, useState } from 'react';
import React from 'react';

import ObserveContent from './ObserveContent';
import { board } from '@/types/boards';
import { content } from '@/types/content';
import { observeContent } from '@/types/observe';

interface Props {
  board: board;
}

const StrcatBoard = ({ board }: Props) => {
  const [observe, setObserve] = useState<observeContent>({
    contentId: 0,
    photoUrl: '',
    writer: '',
  });
  const [content, setContent] = useState<content[]>([]);

  useEffect(() => {
    setContent(board.contents);
    if (board.contents.length > 0) {
      setObserve(() => ({
        contentId: board.contents[0].id,
        photoUrl: board.contents[0].photoUrl,
        writer: board.contents[0].writer,
      }));
    }
  }, [board]);

  return (
    <div className={` h-auto min-h-[424px] break-all px-[24px]`}>
      {content &&
        content.map((content: content) => {
          return (
            <ObserveContent
              key={content.id}
              observe={observe}
              setObserve={setObserve}
              content={content}
            />
          );
        })}
    </div>
  );
};

export default React.memo(StrcatBoard);
