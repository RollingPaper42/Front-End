'use client';

import Error from '@/component/Modal/Error';
import useModal from '@/hooks/useModal';
import { confirm } from '@/utils/confirm';

export default function Modal() {
  const [openModal, closeModal] = useModal();

  const handleConfirm = async () => {
    const result = await confirm('컨펌 메시지 글', openModal, closeModal);
  };

  const handleError = () => {
    openModal(
      <Error content="에러 모달 띄우기" handleModalClose={closeModal} />,
    );
  };

  const handleCat = () => {
    const div = document.getElementById('catdiv');
    if (div === null) return;
    const divTop = div.getBoundingClientRect().top;
    const divBottom = div.getBoundingClientRect().bottom;
    const divLeft = div.getBoundingClientRect().left;
    const divRight = div.getBoundingClientRect().right;
    console.log(divTop, divRight, divBottom, divLeft);
  };

  return (
    <div className="h-full w-full bg-green-200">
      <div>
        <button onClick={handleError}>Modal click</button>
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm Click</button>
      </div>
      <div id="catdiv">
        <button onClick={handleCat}>handleCat</button>
      </div>
    </div>
  );
}
