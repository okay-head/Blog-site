import { useRef } from 'react'
import useContextHook from '../../state/useContextHook'
import Tag from './Tag'
import { useNavigate } from 'react-router-dom'
import defaultData from '../../state/defaultData'

export default function Card1({
  tagNone = '',
  data = defaultData,
  classVars = '',
  forTag = '',
}) {
  const { isSignedIn } = useContextHook()
  const articleRef = useRef(null)
  const navigate = useNavigate()

  return (
    <article
      ref={articleRef}
      className={`group flex flex-col gap-4 border-t-2 py-7 hover:cursor-pointer md:py-8 ${classVars}`}
      id={`${data.id}`}
      onClick={() => {
        navigate(`/view/${articleRef?.current?.id}`, { state: { data } })
      }}
    >
      <div className='card-head flex gap-3'>
        <div className=''>
          <img
            src={data?.avatar || defaultData?.avatar}
            alt='avatar'
            className='aspect-square w-9 rounded-full'
          />
        </div>
        <div>
          <span className='block text-sm font-semibold'>
            {data?.author || defaultData?.author}
          </span>
          <span className='block text-xs font-semibold text-[var(--text-gray)]'>
            3 min read
          </span>
        </div>
        <div>
          <span className='bullet relative mt-[1px] block text-xs font-semibold text-[var(--text-gray)]'>
            {data?.date || defaultData?.date}
          </span>
        </div>
      </div>

      <div className='card-content grid h-40 grid-cols-[2.8fr,1.3fr] items-center gap-4 overflow-hidden md:h-48'>
        <div className='h-40 md:h-48'>
          <h2 className='pb-2 text-lg font-bold !leading-6 group-hover:underline md:text-2xl'>
            {data?.title || defaultData?.title}
          </h2>
          <p className='text-sm text-[var(--text-gray)]'>
            {data?.body || defaultData?.body}
          </p>
        </div>
        <div
          className={`img-container bg-style h-32 min-w-[130px] overflow-hidden rounded-md  bg-blue-400 md:h-48 ${
            isSignedIn ? '' : 'md:ms-auto md:w-72'
          }`}
          style={{
            backgroundImage:
              'url("/assets/(s)mick-haupt-TEjR4zowKgE-unsplash.jpg")',
          }}
        ></div>
      </div>
      <div className={`tags mt-1 flex gap-3 ${tagNone}`}>
        <Tag classVars={forTag} txt={data?.tags[0] || defaultData?.tags[0]} />
        <Tag classVars={forTag} txt={data?.tags[1] || defaultData?.tags[1]} />
      </div>
    </article>
  )
}
