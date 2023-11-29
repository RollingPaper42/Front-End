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
        className="fixed top-0  z-[99] flex h-full w-full max-w-md items-center justify-center bg-black/40"
        onClick={(e) => handleBackground(e, closeModal)}
      >
        <div className="opacity-100">{modal.modalComponent}</div>
      </div>
    )
  );
}
