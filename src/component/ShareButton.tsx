import { handleShare } from '@/utils/handleShare';

interface Props {
  params: string;
}

export default function ShareButton({ params }: Props) {
  return (
    <div
      className="  h-32 w-32 bg-slate-200"
      onClick={() => handleShare(`/personal/${params}`)}
    >
      공유하기
    </div>
  );
}
