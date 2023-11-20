'use client';

import CatAnimation from '@/component/CatAnimation';
import Error from '@/component/Modal/Error';
import useModal from '@/hooks/useModal';
import { catState } from '@/recoil/cat';
import { catAction } from '@/types/cat';
import { confirm } from '@/utils/confirm';
import { useRecoilState } from 'recoil';

export default function Modal() {
  const [openModal, closeModal] = useModal();
  const [, setCat] = useRecoilState(catState);

  const handleConfirm = async () => {
    const result = await confirm('컨펌 메시지 글', openModal, closeModal);
  };

  const handleError = () => {
    openModal(
      <Error content="에러 모달 띄우기" handleModalClose={closeModal} />,
    );
  };

  const handleCatTop = () => {
    const div = document.getElementById('catdiv1');
    if (div === null) return;
    const divLeft = div.getBoundingClientRect().left;
    const divTop = div.getBoundingClientRect().top;
    setCat({
      catAction: catAction.exit,
      width: 50,
      height: 50,
      top: divTop,
      left: divLeft,
    });
  };

  const handleCatRight = () => {
    const div = document.getElementById('catdiv2');
    if (div === null) return;
    const divBottom = div.getBoundingClientRect().bottom;
    const divRight = div.getBoundingClientRect().right;
    setCat({
      catAction: catAction.exit,
      width: 50,
      height: 50,
      top: divBottom,
      left: divRight - 50,
    });
  };

  const handleCatBottom = () => {
    const div = document.getElementById('catdiv3');
    if (div === null) return;
    const divLeft = div.getBoundingClientRect().left;
    const divBottom = div.getBoundingClientRect().bottom;
    setCat({
      catAction: catAction.scroll,
      width: 50,
      height: 50,
      top: divBottom + 50,
      left: divLeft,
    });
  };

  return (
    <div className="h-full w-full bg-green-200">
      <CatAnimation />
      <div>
        <button onClick={handleError}>Modal click</button>
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm Click</button>
      </div>
      <div id="catdiv1">
        <button onClick={handleCatTop}>handleCatTop</button>
      </div>
      <div id="catdiv2">
        <button onClick={handleCatRight}>handleCatRight</button>
      </div>
      <div id="catdiv3">
        <button onClick={handleCatBottom}>handleCatBottom</button>
      </div>
    </div>
  );
}
