import useContextHook from '../../state/useContextHook'
import Tag from './Tag'
const defaultData = {
  id: 1,
  avatar: null,
  author: 'Tim Urban',
  date: '16th April, 2023',
  title: 'Long term effects of our increasing disconnect from nature',
  body: 'Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque, aperiam quam ipsa vero alias. Fuga, corporis optio! Sequi dolores tempora repellendus placeat ipsum reprehenderit omnis. Sapiente quaerat iusto laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum ex tenetur numquam minima molestiae expedita illo sequi sint, necessitatibus eligendi praesentium sit dicta aspernatur repellat veniam libero architecto harum. consectetur adipisicing elit. Culpa molestias aut facere nihil deleniti doloribus, saepe ex. Itaque, eveniet? Dolorum possimus dolor asperiores ea aperiam dicta fugit vero assumenda iste! Lorem ipsum',
  tags: ['Health', 'Lifestyle'],
  hero: null,
}
export default function Card1({ tagNone = '', data = defaultData }) {
  const { isSignedIn } = useContextHook()
  return (
    <article className='flex flex-col gap-4 border-t-2 py-7 md:py-8 '>
      <div className='card-head flex gap-3'>
        <div className=''>
          <img src='/assets/user.png' alt='avatar' className='w-9' />
        </div>
        <div>
          <span className='block text-sm font-semibold'>{data?.author || defaultData?.author}</span>
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
          <h2 className='pb-2 text-lg font-bold !leading-6 md:text-2xl'>
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
        <Tag txt={data?.tags[0] || defaultData?.tags[0]} />
        <Tag txt={data?.tags[1] || defaultData?.tags[1]} />
      </div>
    </article>
  )
}
