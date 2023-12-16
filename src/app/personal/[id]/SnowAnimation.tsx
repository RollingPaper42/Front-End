'use client';

import { CSSProperties, useEffect, useMemo, useState } from 'react';

const Snowflake = ({ style, snow }: { style: CSSProperties; snow: string }) => {
  return (
    <div className="animate-fall z-0 text-white opacity-0" style={style}>
      {snow}
    </div>
  );
};

const random = (num: number) => {
  return Math.floor(Math.random() * num);
};

const makeSnowFlakes = () => {
  const snowContent = ['\u2745', '\u2746'];

  // const randomCount = Math.floor(random(25)) + 45;
  // // 45-75 개의 랜덤 눈송이
  const arr = Array.from({ length: 60 });

  return arr.map((_, i) => {
    const animationDelay = `${random(16000).toFixed(2)}ms`;
    // 0초-40초 랜덤 딜레이
    const fontSize = `${Math.floor(random(10)) + 5}px`;
    // 5-15px 랜덤 폰트 사이즈
    const startPosition = `${random(100).toFixed(2)}%`;
    // 0-100% 랜덤 시작 위치
    const snow = snowContent[random(2)];
    const style = {
      animationDelay: animationDelay,
      fontSize: fontSize,
      left: startPosition,
    };

    return <Snowflake key={i} style={style} snow={snow} />;
  });
};

export default function SnowAnimation({ themeName }: { themeName: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);
  const snowflakes = useMemo(() => makeSnowFlakes(), []);

  if (themeName !== 'chris' && themeName !== 'mas') return;
  return (
    loaded && (
      <div className="fixed flex h-full w-full max-w-md select-none justify-between">
        {snowflakes}
      </div>
    )
  );
}
