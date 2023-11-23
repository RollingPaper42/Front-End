import Image from 'next/image';

interface Props {
  title: string;
  icon: string;
  alt: string;
}

export default function DrawerItem({ title, icon, alt }: Props) {
  return (
    <div className="flex items-center">
      <Image
        src={`${icon}`}
        width={24}
        height={24}
        alt={`${alt}`}
        className="mr-[12px]"
      />
      {title}
    </div>
  );
}
