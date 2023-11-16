'use client';

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

export default function Create (){
    const bgcolor = "black"
    const [color, SetColor] = useState(bgcolor);
    return (
        <div className={`bg-${color}`}>
                <div className="flex flex-row w-full h-14 justify-center content-center items-center">
                    <div className="basis-1/4">
                        <Link href="/">
                            <Image
                                src="/backpage.png"
                                width={24}
                                height={24}
                                alt="backpagebutton"
                                >
                            </Image>
                        </Link>
                    </div>
                    <div className="basis-2/4 text-white">스트링캣 만들기</div>
                    <div className="basis-1/4"></div>
                </div>
                <div className="flex flex-row w-full">   
                    <button className="bg-black mt-20 basis-1/4" onClick={() => SetColor('black')}> 1</button>
                    <button className="bg-white mt-20 basis-1/4" onClick={() => SetColor('white')}>2 </button>
                    <button className="bg-green mt-20 basis-1/4" onClick={() => SetColor('green')}> 3</button>
                 <button className="bg-pink mt-20 basis-1/4" onClick={() => SetColor('pink')}>4 </button>
                </div>
            </div>
    )
}
