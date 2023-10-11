import useContextHook from '../../state/useContextHook'
import axios from 'axios'
import Container from '../Container'
import Card1 from '../cards/Card1'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import triggerAlert from '../shared/triggerAlert'

export default function MyArticlesAndBookmarks({ mode }) {
  const {
    user: { user_id, user_articles, user_bookmarks },
    setUser,
    isSignedIn,
    baseUrl,
  } = useContextHook()

  // if(!)
  // get feed data (iife)
  const [feedData, setFeedData] = useState('No feed data')
  useEffect(() => {
    getRequest(mode)
  }, [mode, user_bookmarks])

  const getRequest = (mode) => {
    if (mode == 'articles') {
      const data = (async () => {
        try {
          return Promise.all(
            user_articles.map((id) => axios.get(`${baseUrl}/data/${id}`))
          )
        } catch (e) {
          // alert(e)
          console.log(e)
        }
      })()
      data.then((res) => setFeedData(res.map(({ data }) => data)))
      return
    }

    // if mode == bookmarks
    const data = (async () => {
      try {
        return Promise.all(
          user_bookmarks.map((id) => axios.get(`${baseUrl}/data/${id}`))
        )
      } catch (e) {
        // alert(e)
        console.log(e)
      }
    })()
    data.then((res) => setFeedData(res.map(({ data }) => data)))
  }

  const deleteCard = (mode, id) => {
    if (mode == 'articles') {
      const data = (async () => {
        try {
          // more like patch
          const new_user_articles = user_articles.filter((el) => el != id)
          const new_user_bookmarks = user_bookmarks.filter((el) => el != id)
          // delete from the user list
          // delete from the article list
          // i dont fucking know why promise.all is not working guess i'll queue them separately
          return axios.patch(
            `${baseUrl}/user/${user_id}`,
            {
              user_articles: new_user_articles,
              user_bookmarks: new_user_bookmarks,
            },
            { headers: { 'Content-Type': 'application/json' } }
          )
        } catch (e) {
          // alert(e)
          console.log(e)
        }
      })()
      data
        .then((res) => {
          setUser(res.data)
          return axios.delete(`${baseUrl}/data/${id}`)
        })
        .then(() => {
          triggerAlert(undefined, 'Article removed!')
          console.log('Deleted!')
        })
      // data.then((res) => setFeedData(res.map(({ data }) => data)))
      return
    }

    // if mode==bookmarks
    const data = (async () => {
      const new_user_bookmarks = user_bookmarks.filter((el) => el != id)
      // console.log(new_user_bookmarks)
      try {
        return await axios.patch(
          `${baseUrl}/user/${user_id}`,
          {
            user_bookmarks: new_user_bookmarks,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
      } catch (e) {
        // alert(e)
        console.log(e)
      }
    })()

    data.then((res) => {
      console.log(res.data)
      setUser(res.data)
      triggerAlert(undefined, 'Bookmark removed!')
      // getRequest(mode)
      // window.location.reload()
    })
  }

  return (
    <section className={`my-${mode} relative min-h-screen pb-24 pt-[4.5rem]`}>
      <Container classVars='pt-10'>
        <div className='heading-text justify-between border-b-2 pb-4  md:mb-10 md:flex md:pb-6'>
          <div className='heading'>
            <h1 className='block text-lg font-bold md:text-2xl'>My {mode}</h1>
          </div>

          {/* <div className='search-bar relative flex-1 py-1 pt-4 md:ms-auto md:max-w-xs md:p-0 lg:max-w-md'>
            <input
              type='text'
              placeholder='Search'
              className='input-bordered input h-auto w-full rounded-3xl !border-[1px] py-2 ps-10 placeholder:text-sm  md:max-w-xs lg:max-w-md '
            />
            <img
              src='/assets/loupe(2).png'
              alt='search-icon'
              className='absolute left-4 top-[1.90rem] block w-4 md:top-[.90rem]'
            />
          </div> */}
        </div>
        <div
          className={`${mode}-flex-container grid-flow-row grid-cols-2 gap-10 md:grid`}
        >
          {/* add condition for if no articles are present */}
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
              <div className='col-span-2 mt-24 md:mt-8 grid place-items-center '>
                <img
                  src='/assets/image-removebg-preview.png'
                  alt='Man thinking graphic'
                />
                <h3 className='mt-4 text-lg italic text-[var(--text-lighter)]'>
                  You have authored no articles.
                </h3>
              </div>
            ) : (
              <div className='col-span-2 mt-28 md:mt-16 grid place-items-center '>
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
            <h2>Loader</h2>
          )}
        </div>

        {/* <div className='mb-1 mt-12 text-right text-xs font-semibold text-[var(--text-gray)] md:text-sm'>
          <Link to='/' className='me-2 underline hover:no-underline'>
            Back to all articles
          </Link>
        </div> */}
      </Container>
      <div className='absolute bottom-8 right-5 md:right-11 mb-1 mt-12 text-right text-xs font-semibold text-[var(--text-gray)] md:text-sm'>
        <Link to='/' className='me-2 underline hover:no-underline'>
          Back to all articles
        </Link>
      </div>
    </section>
  )
}
