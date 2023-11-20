import { catState } from '@/recoil/cat';
import { catAction } from '@/types/cat';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

export default function CatAnimation() {
  const [cat] = useRecoilState(catState);

  return (
    <div
      className="fixed"
      style={{
        width: `${cat.width}px`,
        height: `${cat.height}px`,
        top: `${cat.top - cat.width}px`,
        left: `${cat.left}px`,
      }}
    >
      {cat.catAction === catAction.exit && (
        <Image alt="exit" src="/cats/strcat_basic_default.gif" fill />
      )}
      {cat.catAction === catAction.scroll && (
        <Image alt="exit" src="/cats/strcat_scroll_default.gif" fill />
      )}
    </div>
  );
}
