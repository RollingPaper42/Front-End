interface Props {
  photoUrl: string;
}

export default function Photo({ photoUrl }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <img
        src={photoUrl}
        alt="사진"
        width={innerWidth}
        height={innerHeight}
        className="h-auto max-h-[50%] w-auto max-w-[312px] "
      />
    </div>
  );
}
