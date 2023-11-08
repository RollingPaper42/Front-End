interface Props {
  content: string;
}

export default function Error({ content }: Props) {
  return <div className="h-[80%] w-[80%] bg-amber-400">{content}</div>;
}
