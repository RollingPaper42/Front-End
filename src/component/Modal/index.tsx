'use client';

import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  const onClickBackground = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setModal(null);
  };
  return (
    modal && (
      <div
        className="fixed top-0 flex h-full w-full max-w-[calc(100vh*0.6)] items-center justify-center bg-slate-400 opacity-50"
        onClick={onClickBackground}
      >
        {modal.modalComponent}
      </div>
    )
  );
}
