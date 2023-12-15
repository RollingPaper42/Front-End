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
  const pathName = usePathname();
  const defaultHeaderCheck = pathName === '/';
  const backButtonHeaderCheck = pathName.indexOf('/create') === 0;
  const titleHeaderCheck =
    pathName.endsWith('/add') || pathName.indexOf('/personal') === 0;

  return (
    <>
      {defaultHeaderCheck && <DefaultHeader />}
      {backButtonHeaderCheck &&
        isNext !== undefined &&
        setIsNext !== undefined && (
          <BackButtonHeader isNext={isNext} setIsNext={setIsNext} />
        )}
      {titleHeaderCheck && <TitleHeader />}
      <Drawer />
    </>
  );
}
