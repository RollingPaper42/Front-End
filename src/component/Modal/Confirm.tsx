interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className=" h-[90%] w-[90%] bg-orange-900">
      {content}
      <button onClick={yes}> 예 </button>
      <button onClick={no}> 아니요 </button>
    </div>
  );
}
