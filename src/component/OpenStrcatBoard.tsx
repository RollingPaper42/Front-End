import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  return (
    <div className="w-full flex flex-row  overflow-x-scroll pt-[14px] gap-[12px]">
      {openBoard.map((item) => {
        return (
          <OpenStrcat
            key={`${item.id} + ${item.id}`}
            id={item.id}
            title={item.title}
            description={item.description}
            time={item.time}
          />
        );
      })}
    </div>
  );
}
