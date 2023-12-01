'use client';

import useInput from '@/hooks/useInput';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import useModal from '@/hooks/useModal';
import { confirm } from '@/utils/confirm';
import { useRouter } from 'next/navigation';
import { axiosInstance } from '@/utils/axios';
import { AxiosError } from 'axios';
import Error from '@/component/Modal/Error';
import BottomButton from '@/component/BottomButton';
import Back from '@/component/Icon/Back';
import BackButtonHeader from '@/component/HeaderLayout/BackButtonHeader';

export default function Create() {
  const [Theme] = useRecoilState(themeState);
  const [title, , handleTitle] = useInput('');
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const maxLength = 25;

  const handleClick = async () => {
    const isConfirmed = await confirm(
      '여기서 완료하면 더이상 내용을 수정할 수 없습니다. 완료하시겠습니까?',
      openModal,
      closeModal,
    );
    if (isConfirmed) {
      try {
        const res = await axiosInstance.post(`/board-groups`, {
          title: `\/\/${title}`,
        });
        router.push(`/group/${res.data}`);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status === 406) {
          openModal(
            <Error
              content="올바르지 않은 입력입니다. 다시 작성해주세요."
              handleModalClose={closeModal}
            />,
          );
        }
      }
    }
  };

  const handleResizeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTitle(e);
    const textarea: HTMLTextAreaElement = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleKeyDownTitle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className={`${Theme.background} h-full w-full`}>
      <div className="flex h-full w-full flex-col">
        <div className="flex basis-14 items-center">
          <BackButtonHeader
            title="스트링캣 내보내기"
            backClickHandler={() => router.back()}
          />
        </div>
        <div className="basis-1/6">
          <div className="mt-10 flex w-full basis-3/12 flex-col items-center justify-center px-[24px]">
            <textarea
              id="titleMessage"
              rows={1}
              value={title}
              className={`w-full resize-none text-[24px] ${Theme.background} ${Theme.defaultText} outline-none placeholder:${Theme.defaultText}`}
              placeholder="제목을 입력해주세요."
              maxLength={maxLength + 1}
              onChange={handleResizeTitle}
              onKeyDown={handleKeyDownTitle}
            />
            <div
              className={`w-full text-right text-[14px] ${
                title.length > maxLength ? 'text-red-600' : 'text-gray-400'
              }`}
            >
              {title.length}/{maxLength}
            </div>
          </div>
        </div>
        <div className="mx-[24px] basis-1/3 space-y-[20px]">
          <div className={`text-[22px] ${Theme.highlightText}`}>
            개별 스트링캣 리스트 예시 1
          </div>
          <div className={`text-[22px] ${Theme.defaultText}`}>
            개별 스트링캣 리스트 예시 2
          </div>
        </div>
        <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            height="h-[42px]"
            name="완료"
            width="w-full"
            onClickHandler={handleClick}
            disabled={title === '' || title.length > maxLength}
            color={Theme.rightCTA}
          />
        </div>
      </div>
    </div>
  );
}
