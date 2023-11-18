import useModal from '@/hooks/useModal';

interface Props {
  content: string;
  handleModalClose: () => void;
}

export default function Error({ content, handleModalClose }: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-green-700">
      <div className="flex h-[70%] items-center justify-center p-10 text-center text-2xl">
        {content}
      </div>
      <div className="flex h-[30%] justify-center">
        <button
          className="h-[80%] basis-4/5 bg-amber-200 text-3xl"
          onClick={handleModalClose}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
