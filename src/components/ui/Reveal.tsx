import type { PropsWithChildren } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = PropsWithChildren<{
  className?: string
}>

export function Reveal({ children, className = '' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
