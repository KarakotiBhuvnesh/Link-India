import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary'|'ghost' }

export default function Button({ className, variant='primary', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition'
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary: 'border border-slate-300 hover:border-slate-400',
    ghost: 'hover:bg-slate-100'
  }
  return <button className={clsx(base, variants[variant], className)} {...props} />
}
