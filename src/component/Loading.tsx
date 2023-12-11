import { useRecoilState } from 'recoil';

import { themeState } from '@/recoil/theme/theme';

function LoadingLine({ width, height }: { width: string; height: string }) {
  return (
    <div className={`${height} ${width} bg-loading-gray`}>
      <div className="h-full w-full bg-black bg-opacity-20" />
    </div>
  );
}

export default function Loading() {
  const [theme] = useRecoilState(themeState);
  return (
    <div
      className={`h-full w-full ${theme.bgTheme.background} px-[24px] pt-[96px]`}
    >
      <div className="w-full animate-pulse space-y-[7px]">
        <div className="h-[30px] w-full bg-loading-gray" />
        <LoadingLine width="w-[206px]" height="h-[30px]" />
      </div>
      <div className="mt-[84px] w-full animate-pulse space-y-[7px]">
        <LoadingLine width="w-full" height="h-[26px]" />
        <LoadingLine width="w-full" height="h-[26px]" />
      </div>
      <div className="mt-[36px] w-full animate-pulse space-y-[7px]">
        <LoadingLine width="w-full" height="h-[26px]" />
        <LoadingLine width="w-full" height="h-[26px]" />
        <LoadingLine width="w-[88px]" height="h-[26px]" />
        <LoadingLine width="w-full" height="h-[26px]" />
        <LoadingLine width="w-[187px]" height="h-[26px]" />
      </div>
    </div>
  );
}
