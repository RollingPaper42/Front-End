import BottomButton from '@/component/Common/BottomButton';
import { themeState } from '@/types/theme';
import { defaultState } from '@/utils/theme/default';

interface Props {
  handleClickCreate: () => void;
  handleClickWrite: () => void;
  theme: themeState;
}

export default function WriterButtonLayer({
  handleClickCreate,
  handleClickWrite,
  theme,
}: Props) {
  return (
    <>
      <BottomButton
        textColor={`${defaultState.explainLeftCTA}`}
        name="나도 만들기"
        width="basis-1/3"
        onClickHandler={handleClickCreate}
        disabled={false}
        color={`${defaultState.btnLeftCTA}`}
        isShadow={true}
      />
      <BottomButton
        textColor={`${theme.textTheme.rightCTA}`}
        name="글쓰기"
        width="basis-2/3"
        onClickHandler={handleClickWrite}
        disabled={false}
        color={`${theme.bgTheme.rightCTA}`}
        isShadow={true}
      />
    </>
  );
}
