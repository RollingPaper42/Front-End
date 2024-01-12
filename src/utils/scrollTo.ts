import { MutableRefObject } from 'react';

import { board } from '@/types/boards';

export const scrollToAdd = (
  itemId: string,
  itemsRef: MutableRefObject<Map<any, any>>,
) => {
  const map = itemsRef.current;
  const node = map.get(itemId);
  const height = node.offsetHeight;
  const offset = node.offsetTop + height - 500; // 하단의 여백을 500만큼 줬으므로 그만큼 빼준다.
  window.scrollTo({ top: offset, behavior: 'smooth' });
};

export const setMap = (
  node: HTMLDivElement | null,
  board: board,
  itemsRef: MutableRefObject<Map<any, any>>,
) => {
  const map = itemsRef.current;
  if (node) {
    map.set(board.id, node);
  } else {
    map.delete(board.id);
  }
};
