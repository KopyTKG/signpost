import { Link, LinkIcon, LinkText } from '@/components/slot'
import Image from 'next/image'

interface LinkItem {
 text: string
 href: string
 icon: string
}

export default async function Home() {
 let data: LinkItem[] = []
 let error: string | null = null

 try {
  const res = await fetch('https://gist.github.com/KopyTKG/920c0e87dcaedc5ce158fe67c6896ed4/raw', {
   method: 'GET',
   headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
   next: { revalidate: 3600 },
  })

  if (!res.ok) {
   throw new Error(`HTTP error! status: ${res.status}`)
  }

  const text = await res.text()

  try {
   data = JSON.parse(text)
  } catch (e) {
   throw new Error('Failed to parse JSON')
  }
 } catch (e) {
  error = e instanceof Error ? e.message : 'An unknown error occurred'
 }

 if (error) {
  return (
   <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
    Failed to load data: {error}
   </div>
  )
 }
 return (
  <>
   <div className=" w-full flex justify-center py-10">
    <div className="flex flex-col justify-center items-center">
     <div className="w-24 h-24 border-2 rounded-full overflow-hidden">
      <Image src={'https://picsum.photos/200'} alt="logo" width={200} height={200} />
     </div>
     <h1 className="text-2xl font-bold text-slate-200">@Signpost</h1>
    </div>
   </div>
   <div className="max-w-3xl mx-auto px-5 flex flex-col gap-5">
    {data.map((item: LinkItem, i) => (
     <Link key={i} time={i} color="light" radius="rounded" className="flex justify-start">
      <LinkIcon radius="rounded" src={item.icon} />
      <LinkText href={item.href} font="medium" color="light">
       {item.text}
      </LinkText>
     </Link>
    ))}
   </div>
  </>
 )
}
