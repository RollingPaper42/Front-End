import { useEffect } from 'react';

export default function InApp() {
  const inAppExec = (callback: () => void) => {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
    //문서의 로딩 상태를 확인하고, 이미 로드된 상태라면 주어진 콜백 함수를 즉시 실행하고,
    //그렇지 않으면 'DOMContentLoaded' 이벤트가 발생할 때까지 기다립니다.
    //이벤트가 발생하면 콜백 함수가 실행됩니다.
  };

  const inAppBrowserOut = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(
      'URL주소가 복사되었습니다.\n\nSafari가 열리면 주소창을 길게 터치한 뒤, "붙여놓기 및 이동"를 누르면 정상적으로 이용하실 수 있습니다.',
    );
    location.href = 'x-web-search://?';
  };

  const moveBrowser = () => {
    const useragt = navigator.userAgent.toLowerCase();
    const target_url = location.href;

    if (useragt.match(/kakaotalk/i)) {
      // 카카오톡
      location.href =
        'kakaotalk://web/openExternal?url=' + encodeURIComponent(target_url);
    } else if (useragt.match(/line/i)) {
      // 라인
      if (target_url.indexOf('?') !== -1) {
        location.href = target_url + '&openExternalBrowser=1';
      } else {
        location.href = target_url + '?openExternalBrowser=1';
      }
    } else if (
      useragt.match(
        /inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsApp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|trill\/[^1]/i,
      )
    ) {
      // 그외 다른 인앱들
      if (useragt.match(/iphone|ipad|ipod/i)) {
        // 아이폰
        var mobile = document.createElement('meta');
        mobile.name = 'viewport';
        mobile.content =
          'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui';
        document.getElementsByTagName('head')[0].appendChild(mobile);
        document.body.innerHTML =
          "<style>body{margin:0;padding:0;font-family: 'Noto Sans KR', sans-serif;overflow: hidden;height: 100%;}</style>\
            <h2 style='padding-top:50px; text-align:center;font-family: 'Noto Sans KR', sans-serif;'>인앱브라우저 호환문제로 인해<br />\
            Safari로 접속해야합니다.</h2>\
            <article style='text-align:center; font-size:17px; word-break:keep-all;color:#999;'>아래 버튼을 눌러 Safari를 실행해주세요<br />\
            Safari가 열리면, 주소창을 길게 터치한 뒤,<br />'붙여놓기 및 이동'을 누르면<br />정상적으로 이용할 수 있습니다.<br />\
            <br /><button onclick='inAppBrowserOut();' \
            style='min-width:180px;margin-top:10px;height:54px;font-weight: 700;background-color:#31408E;color:#fff;border-radius: 4px;font-size:17px;border:0;'>\
            Safari로 열기</button></article> \
            <img style='width:70%;margin:50px 15% 0 15%' src='https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg' />";
      } else {
        // 안드로이드
        location.href =
          'intent://' +
          target_url.replace(/https?:\/\//i, '') +
          '#Intent;scheme=http;package=com.android.chrome;end';
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      inAppExec(moveBrowser);
    }
    return () => {
      document.removeEventListener('DOMContentLoaded', moveBrowser);
    };
  }, []);
  return null;
}
