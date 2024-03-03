import DrawerItem from './DrawerItem';

interface Props {
  items: {
    title: string;
    icon: React.ReactElement;
    onClick: () => void;
  }[];
}

export default function DrawerSection({ items }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <DrawerItem
          key={index}
          title={item.title}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
