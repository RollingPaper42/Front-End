'use client';

import { themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import { axiosInstance } from '@/utils/axios';
import { useEffect, useState } from 'react';
import BottomButton from '@/component/BottomButton';
import { useRouter } from 'next/navigation';
import Back from '@/component/Icon/Back';
import LongCat from '@/component/Icon/LongCat';
import { handleShare } from '@/utils/handleShare';
import { bodyFont, headlineFont, titleFont } from '@/recoil/font';

export default function Summary({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [Theme] = useRecoilState(themeState);
  const [Title, setTitle] = useState(
    '테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다',
  );
  const [ContentCount, setContentCount] = useState(13);
  const [ContentTextCount, setContentTextCount] = useState(1305);
  const [boardCount, setboardCount] = useState(13);

  useEffect(() => {
    axiosInstance
      .get(`/board-groups/${params.id}/summaries`)
      .then((data) => {
        setTitle(data.data.title);
        setContentCount(data.data.contentCount);
        setContentTextCount(data.data.contentTextCount);
        setboardCount(data.data.boardCount);
      })
      .catch((err) => {
        if (err.response.status === 406) {
          alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
        }
      });
  }, []);

  function formatNumberWithCommas(inputText: number) {
    return inputText.toLocaleString();
  }

  return (
    <div className={`${Theme.background}`}>
      <div className=" fixed flex h-full w-full max-w-md flex-col">
        <div className=" basis-3/12">
          <div className="flex h-full w-full flex-col">
            <div className=" basis-2/5">
              <div className=" flex h-full w-full flex-row">
                <div
                  className=" basis-1/6 items-center justify-center pl-[24px] pt-[16px]"
                  onClick={() => router.push(`/group/${params.id}`)}
                >
                  <Back color={Theme.backIcon} />
                </div>
                <div className=" basis-4/6">
                  <div
                    className={`text-center ${bodyFont.category1} ${Theme.defaultText} mt-[16px]`}
                  >
                    그룹 스트링캣 공유하기
                  </div>
                </div>
                <div className=" basis-1/6"></div>
              </div>
            </div>
            <div className="mx-[25px]  mt-[7px] basis-3/5">
              <div className={`${headlineFont.category2} ${Theme.defaultText}`}>
                {Title}
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-7/12 ">
          <div className=" flex h-full w-full flex-col ">
            <div className=" basis-1/4"></div>
            <div className=" basis-1/4">
              <div className="flex h-full w-full flex-row">
                <div className="basis-2/3">
                  <div
                    className={`${Theme.defaultText} mx-[24px] ${headlineFont.category1} `}
                  >
                    총 {ContentCount}번의 <br /> 마음으로 <br /> {boardCount}
                    개의 스트링캣이
                    <br /> 총 {formatNumberWithCommas(ContentTextCount)}자{' '}
                    <br />
                    이어졌어요!
                  </div>
                </div>
                <div className="basis-1/3"></div>
              </div>
            </div>
            <div className=" basis-1/4 "></div>
            <div className=" basis-1/4"></div>
          </div>
        </div>
        <div className=" mx-[25px] basis-2/12">
          <div className="flex h-full w-full flex-row items-center justify-center">
            <BottomButton
              height="h-[42px]"
              name="공유하기"
              width="w-[312px]"
              onClickHandler={() => handleShare(`/group/${params.id}`)}
              disabled={false}
              color={`${Theme.rightCTA}`}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 pr-[24px] pt-[186px]">
          <LongCat
            bodyColor={Theme.catTheme.mainCat}
            eyeColor={Theme.catTheme.mainCatEye}
          />
        </div>
      </div>
    </div>
  );
}
