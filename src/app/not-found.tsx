import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" w-full h-full bg-strcat-black">
      <div className="flex w-full h-full flex-col items-center justify-center">
        <Image src="404cat.svg" width={33} height={38} alt="404cat" />
        <div className="pt-[28px] font-bold text-body-size2 text-white">
          페이지를 찾다 길을 잃었어요 😥
        </div>
        <div className="pt-[8px] font-medium text-body-size2 text-white opacity-50 text-center">
          입력하신 주소가 정확한지 <br /> 다시 확인해주세요.
        </div>
        <div
          className="flex flex-col mt-[32px] h-[46px] w-[150px] rounded-[5px] text-center justify-center"
          style={{ background: '#4D4D4D' }}
        >
          <div className="font-bold text-strcat-cyan-white">홈으로</div>
        </div>
      </div>
    </div>
  );
}
