import { bodyFontState } from '@/recoil/font/body';

export default function NoneContent() {
  return (
    <div
      className={`select-none px-[24px] ${bodyFontState.boardBody}`}
      style={{ color: '#FFFFFF80' }}
    >
      {`첫 문장을 기다리고 있어요 :)`}
    </div>
  );
}
