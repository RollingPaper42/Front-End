'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import CreateTheme from '@/component/CreateTheme';
import useModal from '@/hooks/useModal';
import {
  chris,
  lilac,
  mas,
  night,
  peach,
  themeState,
} from '@/recoil/theme/theme';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import TitleSelect from './TitleSelect';
import { confirm } from '@/utils/confirm';
import HeaderLayout from '@/component/HeaderLayout';

export default function Create() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [isOff, setIsOff] = useState('');
  const [isPreview, setIsPreview] = useState('1');
  const [isNext, setIsNext] = useState(false);

  const handlePreview = (value: string, newTheme: themeState) => {
    setTheme(newTheme);
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
    const data = {
      theme: theme.name,
      title: `${title}`,
    };
    axiosInstance
      .post(`/boards`, data)
      .then((data) => {
        router.push(`/personal/${data.data}`);
      })
      .catch((err) => {
        if (err.response.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      });
    closeModal();
  };

  return (
    <>
      <HeaderLayout isNext={isNext} setIsNext={setIsNext} />
      <div className={`${theme.bgTheme.background} h-full w-full`}>
        {isNext ? (
          <CreateTheme
            onClickChris={() => handlePreview(`1`, chris)}
            onClickMas={() => handlePreview(`2`, mas)}
            onClickNight={() => handlePreview(`3`, night)}
            onClickPeach={() => handlePreview(`4`, peach)}
            onClickLilac={() => handlePreview(`5`, lilac)}
            onClickComplete={() => handleConfirm()}
            isPreview={isPreview}
          />
        ) : (
          <TitleSelect
            title={title}
            setTitle={setTitle}
            isOff={isOff}
            handleSwitch={handleSwitch}
            setIsNext={setIsNext}
          />
        )}
      </div>
    </>
  );
}
