'use client';

import { useState } from 'react';
import useInput from '@/hooks/useInput';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import ThemeChange from '@/component/ThemeChange';
import useModal from '@/hooks/useModal';
import Confirm from '@/component/Modal/Confirm';
import { useRouter } from 'next/navigation';
import BottomButton from '@/component/BottomButton';
import { axiosInstance } from '@/utils/axios';
import { useSearchParams } from 'next/navigation';
import Back from '@/component/Icon/Back';

export default function Create() {
  const searchParams = useSearchParams();
  const ErrorInitColor = 'text-gray-400';
  const [Theme] = useRecoilState(themeState);
  const [buttonState, SetButtonState] = useState(true);
  const [title, , handleTitle] = useInput('');
  const [ErrorFontColor, SetErrorFontColor] = useState(ErrorInitColor);
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const groupId = searchParams.get('groupId');

  const handleConfirm = async () => {
    openModal(
      <Confirm
        content="여기서 완료하면 더이상 내용을 수정할 수 없습니다. 완료하시겠습니까?"
        yes={handleClick}
        no={closeModal}
      />,
    );
  };

  const handleClick = () => {
    const data = {
      groupId: groupId,
      theme: Theme.name,
      title: `\/\/${title}`,
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

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const TextAreaTitle = e.currentTarget.value;
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(TextAreaTitle).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (byteLength <= 90) {
      handleTitle(e);
    }
  };

  const handleKeyDownTitle = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    title: string,
  ) => {
    SetButtonState(false);
    if (title.length == 0) SetButtonState(true);
    if (title.length >= 30 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
      SetButtonState(true);
      e.currentTarget.value = e.currentTarget.value.slice(0, 30);
      SetErrorFontColor('text-red-600');
    } else {
      SetErrorFontColor('text-gray-400');
    }
  };

  return (
    <div className={`${Theme.background} h-full w-full`}>
      <div className="flex h-full w-full flex-col">
        <div className="basis-1/12">
          <div className="flex h-full w-full flex-row">
            <div
              className=" basis-1/6 items-center justify-center pl-[24px] pt-[16px]"
              onClick={() => router.push('/')}
            >
              <Back color={Theme.backIcon} />
            </div>
            <div className=" basis-4/6">
              <div
                className={`text-center text-[18px] ${Theme.defaultText} mt-[16px]`}
              >
                스트링캣 만들기
              </div>
            </div>
            <div className=" basis-1/6"></div>
          </div>
        </div>
        <div className="basis-2/12">
          <div className="mt-10 flex w-full basis-3/12 flex-col items-center justify-center px-[24px]">
            <textarea
              id="titleMessage"
              rows={1}
              value={title}
              className={` w-full resize-none ${Theme.background} text-[22px] ${Theme.defaultText} outline-none placeholder:${Theme.defaultText}`}
              placeholder="제목을 입력해주세요."
              maxLength={30}
              onChange={(e) => handleChangeTitle(e)}
              onKeyDown={(e) => handleKeyDownTitle(e, title)}
            />
            <div className={`w-full text-right text-[14px] ${ErrorFontColor}`}>
              {title.length}/30
            </div>
          </div>
        </div>
        <div className="mx-[24px] mt-[24px] basis-5/12">
          <div className={`inline text-[18px] ${Theme.highlightText}`}>
            스트링캣을 생성하면 이곳에 문자열을 이을 수 있어요.
          </div>
          <div className={`inline text-[18px] ${Theme.defaultText}`}>
            스트링캣을 생성하면 이곳에 문자열을 이을 수 있어요.
          </div>
        </div>
        <div className="basis-2/12">
          <ThemeChange />
        </div>
        <div className="basis-2/12" />
        <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            height="h-[42px]"
            name="완료"
            width="w-full"
            onClickHandler={() => handleConfirm()}
            disabled={buttonState}
            color={Theme.rightCTA}
          />
        </div>
      </div>
    </div>
  );
}
