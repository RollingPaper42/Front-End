import { clamp } from 'lodash';
import { useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import useMeasure from 'react-use-measure';

import { content } from '@/types/content';
import { useDrag } from '@use-gesture/react';

interface Props {
  content: content[] | undefined;
}

export default function SwipeCard({ content }: Props) {
  if (!content) return;

  const index = useRef(0);
  const [ref, { height }] = useMeasure();
  const [props, api] = useSprings(
    content.length,
    (i) => ({
      y: i * 120,
      scale: i == 0 ? 1 : 0.8,
      display: 'block',
    }),
    [height],
  );

  const bind = useDrag(
    ({
      active,
      movement: [, my],
      direction: [, yDir],
      distance: [, yYDir],
      cancel,
    }) => {
      if (active && yYDir > height / 5) {
        index.current = clamp(
          index.current + (yDir > 0 ? -1 : 1),
          0,
          content.length - 1,
        );
        cancel();
      }
      api.start((i) => {
        if (i !== index.current)
          return { display: 'block', y: (i - index.current) * 120 };
        const y = (i - index.current) * 100 + (active ? my : 0);
        const scale = active ? 1 - yYDir / height : 1;
        return { y, scale, display: 'block' };
      });
    },
  );
  return (
    <div ref={ref} className="h-[100%] w-[100%] bg-fuchsia-200 ">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          {...bind()}
          key={i}
          style={{ display, y }}
          className=" fixed top-[30%] w-full h-full will-change-transform touch-none"
        >
          <animated.div
            style={{ scale }}
            className=" p-10 max-w-md bg-slate-400 stroke-slate-800"
          >
            {content[i].text}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}
