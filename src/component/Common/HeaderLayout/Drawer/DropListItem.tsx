import { useRecoilState } from 'recoil';

import { usePathname, useRouter } from 'next/navigation';

import { Check } from '../../Icon/Drawer';
import { drawerState } from '@/recoil/drawer';
import { drawerBoard } from '@/types/drawerBoard';
import { defaultState } from '@/utils/theme/default';

interface Props {
  list: drawerBoard[];
  category: string;
}

export default function DropListItem({ list, category }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);

  const truncateTitle = (title: string) => {
    if (title.length <= 17) {
      return title;
    } else {
      return title.substring(0, 17) + '...';
    }
  };

  return list.map((item: drawerBoard) => {
    const url = '/'.concat(category, '/', item.id);
    const isActive = pathname === url;
    return (
      <div
        key={item.id}
        className="flex h-[54px] w-full cursor-pointer select-none items-center justify-between px-[24px]"
        onClick={() => {
          router.push(url);
          document.body.style.overflow = 'auto';
          setDrawer(false);
        }}
      >
        <div
          className={`py-[12px] flex h-full w-full items-center text-body-size2 font-medium ${
            isActive ? `px-0 ${defaultState.bottomButtonText}` : 'pl-[24px]'
          }`}
        >
          {isActive && <Check />}
          <div className="pl-[8px]">{truncateTitle(item.title)}</div>
        </div>
      </div>
    );
  });
}
