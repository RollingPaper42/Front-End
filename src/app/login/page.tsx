'use client';

import Image from 'next/image'
export default function login(){
    return (
        <div className="m-6">
            <div className="text-4xl mt-3 font-FiraCode font-semibold">strcat(*,*)</div>
            <div className="text-3xl mt-2 w-80 flex flex-row">
                <div className="basis-2/12 font-FiraCode font-semibold">
                    //
                </div>
                <div className="basis-5/12 font-FiraCode font-semibold">
                    스트링캣
                </div>
                <div className="basis-3.5/12 font-FiraCode font-semibold bg-red-300">
                     로그인
                </div>
            </div>
            <div className="h-96 my-20"></div>
            <button className="bg-yellow-300 rounded-lg h-12 w-full flex flex-row">
                <Image 
                src="/kakao.png"
                width={20}
                height={20}
                alt="kakao"
                className="basis-1/12 w-full h-full ml-16" />
                <div className="basis-6/12 h-full w-full mt-3 text-left">카카오로 시작하기</div>
            </button>
            <button className="bg-neutral-200 mt-3 rounded-lg h-12 w-full flex flex-row">
                <Image 
                src="/Google.png"
                width={20}
                height={20}
                alt="kakao"
                className="basis-1/12 w-full h-full ml-16" />
                <div className="basis-6/12 h-full mt-3 text-left">구글로 시작하기</div>
            </button>
        </div>
    )
}