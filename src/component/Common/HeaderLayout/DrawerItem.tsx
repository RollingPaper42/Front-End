import { bodyFontState } from '@/recoil/font/body';

interface Props {
  title: string;
  icon: React.ReactElement;
}

export default function DrawerItem({ title, icon }: Props) {
  return (
    <div
      className={`${bodyFontState.serviceBody} flex cursor-pointer select-none items-center`}
    >
      <div className="pr-[12px]">{icon}</div>
      {title}
    </div>
  );
}
