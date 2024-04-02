import { OwnerButtonLayer } from '@/component/Personal';
import { themeObj } from '@/types/theme';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('OwnerButtonLayer 컴포넌트 테스트', () => {
  it('isEdit가 false일 때 편집, 공유하기, 글쓰기 버튼이 정상적으로 렌더링되는지 확인', () => {
    render(
      <OwnerButtonLayer
        handleClickEdit={() => {}}
        handleClickShare={() => {}}
        handleClickWrite={() => {}}
        theme={themeObj.chris}
        isEdit={false}
        handleClickDelete={() => {}}
      />,
    );

    // "편집" 버튼을 기준으로 컴포넌트가 렌더링되었는지 확인합니다.
    const editButton = screen.getByRole('button', { name: '편집' });
    expect(editButton).toBeInTheDocument();

    // "공유하기" 버튼이 렌더링되었는지 확인합니다.
    const shareButton = screen.getByRole('button', { name: '공유하기' });
    expect(shareButton).toBeInTheDocument();

    // "글쓰기" 버튼이 렌더링되었는지 확인합니다.
    const writeButton = screen.getByRole('button', { name: '글쓰기' });
    expect(writeButton).toBeInTheDocument();
  });

  it('isEdit가 true일 때 "선택 삭제" 및 "취소" 버튼이 정상적으로 렌더링되는지 확인', () => {
    render(
      <OwnerButtonLayer
        handleClickEdit={() => {}}
        handleClickShare={() => {}}
        handleClickWrite={() => {}}
        theme={themeObj.chris}
        isEdit={true}
        handleClickDelete={() => {}}
      />,
    );

    // "선택 삭제" 버튼을 기준으로 컴포넌트가 렌더링되었는지 확인합니다.
    const deleteButton = screen.getByRole('button', { name: '선택 삭제' });
    expect(deleteButton).toBeInTheDocument();

    // "취소" 버튼이 렌더링되었는지 확인합니다.
    const cancelButton = screen.getByRole('button', { name: '취소' });
    expect(cancelButton).toBeInTheDocument();
  });
});
