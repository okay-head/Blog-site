import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card2Skeleton() {
  return (
    <article className='pt-8'>
      <div className='card-content grid h-40 grid-cols-[0.9fr,1.1fr] items-center gap-4 overflow-hidden'>
        <div className='img-container  h-36 min-w-[130px]  rounded-md'>
          <Skeleton baseColor='#8d8d8d' highlightColor='#ffffffd1' height={144} />
        </div>

        <div className='grid h-36 place-items-center min-w-[231px]'>
          <div>
            <h2 className='cursor-pointer pb-1 text-lg font-semibold !leading-5 hover:underline min-w-[231px] h-6'>
              <Skeleton baseColor='#8d8d8d' highlightColor='#ffffffd1' height={24}/>
            </h2>
            <p className='max-h-[8ch] overflow-hidden py-2 text-sm text-[var(--text-gray)] min-w-[231px] h-28'>
              <Skeleton baseColor='#8d8d8d' highlightColor='#ffffffd1' height={112} />
            </p>

            <div className='card-head flex max-h-7 gap-2 overflow-hidden pt-2 xl:gap-5'>
              <div>
                <span className='block text-sm font-semibold min-w-[231px]'>
                  <Skeleton baseColor='#8d8d8d' highlightColor='#ffffffd1' />
                </span>
              </div>
              <div>
                <span className='bullet relative mt-[1px] block text-xs font-semibold text-[var(--text-gray)] min-w-[231px]'>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
