'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Id {
  personal_id: number;
  group_id: number;
}

export default function Add(props: Id) {
  const [content, setContent] = useState<string>('');
  const [writer, setWriter] = useState<string>('');
  const [photo, setPhoto] = useState<string>(''); // 아직 어떤식으로 넘겨줄지 미정

  return (
    <>
      <div id="photo">사진 입력</div>
      <input
        type="text"
        id="content"
        className="h-20 w-full bg-slate-200"
        placeholder="내용을 입력해주세요"
      />
      <input
        type="text"
        id="writer"
        className="h-20 w-20 bg-slate-200"
        placeholder="익명"
      />
      <button type="button" id="done" className="h-20 w-full bg-slate-200">
        작성 완료
      </button>
    </>
  );
}
