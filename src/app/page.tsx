import Image from 'next/image'
import ProfileLoading from '../components/fallback/loading.profile'
import { Suspense } from 'react'
import LinksLoading from '@/components/fallback/loading,links'
import Profile from '@/components/profile'

export default function Home() {
  return (
    <main>
      <div className='flex center flex-column gap-2'>
        <Suspense fallback={<ProfileLoading />}>
          <Profile
            src='/profile.png'
            checked={true}
            >
            aa
          </Profile>
        </Suspense>
        <Suspense fallback={<LinksLoading />}>
          <LinksLoading />
        </Suspense>
      </div>
    </main>
  )
}
