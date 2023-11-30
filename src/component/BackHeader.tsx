import { themeState } from '@/recoil/theme';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import Back from './Icon/Back';

interface Props {
  content: string;
}

export default function BackHeader({ content }: Props) {
  const router = useRouter();
  const [Theme, setTheme] = useRecoilState(themeState);
  return (
    <div className={`flex w-full flex-row ${Theme.background}`}>
      <div
        className=" basis-1/6 items-center justify-center pl-[24px] pt-[16px]"
        onClick={() => router.back}
      >
        <Back color={Theme.backIcon} />
      </div>
      <div className=" basis-4/6">
        <div
          className={`text-center text-[18px] ${Theme.defaultText} mt-[16px]`}
        >
          {content}
        </div>
      </div>
      <div className=" basis-1/6"></div>
    </div>
  );
}
