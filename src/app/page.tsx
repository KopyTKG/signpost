import { Link, LinkIcon } from '@/components/slot'
import Image from 'next/image'

export default function Home() {
 return (
  <>
   <div className="w-screen flex justify-center py-10">
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
    <Link color="light" radius="soft" className="flex justify-start">
     <LinkIcon radius="soft" />
    </Link>
    <Link color="light" radius="soft" className="flex justify-start">
     <LinkIcon radius="soft" />
    </Link>
    <Link color="light" radius="soft" className="flex justify-start">
     <LinkIcon radius="soft" />
    </Link>
   </div>
  </>
 )
}
