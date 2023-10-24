'use client';

import { textState } from '@/recoil/atom';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [text, setTextState] = useRecoilState(textState);
  return (
    <div
      className='font-bold underline text-center'
      onClick={() => setTextState('text clicked')}
    >
      hi this is first project {text}
    </div>
  );
}
