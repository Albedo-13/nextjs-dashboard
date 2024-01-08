'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        'disabled:cursor-default disabled:bg-slate-400 disabled:hover:bg-slate-400',
        className,
      )}
      disabled={pending}
    >
      {children}
    </button>
  );
}
