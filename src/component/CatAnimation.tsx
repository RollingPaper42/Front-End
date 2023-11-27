import { catState } from '@/recoil/cat';
import { catAction } from '@/types/cat';
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
      {cat.catAction === catAction.exit && (
        <Image alt="exit" src="/cats/app_bar_left.gif" fill />
      )}
      {cat.catAction === catAction.sit && (
        <Image alt="exit" src="/cats/basic_default.gif" fill />
      )}
    </div>
  );
}
