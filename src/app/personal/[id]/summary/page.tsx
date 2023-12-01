'use client';

import { themeObj, themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import { axiosInstance } from '@/utils/axios';
import { useEffect, useState } from 'react';
import BottomButton from '@/component/BottomButton';
import { useRouter } from 'next/navigation';
import Back from '@/component/Icon/Back';
import LongCat from '@/component/Icon/LongCat';
import { handleShare } from '@/utils/handleShare';

export default function Summary({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [theme, setTheme] = useRecoilState(themeState);
  const [title, setTitle] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [contentTextCount, setContentTextCount] = useState(0);

  useEffect(() => {
    axiosInstance
      .get(`/boards/${params.id}/summaries`)
      .then((res) => {
        setTitle(res.data.title);
        setContentCount(res.data.contentCount);
        setContentTextCount(res.data.contentTextCount);
        const themeName: 'strcat' | 'cyan' | 'green' | 'calm' = res.data.theme;
        setTheme(themeObj[themeName]);
      })
      .catch((err) => {
        if (err.response?.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      });
  }, []);

  function formatNumberWithCommas(inputText: number) {
    return inputText.toLocaleString();
  }

  return (
    <div className={`${theme.background}`}>
      <div className=" fixed flex h-full w-full max-w-md flex-col">
        <div className="flex h-full basis-3/12 flex-col">
          <div className="flex h-full w-full basis-2/5 flex-row">
            <div
              className=" basis-1/6 items-center justify-center pl-[24px] pt-[16px]"
              onClick={() => router.back()}
            >
              <Back color={theme.backIcon} />
            </div>
            <div className=" basis-4/6">
              <div
                className={`text-center text-[18px] ${theme.titleText} mt-[16px]`}
              >
                스트링캣 공유하기
              </div>
            </div>
            <div className=" basis-1/6" />
          </div>
          <div className="mx-[24px] mt-[40px] basis-3/5">
            <div className={`text-[22px] ${theme.titleText}`}>{title}</div>
          </div>
        </div>
        <div className="flex h-full w-full basis-7/12 flex-col ">
          <div className="basis-1/4" />
          <div className="flex h-full w-full basis-1/4 flex-row px-[24px]">
            <div className={`${theme.summaryText} w-full text-[26px] `}>
              총 {contentCount}번의
              <br /> 마음으로
              <br /> 내 스트링캣이
              <br /> 총 {formatNumberWithCommas(contentTextCount)}자
              <br /> 이어졌어요!
            </div>
          </div>
          <div className="basis-1/4" />
          <div className="basis-1/4" />
        </div>
        <div className="basis-2/12 " />
        <div className="fixed bottom-[24px] flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            height="h-[42px]"
            name="공유하기"
            width="w-full"
            onClickHandler={() => handleShare(`/personal/${params.id}`)}
            disabled={false}
            color={`${theme.rightCTA}`}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="basis-1/2" />
        <div className="basis-1/2 pr-[24px] pt-[186px]">
          <LongCat
            bodyColor={theme.catTheme.mainCat}
            eyeColor={theme.catTheme.mainCatEye}
          />
        </div>
      </div>
    </div>
  );
}
