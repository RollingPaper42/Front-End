import { handleShare } from '@/utils/handleShare';
import Share from './Icon/Share';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import useModal from '@/hooks/useModal';
import { bodyFont } from '@/recoil/font';

interface Props {
  params: string;
}

export default function ShareButton({ params }: Props) {
  const [theme, setTheme] = useRecoilState(themeState);
  const [openModal, closeModal] = useModal();
  return (
    <div>
      <div className={`${bodyFont.category1} relative top-[-30px] mx-[24px]`}>
        <span className={`${theme.highlightText}`}>
          공유하기 버튼을 눌러 생성한 스트링 캣을 동료에게 공유해보세요!
        </span>
        <span className={`${theme.defaultText}`}>
          동료들이 이어준 문자열을 확인할 수 있어요!
        </span>
      </div>
      <div className="flex h-[300px] w-full  justify-center">
        <button
          className="top-[30px] items-center justify-center"
          onClick={() => handleShare(`${params}`, openModal, closeModal)}
        >
          <Share />
        </button>
      </div>
    </div>
  );
}
