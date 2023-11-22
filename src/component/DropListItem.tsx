import { drawerState } from '@/recoil/drawer';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

interface Board {
  id: string;
  title: string;
}

export default function DropListItem({
  list,
  category,
}: {
  list: Board[];
  category: string;
}) {
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

  return list.map((item: Board) => {
    const url = '/'.concat(category, '/', item.id);
    const isActive = pathname === url;
    return (
      <div
        key={item.id}
        className={`flex h-[53px] w-full items-center justify-between px-[24px] hover:bg-[#373723] ${
          isActive && 'bg-[#373723]'
        }`}
        onClick={() => {
          router.push(url);
          setDrawer(false);
        }}
      >
        {truncateTitle(item.title)}
        {isActive && (
          <Image src="/CheckSmall.svg" width={24} height={24} alt="check" />
        )}
      </div>
    );
  });
}
