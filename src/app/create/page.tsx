'use client';

import { useState } from "react";
export default function Create (){
    const bgcolor = "#ffffff"
    const [color, SetColor] = useState(bgcolor);
    return (
        <div className={` ${color} + "m-6 h-full"`}>
            <div className="mt-5">롤링페이퍼 배경을 선택해주세요.</div>
            <div className="h-96 my-20"></div>
            <div className="h-20"></div>
            <div className="flex flex-row w-full">   
             <button className="bg-lime-400 mt-20 basis-1/4" onClick={() => SetColor('bg-lime-400')}>1</button>
                <button className="bg-orange-500 mt-20 basis-1/4" onClick={() => SetColor('bg-orange-500')}>2</button>
                <button className="bg-amber-300 mt-20 basis-1/4" onClick={() => SetColor('bg-amber-300')}>3</button>
                <button className="bg-cyan-300 mt-20 basis-1/4" onClick={() => SetColor('bg-cyan-300')}>4</button>
            </div>
            <div></div>
        </div>

    )
}
