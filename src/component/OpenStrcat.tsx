import { openBoard } from '@/types/openBoard';

interface Props {
  id: string;
  title: string;
  description: string;
  time: string;
}

export default function OpenStrcat({ id, title, description, time }: Props) {
  return (
    <div className="flex-none">
      <div className="w-[150px] h-[192px] px-[16px] pt-[20px] font-medium pb-[14px] flex-col rounded-[6px justify-between border-[1px] border-[#FDFFB0]  rounded-[6px] text-white bg-[rgba(253,255,176,0.50)] ">
        <div className="flex flex-col gap-[12px]">
          <div className="font-semibold text-[16px] text-white">{title}</div>
          <div className="font-medium text-[14px] mb-[12px] text-white opacity-70">
            {description}
          </div>
        </div>
        <div>
          <div className="font-medium text-[12px] text-right">{time}</div>
        </div>
      </div>
    </div>
  );
}
