'use client';

import { useRecoilState } from 'recoil';

import BottomButton from '@/component/BottomButton';
import Confirm from '@/component/Modal/Confirm';
import ThemeChange from '@/component/ThemeChange';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { bodyFont, captionFont, titleFont } from '@/recoil/font';
import { themeState } from '@/recoil/theme/theme';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Create() {
  const searchParams = useSearchParams();
  const [theme] = useRecoilState(themeState);
  const [title, , handleTitle] = useInput('');
  const [openModal, closeModal] = useModal();
  const router = useRouter();
  const groupId = searchParams.get('groupId');
  const maxLength = 30;

  const handleConfirm = () => {
    openModal(
      <Confirm
        content="여기서 완료하면 더이상 내용을 수정할 수 없습니다. 완료하시겠습니까?"
        yes={handleClick}
        no={closeModal}
      />,
    );
  };

  const handleClick = () => {
    const data = {
      groupId: groupId,
      theme: theme.name,
      title: `\/\/${title}`,
    };
    axiosInstance
      .post(`/boards`, data)
      .then((data) => {
        if (groupId == null) router.push(`/personal/${data.data}`);
        else router.push(`/group/${groupId}`);
      })
      .catch((err) => {
        if (err.response.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      });
    closeModal();
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaTitle = e.currentTarget.value;
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(textAreaTitle).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (byteLength <= 90) {
      handleTitle(e);
    }
  };

  const handleKeyDownTitle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className={`${theme.bgTheme.background} h-full w-full`}>
      <div className="flex h-full w-full flex-col">
        <div className="basis-1/12" />
        <div className="basis-2/12">
          <div className="mt-10 flex w-full basis-3/12 flex-col items-center justify-center px-[24px]">
            <textarea
              id="titleMessage"
              rows={1}
              value={title}
              className={` w-full resize-none ${theme.bgTheme.background} ${titleFont.category1} ${theme.textTheme.default} outline-none ${theme.textTheme.placeholder}`}
              placeholder="제목을 입력해주세요."
              maxLength={maxLength}
              onChange={(e) => handleChangeTitle(e)}
              onKeyDown={(e) => handleKeyDownTitle(e)}
            />
            <div
              className={`w-full text-right ${captionFont.category2}  ${
                title.length > maxLength
                  ? 'text-red-600'
                  : `${theme.textTheme.default}`
              }`}
            >
              {title.length}/30
            </div>
          </div>
        </div>
        <div className="mx-[24px] mt-[24px] basis-5/12">
          <div
            className={`inline ${bodyFont.category1} ${theme.textTheme.highlight}`}
          ></div>
          <div
            className={`inline ${bodyFont.category1} ${theme.textTheme.default}`}
          >
            스트링캣을 생성하면 이곳에 문자열을 이을 수 있어요.
          </div>
        </div>
        <div className="basis-2/12">
          <ThemeChange />
        </div>
        <div className="basis-2/12" />
        <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
          <BottomButton
            textColor=""
            height="h-[42px]"
            name="완료"
            width="w-full"
            onClickHandler={() => handleConfirm()}
            disabled={title === '' || title.length > 30}
            color={theme.bgTheme.rightCTA}
          />
        </div>
      </div>
    </div>
  );
}
