import { cn } from '@/utils/cn'
import React from 'react'

const CenterHeader = ({ children,className }) => {
  return (
    <div className={cn('text-center flex flex-col gap-4',className)}>
      {children}
    </div>
  )
}

const Heading = ({ children ,className}) => {
  return (
    <h1 className={cn('text-5xl font-semibold text-[#474444] tracking-tight',className)}>
      {children}
    </h1>
  )
}

const BoldText = ({ children,className }) => {
  return (
    <span className={cn('text-[#010101] font-bold',className)}>{children}</span>
  )
}

const ParaContainer = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

const ParaText = ({ children ,className}) => {
  return (
    <p className={cn('px-2 text-sm font-medium text-[#c2c2c2]',className)}>{children}</p>
  )
}

export { CenterHeader, Heading, BoldText, ParaContainer, ParaText }