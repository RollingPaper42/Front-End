'use client';

import { useRecoilState } from 'recoil';

import CatAnimation from '@/component/CatAnimation';
import Error from '@/component/Modal/Error';
import useModal from '@/hooks/useModal';
import { catAnimationState } from '@/recoil/theme/catAnimation';
import { catAction } from '@/types/animation';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';

export default function Modal() {
  const [openModal, closeModal] = useModal();
  const [, setCat] = useRecoilState(catAnimationState);

  const handleConfirm = async () => {
    const result = await confirm(
      '컨펌 메시지 글 컨펌메세지 컨펌메세지 컨퍼어어어어어엄커어ㅓ어어어엉언퍼어어엄',
      openModal,
      closeModal,
    );
  };

  const handleError = () => {
    openModal(
      <Error
        content="에러 모달 띄우기 에러모달 에러모달 어쩌구 에러모달"
        handleModalClose={closeModal}
      />,
    );
  };
  const handleErrorRespons = () => {
    axiosInstance
      .get('/api/error')
      .then((res) => {})
      .catch((error) => {});
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
      <div>
        <button onClick={handleErrorRespons}>500 Error api send</button>
      </div>
    </div>
  );
}
