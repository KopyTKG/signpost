/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slotVariants = cva(
 'w-full h-16 rounded-md hover:translate-z-10 group flex items-center pr-5',
 {
  variants: {
   color: {
    dark: 'bg-stone-800',
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
  color: {
   dark: 'text-stone-200',
   light: 'text-slate-800',
  },
  font: {
   soft: ' font-thin',
   normal: 'font-normal',
   medium: 'font-semibold',
   bold: 'font-extrabold',
  },
 },
 defaultVariants: {
  font: 'soft',
  color: 'light',
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

export interface ParagraphProps
 extends React.ParamHTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof ParagraphVariants> {
 asChild?: boolean
 color?: 'dark' | 'light'
 font?: 'soft' | 'normal' | 'medium' | 'bold'
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
     <Image
      src={'/svg/share.svg'}
      width={200}
      height={200}
      alt="share-svg"
      className=" block -z-10 w-8 h-8 p-1 rounded-full group-hover:z-10 hover:bg-gray-400/50 "
     />
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
 ({ className, color, font, ...props }, ref) => (
  <p ref={ref} className={cn(ParagraphVariants({ color, font, className }))} {...props} />
 ),
)
LinkText.displayName = 'LinkText'

export { Link, LinkIcon, LinkText, slotVariants }
