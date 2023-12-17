interface Props {
  handleClickWrite: () => void;
}

export default function NoneContent({ handleClickWrite }: Props) {
  return (
    <div
      className="select-none px-[24px] text-body-size1"
      style={{ color: '#FFFFFF80' }}
    >
      <div
        className="w-fit"
        onClick={handleClickWrite}
      >{`첫 문장을 기다리고 있어요 :)`}</div>
    </div>
  );
}
