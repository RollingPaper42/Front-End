'use client';

import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  const onClickBackground = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setModal(null);
  };

  const onClickClose = () => {
    setModal(null);
  };
  return (
    modal && (
      <div
        className="fixed top-0 flex  h-full w-full max-w-[calc(100vh*0.6)] items-center justify-center bg-slate-400 opacity-50"
        onClick={onClickBackground}
      >
        <div className="relative flex h-[50%] w-[80%] flex-col items-center justify-center bg-red-300">
          <button className=" m-2 self-end text-4xl" onClick={onClickClose}>
            X
          </button>
          {modal.modalComponent}
        </div>
      </div>
    )
  );
}
