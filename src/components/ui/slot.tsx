/* eslint-disable no-unused-vars */
'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
 extends React.HTMLAttributes<HTMLDivElement>,
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
 extends React.ParamHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof ParagraphVariants> {
 asChild?: boolean
 font?: 'soft' | 'normal' | 'medium' | 'bold'
 href: string
}

function CopyToClipboard(href: string) {
 navigator.clipboard.writeText(href)
}

const Link = React.forwardRef<HTMLDivElement, SlotProps>(
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
     <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={(_e) => {}}
      onHoverEnd={(_e) => {}}
      ref={ref}
      className={cn(slotVariants({ radius, className }))}
     >
      {props.children}
      <motion.div
       initial={{ opacity: 0, scale: 0.8 }}
       whileHover={{ opacity: 1, scale: 1 }}
       className="w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"
      >
       <DropdownMenu>
        <DropdownMenuTrigger>
         <Image
          src="/svg/share.svg"
          width={30}
          height={30}
          alt="share-svg"
          className="w-10 h-8 p-1 rounded-full hover:bg-gray-400/20 transition-colors"
         />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
         <DropdownMenuItem onClick={() => CopyToClipboard(href)}>Share</DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
      </motion.div>
     </motion.div>
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

const LinkText = React.forwardRef<HTMLAnchorElement, ParagraphProps>(
 ({ className, font, href, ...props }, ref) => (
  <a
   href={href}
   ref={ref}
   rel="noreffer"
   className={cn(ParagraphVariants({ font, className }))}
   {...props}
  />
 ),
)
LinkText.displayName = 'LinkText'

export { Link, LinkIcon, LinkText, slotVariants }
