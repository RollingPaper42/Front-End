import { drawerState } from '@/recoil/drawer';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { Check } from './Icon/Drawer';

interface Board {
  id: string;
  title: string;
}

interface Props {
  list: Board[];
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

  return list.map((item: Board) => {
    const url = '/'.concat(category, '/', item.id);
    const isActive = pathname === url;
    return (
      <div
        key={item.id}
        className={`flex h-[53px] w-full items-center justify-between`}
        onClick={() => {
          router.push(url);
          setDrawer(false);
        }}
      >
        <div
          className={`my-[15px] flex h-full w-full items-center justify-between px-[24px] hover:${
            theme.activeDropItem
          } hover:bg-opacity-10 ${
            isActive && `${theme.activeDropItem} bg-opacity-10`
          }`}
        >
          {truncateTitle(item.title)}
          {isActive && <Check color={theme.defaultIcon} />}
        </div>
      </div>
    );
  });
}
