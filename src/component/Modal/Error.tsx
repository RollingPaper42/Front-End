interface Props {
  content: string;
}

export default function Error({ content }: Props) {
  return (
    <div className=" flex h-[100%] w-[100%] flex-col bg-green-700">
      <div className=" flex h-[70%] items-center justify-center text-4xl">
        {content}
      </div>
      <div className=" flex h-[30%] justify-center">
        <button className="h-[80%] w-[90%] bg-amber-200 text-3xl">
          돌아가기
        </button>
      </div>
    </div>
  );
}
