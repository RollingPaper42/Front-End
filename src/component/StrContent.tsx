interface Props {
  content: string;
}

export default function StrContent({ content }: Props) {
  return <a className=" text-4xl font-bold">"{content}"</a>;
}
