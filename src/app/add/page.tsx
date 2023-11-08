'use client';
// import { axiosInstance } from '@/utils/axios';
import { useState } from 'react';
import { id } from '@/types/id';

export default function Add(props: id) {
  const [message, setMessage] = useState<string>('');
  const [photo, setPhoto] = useState<string>(''); // 아직 어떤식으로 넘겨줄지 미정
  const [writer, setWriter] = useState<string>('');

  function handleConfirm() {
    if (message === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (writer === '') {
      alert('작성자명을 입력해주세요');
    }
    //const { isConfirmed } = await useConfirm('작성한 글을 이어붙이시겠습니까?');
    const isConfirmed = true;
    if (isConfirmed) {
      const data = {
        id: props.personal_id,
        message: message,
        photo: photo,
        writer: writer,
      };
      // send post api
      // axiosInstance.post('/add', data);
    }
  }

  return (
    <>
      <div id="title" className="content-center justify-center text-center">
        스트링캣을 이어서 작성
      </div>
      <textarea
        id="message"
        className=" m-1 h-fit w-96 rounded-lg bg-slate-200 p-2 text-lg outline-none"
        placeholder="내용을 입력해주세요"
        maxLength={1000}
        rows={5}
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (e.currentTarget.value.length >= 1000) {
            alert('최대 1000자까지 입력 가능합니다.');
            e.preventDefault();
            e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
          }
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
        onChange={(e) => {
          setWriter(e.currentTarget.value);
        }}
      />
      <button
        type="button"
        id="done"
        className="h-10 w-40 rounded-md bg-slate-200 "
        onClick={handleConfirm}
      >
        작성 완료
      </button>
    </>
  );
}
