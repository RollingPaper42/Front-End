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
  const [themeName, setThemeName] = useState('chris');
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [isOff, setIsOff] = useState('');
  const [isPreview, setIsPreview] = useState('1');
  const [isNext, setIsNext] = useState(false);

  const handlePreview = (value: string, newTheme: string) => {
    setThemeName(newTheme);
    if (value !== isPreview)
      setIsPreview((prevIsPreview) => (prevIsPreview === value ? '' : value));
  };

  const handleConfirm = async () => {
    const isConfirmed = await confirm(
      openModal,
      closeModal,
      '완료하시겠어요?',
      '제목과 테마는 수정할 수 없어요😺',
    );
    if (isConfirmed) handleClick();
  };

  const handleSwitch = (value: string) => {
    setIsOff((prevIsOff) => (prevIsOff === value ? '' : value));
  };

  const handleClick = () => {
    logging('click_submit_board_confirm', 'create');
    const data = {
      theme: themeName,
      title: `${title}`,
    };
    axiosPostBoard(data)
      .then((data) => {
        router.push(`/personal/${data.data}`);
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
    closeModal();
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
            handleSwitch={handleSwitch}
            onClickComplete={() => handleConfirm()}
          />
        ) : (
          <CreateTheme
            onClickSul={() => handlePreview(`1`, `sul`)}
            onClickNight={() => handlePreview(`2`, 'night')}
            onClickPeach={() => handlePreview(`3`, 'peach')}
            onClickLilac={() => handlePreview(`4`, 'lilac')}
            onClickChris={() => handlePreview(`5`, 'chris')}
            onClickMas={() => handlePreview(`6`, 'mas')}
            setIsNext={setIsNext}
            isPreview={isPreview}
          />
        )}
      </div>
    </>
  );
}
