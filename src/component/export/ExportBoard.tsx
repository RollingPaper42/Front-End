import { content } from '@/types/content';
import Default from './Default';
import Writer from './Writer';
import LineBreak from './LineBreak';
import { exportThemeEnum } from '@/types/export';
import { bodyFont, titleFont } from '@/recoil/font';

interface Props {
  title: string;
  data: content[] | undefined;
  exportTheme: string;
}

export default function ExportBoard({ title, data, exportTheme }: Props) {
  return (
    <div>
      <div className={`${titleFont.category1} mb-20 mt-5`}>
        <div className=" mb-10">{title}</div>
        <div className={`${bodyFont.category1}  text-justify`}>
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
