'use client';

import Error from '@/component/Modal/Error';
import { modalState } from '@/recoil/modal';
import { confirm } from '@/utils/confirm';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [, setModal] = useRecoilState(modalState);

  const handleModal = () => {
    setModal({ modalComponent: <Error content="에러 메시지 글" /> });
  };

  const handleConfirm = async () => {
    const result = await confirm('컨펌 메시지 글', setModal);
    // console.log(result);
  };

  return (
    <div className="h-full w-full bg-green-200">
      <div>
        <button onClick={handleModal}>Modal click</button>
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm Click</button>
      </div>
    </div>
  );
}
