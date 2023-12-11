import { useRecoilState } from 'recoil';

import Back from '../Icon/Back';
import { bodyFont } from '@/recoil/font';
import { themeState } from '@/recoil/theme/theme';
import { useRouter } from 'next/navigation';

export default function BackButtonHeader() {
  const router = useRouter();
  const [theme] = useRecoilState(themeState);

  return (
    <div className="fixed z-button flex w-full max-w-md flex-col">
      <div className="flex h-[56px] w-full ">
        <div
          className="flex basis-1/6 items-center pl-[24px]"
          onClick={() => router.back()}
        >
          <Back color={theme.iconTheme.back} />
        </div>
        <div
          className={`${theme.textTheme.title} flex basis-4/6 items-center justify-center text-center ${bodyFont.category1}`}
        >
          스트링캣 만들기
        </div>
      </div>
    </div>
  );
}
