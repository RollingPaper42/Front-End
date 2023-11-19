import { catAction } from '@/types/cat';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  top: number;
  left: number;
}

export default function CatAnimation({ top, left }: Props) {
  const [cat, setCat] = useState<string>(catAction.exit);

  return (
    <div
      className="fixed h-[50px] w-[50px]"
      style={{ top: `${top - 50}`, left: `${left}` }}
    >
      {
        // exit에 해당하는 코드 넣기
        cat === catAction.exit && (
          <Image alt="exit" src="/cats/strcat_basic_default.gif" fill />
        )
      }
    </div>
  );
}
