'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="m-6">
        <div className="text-4xl mt-3">strcat(*,*)</div>
        <div className="text-4xl mt-2">//  스트링캣</div>
        <div className="text-xl mt-6">스트링캣은 문자열을 끝없이 늘려 스크롤을 만들 수 있는 신개념 롤링페이퍼 서비스 입니다.</div>
        <div className="text-xl">소중한 사람에게 스트링캣을 남겨보세요!</div>
        <div className="h-60"></div>
        <div className="text-2xl text-slate-400">
          <Link legacyBehavior href="/create">
            <a className="m-1 bg-indigo-400 text-slate-900	">스트링캣 만들기</a>
          </Link>
          를 누르면 하나의 문자열을 할당받을 수 있어요. 링크를 공유해 문자열을 끝없이 이어보세요. 
        </div>
        <div className="text-2xl text-slate-400">
          <Link legacyBehavior href="/create">
            <a className="m-1 bg-indigo-400 text-slate-900	">그룹 스트링캣 만들기</a>
          </Link>
          를 누르면 여러 문자열을 한 그룹으로 관리할 수 있어요. 주렁주렁~
        </div>
    </div>
  );
}
