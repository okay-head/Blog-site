import { useState, useEffect } from 'react'
import Container from '../Container'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'
import NotSignedIn from './NotSignedIn'
import sparkles from './razzle-dazzle.png'
import 'sticksy'
import useContextHook from '../../state/useContextHook'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Aside() {
  const [bookmarks, setBookmarks] = useState('')
  const [suggestions, setSuggestions] = useState()

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
  /*   -------- resize logic -------- */

  const {
    isSignedIn,
    user: { user_bookmarks },
  } = useContextHook()

  useEffect(() => {
    // _______topMargin adjustment_______
    // const topMargin = -215
    // heading offset = 25 | article offset = 190
    let topMargin = undefined
    if (isSignedIn) {
      const numberOfBookmarks = user_bookmarks?.length
      topMargin =
        user_bookmarks.length == 0 ? 70 : -25 + -192 * numberOfBookmarks
    }
    // console.log(numberOfBookmarks)

    resizeFn()
    /* var instance = new Sticksy(target[, options]); */
    let stickyEl = new Sticksy('.js-sticky-widget', {
      listen: true,
      topSpacing: isSignedIn ? topMargin : 70,
    })
    stickyEl.onStateChanged = function (state) {
      if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky')
      else stickyEl.nodeRef.classList.remove('widget--sticky')
    }
    // uncomment in [production]
    // return(
    //   removeEventListener('resize',handleResize)
    // )
  }, [])

  useEffect(() => {
    if (!isSignedIn) {
      return
    }
    // ____setBookmarks____
    ;(async function getBookmarks() {
      const res = await Promise.all(
        user_bookmarks.map((x) => axios.get(`http://localhost:3000/data/${x}`))
      )
      setBookmarks(res)
      console.log(bookmarks)
    })()

    // ____setBookmarks____
    ;(async function getSuggestions() {
      const res = await Promise.all([
        axios.get(`http://localhost:3000/data/7`),
        axios.get(`http://localhost:3000/data/8`),
        axios.get(`http://localhost:3000/data/9`),
      ])

      setSuggestions(res)
    })()
  }, [])

  return (
    <aside
      className={`bg-[var(--gray-100)] lg:max-w-lg ${
        isSignedIn ? 'lg:min-w-[512px]' : ''
      }`}
    >
      <Container classVars='py-8 lg:py-10 lg:ps-6 xl:ps-9 js-sticky-widget'>
        {isSignedIn ? (
          <div className='signedIn'>
            <section
              className={`reading-list mb-8 ${
                user_bookmarks.length == 0 ? 'hidden' : ''
              }`}
            >
              <h2 className='block text-lg font-bold md:text-xl'>
                My bookmarks
              </h2>

              {/* rendering bookmarks */}

              {Array.isArray(bookmarks) && width > lg
                ? Array.isArray(bookmarks) &&
                  bookmarks?.map((x) => (
                    <Card2 key={x?.data?.id} data={x?.data} />
                  ))
                : Array.isArray(bookmarks) &&
                  bookmarks?.map((x) => (
                    <Card1
                      tagNone={'hidden'}
                      key={x?.data?.id}
                      data={x?.data}
                    />
                  ))}

              <div className='mt-3 text-right text-xs font-semibold'>
                <Link to={'user/bookmarks'}>
                  <span className='me-2 underline hover:no-underline'>
                    See all
                  </span>
                </Link>
              </div>
            </section>

            <section className='suggestions'>
              <div className='suggestion-header flex items-center gap-2'>
                <img src={sparkles} alt='sparkles' className='h-6 w-6' />
                <h2 className='relative block text-lg font-bold md:text-xl'>
                  Suggested
                </h2>
              </div>

              {/* rendering suggestions | these 'll always be three */}
              {Array.isArray(suggestions) && width > lg
                ? Array.isArray(suggestions) &&
                  suggestions?.map((x) => (
                    <Card2 key={x?.data?.id} data={x?.data} />
                  ))
                : Array.isArray(suggestions) &&
                  suggestions?.map((x) => (
                    <Card1
                      tagNone={'hidden'}
                      key={x?.data?.id}
                      data={x?.data}
                    />
                  ))}

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
