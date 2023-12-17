import BackButtonHeader from './BackButtonHeader';
import DefaultHeader from './DefaultHeader';
import Drawer from './Drawer';
import TitleHeader from './TitleHeader';
import { usePathname } from 'next/navigation';

interface Props {
  isNext?: boolean;
  setIsNext?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderLayout({ isNext, setIsNext }: Props) {
  const pathname = usePathname();
  const defaultHeaderCheck = pathname === '/';
  const backButtonHeaderCheck = pathname.indexOf('/create') === 0;
  const titleHeaderCheck =
    pathname.endsWith('/add') || pathname.indexOf('/personal') === 0;
  const isAdd = pathname.endsWith('/add');
  return (
    <>
      {defaultHeaderCheck && <DefaultHeader />}
      {backButtonHeaderCheck &&
        isNext !== undefined &&
        setIsNext !== undefined && (
          <BackButtonHeader isNext={isNext} setIsNext={setIsNext} />
        )}
      {titleHeaderCheck && <TitleHeader />}
      {!backButtonHeaderCheck && !isAdd && <Drawer />}
    </>
  );
}
