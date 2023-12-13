'use client';

import { CSSProperties, useEffect, useMemo, useState } from 'react';

const Snowflake = ({ style, snow }: { style: CSSProperties; snow: string }) => {
  return (
    <div className="z-0 text-white animate-fall opacity-0" style={style}>
      {snow}
    </div>
  );
};

const random = (num: number) => {
  return Math.floor(Math.random() * num);
};

const makeSnowFlakes = () => {
  const snowContent = ['\u2745', '\u2746'];

  const randomCount = Math.floor(random(20)) + 15;
  // // 15-35 개의 랜덤 눈송이
  const arr = Array.from({ length: randomCount });

  return arr.map((_, i) => {
    const animationDelay = `${random(16).toFixed(2)}s`;
    // 0초-40초 랜덤 딜레이
    const fontSize = `${Math.floor(random(30)) + 5}px`;
    // 5-35px 랜덤 폰트 사이즈
    const startPosition = `${random(110).toFixed(2)}%`;
    // 0-110% 랜덤 시작 위치
    const snow = snowContent[random(2)];
    const style = {
      animationDelay: animationDelay,
      fontSize: fontSize,
      left: startPosition,
    };

    return <Snowflake key={i} style={style} snow={snow} />;
  });
};

export default function SnowAnimation() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);
  const snowflakes = useMemo(() => makeSnowFlakes(), []);

  return (
    loaded && (
      <div className="fixed flex w-full max-w-md h-full justify-between select-none">
        {snowflakes}
      </div>
    )
  );
}
