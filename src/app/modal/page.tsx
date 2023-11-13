'use client';

import Error from '@/component/Modal/Error';
import { useConfirm } from '@/hooks/useConfirm';
import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [, setModal] = useRecoilState(modalState);

  const onClickModal = () => {
    setModal({ modalComponent: <Error content="에러 메시지 글" /> });
  };

  const onCLickConfirm = async () => {
    const result = await useConfirm('컨펌 메시지 글', setModal);
    console.log(result);
  };

  return (
    <div className="h-[100%] w-[100%] bg-green-200">
      <div>
        <button onClick={onClickModal}>Modal click</button>
      </div>
      <div>
        <button onClick={onCLickConfirm}>Confirm Click</button>
      </div>
    </div>
  );
}
