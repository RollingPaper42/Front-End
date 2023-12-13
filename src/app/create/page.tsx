'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '@/component/BottomButton';
import Confirm from '@/component/Modal/Confirm';
import Textarea from '@/component/Textarea';
import ThemeChange from '@/component/ThemeChange';
import useModal from '@/hooks/useModal';
import { bodyFont } from '@/recoil/font';
import { themeState } from '@/recoil/theme/theme';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Create() {
  const searchParams = useSearchParams();
  const [theme] = useRecoilState(themeState);
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const groupId = searchParams.get('groupId');
  const [title, setTitle] = useState('');

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

  const handleClick = () => {
    const data = {
      groupId: groupId,
      theme: theme.name,
      title: `${title}`,
    };
    axiosInstance
      .post(`/boards`, data)
      .then((data) => {
        if (groupId == null) router.push(`/personal/${data.data}`);
        else router.push(`/group/${groupId}`);
      })
      .catch((err) => {
        if (err.response.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      });
    closeModal();
  };
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className={`${theme.bgTheme.background} h-full w-full`}>
      <div className="flex h-full w-full flex-col">
        <div className="basis-1/12" />
        <div className="basis-2/12">
          <div className="mt-10 flex w-full basis-3/12 flex-col items-center justify-center px-[24px]">
            <Textarea
              width="w-[312px]"
              height="h-[160px]"
              placeholder="스트링캣 주제를 입력해주세요."
              textColor="text-white "
              maxLength={25}
              onTextChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="mx-[24px] mt-[24px] basis-5/12">
          <div
            className={`inline ${bodyFont.category1} ${theme.textTheme.highlight}`}
          ></div>
          <div
            className={`inline ${bodyFont.category1} ${theme.textTheme.default}`}
          >
            스트링캣을 생성하면 이곳에 문자열을 이을 수 있어요.
          </div>
        </div>
        <div className="basis-2/12">
          <ThemeChange />
        </div>
        <div className="basis-2/12" />
        <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            textColor=""
            height="h-[42px]"
            name="완료"
            width="w-full"
            onClickHandler={() => handleConfirm()}
            disabled={title === '' || title.length > 30}
            color={theme.bgTheme.rightCTA}
          />
        </div>
      </div>
    </div>
  );
}
