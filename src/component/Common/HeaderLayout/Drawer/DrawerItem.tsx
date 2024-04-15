import { bodyFontState } from '@/recoil/font/body';

interface Props {
  title: string;
  icon: React.ReactElement;
  onClick: () => void;
}

export default function DrawerItem({ title, icon, onClick }: Props) {
  // title 이 falsy 한 값을 뱉어 낸다면 없는 값
  if (!title) return null;
  return (
    <div className="h-[54px] w-full">
      <div
        className={`${bodyFontState.serviceBody} flex cursor-pointer select-none items-center`}
        onClick={onClick}
      >
        <div className="pr-[12px]">{icon}</div>
        {title}
      </div>
    </div>
  );
}
