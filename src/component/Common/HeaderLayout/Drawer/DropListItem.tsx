import { useRecoilState } from 'recoil';

import { usePathname, useRouter } from 'next/navigation';

import { Check } from '../../Icon/Drawer';
import PublicBadge from '../../Icon/PublicBadge';
import { drawerState } from '@/recoil/drawer';
import { drawerBoard } from '@/types/drawerBoard';
import { defaultState } from '@/utils/theme/default';

interface Props {
  list: drawerBoard[];
  type: 'personal' | 'history';
}

export default function DropListItem({ list, type }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);

  const truncateTitle = (title: string, isPublic: boolean) => {
    const limit = isPublic ? 15 : 17;
    return title.length <= limit ? title : title.substring(0, limit) + '...';
  };

  return list.map((item: drawerBoard) => {
    const url = '/personal/'.concat(item.id);
    const isActive = pathname === url;
    return (
      <div
        key={item.id + type}
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
          {item.public && <PublicBadge />}
          <div className="pl-[8px]">
            {truncateTitle(item.title, item.public)}
          </div>
        </div>
      </div>
    );
  });
}
