import { content } from '@/types/content';
import Default from './Default';
import Writer from './Writer';
import LineBreak from './LineBreak';
import { exportThemeEnum } from '@/types/export';
import { themeObj } from '@/recoil/theme';

interface Props {
  title: string;
  content: content[] | undefined;
  exportTheme: string;
  boardTheme: 'strcat' | 'calm' | 'green' | 'cyan';
}

export default function ExportBoard({
  title,
  content,
  exportTheme,
  boardTheme,
}: Props) {
  const theme = themeObj[boardTheme];
  return (
    <div className={`${theme.background}`}>
      <div className={`mx-[24px] mb-[40px] mt-[40px] text-[22px] `}>
        <div className="mb-[32px]">{title}</div>
        <div className={` text-justify  text-[18px] ${theme.defaultText}`}>
          {content?.map((item: content) => (
            <span key={item.id}>
              {exportTheme === exportThemeEnum.default && (
                <Default
                  content={item}
                  color={theme.defaultText}
                  highlightcolor={theme.highlightText}
                />
              )}
              {exportTheme === exportThemeEnum.lineBreak && (
                <LineBreak content={item} color={theme.defaultText} />
              )}
              {exportTheme === exportThemeEnum.writer && (
                <Writer content={item} color={theme.defaultText} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
