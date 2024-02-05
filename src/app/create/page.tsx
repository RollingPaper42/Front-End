'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import HeaderLayout from '@/component/Common/HeaderLayout';
import Error from '@/component/Common/Modal/Error';
import CreateTheme from '@/component/Create/CreateTheme';
import TitleSelect from '@/component/Create/TitleSelect';
import useModal from '@/hooks/useModal';
import { logging } from '@/services/mixpanel';
import { axiosPostBoard } from '@/utils/apiInterface';
import { confirm } from '@/utils/confirm';
import { defaultState } from '@/utils/theme/default';

export default function Create() {
  const [themeName, setThemeName] = useState('sul');
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [isOff, setIsOff] = useState('');
  const [isNext, setIsNext] = useState(false);

  const handleTitleSwitch = (value: string) => {
    setIsOff((prevIsOff) => (prevIsOff === value ? '' : value));
  };

  const handleConfirm = async () => {
    const isConfirmed = await confirm(
      openModal,
      closeModal,
      '완료하시겠어요?',
      '제목과 테마는 수정할 수 없어요😺',
    );
    if (isConfirmed) {
      logging('click_submit_board_confirm', 'create');
      const data = {
        theme: themeName,
        title: `${title}`,
      };
      axiosPostBoard(data)
        .then((res) => {
          router.push(`/personal/${res.data}`);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            openModal(
              <Error
                mainContent="앗! 로그인이 만료되었어요."
                subContent="다시 로그인 해주세요."
                handleModalClose={closeModal}
              />,
            );
          }
          if (err.response.status === 406) {
            openModal(
              <Error
                mainContent="일시적으로 문제가 발생했어요 🥲"
                subContent="잠시 후 다시 시도해주세요."
                handleModalClose={closeModal}
              />,
            );
          }
        });
    }
  };

  return (
    <>
      <HeaderLayout isNext={isNext} setIsNext={setIsNext} />
      <div className={`${defaultState.background} h-auto min-h-full w-full`}>
        {isNext ? (
          <TitleSelect
            title={title}
            setTitle={setTitle}
            isOff={isOff}
            handleSwitch={handleTitleSwitch}
            onClickComplete={handleConfirm}
          />
        ) : (
          <CreateTheme setIsNext={setIsNext} setThemeName={setThemeName} />
        )}
      </div>
    </>
  );
}
