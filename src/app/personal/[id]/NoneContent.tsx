interface Props {
  handleClickNoneContent: () => void;
}

export default function NoneContent({ handleClickNoneContent }: Props) {
  return (
    <div
      className="text-body-size1 px-[24px]"
      style={{ color: '#FFFFFF80' }}
      onClick={handleClickNoneContent}
    >
      {`첫 문장을 기다리고 있어요 :)`}
    </div>
  );
}
