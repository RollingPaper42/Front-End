import { content } from '@/types/content';
import Default from './Default';
import Writer from './Writer';
import LineBreak from './LineBreak';
import { exportThemeEnum } from '@/types/export';

interface Props {
  title: string;
  data: content[] | undefined;
  exportTheme: string;
}

export default function ExportBoard({ title, data, exportTheme }: Props) {
  return (
    <div>
      <div className="mb-20 mt-5 text-[22px]">
        <div className=" mb-10">{title}</div>
        <div className=" text-justify  text-[18px]">
          {data?.map((item: content) => (
            <span key={item.id}>
              {exportTheme === exportThemeEnum.default && (
                <Default content={item} />
              )}
              {exportTheme === exportThemeEnum.writer && (
                <Writer content={item} />
              )}
              {exportTheme === exportThemeEnum.lineBreak && (
                <LineBreak content={item} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
