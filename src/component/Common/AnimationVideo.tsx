import { useEffect, useState } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

export const AnimationVideo = ({ src, width, height }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <video
      width={width}
      height={height}
      autoPlay // 자동 재생
      muted // 음소거 chrome 에선 이 옵션이 없으면 실행 안됨
      loop // 반복 재생
    >
      <source src={src} type="video/webm" />
    </video>
  ) : null;
};
