import { useEffect } from 'react'
import Aside from './aside/Aside'
import Feed from './feed/Feed'
export default function Main() {
  const root = document.getElementsByTagName('html')[0]
  useEffect(()=>{
    root.scrollTop = 0
  },[])
  return (
    <main className='pt-[4.5rem] lg:flex'>
      <Feed />
      <Aside />
    </main>
  )
}
