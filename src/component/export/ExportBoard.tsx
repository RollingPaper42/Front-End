import { content } from '@/types/content';
import Default from './Default';
import Writer from './Writer';
import LineBreak from './LineBreak';
import { exportThemeEnum } from '@/types/export';
import { themeObj } from '@/recoil/theme';
import { bodyFont, titleFont } from '@/recoil/font';

interface Props {
  title: string;
  content: content[] | undefined;
  exportTheme: string;
  boardTheme: 'strcat' | 'calm' | 'green' | 'cyan' | undefined;
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
