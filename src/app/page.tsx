import Image from 'next/image'
import ProfileLoading from '../components/fallback/loading.profile'
import { Suspense } from 'react'
import LinksLoading from '@/components/fallback/loading,links'

export default function Home() {
  return (
    <main>
      <div className='flex center flex-column gap-2'>
        <Suspense fallback={<ProfileLoading />}>
          <ProfileLoading />
        </Suspense>
        <Suspense fallback={<LinksLoading />}>
          <LinksLoading />
        </Suspense>
      </div>
    </main>
  )
}
