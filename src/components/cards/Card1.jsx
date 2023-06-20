import Tag from './Tag'

export default function Card1() {
  return (
    <article className='flex flex-col gap-4 border-t-2 py-6 md:py-8 '>
      <div className='card-head flex gap-3'>
        <div className=''>
          <img src='/assets/user.png' alt='avatar' className='w-9' />
        </div>
        <div>
          <span className='block text-sm font-semibold'>Chris coyer</span>
          <span className='block text-xs font-semibold text-[var(--text-gray)]'>
            3 min read
          </span>
        </div>
        <div>
          <span className='bullet relative mt-[1px] block text-xs font-semibold text-[var(--text-gray)]'>
            16th Apr, 2023
          </span>
        </div>
      </div>

      <div className='card-content grid h-40 grid-cols-[2.8fr,1.3fr] xl:grid-cols-[3fr,1fr] items-center gap-4 overflow-hidden md:h-48 xl:h-60'>
        <div className='h-40 md:h-48 xl:h-60'>
          <h2 className='pb-2 text-lg font-bold !leading-6 md:text-2xl'>
            Long term effects of our increasing disconnect from nature
          </h2>
          <p className='text-sm text-[var(--text-gray)] xl:pt-1'>
            Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae atque, aperiam quam ipsa vero alias. Fuga,
            corporis optio! Sequi dolores tempora repellendus placeat ipsum
            reprehenderit omnis. Sapiente quaerat iusto laboriosam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Itaque eum ex tenetur
            numquam minima molestiae expedita illo sequi sint, necessitatibus
            eligendi praesentium sit dicta aspernatur repellat veniam libero
            architecto harum. consectetur adipisicing elit. Culpa molestias aut
            facere nihil deleniti doloribus, saepe ex. Itaque, eveniet? Dolorum
            possimus dolor asperiores ea aperiam dicta fugit vero assumenda
            iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Culpa tenetur accusamus non! Soluta, ad dicta. Fugit laborum odit
            repudiandae unde praesentium saepe eaque similique dolor? Reiciendis
            repellendus eum dicta impedit Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Veniam consectetur deserunt excepturi
            nihil maiores, molestiae fugit quibusdam obcaecati nemo earum
            officiis molestias ipsam sapiente id temporibus odio eaque et
            libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam repudiandae inventore excepturi, repellendus ex quidem
            debitis voluptate eius enim pariatur eum nemo atque at itaque, vero
            exercitationem? Earum, deserunt pariatur.lorem Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Qui alias tenetur asperiores
            aspernatur quas, veniam eveniet repellendus doloremque? Temporibus
            ad sunt accusantium laudantium reiciendis magni doloribus laborum
            fugiat corporis quasi.
          </p>
        </div>
        <div
          className='img-container bg-style h-32 min-w-[130px] overflow-hidden rounded-md  bg-blue-400 md:h-44 xl:h-60'
          style={{
            backgroundImage:
              'url("/assets/(s)mick-haupt-TEjR4zowKgE-unsplash.jpg")',
          }}
        ></div>
      </div>
      <div className='tags mt-1 flex gap-3'>
        <Tag txt='Health' />
        <Tag txt='Lifestyle' />
      </div>
    </article>
  )
}
