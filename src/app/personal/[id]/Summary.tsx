'use client';

import { useEffect, useState } from 'react';

import { axiosInstance } from '@/utils/axios';

function formatNumberWithCommas(inputText: number) {
  return inputText.toLocaleString();
}

export default function Summary({ id }: { id: string }) {
  const [contentCount, setContentCount] = useState(0);
  const [contentTextCount, setContentTextCount] = useState(0);
  useEffect(() => {
    axiosInstance
      .get(`/boards/${id}/summaries`)
      .then((res) => {
        setContentCount(res.data.contentCount);
        setContentTextCount(res.data.contentTextCount);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="text-body-size1 px-[24px]" style={{ color: '#FFFFFF80' }}>
      {`${contentCount}개의 마음이
      ${formatNumberWithCommas(contentTextCount)}자 이어졌어요!`}
    </div>
  );
}
