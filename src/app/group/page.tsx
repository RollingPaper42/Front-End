'use client';

import React, { useEffect, useRef, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';

const ScrollVisibilityComponent = () => {
  const sentences = [
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '첫 번째 문장입니다.이히리이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '두 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    '세 번째 문장입니다.이러한 에러는 Next.js에서 React Server Components와 관련된 것입니다. Next.js는 서버 측(Server Components)과 클라이언트 측(Client Components)을 구분하고 있습니다. useState는 클라이언트 측에서만 사용 가능하며, 서버 측에서 사용하려고 하면 이와 같은 에러가 발생합니다.',
    // 추가 문장들...
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);
  const sentenceRefs = useRef(
    sentences.map(() => React.createRef<HTMLAnchorElement>()),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleIndex(index);
            //console.log(index);
          }
        });
      },
      {
        root: null, // viewport 기준으로 가시성 여부 판단
        rootMargin: '-49.5%',
        threshold: 0.1, // 뷰포트의 50% 이상이 보이면 감지
      },
    );

    sentenceRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className=" h-[800px] w-[360px]">
      {sentences.map((sentence, index) => (
        <a
          key={index}
          ref={sentenceRefs.current[index]}
          className={`sentence ${
            visibleIndex === index
              ? ' text-6lg text-teal-100 '
              : 'text-teal-700'
          }`}
          href="#"
        >
          {sentence}
        </a>
      ))}
    </div>
  );
};

export default ScrollVisibilityComponent;
