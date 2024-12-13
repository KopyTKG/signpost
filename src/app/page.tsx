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

 let url = process.env.GIST
 if (!url) {
  error = 'missing gist url'
 }
 try {
  const res = await fetch(url, {
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
     <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 shadow-md">
      <Image src={'https://picsum.photos/200'} alt="logo" width={200} height={200} />
     </div>
     <h1 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">@Signpost</h1>
    </div>
   </div>
   <div className="max-w-3xl mx-auto px-5 flex flex-col gap-5">
    {data.map((item: LinkItem, i) => (
     <Link key={i} time={i} href={item.href} radius="rounded" className="flex justify-start">
      <LinkIcon radius="rounded" src={item.icon} />
      <LinkText href={item.href} font="medium">
       {item.text}
      </LinkText>
     </Link>
    ))}
   </div>
  </>
 )
}
