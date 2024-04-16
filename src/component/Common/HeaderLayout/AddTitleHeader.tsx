'use client';

import { usePathname, useRouter } from 'next/navigation';

import Close from '../Icon/Close';
import useModal from '@/hooks/useModal';
import { confirm } from '@/utils/confirm';
import { defaultState } from '@/utils/theme/default';

interface Props {
  id: string;
  title: string;
}

export default function AddTitleHeader({ id, title }: Props) {
  const router = useRouter();

  const [openModal, closeModal] = useModal();

  const handleAddClose = async () => {
    const isConfirmed = await confirm(
      openModal,
      closeModal,
      '글 작성을 취소하시겠어요?',
    );
    if (isConfirmed) router.push(`/personal/${id}`);
  };

  return (
    <div
      className={`flex min-h-[52px] flex-row items-stretch justify-between py-[16px] ${defaultState.background} bg-opacity-80 px-[24px]`}
      id="titleHeader"
    >
      <div
        className={`flex items-center pr-[8px] text-headline-size2 font-bold leading-8 tracking-[-0.48px] ${defaultState.activateText}`}
      >
        {title}
      </div>
      <div className="pt-[4px]" onClick={handleAddClose}>
        <Close />
      </div>
    </div>
  );
}
