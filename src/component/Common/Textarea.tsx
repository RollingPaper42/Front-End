import { SetStateAction } from 'react';

import { captionFontState } from '@/recoil/font/caption';

interface TextareaProps {
  width: string;
  maxLength: number;
  textColor: string;
  placeholder: string;
  handleFocus?: () => void;
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  maxHeight: string;
}
export default function Textarea({
  width,
  maxLength,
  placeholder,
  textColor,
  handleFocus,
  maxHeight,
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
    if (e.target.value.trim() === '') {
      setText('');
    }
  };

  const handleKeyDownText = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`flex flex-col ${width} h-auto rounded-[8px] bg-strcat-textarea-bg`}
    >
      <div>
        <textarea
          id="TextMessage"
          rows={1}
          value={text}
          className={`mt-[16px] w-full basis-5/6 resize-none px-[16px] ${captionFontState.textField} ${maxHeight} rounded ${textColor} bg-strcat-textarea-bg  outline-none  placeholder:text-strcat-textarea-text`}
          placeholder={placeholder}
          maxLength={maxLength + 1}
          onChange={(e) => handleChangeText(e)}
          onKeyDown={(e) => handleKeyDownText(e)}
          onFocus={handleFocus}
        />
      </div>
      <div
        className={`mx-[16px] mb-[16px] h-[16px] basis-1/6 cursor-default select-none text-right ${
          captionFontState.countIndicator
        } ${
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
