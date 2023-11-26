'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import useInput from '@/hooks/useInput';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import ThemeChange from '@/component/ThemeChange';
import useModal from '@/hooks/useModal';
import Confirm from '@/component/Modal/Confirm';
import { useRouter } from 'next/navigation';
import BottomButton from '@/component/BottomButton';

export default function Create() {
  const ErrorInitColor = 'text-gray-400';
  const [Theme, setTheme] = useRecoilState(themeState);
  const [linkURL, setLinkURL] = useState('');
  const [buttonState, SetButtonState] = useState(true);
  const [title, , handleTitle] = useInput('');
  const [ErrorFontColor, SetErrorFontColor] = useState(ErrorInitColor);
  const [openModal, closeModal] = useModal();
  const router = useRouter();

  const handleConfirm = async () => {
    openModal(<Confirm content="확인" yes={handleClick} no={closeModal} />);
  };

  const handleClick = () => {
    // const data = {
    //   backgroundColor: Theme,
    //   title: title,
    // };
    // axiosInstance
    //   .post(`/boards`, data)
    //   .then((data) => {
    //     setLinkURL(data.data.link);
    //     router.push(data.data);
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 406) {
    //       alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
    //     }
    //   });
    router.push('/');
    closeModal();
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const TextAreaTitle = e.currentTarget.value;
    const byteLength = new TextEncoder().encode(TextAreaTitle).length;

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
      e.currentTarget.value = e.currentTarget.value.slice(0, 30);
      SetErrorFontColor('text-red-600');
    } else {
      SetErrorFontColor('text-gray-400');
    }
  };

  return (
    <div className={`${Theme.background} h-full w-full`}>
      <div className="flex h-full w-full flex-col">
        <div className="basis-1/1">
          <div className="flex h-full w-full flex-row">
            <div className=" basis-1/6 items-center justify-center">
              <Image
                src="/backpage.png"
                width={24}
                height={24}
                alt="backpagebutton"
                className="ml-[24px] mt-[16px]"
              />
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
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="w-80">
              <textarea
                id="titleMessage"
                rows={3}
                value={title}
                className={` w-full ${Theme.background} text-[22px] ${Theme.defaultText} outline-none placeholder:${Theme.defaultText}`}
                placeholder="제목을 입력해주세요."
                maxLength={30}
                onChange={(e) => handleChangeTitle(e)}
                onKeyDown={(e) => handleKeyDownTitle(e, title)}
              />
              <div className={`text-right ${ErrorFontColor}`}>
                {title.length}/30
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[24px] basis-5/12">
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
        <div className="basis-2/12">
          <div className="mt-10 flex flex-row items-center justify-center">
            <BottomButton
              name="완료"
              width="w-[312px]"
              onClickHandler={() => handleConfirm()}
              disabled={buttonState}
              color={`${Theme.rightCTA}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
