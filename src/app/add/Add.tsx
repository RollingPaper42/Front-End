'use client';
import BottomButton from '@/component/BottomButton';
import useInput from '@/hooks/useInput';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';
// import { useRecoilState } from 'recoil';

export default function Add({ id }: { id: string }) {
  const [text, , handleText] = useInput('');
  const [photo, setPhoto] = useInput(''); // 아직 어떤식으로 넘겨줄지 미정
  const [writer, , handleWriter] = useInput('');
  const router = useRouter();
  // const [modal, setModal] = useRecoilState(modalState);

  if (id === null || id === undefined) {
    alert('유효하지 않은 접속입니다.');
    router.push('/');
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

  const focusText = () => {
    const textDiv = document.getElementById('text');
    textDiv?.focus();
  };

  const handleInputText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  };

  return (
      <div
        id="text"
        contentEditable="true"
        suppressContentEditableWarning
        onInput={(e) => setText(e.currentTarget.innerText)}
        onKeyDown={(e) => handleInputText(e)}
        className="bottom-[200px] ml-5 inline w-full text-justify text-[20px] text-purple-700 outline-none"
      />
      {text === '' && (
        <div className="inline text-[20px] text-purple-200" onClick={focusText}>
          20자 이상 내용을 입력해주세요
        </div>
      )}
      {text?.length > 900 && (
        <div
          className={`text-right ${
            text.length > 1000 ? 'text-red-600' : 'text-black'
          }`}
        >
          {text.length}/1000자
        </div>
      )}
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
        <BottomButton
          name="취소"
          width="basis-1/5"
          onClickHandler={() => setIsAdd(false)}
          disabled={false}
        />
        </form>
        <BottomButton
          name="완료"
          width="basis-3/5"
          onClickHandler={handleClick}
          disabled={
            text === '' ||
            writer === '' ||
            text.length > 1000 ||
            writer.length > 10
          }
        />
      </div>
    </>
  );
}
