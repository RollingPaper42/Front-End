'use client';

import Close from '@/component/Common/Icon/Close';
import { defaultState } from '@/utils/theme/default';
import { useRouter } from 'next/navigation';

export default function Terms() {
  const router = useRouter();

  return (
    <div className={` w-full ${defaultState.background}`}>
      <div
        className="flex h-[72px] w-full items-center justify-end pr-[24px]"
        onClick={() => router.back()}
      >
        <Close />
      </div>
      <div className="flex w-full h-full flex-col text-white p-[24px] select-none">
        <h1 className=" text-[24px]">이용약관</h1>
        <br />
        <br />
        <h3>제 1 조 (목적)</h3>
        <p>
          &nbsp; ① 이 약관은 strcat 서비스 제공자가 운영하는 웹페이지 strcat
          서비스(이하 서비스라 함)를 이용함에 있어 strcat 서비스 제공자와 strcat
          서비스 사용자(이하 사용자라 함)의 권리, 의무 및 책임사항을 규정함을
          목적으로 합니다.
        </p>
        <p>
          &nbsp;② 약관을 충분히 숙지하신 후 이용하여 주시고, 약관에 동의하시는
          경우에만 서비스를 이용하시기 바랍니다.
        </p>
        <br />
        <h3>제 2조 (사용자의 의무)</h3>
        <p>
          &nbsp;① 사용자는 사회통념에 어긋나거나, 현행 법령에 위배되는 게시물을
          작성하지 아니하여야 합니다.
        </p>
        <p>
          &nbsp;② 사용자는 다른 사용자, 제3자 및 제공자의 서비스제공자의 정당한
          이익과 권리를 침해하는 게시물을 작성하지 아니하여야합니다.
        </p>
        <br />
        <h3>제 3조 (면책 조항)</h3>
        <p>
          &nbsp;① 서비스 내에 사용자가 작성한 게시물에 대한 모든 책임과 권리는
          사용자에게 있습니다.
        </p>
        <p>
          &nbsp;② 서비스 제공자는 이에대해 어떤 책임도 지지 않으며, 게시물의
          내용에 관한 분쟁이나 게시물을 신뢰하여 발생한 손해에 관한 분쟁에
          개입하거나 이를 해결해야할 의무를 지지 않습니다.
        </p>
        <br />
        <h3>제 4조 (서비스 이용)</h3>
        <p>
          &nbsp;① 사용자는 본 서비스를 이용하여 게시글 작성이 가능합니다.
          (텍스트, 이미지 업로드)
        </p>
        <p>
          &nbsp;② 사용자가 올린 게시물은 이용자가 스스로 삭제하거나 수정할 수
          없습니다. 단, 이용약관 2조에 어긋나는 게시물의 경우, 서비스제공자가
          게시물을 임의로 삭제할 수 있습니다.
        </p>
        <p>&nbsp;③ 서비스제공자는 언제든지 서비스 제공을 중단할 수 있습니다.</p>
        <br />
        <br />
        <p> 2023.12.18. 고시 </p> <br /> <h3>부칙</h3> <br />
        <p>
          제 1 조 <br />본 약관은 고시일로부터 효력이 발생합니다.
        </p>
        <br />
        <p>
          제 2조 <br />
          서비스 제공자는 필요한 경우에 본 약관을 개정할 수 있습니다.
        </p>
        <p>
          &nbsp;① 본 약관이 개정되는 경우, 서비스 이용자가 충분히 볼 수 있는
          공간에 게재합니다.
        </p>
        <p>
          &nbsp;② 변경되는 약관에 동의하지 않는 경우 서비스 이용을 중단하여야
          하며 변경된 약관의 고시 이후에도 서비스를 이용하시는 경우 본 약관에
          동의하시는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}
