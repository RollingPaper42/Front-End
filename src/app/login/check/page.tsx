'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Check() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const token = searchParams.get('token');
    localStorage.setItem('strcat_token', token ?? '');
    const url = localStorage.getItem('strcat_login_success_url');
    if (url) {
      localStorage.removeItem('strcat_login_success_url');
      router.push(url);
    } else {
      router.push('/');
    }
  }, [router, searchParams]);
}
