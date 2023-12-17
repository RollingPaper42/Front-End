import { useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  message: string;
  setToast: Dispatch<SetStateAction<string>>;
}

export default function Toast({ message, setToast }: Props) {
  useEffect(() => {
    let timer = setTimeout(() => {
      setToast('');
    }, 2100);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);
  return (
    <div className="flex w-full max-w-md items-center justify-center">
      <div
        className="fixed bottom-[82px] z-20 flex w-fit items-center justify-center rounded-[5px]
         bg-black/50 px-[40px] py-[4px] font-[14px] text-white"
        role="alert"
      >
        {message}
      </div>
    </div>
  );
}
