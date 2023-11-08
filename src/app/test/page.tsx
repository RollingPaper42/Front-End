'use client';

import Error from '@/component/Modal/Error';
import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

export default function Test() {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <div className="h-[100%] w-[100%] bg-green-200">
      <button
        onClick={(e) => {
          setModal({ modalProps: <Error content="에러 메시지 이스 히엉" /> });
        }}
      >
        this is button
      </button>
    </div>
  );
}
