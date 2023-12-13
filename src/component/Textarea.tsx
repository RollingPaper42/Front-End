import useInput from '@/hooks/useInput';

interface TextareaProps {
  width: string;
  maxLength: number;
  height: string;
  textColor: string;
  placeholder: string;
  onTextChange: (newText: string) => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
}
export default function Textarea({
  width,
  maxLength,
  placeholder,
  textColor,
  height,
  onTextChange,
  handleFocus,
  handleBlur,
}: TextareaProps) {
  const [text, , handleText] = useInput('');
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaText = e.currentTarget.value;
    const textarea: HTMLTextAreaElement = e.target;
    const byteLength = new TextEncoder().encode(textAreaText).length;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (byteLength <= (maxLength + 1) * 3) {
      handleText(e);
      onTextChange(textAreaText);
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
      <textarea
        id="TextMessage"
        rows={1}
        value={text}
        className={` mx-[16px] mt-[16px] resize-none text-[16px] basis-5/6 rounded  ${textColor} outline-none  bg-strcat-textarea-bg  placeholder:text-strcat-textarea-text`}
        placeholder={placeholder}
        maxLength={maxLength + 1}
        onChange={(e) => handleChangeText(e)}
        onKeyDown={(e) => handleKeyDownText(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        className={` text-right text-[14px] mb-[16px] basis-1/6 mx-[16px]  ${
          text.length > maxLength ? 'text-red-600' : 'text-strcat-textarea-text'
        }`}
      >
        {text.length}/{maxLength}
      </div>
    </div>
  );
}
