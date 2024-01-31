import NoneContent from './NoneContent';
import Summary from './Summary';

interface Props {
  boardLength: number;
  windowHeight: number;
  id: string;
  handleClickNonContent: () => void;
}

export default function FirstContent({
  boardLength,
  windowHeight,
  id,
  handleClickNonContent,
}: Props) {
  return (
    <>
      {boardLength !== 0 && (
        <div className="absolute top-[100px]">
          <Summary id={id} />
        </div>
      )}
      <div style={{ paddingTop: `${windowHeight * 0.4}px` }} />
      {boardLength === 0 && (
        <NoneContent handleClickWrite={handleClickNonContent} />
      )}
    </>
  );
}
