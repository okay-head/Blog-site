import { useState, useEffect } from 'react'
import Container from '../Container'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'
import NotSignedIn from './NotSignedIn'
import sparkles from './razzle-dazzle.png'
import 'sticksy'
import useContextHook from '../../state/useContextHook'

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
  const { isSignedIn } = useContextHook()

  useEffect(() => {
    resizeFn()
    /* var instance = new Sticksy(target[, options]); */
    let stickyEl = new Sticksy('.js-sticky-widget', {
      listen: true,
      topSpacing: isSignedIn ? -215 : 70,
    })
    stickyEl.onStateChanged = function (state) {
      if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky')
      else stickyEl.nodeRef.classList.remove('widget--sticky')
    }
    // uncomment in production
    // return(
    //   removeEventListener('resize',handleResize)
    // )
  }, [])
  /*   -------- resize logic -------- */

  return (
    <aside className='bg-[var(--gray-100)] lg:max-w-lg '>
      <Container classVars='py-8 lg:py-10 lg:ps-6 xl:ps-9 js-sticky-widget'>
        {isSignedIn ? (
          <div className='signedIn'>
            <section className='reading-list'>
              <h2 className='block text-lg font-bold md:text-xl'>
                My reading list
              </h2>
              {width > lg ? <Card2 /> : <Card1 tagNone={'hidden'} />}
              <div className='mt-3 text-right text-xs font-semibold'>
                <a href='#' className='me-2 underline hover:no-underline'>
                  See all
                </a>
              </div>
            </section>

            <section className='suggestions mt-8'>
              <div className='suggestion-header flex items-center gap-2'>
                <img src={sparkles} alt='sparkles' className='h-6 w-6' />
                <h2 className='relative block text-lg font-bold md:text-xl'>
                  Suggested
                </h2>
              </div>
              {width > lg ? <Card2 /> : <Card1 tagNone={'hidden'} />}
              {width > lg ? <Card2 /> : <Card1 tagNone={'hidden'} />}
              {width > lg ? <Card2 /> : <Card1 tagNone={'hidden'} />}
              <div className='mt-3 pb-2 text-right text-xs font-semibold'>
                <a href='#' className='me-2 underline hover:no-underline'>
                  See more
                </a>
              </div>
            </section>
          </div>
        ) : (
          <NotSignedIn />
        )}
      </Container>
    </aside>
  )
}
