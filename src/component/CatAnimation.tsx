import { catState } from '@/recoil/cat';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

export default function CatAnimation() {
  const [cat] = useRecoilState(catState);

  return (
    <div
      className="fixed z-[55]"
      style={{
        width: `${cat.width}px`,
        height: `${cat.height}px`,
        top: `${cat.top}px`,
        left: `${cat.left}px`,
      }}
    >
      <Image alt={`${cat.catAction}`} src={`${cat.src}`} fill />
    </div>
  );
}
