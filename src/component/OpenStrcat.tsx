interface Props {
  id: string;
  bgAndBorderColor: string;
  timeTextColor: string;
  theme: string;
  contentCount: string;
  contentTextCount: string;
  title: string;
  lastContentCreatedAt: string;
}

export default function OpenStrcat({
  id,
  bgAndBorderColor,
  timeTextColor,
  title,
  contentCount,
  contentTextCount,
  lastContentCreatedAt,
}: Props) {
  const truncatedTitle = truncateText(title, 19);
  const contentText = `${contentCount}개의 마음이, ${contentTextCount}자 이어졌어요!`;
  const truncatedContentText = truncateText(contentText, 37);

  return (
    <div className="flex-none">
      <div
        className={`flex w-[150px] h-[192px] px-[16px] pt-[20px] pb-[14px] flex-col rounded-[6px]  justify-between border-[1px] ${bgAndBorderColor}`}
      >
        <div className="flex flex-col gap-[12px]">
          <div className="h-[40px] font-medium leading-5 text-[16px] tracking-[-0.32px] text-white">
            {truncatedTitle}
          </div>
          <div className="h-[80px] font-medium text-[14px] mb-[12px] text-white opacity-70">
            {truncatedContentText}
          </div>
        </div>
        <div>
          <div className={`text-[12px] text-right ${timeTextColor}`}>
            {timeString(lastContentCreatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 1) + '...';
  }
  return text;
}

const timeString = (date: string) => {
  const now = new Date();
  const lastContentCreatedAt = new Date(date);
  const diff = now.getTime() - lastContentCreatedAt.getTime();
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffSeconds < 11 * 60) {
    return '방금';
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks}주 전`;
  } else if (diffMonths < 12) {
    return `${diffMonths}개월 전`;
  } else {
    return `${diffYears}년 전`;
  }
};
