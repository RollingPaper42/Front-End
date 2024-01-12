import BottomButton from '@/component/Common/BottomButton';
import Textarea from '@/component/Common/Textarea';
import MiddleButton from '@/component/Create/MiddleButton';
import SelectButton from '@/component/Create/SelectButton';
import { titleFontState } from '@/recoil/font/title';
import { defaultState } from '@/utils/theme/default';

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  isOff: string;
  handleSwitch: (value: string) => void;
  onClickComplete: () => void;
}

export default function TitleSelect({
  title,
  setTitle,
  isOff,
  handleSwitch,
  onClickComplete,
}: Props) {
  return (
    <div className="flex h-screen w-full flex-col ">
      <div className="basis-[56px]"></div>
      <div className="basis-[16px]"></div>
      <div className="basis-[107px]">
        <div className=" mx-[24p] w-full px-[24px]">
          <div
            className={`text-left pb-[12px] ${titleFontState.inputLabel} text-white`}
          >
            제목
          </div>
          <Textarea
            maxHeight="max-h-[49px]"
            width="w-full"
            placeholder="스트링캣 주제를 입력해주세요."
            textColor={`${defaultState.activateText}`}
            text={title}
            setText={setTitle}
            maxLength={25}
          />
        </div>
      </div>
      <div className="basis-[20px]"></div>
      <div className="w-full basis-[8px] ">
        <div className="mx-6 flex  space-x-[12px] overflow-x-scroll">
          <MiddleButton
            width="w-[128px]"
            onClickHandler={() => handleSwitch('1')}
            content="# 한사람을 위한"
            color={`${
              isOff == '1'
                ? `${defaultState.MiddleButton} ${defaultState.middleButtonText}`
                : `${defaultState.middleDisable} ${defaultState.middleDisableText}`
            }`}
          />
          <MiddleButton
            width="w-[137px]"
            onClickHandler={() => handleSwitch('2')}
            content="# 함께 마무리하는"
            color={`${
              isOff == '2'
                ? `${defaultState.MiddleButton} ${defaultState.middleButtonText}`
                : `${defaultState.middleDisable} ${defaultState.middleDisableText}`
            }`}
          />
          <MiddleButton
            width="w-[166px]"
            onClickHandler={() => handleSwitch('3')}
            content="# 서로의 생각을 나누는"
            color={`${
              isOff == '3'
                ? `${defaultState.MiddleButton} ${defaultState.middleButtonText}`
                : `${defaultState.middleDisable} ${defaultState.middleDisableText}`
            }`}
          />
        </div>
      </div>
      <div className="basis-[16px]"></div>
      <div className="basis-6/12 items-center">
        <div
          className={`mx-[24px] flex flex-col ${
            isOff == '1' ? 'content' : 'hidden'
          }`}
        >
          <SelectButton
            width="w-[94px]"
            setContent={setTitle}
            content="To.뽀승이"
          />
          <SelectButton
            width="w-[211px]"
            setContent={setTitle}
            content="사랑하는 보미야 생일 축하해 ♥"
          />
          <SelectButton
            width="w-[284px]"
            setContent={setTitle}
            content="고운아 그동안 고생 많았어 앞으로도 화이팅!"
          />
        </div>
        <div
          className={`mx-[24px] flex flex-col ${
            isOff == '2' ? 'content' : 'hidden'
          }`}
        >
          <SelectButton
            width="w-[208px]"
            setContent={setTitle}
            content="끈끈한 3반! 1년 동안 고마웠어!"
          />
          <SelectButton
            width="w-[234px]"
            setContent={setTitle}
            content="고생한 우리 팀, 이제는 말할 수 있다"
          />
          <SelectButton
            width="w-[279px]"
            setContent={setTitle}
            content="우리 과에서 올 한해 가장 기억에 남는 일은?"
          />
        </div>
        <div
          className={`mx-[24px] flex flex-col ${
            isOff == '3' ? 'content' : 'hidden'
          }`}
        >
          <SelectButton
            width="w-[253px]"
            setContent={setTitle}
            content="우리 회사에 대해 하고 싶은 말 남겨줘"
          />
          <SelectButton
            width="w-[218px]"
            setContent={setTitle}
            content="이번에 바뀐 규칙 어떻게 생각해?"
          />
          <SelectButton
            width="w-[198px]"
            setContent={setTitle}
            content="각자 최애 자랑, 이야기해보자"
          />
        </div>
      </div>
      <div className="fixed bottom-[12px] flex w-full max-w-md items-center justify-center px-[24px]">
        <BottomButton
          name="완료"
          width="w-full"
          textColor={`${defaultState.highLightText}`}
          color={`${defaultState.bottomButton}`}
          onClickHandler={onClickComplete}
          disabled={title === ' ' || title.length >= 26 || title.length <= 0}
        />
      </div>
    </div>
  );
}
