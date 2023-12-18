'use client';

import Close from '@/component/Icon/Close';
import { defaultState } from '@/utils/theme/default';
import { useRouter } from 'next/navigation';

export default function Privacy() {
  const router = useRouter();
  return (
    <>
      <div className={` w-full ${defaultState.background}`}>
        <div
          className="flex h-[72px] w-full items-center justify-end pr-[24px]"
          onClick={() => router.back()}
        >
          <Close />
        </div>
        <div className="flex w-full h-full flex-col text-white p-[24px] select-none">
          <h1 className="text-[24px]">개인정보처리방침</h1>
          <br />
          <br />
          <h3>
            반드시 본 개인정보처리방침을 읽고 이에 동의하시는 경우에만 서비스를
            이용하시길 바랍니다.
          </h3>
          <br />
          <h3>1. 개인정보 수집 및 이용 목적</h3>
          <p>
            &nbsp;가. 서비스 제공자는 원활한 서비스 제공 및 서비스의 개선을 위한
            최소한의 개인정보만을 수집하고 있습니다.
          </p>
          <br />
          <h3>2. 수집하는 개인정보의 항목</h3>
          <p>
            &nbsp;가. 서비스 제공자는 서비스를 제공하기 위하여 Google, Kakao의
            Oauth서비스를 제공하고 있습니다.
          </p>
          <p>
            &nbsp;&nbsp;1) Oauth service 제공자에게 전달 받은 token정보를
            저장합니다.
          </p>
          <p>
            &nbsp;&nbsp; 2). Oauth service를 이용하여 제공받은 데이터나
            개인정보는 저장 하지 않습니다.
          </p>
          <p>
            &nbsp;나. 서비스 제공자는 이용자가 사용하는 브라우저의 쿠키를
            사용합니다.
          </p>
          <p>
            &nbsp;&nbsp;1). 쿠키는 사용자의 컴퓨터를 식별하지만 개인을 식별하지
            않습니다.
          </p>
          <p>
            &nbsp;다. 서비스 제공자는 서비스의 개선을 위해 사용자의 서비스 이용
            기록을 추적하고 있습니다.
          </p>
          <p>&nbsp;&nbsp;1) 이용기록은 개인을 식별하지 않습니다.</p>
          <br />
          <h3>3. 개인정보 파기</h3>
          <p>
            &nbsp; 가. 서비스 제공자는 개인을 식별할 수 없는 정보만을 수집하고
            있으며, 이는 최대 5년간 보관된 이후 파기합니다.
          </p>
          <br />
          <h3>4. 개인정보 수집 동의 거부</h3>
          <p>
            &nbsp;가. 서비스의 사용자는 얼마든지 위 사항의 개인정보제공 동의에
            거부할 권리가 있으며, 동의에 거부할 시 본 서비스 이용이
            불가능합니다.
          </p>
          <br />
          <h3>5. 개인정보의 제 3자 제공</h3>
          <p>
            &nbsp; 가.서비스 제공자는 원칙적으로 제 3자에게 개인정보를 제공하지
            않습니다. 단 아래의 경우에 한하여 제 3자에게 적용할 수 있습니다.
          </p>
          <p>
            &nbsp;&nbsp;1) 서비스 제공자는 수사기관이 요청하는 경우, 관계 법령이
            정하는 경우
          </p>
          <p>
            &nbsp;&nbsp;2) 특정 개인을 식별할 수 없는 형태로 가공하여 제공하는
            경우
          </p>
          <br />
          <h3>6. 개인정보 보호책임자 안내</h3>
          <p>&nbsp;가.이름 : 박기선</p>
          <p>&nbsp;나.직위 : 팀장</p>
          <p>&nbsp;다.연락처 : strcat42@gmail.com</p>
          <br />
          <h3>7. 개정 전 고지의무 안내</h3>
          <p>
            &nbsp;가. 법령이나 서비스의 변경사항을 반영하기 위한 목적 등으로
            개인정보 처리방침을 수정할 수 있습니다.
          </p>
          <p>
            &nbsp;&nbsp;1)개인정보 처리방침이 변경되는 경우 최소 7일 전 변경
            사항을 사전에 안내 하겠습니다.
          </p>
          <p>
            &nbsp;&nbsp;2) 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일
            전에 미리 알려드리겠습니다.
          </p>
        </div>
      </div>
    </>
  );
}
