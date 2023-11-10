'use client';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';

export default function Add(id: { id: string }) {
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

  return (
    <>
      <div id="title" className="content-center justify-center text-center">
        스트링캣을 이어서 작성
      </div>
      <textarea
        id="message"
        value={text}
        className=" m-1 h-fit w-96 rounded-lg bg-slate-200 p-2 text-lg outline-none"
        placeholder="내용을 입력해주세요"
        maxLength={1000}
        rows={5}
        onChange={handleText}
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
        value={writer}
        className="m-1 h-10 w-40 rounded-md bg-slate-200 px-2 outline-none"
        placeholder="익명"
        // maxLength={8}
        onChange={handleWriter}
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
