'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '@/component/BottomButton';
import CreateTheme from '@/component/CreateTheme';
import MiddleButton from '@/component/MiddleButton';
import Confirm from '@/component/Modal/Confirm';
import SelectButton from '@/component/SelectButton';
import Textarea from '@/component/Textarea';
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

export default function Create() {
  const [theme] = useRecoilState(themeState);
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [isOff, setIsOff] = useState('');
  const [Theme, setTheme] = useRecoilState(themeState);
  const [isPreview, setIsPreview] = useState('1');
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden(true);
  };
  const handlePreview = (value: string, newTheme: themeState) => {
    setTheme(newTheme);
    if (value !== isPreview)
      setIsPreview((prevIsPreview) => (prevIsPreview === value ? '' : value));
  };

  const handleConfirm = () => {
    openModal(
      <Confirm
        mainContent="완료하시겠어요?"
        subContent="제목과 테마는 수정할 수 없어요!"
        yes={handleClick}
        no={closeModal}
      />,
    );
  };

  const handleSelect = (newTitle: string) => {
    setTitle(newTitle);
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
    <div className={`${theme.bgTheme.background} h-full w-full`}>
      <div
        className={`flex h-full w-full flex-col ${isHidden ? 'hidden' : ''}`}
      >
        <div className="basis-1/12"></div>
        <div className="basis-2/12">
          <div className=" mx-[24p] mt-[10px] w-full  px-[24px]">
            <div className="mb-[15px] ml-1 text-left text-[16px] text-white">
              제목
            </div>
            <Textarea
              maxHeight="max-h-[49px]"
              width="w-full"
              placeholder="스트링캣 주제를 입력해주세요."
              textColor="text-white"
              text={title}
              setText={setTitle}
              maxLength={25}
            />
          </div>
        </div>
        <div className="w-full basis-1/12 ">
          <div className="m-6 flex  space-x-[12px] overflow-x-scroll">
            <MiddleButton
              width="w-[128px]"
              onClickHandler={() => handleSwitch('1')}
              content="# 한사람을 위한"
              color={`${
                isOff == '1'
                  ? 'bg-strcat-bright-yellow text-strcat-gray2'
                  : 'bg-strcat-gray2 text-strcat-bright-yellow'
              }`}
            />
            <MiddleButton
              width="w-[137px]"
              onClickHandler={() => handleSwitch('2')}
              content="# 함께 마무리하는"
              color={`${
                isOff == '2'
                  ? 'bg-strcat-bright-yellow text-strcat-gray2'
                  : 'bg-strcat-gray2 text-strcat-bright-yellow'
              }`}
            />
            <MiddleButton
              width="w-[166px]"
              onClickHandler={() => handleSwitch('3')}
              content="# 서로의 생각을 나누는"
              color={`${
                isOff == '3'
                  ? 'bg-strcat-bright-yellow text-strcat-gray2'
                  : 'bg-strcat-gray2 text-strcat-bright-yellow'
              }`}
            />
          </div>
        </div>
        <div className="basis-6/12 items-center">
          <div
            className={`mx-[24px] flex flex-col ${
              isOff == '1' ? 'content' : 'hidden'
            }`}
          >
            <SelectButton
              width="w-[94px]"
              onClickHandler={() => handleSelect('To.뽀승이')}
              content="To.뽀승이"
            />
            <SelectButton
              width="w-[211px]"
              onClickHandler={() =>
                handleSelect('사랑하는 보미야 생일 축하해 ♥')
              }
              content="사랑하는 보미야 생일 축하해 ♥"
            />
            <SelectButton
              width="w-[284px]"
              onClickHandler={() =>
                handleSelect('고운아 그동안 고생 많았어 앞으로도 화이팅!')
              }
              content="고운아 그동안 고생 많았어 앞으로도 화이팅!"
            />
          </div>
          <div
            className={`mx-[24px] flex flex-col ${
              isOff == '2' ? 'content' : 'hidden'
            }`}
          >
            <SelectButton
              width="w-[208px]"
              onClickHandler={() =>
                handleSelect('끈끈한 3반! 1년 동안 고마웠어!')
              }
              content="끈끈한 3반! 1년 동안 고마웠어!"
            />
            <SelectButton
              width="w-[234px]"
              onClickHandler={() =>
                handleSelect('고생한 우리 팀, 이제는 말할 수 있다')
              }
              content="고생한 우리 팀, 이제는 말할 수 있다"
            />
            <SelectButton
              width="w-[279px]"
              onClickHandler={() =>
                handleSelect('우리 과에서 올 한해 가장 기억에 남는 일은?')
              }
              content="우리 과에서 올 한해 가장 기억에 남는 일은?"
            />
          </div>
          <div
            className={`mx-[24px] flex flex-col ${
              isOff == '3' ? 'content' : 'hidden'
            }`}
          >
            <SelectButton
              width="w-[253px]"
              onClickHandler={() =>
                handleSelect('우리 회사에 대해 하고 싶은 말 남겨줘')
              }
              content="우리 회사에 대해 하고 싶은 말 남겨줘"
            />
            <SelectButton
              width="w-[218px]"
              onClickHandler={() =>
                handleSelect('이번에 바뀐 규칙 어떻게 생각해?')
              }
              content="이번에 바뀐 규칙 어떻게 생각해?"
            />
            <SelectButton
              width="w-[198px]"
              onClickHandler={() =>
                handleSelect('각자 최애 자랑, 이야기해보자')
              }
              content="각자 최애 자랑, 이야기해보자"
            />
          </div>
        </div>
        <div className="basis-2/12" />
        <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            textColor=""
            height="h-[42px]"
            name="다음"
            width="w-full"
            onClickHandler={() => handleHidden()}
            disabled={title === ' ' || title.length >= 26 || title.length <= 0}
            color=" bg-strcat-bright-yellow"
          />
        </div>
      </div>
      <CreateTheme
        hidden={isHidden ? '' : 'hidden'}
        onClickChris={() => handlePreview(`1`, chris)}
        onClickMas={() => handlePreview(`2`, mas)}
        onClickNight={() => handlePreview(`3`, night)}
        onClickPeach={() => handlePreview(`4`, peach)}
        onClickLilac={() => handlePreview(`5`, lilac)}
        onClickComplete={() => handleConfirm()}
        isPreview={isPreview}
      />
    </div>
  );
}
