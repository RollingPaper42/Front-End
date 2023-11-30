'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Check() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  localStorage.setItem('strcat_token', token ?? '');
  const url = localStorage.getItem('strcat_login_success_url');
  useEffect(() => {
    if (url) {
      router.push(url);
      localStorage.removeItem('strcat_login_success_url');
    } else {
      router.push('/');
    }
  }, [router, url]);
}
