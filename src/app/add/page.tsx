'use client';
import { useState } from 'react';

// export interface stringMessage {
//   message: string;
//   photo: string;
//   writer: string;
//   id: number | null;
// }

// export interface id {
//     personal_id: number | null;
//     group_id: number | null;
//   }

export default function Add() {
  const [message, setMessage] = useState<string>('');
  const [photo, setPhoto] = useState<string>(''); // 아직 어떤식으로 넘겨줄지 미정
  const [writer, setWriter] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
      <div id="title">스트링캣을 이어서 작성</div>
      <textarea
        id="message"
        className=" m-1 h-fit w-full rounded-lg bg-slate-200 p-2 text-lg outline-none"
        placeholder="내용을 입력해주세요"
        maxLength={1000}
        rows={5}
        onKeyDown={(e) => {
          if (e.currentTarget.value.length > 1000) {
            e.preventDefault();
            alert('최대 1000자까지 입력 가능합니다.');
            e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
          }
          setMessage(e.currentTarget.value);
        }}
      />
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
      <input
        type="text"
        id="writer"
        className="m-1 h-10 w-40 rounded-md bg-slate-200 px-2 outline-none"
        placeholder="익명"
        // maxLength={8}
        onKeyDown={(e) => {
          setWriter(e.currentTarget.value);
        }}
      />
      <button
        type="button"
        id="done"
        className="h-10 w-40 bg-slate-200"
        onClick={() => setIsDone(true)}
      >
        작성 완료
      </button>
      {isDone && (
        <div className="fixed left-1/3 top-1/4 h-40 w-40 bg-slate-400">
          모달창
          <br />
          <button
            type="button"
            onClick={() => {
              setIsDone(false);
            }}
          >
            닫기
          </button>
        </div>
      )}
    </>
  );
}
