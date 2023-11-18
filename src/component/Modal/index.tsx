'use client';

import useModal from '@/hooks/useModal';
import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [, closeModall] = useModal();
  const [modal] = useRecoilState(modalState);

  const handleBackground = (e: any) => {
    if (e.target !== e.currentTarget) return;
    closeModall();
  };

  return (
    modal && (
      <div
        className="fixed top-0 z-20 flex h-full w-full max-w-[calc(100vh*0.6)] items-center justify-center bg-slate-400/50"
        onClick={handleBackground}
      >
        <div className="opacitiy-100 relative flex h-[50%] basis-4/5 flex-col items-center justify-center bg-red-300">
          {modal.modalComponent}
        </div>
      </div>
    )
  );
}
