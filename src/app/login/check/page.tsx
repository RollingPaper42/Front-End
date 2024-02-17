'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { History } from '@/types/history';
import { axiosPostUserHistory } from '@/utils/apiInterface';

export default function Check() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const history = localStorage.getItem('history');
    if (history) {
      const historyArray: History[] = JSON.parse(history);
      axiosPostUserHistory({ history: historyArray });
      localStorage.removeItem('history');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('strcat_token', token ?? '');
    const url = localStorage.getItem('strcat_login_success_url');
    if (url) {
      router.replace(url);
    } else {
      router.replace('/');
    }
  }, []);
}
