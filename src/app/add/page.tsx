'use client';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useSearchParams } from 'next/navigation';

export default function Add() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [text, , handleText] = useInput('');
  const [photo, setPhoto] = useInput(''); // 아직 어떤식으로 넘겨줄지 미정
  const [writer, , handleWriter] = useInput('');

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    // redirect 해야함 -> 어디로?
  }
  const handleConfirm = () => {
    if (text === '') {
      alert('이어 쓸 스트링을 입력해주세요');
    } else if (writer === '') {
      alert('작성자명을 입력해주세요');
    }
    //const { isConfirmed } = await useConfirm('작성한 글을 이어붙이시겠습니까?');
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

  const onChangeResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleText(e);
    const textarea: HTMLTextAreaElement = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const onKeyDownMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length >= 1000) {
      alert('최대 1000자까지 입력 가능합니다.');
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.slice(0, 1000);
    }
  };
  return (
    <>
      <div id="title" className="content-center justify-center text-center">
        스트링캣을 이어서 작성
      </div>
            onChange={(e) => onChangeResize(e)}
            onKeyDown={(e) => onKeyDownMessage(e)}
    </>
  );
}
