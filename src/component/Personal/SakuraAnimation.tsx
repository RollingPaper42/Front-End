import { CSSProperties, useEffect, useMemo, useState } from 'react';

const SakuraFlakes = ({
  style,
  animation,
}: {
  style: CSSProperties;
  animation: string;
}) => {
  /* 꽃잎 만들기. */
  return (
    <span
      id="sakura"
      style={style}
      className={`${animation} absolute rounded-tl-[12px] rounded-br-[12px] rounded-bl-[1px] opacity-0 rounded-tr-[1px] bg-[#ffb6c1]`}
    ></span>
  );
};

const random = (num: number) => {
  return Math.floor(Math.random() * num);
};

const makeSakuraFlakes = () => {
  // 50개의 꽃잎을 만들어서 배열에 담아서 반환
  const arr = Array.from({ length: 100 });

  return arr.map((_, i) => {
    const animationDelay = `${random(16000)}ms`;
    // 0초-40초 랜덤 딜레이
    const size = `${random(10) + 5}px`;
    // 5-15px 랜덤 사이즈
    const startPosition = `${random(100)}%`;
    // 0-100% 랜덤 시작 위치
    const style = {
      animationDelay: animationDelay,
      left: startPosition,
      width: size,
      height: size,
    };
    const animation = i < 50 ? 'animate-sakura1' : 'animate-sakura2';
    return <SakuraFlakes key={i} style={style} animation={animation} />;
  });
};

export default function SakuraAnimation({ themeName }: { themeName: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);
  const sakuraFlakes = useMemo(() => makeSakuraFlakes(), []);

  if (themeName !== 'spring') return;
  return (
    loaded && (
      <div
        id="sakura-container"
        className="fixed flex h-full w-full max-w-md select-none justify-between"
      >
        <div id="sakura" className="absolute w-full h-full max-w-md">
          {sakuraFlakes}
        </div>
      </div>
    )
  );
}
