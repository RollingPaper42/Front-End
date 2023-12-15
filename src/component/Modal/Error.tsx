interface Props {
  content: string;
  handleModalClose: () => void;
}

export default function Error({ content, handleModalClose }: Props) {
  const array = content.replace(/\\n/g, '\n').split('\n');
  return (
    <>
      <div className="relative h-[312px] w-[312px]">{content}</div>
    </>
  );
}
