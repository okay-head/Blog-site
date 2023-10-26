import { useEffect, useState } from 'react'
import defaultData from '../../state/defaultData'
import useContextHook from '../../state/useContextHook'
import Container from '../Container'
import Tag from '../cards/Tag'
import { Link, useLocation } from 'react-router-dom'
import scrollTop from '../../utility/scrollToTop'
import Tooltip from '../shared/Tooltip'
import readingTime from '../../utility/readingTime'
import triggerAlert from './../shared/triggerAlert'
import { triggerLoadingScreen } from '../shared/LoadingScreen'
import { getFn, patchFn } from '../../firebase/realtimeDb'

export default function View() {
  const { pathname, state } = useLocation()
  const { isSignedIn, user, setUser } = useContextHook()

  // article data is coming from route state
  // i.e. it won't be passed when navigating directly thru url (solution below :26)
  const [data, setData] = useState(state?.data)
  if (Array.isArray(Object.values(data || {}))) triggerLoadingScreen(false)
  else triggerLoadingScreen(true)

  useEffect(() => {
    scrollTop()
    // if state data from prev route is not present, then make an api call to fetch data
    if (!state) {
      const x = Number(pathname.split('/')[2])
      console.log(`Route state doesnt exist. Fetching data for ${x}...`)
      ;(async function () {
        const d = await getFn('/data/' + x)
        setData(d)
      })()
    }
  }, [])
  const patchUrl = `/users/${user?.id}`
  const addBookmark = async () => {
    // make a patch request
    try {
      // first check if bookmark already exists
      if (user?.user_bookmarks?.find((x) => x == data.id)) {
        triggerAlert(undefined, 'Already added to bookmarks!')
        return
      }

      const payload =
        user?.user_bookmarks == undefined
          ? { user_bookmarks: [data.id] }
          : { user_bookmarks: [...user.user_bookmarks, data.id] }

      await patchFn(patchUrl, payload)
      triggerAlert(undefined, 'Bookmark added!')

      // refetch user data
      // update user state

      const newUserData = await getFn(patchUrl)
      setUser(newUserData)
    } catch (e) {
      throw new Error(e)
    }
  }
  return (
    <Container classVars='lg:max-w-5xl xl:px-0'>
      <article
        className='flex flex-col gap-6 pb-7 pt-24 md:pb-8 md:pt-28'
        style={{ container: 'inline-size' }}
      >
        <div className='article-heading'>
          <h2 className='-mb-2 text-2xl font-bold md:text-3xl lg:mb-1 lg:text-4xl'>
            {data?.title || defaultData?.title}
          </h2>
        </div>

        <div className='card-head flex items-center gap-2 lg:gap-3'>
          <div>
            <img
              src={data?.avatar || defaultData?.avatar}
              alt='avatar'
              className='aspect-square w-11 rounded-full lg:w-14'
            />
          </div>

          <div className='flex flex-col gap-[1px]'>
            <span className='block text-base font-semibold lg:text-lg'>
              {data?.author || defaultData?.author}
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              {readingTime(data?.body) || 3} min read
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              Last updated: {data?.date || defaultData?.date}
            </span>
          </div>

          {isSignedIn ? (
            <div
              id='user-logged-in-article-tools'
              className='me-2 ms-auto flex gap-3 self-end md:me-6'
            >
              {user?.id == data?.author_id ? (
                <Link
                  to='/edit'
                  state={{ data, from: pathname }}
                  id='edit-article'
                  className='group relative -mb-1 block w-8  lg:w-11'
                >
                  <img
                    src='/assets/pen(1).png'
                    alt='pencil'
                    className='rotate-[270deg]'
                  />

                  <Tooltip text='Edit' left='-left-[10%]' />
                </Link>
              ) : (
                <span></span>
              )}
              <button
                onClick={addBookmark}
                id='bookmark-article'
                className='group relative -mb-1 block w-7 lg:w-10'
              >
                <img src='/assets/book(1).png' alt='book' />

                <Tooltip text='Bookmark' left='-left-[90%] lg:-left-[46%]' />
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div
          className={`img-container bg-style custom-h-img overflow-hidden rounded-md  bg-[#b0b1b3]`}
          style={{
            backgroundImage:
              'url("/assets/(m)mick-haupt-TEjR4zowKgE-unsplash(1).jpg")',
          }}
        ></div>

        <div className='article-body'>
          <p className='text-justify text-base text-[var(--text-base)] lg:text-lg'>
            {data?.body || defaultData?.body}
          </p>
        </div>

        <div className={`tags mt-1 flex gap-3`}>
          {data?.tags
            ? data.tags.map((x, i) => (
                <Tag
                  key={Number(data.id) + i}
                  txt={x}
                  classVars='lg:text-base'
                />
              ))
            : defaultData?.tags &&
              defaultData.tags.map((x, i) => (
                <Tag key={i} txt={x} classVars='lg:text-base' />
              ))}
        </div>

        <div className='border-t-2 pb-3 pt-6 text-right text-xs font-semibold text-[var(--text-gray)] md:text-sm lg:text-base'>
          <Link to='/' className='me-1 underline hover:no-underline md:me-2'>
            Back to all articles
          </Link>
        </div>
      </article>
    </Container>
  )
}
