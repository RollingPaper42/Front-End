import Image from 'next/image';

import BottomButton from '@/component/Common/BottomButton';
import { themeState } from '@/types/theme';
import { defaultState } from '@/utils/theme/default';

interface Props {
  handleClickEdit: () => void;
  handleClickShare: () => void;
  handleClickWrite: () => void;
  handleClickDelete: () => void;
  theme: themeState;
  isEdit: boolean;
}

export default function OwnerButtonLayer({
  handleClickEdit,
  handleClickShare,
  handleClickWrite,
  theme,
  isEdit,
  handleClickDelete,
}: Props) {
  return (
    <>
      {isEdit ? (
        <>
          <BottomButton
            textColor={`${defaultState.explainLeftCTA}`}
            name="취소"
            width="basis-2/12"
            onClickHandler={handleClickEdit}
            color={`${defaultState.btnLeftCTA}`}
            isShadow={true}
          />
          <BottomButton
            textColor={`${defaultState.explainLeftCTA}`}
            name="선택 삭제"
            width="basis-10/12"
            onClickHandler={handleClickDelete}
            color={`${defaultState.bottomDisalbe}`}
            isShadow={true}
          />
        </>
      ) : (
        <>
          <BottomButton
            textColor={`${defaultState.explainLeftCTA}`}
            name="편집"
            width="basis-2/12"
            onClickHandler={handleClickEdit}
            color={`${defaultState.btnLeftCTA}`}
            isShadow={true}
          />
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
      )}
    </>
  );
}
