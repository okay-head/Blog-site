import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card2Skeleton() {
  return (
    <article className='pt-8'>
      <div className='card-content grid h-40 grid-cols-[0.9fr,1.1fr] items-center gap-4 overflow-hidden'>
        <div className='img-container  h-36 min-w-[130px]  rounded-md'>
          <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' height={144} />
        </div>

        <div className='grid h-36 min-w-[231px] place-items-center'>
          <div>
            <h2 className='h-6 min-w-[231px] cursor-pointer pb-1 text-lg font-semibold !leading-5 hover:underline'>
              <Skeleton
                baseColor='#d8d9d9'
                highlightColor='#e5e6e6'
                height={24}
              />
            </h2>
            <p className='h-28 max-h-[8ch] min-w-[231px] overflow-hidden py-2 text-sm text-[var(--text-gray)]'>
              <Skeleton
                baseColor='#d8d9d9'
                highlightColor='#e5e6e6'
                height={112}
              />
            </p>

            <div className='card-head flex max-h-7 gap-2 overflow-hidden pt-2 xl:gap-5'>
              <div>
                <span className='block min-w-[231px] text-sm font-semibold'>
                  <Skeleton baseColor='#d8d9d9' highlightColor='#e5e6e6' />
                </span>
              </div>
              <div>
                <span className='relative mt-[1px] block min-w-[231px] text-xs font-semibold text-[var(--text-gray)]'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
