import { themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import Back from '../Icon/Back';

interface Props {
  title: string;
  backClickHandler: () => void;
}
export default function BackButtonHeader({ title, backClickHandler }: Props) {
  const [theme] = useRecoilState(themeState);

  return (
    <div className="fixed z-10 flex w-full max-w-md flex-col">
      <div className="flex h-[56px] w-full ">
        <div
          className="flex basis-1/6 items-center pl-[24px]"
          onClick={backClickHandler}
        >
          <Back color={theme.iconTheme.back} />
        </div>
        <div
          className={`${theme.textTheme.title} flex basis-4/6 items-center justify-center text-center text-[18px]`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
