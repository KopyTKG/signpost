'use client'
import { Link, LinkIcon, LinkText } from '@/components/slot'
import Image from 'next/image'

export default function Home() {
 const temp = Array.from({ length: 100 }, (_, i) => i)
 return (
  <>
   <div className=" w-full flex justify-center py-10">
    <div className="flex flex-col justify-center items-center">
     <div className="w-24 h-24 border-2 rounded-full overflow-hidden">
      <Image
       // random cat picture (png)
       src={'https://picsum.photos/200'}
       alt="logo"
       width={200}
       height={200}
      />
     </div>
     <h1 className="text-2xl font-bold text-slate-200">@Signpost</h1>
    </div>
   </div>
   <div className="max-w-3xl mx-auto px-5 flex flex-col gap-5">
    {temp.map((i) => (
     <Link key={i} color="light" radius="rounded" className="flex justify-start">
      <LinkIcon radius="rounded" />
      <LinkText font="medium" color="light">
       Testing link - medium
      </LinkText>
     </Link>
    ))}
   </div>
  </>
 )
}
