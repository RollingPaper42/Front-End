import BottomButton from '@/component/Common/BottomButton';
import { themeState } from '@/types/theme';
import { defaultState } from '@/utils/theme/default';
import Image from 'next/image';

interface Props {
  handleClickDownload: () => void;
  handleClickShare: () => void;
  handleClickWrite: () => void;
  theme: themeState;
}

export default function OwnerButtonLayer({
  handleClickDownload,
  handleClickShare,
  handleClickWrite,
  theme,
}: Props) {
  return (
    <>
      <div
        className="flex basis-1/12 items-center justify-center"
        onClick={handleClickDownload}
      >
        <div
          className={`flex h-[46px] w-[46px] cursor-pointer select-none items-center justify-center rounded-[5px] ${defaultState.btnLeftCTA}`}
        >
          <Image
            src="/personal/Download.svg"
            width={24}
            height={24}
            alt="Download"
          />
        </div>
      </div>
      <BottomButton
        textColor={`${defaultState.explainLeftCTA}`}
        name="공유하기"
        width="basis-5/12"
        onClickHandler={handleClickShare}
        color={`${defaultState.btnLeftCTA}`}
        isShadow={true}
      />
      <BottomButton
        textColor={`${theme.textTheme.rightCTA}`}
        name="글쓰기"
        width="basis-5/12"
        onClickHandler={handleClickWrite}
        color={`${theme.bgTheme.rightCTA}`}
        isShadow={true}
      />
    </>
  );
}
