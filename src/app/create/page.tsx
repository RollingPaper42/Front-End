'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { calm, cyan, green, strcat, themeState } from '@/recoil/theme';
import ThemeChange from '@/component/ThemeChange';

export default function Create() {
  const ErrorInitColor = 'slate-400';
  const [Theme, setTheme] = useRecoilState(themeState);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const handleThemeChange = (newTheme: themeState) => {
    setTheme(newTheme);
  };
  const [buttonState, SetButtonState] = useState('/DisabledButton.png');
  const [text, , handleText] = useInput('');
  const [title, , handleTitle] = useInput('');
  const [ErrorFontColor, SetErrorFontColor] = useState(ErrorInitColor);
  const [TextErrorFontColor, SetTextErrorFontColor] = useState(ErrorInitColor);

  const handleClick = () => {
    if (text === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (title === '') {
      alert('제목을 입력해주세요');
    }

    const isConfirmed = true;
    if (isConfirmed) {
      const data = {
        backgroundColor: Theme.BgColor,
        title: title,
      };
      axiosInstance
        .post(`/boards`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response.status === 406) {
            alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
          }
        });
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.currentTarget.value;
    const byteLength = new TextEncoder().encode(inputTitle).length;

    if (byteLength <= 60) {
      handleTitle(e);
    }
  };

  const handleKeyDownTitle = (
    e: React.KeyboardEvent<HTMLInputElement>,
    title: string,
  ) => {
    SetButtonState('/ActivateButton.png');
    if (title.length == 0) SetButtonState('/DisabledButton.png');
    if (title.length >= 20 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 20);
      SetErrorFontColor('red-600');
    } else {
      SetErrorFontColor('slate-400');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(e.currentTarget.value).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    if (byteLength <= 3000) {
      handleText(e);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    text: string,
  ) => {
    if (text.length >= 1000 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
      SetTextErrorFontColor('red-600');
    } else {
      SetTextErrorFontColor('slate-400');
    }
  };
  //console.log(Theme);

  return (
    <div className={`${Theme.BgColor} flex h-full flex-col`}>
      <div className="flex h-14 w-full flex-row content-center items-center justify-center">
        <div className=" basis-8"></div>
        <div className="basis-2/12">
          <Link href="/">
            <Image
              src="/backpage.png"
              width={24}
              height={24}
              alt="backpagebutton"
              className="mt-4"
            />
          </Link>
        </div>
        <div
          className={`basis-8/12 text-center ${Theme.DefaultFontColor}  mt-4`}
        >
          스트링캣 만들기
        </div>
        <div className="basis-3/12"></div>
      </div>
      <>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="w-80">
            <input
              id="titleMessage"
              value={title}
              className={` max-h-96 w-full ${Theme.BgColor} text-xl ${Theme.DefaultFontColor} outline-none placeholder:${Theme.DefaultFontColor}`}
              placeholder="제목을 입력해주세요."
              maxLength={20}
              onChange={(e) => handleChangeTitle(e)}
              onKeyDown={(e) => handleKeyDownTitle(e, title)}
            />
            <div className={`text-right text-${ErrorFontColor}`}>
              {title.length}/20
            </div>
          </div>
        </div>
      </>
      <>
        <div className="mt-10 flex flex-col items-center justify-center">
          <span className="h-80 w-80">
            <textarea
              id="message"
              value={text}
              className={` max-h-80 w-full ${Theme.BgColor} text-lg ${Theme.FontColor1}  outline-none ${Theme.PlaceholderColor} placeholder:opacity-50`}
              placeholder="내용을 입력해보세요! 스트링캣을 생성하면 이곳에 문자열을 이을 수 있어요."
              maxLength={1000}
              onChange={(e2) => handleChange(e2)}
              onKeyDown={(e2) => handleKeyDown(e2, text)}
            />
            <div className={`text-right text-${TextErrorFontColor}`}>
              {text.length}/1000
            </div>
          </span>
        </div>
      </>
      <ThemeChange />
      <div className=" h-8"></div>
      <div className="flex w-full flex-row items-center justify-center">
        <Image
          src={`${buttonState}`}
          width={312}
          height={42}
          alt="Button"
          onClick={handleClick}
        />
      </div>
      <div className=" h-11"></div>
    </div>
  );
}
