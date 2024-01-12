'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { bodyFontState } from '@/recoil/font/body';
import { axiosGetBoardSummaries } from '@/utils/apiInterface';

function formatNumberWithCommas(inputText: number) {
  return inputText.toLocaleString();
}

export default function Summary({ id }: { id: string }) {
  const [contentCount, setContentCount] = useState(0);
  const [contentTextCount, setContentTextCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    axiosGetBoardSummaries(id)
      .then((res) => {
        setContentCount(res.data.contentCount);
        setContentTextCount(res.data.contentTextCount);
      })
      .catch((err) => {
        if (err.response.status === 406) {
          router.push('/not-found');
          return;
        }
      });
  }, []);

  return (
    <div
      className={` ${bodyFontState.serviceBody} px-[24px]`}
      style={{ color: '#FFFFFF80' }}
    >
      {`${contentCount}개의 마음이
      ${formatNumberWithCommas(contentTextCount)}자 이어졌어요!`}
    </div>
  );
}
