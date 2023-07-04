import { useState, useEffect } from 'react'
import Container from '../Container'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'

export default function Aside() {
  /*   -------- resize logic -------- */

  //debounce/ optimize later
  const [sm, md, lg, xl] = [640, 768, 1024, 1280]
  const [width, setWidth] = useState(window.innerWidth)

  function handleResize() {
    setWidth(window.innerWidth)
  }
  function resizeFn() {
    addEventListener('resize', handleResize)
  }

  useEffect(() => {
    resizeFn()

    // uncomment in production
    // return(
    //   removeEventListener('resize',handleResize)
    // )
  }, [])

  /*   -------- resize logic -------- */

  return (
    <aside className='bg-[var(--gray-100)] lg:max-w-lg '>
      <Container classVars='pt-10 lg:ps-6 xl:ps-9'>
        <section className='reading-list'>
          <h1 className='block text-lg font-bold md:text-2xl'>
            My reading list
          </h1>
          {width > lg ? <Card2 /> : <Card1 />}
        </section>

        <section className='suggestions'>
          {width > lg ? <Card2 /> : <Card1 />}
          {width > lg ? <Card2 /> : <Card1 />}
        </section>
      </Container>
    </aside>
  )
}
