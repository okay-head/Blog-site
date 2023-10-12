import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Card1Skeleton({ isSignedIn = 'true' }) {
  return (
    <article
      className={`group relative flex flex-col gap-4 border-t-2 py-7 md:py-8 `}
    >
      <div className='card-head flex gap-3'>
        <div className=''>
          <span className='w-9 rounded-full'>
            <Skeleton
              baseColor='#d8d9d9'
              highlightColor='#e5e6e6'
              height={36}
              width={36}
              circle={true}
            />
          </span>
        </div>
        <div>
          <span className='block w-40 text-sm font-semibold'>
            <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' />
            {/* {data?.author || defaultData?.author} */}
          </span>
          <span className='block w-24 text-xs font-semibold text-[var(--text-gray)]'>
            <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' />
            {/* {readingTime(data?.body) || 3} min read */}
          </span>
        </div>
        <div>
          <span className=' relative mt-[1px] block w-20 text-xs font-semibold text-[var(--text-gray)]'>
            <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' />
            {/* {data?.date || defaultData?.date} */}
          </span>
        </div>
      </div>
      <div className='card-content grid h-40 grid-cols-[2.8fr,1.3fr] items-center gap-4 overflow-hidden md:h-48'>
        <div className='h-40 md:h-48'>
          <h2 className='h-8 pb-2 text-lg font-bold !leading-6 hover:cursor-pointer hover:underline md:text-2xl'>
            <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' />
            {/* {data?.title || defaultData?.title} */}
          </h2>
          <p className='h-36 text-sm text-[var(--text-gray)]'>
            <Skeleton
              baseColor='#d8d9d9'
              highlightColor='#e5e6e6'
              height={144}
            />
            {/* {data?.body || defaultData?.body} */}
          </p>
        </div>
        <div
          className={`img-container bg-style h-32 min-w-[130px] overflow-hidden rounded-md md:h-48  ${
            isSignedIn ? '' : 'md:ms-auto md:w-72'
          }`}
        >
          <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' height={176} />
        </div>
      </div>
      <div className={`tags mt-1 flex h-2 gap-3`}>
        <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' height={8} />
      </div>
    </article>
  )
}
