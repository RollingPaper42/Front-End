import Image from 'next/image';

interface Board {
  id: string;
  title: string;
}

export default function DropListItem({ list }: { list: Board[] }) {
  const truncateTitle = (title: string) => {
    if (title.length <= 17) {
      return title;
    } else {
      return title.substring(0, 17) + '...';
    }
  };

  return list.map((item: Board) => {
    return (
      <div
        key={item.id}
        className="flex h-[53px] w-full items-center justify-between"
      >
        {truncateTitle(item.title)}
        <Image src="/CheckSmall.svg" width={24} height={24} alt="check" />
      </div>
    );
  });
}
