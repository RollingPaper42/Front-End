'use client';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useSearchParams } from 'next/navigation';

export default function Add() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log(searchParams);

  const [text, , handleText] = useInput('');
  const [photo, setPhoto] = useInput(''); // 아직 어떤식으로 넘겨줄지 미정
  const [writer, , handleWriter] = useInput('');
  // const [modal, setModal] = useRecoilState(modalState);

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    // redirect 해야함 -> main으로?
  }

  const handleClick = () => {
    if (text === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (writer === '') {
      alert('작성자명을 입력해주세요');
    }
    //const isConfirmed = await useConfirm('작성한 글을 이어붙이시겠습니까?', setModal);
    const isConfirmed = true;
    if (isConfirmed) {
      const data = {
        text: text,
        photo: photo,
        writer: writer,
      };
      axiosInstance
        .post(`/board/${id}/content`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response.status === 406) {
            alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
          }
        });
    }
  };

  const handleChangeResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleText(e);
    const textarea: HTMLTextAreaElement = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length >= 1000) {
      alert('최대 1000자까지 입력 가능합니다.');
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
    }
  };

  return (
    <>
      <div id="title" className="pl-2">
        strcat(*,*)
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="w-80">
          <textarea
            id="message"
            value={text}
            rows={1}
            className="max-h-96 w-full resize-none bg-[#FAFAFA] text-xl font-semibold outline-none placeholder:text-[#CACACA]"
            placeholder="내용을 입력해주세요"
            maxLength={1000}
            onChange={(e) => handleChangeResize(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="text-right">{text.length}/1000</div>
        </div>
        <div className="mt-2 flex w-80 justify-end">
          <input
            type="text"
            id="writer"
            value={writer}
            className="h-8 w-20 bg-[#FAFAFA] px-2 text-center outline-none placeholder:text-[#CACACA]"
            placeholder="익명"
            // maxLength={8}
            onChange={handleWriter}
          />
        </div>
        <form>
          <label
            className="photo-label text-md mx-3 my-1 inline-block cursor-pointer"
            htmlFor="photoImg"
          >
            사진 선택
          </label>
          <input
            className="photo-input hidden"
            type="file"
            accept="image/*"
            id="photoImg"
          />
        </form>
        <button
          type="button"
          id="done"
          className="fixed bottom-8 h-12 w-80 bg-[#CCCCCC] text-xl text-white"
          onClick={handleClick}
        >
          완료
        </button>
      </div>
    </>
  );
}
