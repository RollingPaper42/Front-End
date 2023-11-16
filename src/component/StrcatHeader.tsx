'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function StrcatHeader(){
    return (
        <div className="flex flex-row">
                <Link href="/">
                    <Image
                        src="/StrcatHeader.png"
                        width={128}
                        height={25}
                        alt="StrcatHeader"
                    />
                </Link>
             <div className="basis-4/6"></div>
                <Link href="/login">
                    <Image
                        src="/LoginButton.png"
                        width={74}
                        height={34}
                        alt="StrcatHeader"
                    />
                </Link>
        </div>
    )
}