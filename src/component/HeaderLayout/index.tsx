import BackButtonHeader from './BackButtonHeader';
import DefaultHeader from './DefaultHeader';
import Drawer from './Drawer';
import TitleHeader from './TitleHeader';
import { usePathname } from 'next/navigation';

export default function HeaderLayout() {
  const pathName = usePathname();
  //main, login페이지 관련 옵션 변경 필요
  //notfound로 이동시 여전히 헤더가 보이는 문제 발생 (/personal)같은 경우
  //각 헤더를 페이지별 레이아웃으로 변경필요
  const defaultHeaderCheck = pathName === '/' || pathName === '/login';
  const backButtonHeaderCheck = pathName.indexOf('/create') === 0;
  const titleHeaderCheck =
    pathName.endsWith('/add') || pathName.indexOf('/personal') === 0;

  return (
    <>
      {defaultHeaderCheck && <DefaultHeader />}
      {backButtonHeaderCheck && <BackButtonHeader />}
      {titleHeaderCheck && <TitleHeader />}
      <Drawer />
    </>
  );
}
