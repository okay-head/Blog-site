import Tag from './Tag'

export default function Card1() {
  return(
    <article className='flex flex-col gap-4'>
      <div className="card-head flex gap-2">
        <div className=''>
        <img src="/assets/user.png" alt="avatar" className='w-8' />
        </div>
        <div>
        <span className="font-semibold text-sm block">Chris coyer</span>
        <span className="text-xs block font-semibold text-[var(--text-gray)]">3 min read</span>
        </div>
        <div>
        <span className="text-xs block font-semibold text-[var(--text-gray)]">16th Apr, 2023</span>
        </div>
      </div>

      <div className="card-content grid grid-cols-[2.8fr,1.3fr] gap-4 overflow-hidden h-48 items-center">
        <div className='h-48'>
        <h2 className="font-bold text-lg md:text-2xl pb-2 !leading-6">Long term effects of our increasing disconnect from nature</h2>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias aut facere nihil deleniti doloribus, saepe ex. Itaque, eveniet? Dolorum possimus dolor asperiores ea aperiam dicta fugit vero assumenda iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa tenetur accusamus non! Soluta, ad dicta. Fugit laborum odit repudiandae unde praesentium saepe eaque similique dolor? Reiciendis repellendus eum dicta impedit.</p>
        </div>
        <div className='img-container rounded-md h-28 sm:h-36 md:h-40  bg-blue-400 overflow-hidden min-w-[130px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem laborum molestiae doloremque reprehenderit deserunt error reiciendis nobis cupiditate odio, recusandae, mollitia corrupti dicta, eius consectetur cum? Maxime, nemo saepe.
        </div>
      </div>
      <div className="tags flex gap-3">
      <Tag txt='Health'/>
      <Tag txt='Lifestyle'/>
      </div>
    </article>
  )
}