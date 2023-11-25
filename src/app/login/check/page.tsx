'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Check() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const token = searchParams.get('token');
    localStorage.setItem('strcat_token', token === null ? '' : token);
    router.push('/');
  }, []);
}
