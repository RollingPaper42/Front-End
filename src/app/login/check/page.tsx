'use client';
import { useSearchParams } from 'next/navigation';

export default function Check() {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  console.log(token);

  return <div>hi</div>;
}
