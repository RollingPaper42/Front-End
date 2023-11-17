'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useSearchParams } from 'next/navigation';

export default function Create() {
  const BgInitColor = 'black';
  const FontInitColor = 'white';
  const ErrorInitColor = 'black';
  const [BgColor, SetBgColor] = useState(BgInitColor);
  const [FontColor, SetFontColor] = useState(FontInitColor);
  const theme = (BgColor: string, FontColor: string): undefined => {
    SetBgColor(BgColor);
    SetFontColor(FontColor);
  };
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log(searchParams);

  const [text, , handleText] = useInput('');
  const [title, , handleTitle] = useInput('');
  const [ErrorFontColor, SetErrorFontColor] = useState(ErrorInitColor);
  const [TextErrorFontColor, SetTextErrorFontColor] = useState(ErrorInitColor);
  // const [modal, setModal] = useRecoilState(modalState);

  // if (id === null || id === undefined) {
  //   alert('유효하지 않은 접속입니다.');
  //   // redirect 해야함 -> main으로?
  // }

  const handleClick = () => {
    if (text === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (title === '') {
      alert('작성자명을 입력해주세요');
    }
    //const isConfirmed = await useConfirm('작성한 글을 이어붙이시겠습니까?', setModal);
    const isConfirmed = true;
    if (isConfirmed) {
      const data = {
        text: text,
        title: title,
      };
      axiosInstance
        .post(`/board/${id}/content`, data)
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

  const handleChangeResizeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.currentTarget.value;
    const byteLength = new TextEncoder().encode(inputTitle).length;

    if (byteLength <= 60) {
      // UTF-8에서는 20글자의 한글 문자열이 60바이트를 차지하므로 60바이트 이하로 제한
      handleTitle(e);
    }
  };

  const handleKeyDownTitle = (
    e: React.KeyboardEvent<HTMLInputElement>,
    SetErrorFontColor: React.Dispatch<React.SetStateAction<string>>,
    title: string,
  ) => {
    if (title.length >= 20 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 20);
      SetErrorFontColor('red-600');
    } else {
      SetErrorFontColor(FontColor);
    }
  };
  const handleChangeResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(e.currentTarget.value).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    if (byteLength <= 3000) {
      // UTF-8에서는 20글자의 한글 문자열이 60바이트를 차지하므로 60바이트 이하로 제한
      handleText(e);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    SetTextErrorFontColor: React.Dispatch<React.SetStateAction<string>>,
    text: string,
  ) => {
    if (text.length >= 1000 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
      SetTextErrorFontColor('red-600');
    } else {
      SetTextErrorFontColor(FontColor);
    }
  };
  return (
    <div className={`bg-${BgColor}`}>
      <div className="flex h-14 w-full flex-row content-center items-center justify-center">
        <div className="basis-1/4">
          <Link href="/">
            <Image
              src="/backpage.png"
              width={24}
              height={24}
              alt="backpagebutton"
            ></Image>
          </Link>
        </div>
        <div className={`basis-2/4 text-${FontColor}`}>스트링캣 만들기</div>
        <div className="basis-1/4"></div>
      </div>
      <>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="w-80">
            <input
              id="titleMessage"
              value={title}
              className={`max-h-96 w-full resize-none bg-${BgColor} text-xl text-${FontColor} font-semibold outline-none placeholder:text-${FontColor}`}
              placeholder="제목을 입력해주세요"
              maxLength={20}
              onChange={(e) => handleChangeResizeTitle(e)}
              onKeyDown={(e) => handleKeyDownTitle(e, SetErrorFontColor, title)}
            />
            <div className={`text-right text-${ErrorFontColor}`}>
              {title.length}/20
            </div>
          </div>
        </div>
      </>
      <>
        <div className="mt-10 flex flex-col items-center justify-center">
          <span className="w-80">
            <textarea
              id="message"
              value={text}
              className={`max-h-96 w-full resize-none bg-${BgColor} text-xl text-${FontColor} font-semibold outline-none placeholder:text-${FontColor}`}
              placeholder="텍스트를 입력해주세요"
              maxLength={1000}
              onChange={(e2) => handleChangeResize(e2)}
              onKeyDown={(e2) => handleKeyDown(e2, SetTextErrorFontColor, text)}
            />
            <div className={`text-right text-${TextErrorFontColor}`}>
              {text.length}/1000
            </div>
          </span>
        </div>
      </>

      <div className="flex w-full flex-row">
        <button
          className="mt-20 basis-1/4 bg-black"
          onClick={() => theme('black', 'white')}
        >
          1
        </button>
        <button
          className="mt-20 basis-1/4 bg-white"
          onClick={() => theme('white', 'black')}
        >
          2
        </button>
        <button
          className="mt-20 basis-1/4 bg-green"
          onClick={() => theme('green', 'white')}
        >
          3
        </button>
        <button
          className="mt-20 basis-1/4 bg-pink"
          onClick={() => theme('pink', 'white')}
        >
          4
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button className="h-12 w-96 bg-buttonColor">완료</button>
      </div>
    </div>
  );
}
