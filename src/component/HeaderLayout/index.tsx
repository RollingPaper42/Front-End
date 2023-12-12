import BackButtonHeader from './BackButtonHeader';
import DefaultHeader from './DefaultHeader';
import Drawer from './Drawer';
import TitleHeader from './TitleHeader';
import { usePathname } from 'next/navigation';

export default function HeaderLayout() {
  const pathName = usePathname();
  //main, login페이지 관련 옵션 변경 필요
  const defaultHeaderCheck =
    pathName.indexOf('/personal') === 0 ||
    pathName === '/' ||
    pathName === '/login';
  const backButtonHeaderCheck = pathName.indexOf('/create') === 0;
  const titleHeaderCheck = pathName.endsWith('/add');

  return (
    <>
      {defaultHeaderCheck && <DefaultHeader />}
      {backButtonHeaderCheck && <BackButtonHeader />}
      {titleHeaderCheck && <TitleHeader />}
      <Drawer />
    </>
  );
}
