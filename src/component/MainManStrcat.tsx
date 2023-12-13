import { board } from '@/types/boards';
import StrcatBoard from './StrcatBoard';

const board: board = {
    id: 'string',
    title: 'Sample Board',
    theme: 'strcat',
    contents: [
      {
        id: 1,
        text: '스트링캣에 오신 것을 환영합니다!',
        writer: 'kipark',
        photoUrl: '',
      },
      {
        id: 2,
        text: '혹시 strcat을 들어보신 적 있나요? 만약 들어봤다면 당신은 혹시 개발자? 🤭',
        writer: 'jayoon',
        photoUrl: '',
      },
      {
        id: 3,
        text: '몰라도 괜찮아요! 처음 들어봤더라도 스트링캣을 사용할 때 아무런 문제가 되지 않습니다.',
        writer: 'dokoh',
        photoUrl: '',
      },
      {
        id: 4,
        text: 'strcat은 여러 문자열(string)을 이어붙이는 (concatenate) 기능을 가진 C언어의 함수랍니다!',
        writer: 'heeskim',
        photoUrl: '',
      },
      {
        id: 5,
        text: '여기서 착안한 스트링캣은 여러 사람들의 말 한마디 한마디를 줄줄이 이어붙여 주는 롤링페이퍼 서비스예요.',
        writer: 'sol',
        photoUrl: '',
      },
      {
        id: 6,
        text: '스트링캣이 여러분에게 새롭고 재밌는 경험을 드릴 수 있길 바라면서',
        writer: 'sumilee',
        photoUrl: '',
      },
	  {
        id: 7,
        text: '스트링캣팀 올림',
        writer: '100Z',
        photoUrl: '',
      },
	  {
        id: 8,
        text: '문의사항 및 신고: strcat@gmail.com',
        writer: 'seongjki',
        photoUrl: '',
      },
    ],
};
export default function MainManStrcat() {
  return (
    <div>
      <StrcatBoard board={board}/>
    </div>
  );
}
