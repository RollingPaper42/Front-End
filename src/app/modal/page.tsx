'use client';

import Error from '@/component/Common/Modal/Error';
import useModal from '@/hooks/useModal';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';

export default function Modal() {
  const [openModal, closeModal] = useModal();

  const handleConfirm = async () => {
    const result = await confirm(
      openModal,
      closeModal,
      '완료하시겠어요?',
      '제목과 테마는 수정할 수 없어요🐱',
    );
  };

  const handleError = () => {
    openModal(
      <Error
        mainContent="에러 모달 띄우기"
        subContent="에러모달어쩌구"
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
    <div className="h-full w-full">
      <div>
        <button onClick={handleError}>Error click</button>
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
