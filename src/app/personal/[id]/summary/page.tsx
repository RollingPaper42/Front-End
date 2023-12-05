'use client';

import { themeObj, themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import { axiosInstance } from '@/utils/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleShare } from '@/utils/handleShare';
import LongCat from '@/component/Icon/LongCat';
import BottomButton from '@/component/BottomButton';
import SummaryBoard from '@/component/SummaryBoard';
import BackButtonHeader from '@/component/HeaderLayout/BackButtonHeader';
import useModal from '@/hooks/useModal';
import { titleFont } from '@/recoil/font';

export default function Summary({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [theme, setTheme] = useRecoilState(themeState);
  const [title, setTitle] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [contentTextCount, setContentTextCount] = useState(0);
  const [openModal, closeModal] = useModal();

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
          router.push('/not-found');
        }
      });
  }, []);

  return (
    <div className={`${theme.background}`}>
      <BackButtonHeader
        title="스트링캣 공유하기"
        backClickHandler={() => router.back()}
      />
      <div className="fixed flex h-full w-full max-w-md flex-col">
        <div className="reltaive flex h-full w-full flex-col px-[24px]">
          <div className="mt-24 flex w-full">
            <div className={`${titleFont.category1} ${theme.titleText}`}>
              {title}
            </div>
          </div>
          <div className="mt-[138px] flex h-full w-full flex-col">
            <div className="flex h-full w-full basis-1/4 flex-row">
              <SummaryBoard
                contentCount={contentCount}
                contentTextCount={contentTextCount}
                summaryTextColor={theme.summaryText}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full">
        <div className="basis-1/2" />
        <div className="basis-1/2 pr-[44px] pt-[186px]">
          <LongCat
            bodyColor={theme.catTheme.mainCat}
            eyeColor={theme.catTheme.mainCatEye}
          />
        </div>
      </div>
      <div className="fixed bottom-[24px] flex w-full max-w-md items-center justify-center px-[24px]">
        <BottomButton
          height="h-[42px]"
          name="공유하기"
          width="w-full"
          onClickHandler={() =>
            handleShare(`/personal/${params.id}`, openModal, closeModal)
          }
          disabled={false}
          color={`${theme.rightCTA}`}
        />
      </div>
    </div>
  );
}
