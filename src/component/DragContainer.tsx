'use client';

import { animated, useSpring, useSprings } from 'react-spring';

import { useDrag } from '@use-gesture/react';

export default function DragContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pos = useSpring({ x: 0, y: 0 });

  const bindPos = useDrag((params) => {
    const mx = params.movement[0];
    const my = params.movement[1];
    // pos.x.set(params.offset[0]);

    console.log('hi', mx, my);
    pos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindPos()}
      style={{
        x: pos.x,
        y: pos.y,
      }}
    >
      <div className=" touch-none">{children}</div>
    </animated.div>
  );
}
