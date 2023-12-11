'use client';

import Toast from '@/component/Toast';
import { useState } from 'react';

export default function Page() {
  const [toast, setToast] = useState(false);
  const [toast2, setToast2] = useState(false);
  const onToastClick = () => {
    setToast(true);
    setToast2(false);
  };
  const onToast2Click = () => {
    setToast2(true);
    setToast(false);
  };
  return (
    <>
      <button className="block text-xl" onClick={onToastClick}>
        저장
      </button>
      <button className="block text-xl" onClick={onToast2Click}>
        공유
      </button>
      {toast && (
        <Toast message="저장기능은 준비중입니다." setToast={setToast} />
      )}
      {toast2 && (
        <Toast message="링크가 복사되었습니다." setToast={setToast2} />
      )}
    </>
  );
}
