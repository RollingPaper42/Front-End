'use client';

import Image from 'next/image'
export default function login(){
    return (
        <div className="m-6">
            <div className="text-4xl mt-3">strcat(*,*)</div>
            <div className="text-4xl mt-2">//  스트링캣 로그인</div>
            <div className="h-96 mt-20"></div>
            <button className="bg-yellow-300 rounded-lg h-12 w-full">
               <Image 
               src="/kakao.png"
               width={40}
               height={40}
               alt="kakao" />
                <div>카카오로 시작하기</div>
                </button>
        </div>
    )
}