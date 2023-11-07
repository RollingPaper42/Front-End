'use client';

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 h-full w-full max-w-[calc(100vh*0.6)] bg-slate-400">
      {children}
    </div>
  );
}
