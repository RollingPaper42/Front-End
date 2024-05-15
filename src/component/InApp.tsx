'use client';

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
