'use client';

import { modalState } from '@/recoil/modal';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  const onClickClose = () => {
    setModal(null);
  };

  useEffect(() => {
    const modalClose = () => {
      setModal(null);
    };
    window.addEventListener('popstate', modalClose);
    return () => {
      window.removeEventListener('popstate', modalClose);
    };
  }, []);

  return (
    modal && (
      <div className="fixed top-0 flex  h-full w-full max-w-[calc(100vh*0.6)] items-center justify-center bg-slate-400 opacity-50">
        <div className="relative flex h-[50%] basis-4/5 flex-col items-center justify-center bg-red-300">
          <button className=" m-2 self-end text-4xl" onClick={onClickClose}>
            X
          </button>
          {modal.modalComponent}
        </div>
      </div>
    )
  );
}
