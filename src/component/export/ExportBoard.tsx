import Default from './Default';
import LineBreak from './LineBreak';
import Writer from './Writer';
import { bodyFont, titleFont } from '@/recoil/font';
import { themeObj } from '@/recoil/theme/theme';
import { content } from '@/types/content';
import { exportThemeEnum } from '@/types/export';

interface Props {
  title: string;
  content: content[] | undefined;
  exportTheme: string;
  boardTheme: 'yellow' | 'peach' | 'lilac' | 'christ' | 'mas' | undefined;
}

export default function ExportBoard({
  title,
  content,
  exportTheme,
  boardTheme,
}: Props) {
  if (!boardTheme) return;
  const theme = themeObj[boardTheme];
  return (
    <div className={`${theme.bgTheme.background} ${theme.textTheme.title}`}>
      <div className={`mx-[24px]`}>
        <div className={`${titleFont.category1} pb-[32px] pt-[40px]`}>
          {title}
        </div>
        <div className={` pb-[40px]  text-justify ${bodyFont.category1}`}>
          {content?.map((item: content) => (
            <span key={item.id}>
              {exportTheme === exportThemeEnum.default && (
                <Default
                  content={item}
                  color={theme.textTheme.default}
                  highlightcolor={theme.textTheme.highlight}
                />
              )}
              {exportTheme === exportThemeEnum.lineBreak && (
                <LineBreak content={item} color={theme.textTheme.default} />
              )}
              {exportTheme === exportThemeEnum.writer && (
                <Writer content={item} color={theme.textTheme.default} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
