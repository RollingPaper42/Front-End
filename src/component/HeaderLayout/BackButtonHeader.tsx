import { useRecoilState } from 'recoil';

import { Back } from '../Icon/Header';
import { defaultState } from '@/recoil/newtheme/default';
import { themeState } from '@/recoil/newtheme/theme';
import { useRouter } from 'next/navigation';

interface Props {
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BackButtonHeader({ isNext, setIsNext }: Props) {
  const router = useRouter();
  const [theme] = useRecoilState(themeState);
  const handleClickBack = () => {
    if (isNext) setIsNext(false);
    else router.back();
  };

  return (
    <div className="fixed z-button flex w-full max-w-md flex-col">
      <div className="flex h-[56px] w-full ">
        <div
          className="flex basis-1/6 items-center pl-[24px]"
          onClick={handleClickBack}
        >
          <Back />
        </div>
        <div
          className={`${defaultState.activateText} flex basis-4/6 items-center justify-center text-center text-[16px] font-bold`}
        >
          스트링캣 만들기
        </div>
      </div>
    </div>
  );
}
