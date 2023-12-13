import { SetStateAction } from 'react';

interface TextareaProps {
  width: string;
  maxLength: number;
  height: string;
  textColor: string;
  placeholder: string;
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  maxheight: string;
}
export default function Textarea({
  width,
  maxLength,
  placeholder,
  textColor,
  height,
  maxheight,
  text,
  setText,
}: TextareaProps) {
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaText = e.currentTarget.value;
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(textAreaText).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (byteLength <= (maxLength + 1) * 3) {
      setText(e.target.value);
    }
  };

  const handleKeyDownText = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`flex flex-col ${width} ${height} rounded bg-strcat-textarea-bg`}
    >
      <div>
        <textarea
          id="TextMessage"
          rows={1}
          value={text}
          className={`w-full px-[16px] resize-none mt-[16px] basis-5/6 text-[16px] ${maxheight} rounded ${textColor} outline-none  bg-strcat-textarea-bg  placeholder:text-strcat-textarea-text`}
          placeholder={placeholder}
          maxLength={maxLength + 1}
          onChange={(e) => handleChangeText(e)}
          onKeyDown={(e) => handleKeyDownText(e)}
        />
      </div>
      <div
        className={` text-right text-[14px] h-[17px] mb-[16px] basis-1/6  mx-[16px]  ${
          text.length > maxLength
            ? 'text-strcat-red'
            : 'text-strcat-textarea-text'
        }`}
      >
        {text.length}/{maxLength}
      </div>
    </div>
  );
}
