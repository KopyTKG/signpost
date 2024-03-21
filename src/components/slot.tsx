/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

'use client'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slotVariants = cva('w-full h-16 rounded-md hover:translate-z-10', {
 variants: {
  color: {
   dark: 'bg-zinc-600',
   light: 'bg-slate-200',
  },
  radius: {
   soft: 'rounded-md',
   rounded: 'rounded-2xl',
   square: 'rounded-none',
   full: 'rounded-full',
  },
 },
 defaultVariants: {
  color: 'dark',
  radius: 'soft',
 },
})

const ImageVariants = cva('aspect-square object-contain h-full w-max p-1', {
 variants: {
  radius: {
   soft: 'rounded-md',
   rounded: 'rounded-2xl',
   square: 'rounded-none',
   full: 'rounded-full',
  },
 },
 defaultVariants: {
  radius: 'soft',
 },
})

export interface SlotProps
 extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof slotVariants> {
 color?: 'dark' | 'light'
 radius?: 'soft' | 'rounded' | 'square' | 'full'
}

export interface ImageProps
 extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof ImageVariants> {
 asChild?: boolean
 radius?: 'soft' | 'rounded' | 'square' | 'full'
}

const Link = React.forwardRef<HTMLDivElement, SlotProps>(
 ({ className, color, radius, ...props }, ref) => {
  return (
   <AnimatePresence>
    <motion.div
     whileHover={{ scale: 1.05 }}
     onHoverStart={(_e) => {}}
     onHoverEnd={(_e) => {}}
     className={cn(slotVariants({ color, radius, className }))}
     ref={ref}>
     {props.children}
    </motion.div>
   </AnimatePresence>
  )
 },
)
Link.displayName = 'Slot'

const LinkIcon = React.forwardRef<HTMLImageElement, ImageProps>(
 ({ className, src, alt, width, height, radius, ...props }, ref) => (
  <Image
   src={src || 'https://picsum.photos/200'}
   ref={ref}
   width={+(width || 200)}
   height={+(height || 200)}
   alt={alt || 'logo'}
   className={cn(ImageVariants({ radius, className }))}
   {...props}
  />
 ),
)
LinkIcon.displayName = 'CardContent'

export { Link, LinkIcon, slotVariants }
