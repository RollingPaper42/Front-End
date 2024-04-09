import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  const color = [
    'strcat-night',
    'strcat-peach',
    'strcat-lilac',
    'strcat-chris',
    'strcat-mas',
    'strcat-sul',
    'strcat-string',
  ];
  const colorList = Array.from(
    { length: 10 },
    (_, index) => color[index % color.length],
  );
  return (
    <div className="w-full flex flex-row  overflow-x-scroll pt-[14px] gap-[12px]">
      {openBoard.map((item, i) => {
        return (
          <OpenStrcat
            key={`${item.id} + ${item.id}`}
            id={item.id}
            bgColor={`bg-${colorList[i]}/50`}
            borderColor={`border-${colorList[i]}`}
            timeTextColor={`text-${colorList[i]}`}
            title={item.title}
            description={item.description}
            time={item.time}
          />
        );
      })}
    </div>
  );
}
