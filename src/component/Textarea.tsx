import useInput from '@/hooks/useInput';

interface TextareaProps {
  width: string;
  maxLength: number;
  height: string;
  textColor: string;
  placeholder: string;
}
export default function Textarea({
  width,
  maxLength,
  placeholder,
  textColor,
  height,
}: TextareaProps) {
  const [title, , handleTitle] = useInput('');
  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaTitle = e.currentTarget.value;
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(textAreaTitle).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (byteLength <= (maxLength + 1) * 3) {
      handleTitle(e);
    }
  };

  const handleKeyDownTitle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`flex flex-col ${width} ${height} rounded bg-strcat-textarea-bg`}
    >
      <textarea
        id="titleMessage"
        rows={1}
        value={title}
        className={` mx-[16px] mt-[16px] resize-none text-[16px] basis-5/6 rounded  ${textColor} outline-none  bg-strcat-textarea-bg  placeholder:text-strcat-textarea-text`}
        placeholder={placeholder}
        maxLength={maxLength + 1}
        onChange={(e) => handleChangeTitle(e)}
        onKeyDown={(e) => handleKeyDownTitle(e)}
      />
      <div
        className={` text-right text-[14px] mb-[16px] basis-1/6 mx-[16px]  ${
          title.length >= maxLength + 1
            ? 'text-red-600'
            : 'text-strcat-textarea-text'
        }`}
      >
        {title.length}/{maxLength}
      </div>
    </div>
  );
}
