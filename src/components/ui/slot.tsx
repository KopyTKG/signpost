/* eslint-disable no-unused-vars */
'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slotVariants = cva(
 'w-full h-16 hover:translate-z-10 group flex items-center pr-5 border border-neutral-200 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 ',
 {
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
 },
)

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

const ParagraphVariants = cva('w-full flex justify-center items-center text-justify', {
 variants: {
  font: {
   soft: ' font-thin',
   normal: 'font-normal',
   medium: 'font-semibold',
   bold: 'font-extrabold',
  },
 },
 defaultVariants: {
  font: 'soft',
 },
})

export interface SlotProps
 extends React.HTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof slotVariants> {
 radius?: 'soft' | 'rounded' | 'square' | 'full'
 time: number
 href: string
}

export interface ImageProps
 extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof ImageVariants> {
 asChild?: boolean
 radius?: 'soft' | 'rounded' | 'square' | 'full'
}

export interface ParagraphProps
 extends React.ParamHTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof ParagraphVariants> {
 asChild?: boolean
 font?: 'soft' | 'normal' | 'medium' | 'bold'
 href: string
}

const Link = React.forwardRef<HTMLAnchorElement, SlotProps>(
 ({ className, radius, time, href, ...props }, ref) => {
  return (
   <AnimatePresence>
    <motion.div
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -20 }}
     transition={{
      duration: 0.5,
      delay: time * 0.02,
     }}
    >
     <motion.a
      whileHover={{ scale: 1.05 }}
      onHoverStart={(_e) => {}}
      onHoverEnd={(_e) => {}}
      ref={ref}
      href={href}
      rel="noreffer"
      className={cn(slotVariants({ radius, className }))}
     >
      {props.children}
     </motion.a>
    </motion.div>
   </AnimatePresence>
  )
 },
)
Link.displayName = 'Link'

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
LinkIcon.displayName = 'LinkIcon'

const LinkText = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
 ({ className, font, href, ...props }, ref) => (
  <p ref={ref} className={cn(ParagraphVariants({ font, className }))} {...props} />
 ),
)
LinkText.displayName = 'LinkText'

export { Link, LinkIcon, LinkText, slotVariants }
