import { useEffect } from 'react'
import Aside from './aside/Aside'
import Feed from './feed/Feed'
import scrollTop from '../utility/scrollToTop'
export default function Main() {
  useEffect(() => {
    scrollTop()
  }, [])
  return (
      <main className='pt-[4.5rem] lg:flex'>
        <Feed />
        <Aside />
      </main>
  )
}
