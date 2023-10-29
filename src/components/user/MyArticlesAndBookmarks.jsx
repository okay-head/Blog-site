import useContextHook from '../../state/useContextHook'
import Container from '../Container'
import Card1 from '../cards/Card1'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import triggerAlert from '../shared/triggerAlert'
import { triggerLoadingScreen } from '../shared/LoadingScreen'
import { deleteFn, getFn, patchFn } from '../../firebase/realtimeDb'

export default function MyArticlesAndBookmarks({ mode }) {
  const {
    user: { user_id },
    setUser,
    render,
    setRender,
  } = useContextHook()

  let {
    user: { user_articles, user_bookmarks },
  } = useContextHook()
  user_articles = user_articles == undefined ? [] : user_articles
  user_bookmarks = user_bookmarks == undefined ? [] : user_bookmarks

  // show loading screen until feed data is ready
  const [feedData, setFeedData] = useState(undefined)
  if (Array.isArray(feedData)) triggerLoadingScreen(false)
  else triggerLoadingScreen(true)

  // call the backend for render data whenever the mode changes, as well as on the first load
  useEffect(() => {
    getRequest(mode)
    triggerLoadingScreen(true)
  }, [mode, render])

  const getRequest = async (mode) => {
    // console.log('get req | gets called')
    if (mode == 'articles') {
      const data = await Promise.all(
        user_articles.map((id) => getFn(`/data/${id}`))
      )
      setFeedData(data)
      return
    }

    // if mode == bookmarks
    const data = await Promise.all(
      user_bookmarks.map((id) => getFn(`/data/${id}`))
    )
    setFeedData(data)
  }

  const deleteCard = async (mode, id) => {
    if (mode == 'articles') {
      // the article could also be a user bookmark
      const new_user_articles = user_articles.filter((el) => el != id)
      const new_user_bookmarks = user_bookmarks.filter((el) => el != id)

      // delete from the user list
      await patchFn(`users/${user_id}`, {
        user_articles: new_user_articles,
        user_bookmarks: new_user_bookmarks,
      })

      // delete from the article list
      await deleteFn(`/data/${id}`)

      // update user data in context
      const newUserData = await getFn(`users/${user_id}`)
      setUser(newUserData)

      // trigger for re-render
      setRender((prev) => !prev)
      triggerAlert(undefined, 'Article removed!')
      return
    }

    // if mode==bookmarks
    const new_user_bookmarks = user_bookmarks.filter((el) => el != id)

    await patchFn(`/users/${user_id}`, {
      user_bookmarks: new_user_bookmarks,
    })

    // update user data in context
    const newUserData = await getFn(`users/${user_id}`)
    setUser(newUserData)

    // getRequest(mode)
    // trigger for re-render
    setRender((prev) => !prev)
    triggerAlert(undefined, 'Bookmark removed!')
  }

  return (
    <section className={`my-${mode} relative min-h-screen pb-24 pt-[4.5rem]`}>
      <Container classVars='pt-10'>
        <div className='heading-text justify-between border-b-2 pb-4  md:mb-10 md:flex md:pb-6'>
          <div className='heading'>
            <h1 className='block text-lg font-bold md:text-2xl'>My {mode}</h1>
          </div>
        </div>
        <div
          className={`${mode}-flex-container grid-flow-row grid-cols-2 gap-10 md:grid`}
        >
          {/* add condition for if no articles are present */}
          {/* The first ternay checks if the feedData is an array */}
          {/* The second checks if it isn't a zero length array */}
          {Array.isArray(feedData) ? (
            feedData.length != 0 ? (
              feedData?.map((x) => (
                <Card1
                  deleteCard={deleteCard}
                  mode={mode}
                  minus={true}
                  key={x.id}
                  data={x}
                  classVars='bg-[var(--gray-100)] p-6 rounded-lg !border-t-0 mt-6'
                  forTag='!border-2 !border-[var(--gray-200)]'
                />
              ))
            ) : mode === 'articles' ? (
              <div className='col-span-2 mt-24 grid place-items-center md:mt-8 '>
                <img
                  src='/assets/image-removebg-preview.png'
                  alt='Man thinking graphic'
                />
                <h3 className='mt-4 text-lg italic text-[var(--text-lighter)]'>
                  You have authored no articles.
                </h3>
              </div>
            ) : (
              <div className='col-span-2 mt-28 grid place-items-center md:mt-16 '>
                <img
                  src='/assets/icons8-bookmark-250(new).png'
                  alt='Bookmark graphic'
                />
                <h3 className='mt-4 text-lg italic text-[var(--text-lighter)]'>
                  Your bookmarks are empty!
                </h3>
              </div>
            )
          ) : (
            <h2>Feed data is not an array</h2>
          )}
        </div>
      </Container>
      <div className='absolute bottom-8 right-5 mb-1 mt-12 text-right text-xs font-semibold text-[var(--text-gray)] md:right-11 md:text-sm'>
        <Link to='/' className='me-2 underline hover:no-underline'>
          Back to all articles
        </Link>
      </div>
    </section>
  )
}
