import { headlineFont } from '@/recoil/font';

interface Props {
  contentCount: number;
  contentTextCount: number;
  boardCount?: number;
  summaryTextColor: string;
}

export default function SummaryBoard({
  contentCount,
  contentTextCount,
  boardCount,
  summaryTextColor,
}: Props) {
  function formatNumberWithCommas(inputText: number) {
    return inputText.toLocaleString();
  }

  return (
    <div className={`${summaryTextColor} w-full ${headlineFont.category1} `}>
      총 {contentCount}번의
      <br /> 마음으로
      <br /> {boardCount ? `${boardCount}개의` : '내'} 스트링캣이
      <br /> 총 {formatNumberWithCommas(contentTextCount)}자
      <br /> 이어졌어요!
    </div>
  );
}
