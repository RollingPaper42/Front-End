import { openBoard } from '@/types/openBoard';

interface Props {
  id: string;
  bgColor: string;
  borderColor: string;
  timeTextColor: string;
  title: string;
  description: string;
  time: string;
}

export default function OpenStrcat({
  id,
  bgColor,
  borderColor,
  timeTextColor,
  title,
  description,
  time,
}: Props) {
  console.log(bgColor, borderColor, timeTextColor);
  return (
    <div className="flex-none ">
      <div
        className={`flex w-[150px] h-[192px] px-[16px] pt-[20px] pb-[14px] flex-col rounded-[6px]  justify-between border-[1px] ${borderColor} ${bgColor}`}
      >
        <div className="flex flex-col gap-[12px] font-medium">
          <div className="font-semibold text-[16px] text-white">{title}</div>
          <div className="font-medium text-[14px] mb-[12px] text-white opacity-70">
            {description}
          </div>
        </div>
        <div>
          <div className={`text-[12px] text-right ${timeTextColor}`}>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

const timeString = () => {};
