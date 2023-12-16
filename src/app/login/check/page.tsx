'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

export default function Check() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    localStorage.setItem('strcat_token', token ?? '');
    const url = localStorage.getItem('login_success_url');
    if (url) {
      router.replace(url);
    } else {
      router.replace('/');
    }
  }, []);
}
