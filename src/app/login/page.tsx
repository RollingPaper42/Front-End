'use client';

import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image'

export default function login(){
    return (
        <div className="m-6 relative">
            <div className="font-FiraCode font-semibold">
                <StrcatHeader/>
                <div className="text-3xl mt-2 w-80 flex flex-row">
                    <div className="basis-2/12">
                        {`//`}
                    </div>
                    <div className="basis-5/12">
                        스트링캣
                    </div>
                    <div className="basis-3.5/12 bg-red-300">
                        로그인
                    </div>
                </div>
            </div>
            <div className="h-96 my-20 flex flex-row justify-center items-center relative -z-10">
                {/* <Image
                    src="/strcatImage.png"
                    width={170}
                    height={100}
                    alt="strcatImage"
                    className='absolute opacity-10'
                    /> */}
            </div>
            <button className= "bg-yellow-300 mt-3 rounded-lg w-full h-12 flex flex-row justify-center ">
                <div className=" basis-3/12"></div>
                <div className="basis-52 justify-center items-center flex flex-row">
                    <Image 
                    src="/kakao.png"
                    width={48}
                    height={48}
                    alt="kakao"
                    className="h-12"/>
                    <div className= "basis-32 text-left h-full">카카오로 시작하기</div>
                </div>
                <div className="basis-3/12"></div>
            </button>
            <button className="bg-neutral-200 mt-3 rounded-lg w-full h-12 flex flex-row justify-center ">
                <div className=" basis-3/12"></div>
                <div className="basis-52 justify-center items-center flex flex-row">
                    <Image 
                    src="/google.png"
                    width={48}
                    height={48}
                    alt="kakao"
                    className="h-12"/>
                    <div className= "basis-32 text-left h-full">구글로 시작하기</div>
                </div>
                <div className="basis-3/12"></div>

            </button>
        </div>
    )
}
