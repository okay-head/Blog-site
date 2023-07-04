export default function Card2() {
  return (
    <article className='py-6'>
      <div className='card-content grid h-40 grid-cols-[0.9fr,1.1fr] items-center gap-4 overflow-hidden'>
        <div
          className='img-container bg-style h-36 min-w-[130px]  rounded-md bg-blue-400'
          style={{
            backgroundImage: 'url("/assets/(md)galaxy.jpg")',
          }}
        ></div>

        <div className='h-36'>
          <h2 className='pb-1 text-lg font-bold !leading-6'>
            The lonliest galaxy in the universe
          </h2>
          <p className='max-h-[8ch] overflow-hidden py-1 text-sm text-[var(--text-gray)]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur
          </p>

          <div className='card-head flex max-h-6 gap-2 overflow-hidden pt-1 xl:gap-5'>
            {/* <div>
              <img src='/assets/user.png' alt='avatar' className='w-9' />
            </div> */}
            <div>
              <span className='block text-sm font-semibold'>Ethan Seigal</span>
              {/* <span className='block text-xs font-semibold text-[var(--text-gray)]'>
                3 min read
              </span> */}
            </div>
            <div>
              <span className='bullet relative mt-[1px] block text-xs font-semibold text-[var(--text-gray)]'>
                16th Apr, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
