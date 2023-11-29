import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex h-full max-w-md flex-col items-center justify-center bg-strcat-default-black px-[24px] pb-[110px]">
      <div className="flex items-center justify-center text-[64px] leading-[140%] text-strcat-default-white">
        404
      </div>
      <div className="mt-[32px] flex flex-col justify-center text-[16px] leading-[160%] tracking-[-2%] ">
        <div className="flex items-center text-strcat-default-yellow">
          {`//원하시는 페이지를 찾을 수 없습니다.`}
        </div>
        <div className="mx-[12px] flex items-center justify-center text-strcat-default-white text-opacity-40">
          찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로
          인해 사용하실 수 없습니다. 입력하신 페이지의 주소가 정확한지 다시 한번
          확인해 주세요.
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="relative mr-[12px] mt-[40px] flex h-[39px] w-[218px] justify-end">
          <Image src="/NotFoundCat.svg" fill alt="notFoundCat" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Image
          src="/NotFoundButton.svg"
          width={148}
          height={42}
          alt="notFoundButton"
          onClick={() => router.push('/')}
        />
        <div className="absolute text-strcat-default-white">
          스트링캣 홈으로
        </div>
      </div>
    </div>
  );
}
