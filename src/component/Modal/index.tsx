'use client';

import useModal from '@/hooks/useModal';
import { modalState } from '@/recoil/modal';
import { handleBackground } from '@/utils/handleBackground';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [, closeModal] = useModal();
  const [modal] = useRecoilState(modalState);

  return (
    modal && (
      <div
        className="fixed top-0 z-20 flex h-full w-full max-w-[calc(100vh*0.6)] items-center justify-center bg-slate-400/50"
        onClick={(e) => handleBackground(e, closeModal)}
      >
        <div className="relative flex h-[50%] basis-4/5 flex-col items-center justify-center bg-red-300">
          {modal.modalComponent}
        </div>
      </div>
    )
  );
}
