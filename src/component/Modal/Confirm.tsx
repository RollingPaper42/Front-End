interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-green-700">
      <div className="flex h-[70%] items-center justify-center p-10 text-center text-2xl">
        {content}
      </div>
      <div className="flex h-[30%] justify-around">
        <button className="h-[80%] w-[40%] bg-amber-200 text-3xl" onClick={yes}>
          예
        </button>
        <button className="h-[80%] w-[40%] bg-amber-200 text-3xl" onClick={no}>
          아니요
        </button>
      </div>
    </div>
  );
}
