import { useRecoilState } from 'recoil';

import { Check } from '../Icon/Drawer';
import { drawerState } from '@/recoil/drawer';
import { themeState } from '@/recoil/theme/theme';
import { drawerBoard } from '@/types/drawerBoard';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  list: drawerBoard[];
  category: string;
}

export default function DropListItem({ list, category }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);

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
        className="flex h-[54px] w-full select-none items-center justify-between"
        onClick={() => {
          router.push(url);
          document.body.style.overflow = 'auto';
          setDrawer(false);
        }}
      >
        <div
          className={`my-[15px] flex h-full w-full items-center justify-between px-[24px] ${
            isActive && `${theme.bgTheme.activeDropItem} bg-opacity-10`
          }`}
        >
          {truncateTitle(item.title)}
          {isActive && <Check color={theme.iconTheme.default} />}
        </div>
      </div>
    );
  });
}
