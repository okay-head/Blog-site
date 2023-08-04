import { useEffect, useState } from 'react'
import defaultData from '../../state/defaultData'
import useContextHook from '../../state/useContextHook'
import Container from '../Container'
import Tag from '../cards/Tag'
import { Link, useLocation } from 'react-router-dom'

export default function View() {
  // const {state:{ref, data}} = useLocation()
  const { state } = useLocation()
  const { isSignedIn, user } = useContextHook()

  const [data, setData] = useState({})

  const root = document.getElementsByTagName('html')[0]
  useEffect(() => {
    setData(state?.data)
    root.scrollTop = 0
  }, [])
  // console.log(defaultData)
  // console.log({ref,data})

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
            <img src='/assets/user.png' alt='avatar' className='w-11 lg:w-14' />
          </div>

          <div className='flex flex-col gap-[1px]'>
            <span className='block text-base font-semibold lg:text-lg'>
              {data?.author || defaultData?.author}
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              3 min read
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              Last updated: {data?.date || defaultData?.date}
            </span>
          </div>

          {isSignedIn ? (
            <div
              id='user-logged-in-article-tools'
              className='me-6 ms-auto flex gap-3 self-end'
            >
              {user?.id == data.author_id ? (
                <button
                  id='edit-article'
                  className='-mb-1 block w-8 rotate-[270deg] lg:w-11'
                >
                  <img src='/assets/pen(1).png' alt='pencil' />
                </button>
              ) : (
                <span></span>
              )}
              <button id='bookmark-article' className='-mb-1 block w-7 lg:w-10'>
                <img src='/assets/book(1).png' alt='book' />
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div
          className={`img-container bg-style custom-h-img overflow-hidden rounded-md  bg-blue-400`}
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
          <Tag
            txt={(data?.tags && data.tags[0]) || defaultData?.tags[0]}
            classVars='lg:text-base'
          />
          <Tag
            txt={(data?.tags && data.tags[1]) || defaultData?.tags[1]}
            classVars='lg:text-base'
          />
        </div>

        <div className='border-t-2 pb-3 pt-6 text-right text-xs font-semibold text-[var(--text-gray)] md:text-sm lg:text-base'>
          <Link to='/' className='me-2 underline hover:no-underline'>
            Back to all articles
          </Link>
        </div>
      </article>
    </Container>
  )
}
