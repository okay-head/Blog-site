import Container from '../Container'
import Tag from '../cards/Tag'
export default function View() {
  return (
    <Container classVars='border-2 border-red-300 lg:max-w-6xl xl:border-cyan-300 xl:px-0'>
      <article className='flex flex-col gap-6 pt-24 py-7 md:py-8' style={{'container':'inline-size'}}>
        <div className='article-heading'>
          <h2 className='-mb-2 text-2xl font-bold md:text-2xl'>
            Long term effects of our increasing disconnect from nature
          </h2>
        </div>

        <div className='card-head flex gap-2 items-center'>
          <div>
            <img src='/assets/user.png' alt='avatar' className='w-11' />
          </div>
          <div className='flex flex-col gap-[1px]'>
            <span className='block text-base font-semibold'>Chris coyer</span>
            <span className='block text-xs font-semibold text-[var(--text-gray)]'>
              3 min read
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)]'>
              Last updated: 16th Apr, 2023
            </span>

          </div>
        </div>

        <div
            className={`img-container bg-style custom-h-img overflow-hidden rounded-md  bg-blue-400`}
            style={{
              backgroundImage:
                'url("/assets/(m)mick-haupt-TEjR4zowKgE-unsplash(1).jpg")',
            }}
          ></div>

          <div className='article-body'>
            <p className='text-base text-[var(--text-base)]'>
              Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae atque, aperiam quam ipsa vero alias.
              Fuga, corporis optio! Sequi dolores tempora repellendus placeat
              ipsum reprehenderit omnis. Sapiente quaerat iusto laboriosam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              eum ex tenetur numquam minima molestiae expedita illo sequi sint,
              necessitatibus eligendi praesentium sit dicta aspernatur repellat
              veniam libero architecto harum. consectetur adipisicing elit.
              Culpa molestias aut facere nihil deleniti doloribus, saepe ex.
              Itaque, eveniet? Dolorum possimus dolor asperiores ea aperiam
              dicta fugit vero assumenda iste! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Culpa tenetur accusamus non! Soluta,
              ad dicta. Fugit laborum odit repudiandae unde praesentium saepe
              eaque similique dolor? Reiciendis repellendus eum dicta impedit
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              consectetur deserunt excepturi nihil maiores, molestiae fugit
              quibusdam obcaecati nemo earum officiis molestias ipsam sapiente
              id temporibus odio eaque et libero. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam repudiandae inventore
              excepturi, repellendus ex quidem debitis voluptate eius enim
              pariatur eum nemo atque at itaque, vero exercitationem? Earum,
              deserunt pariatur.lorem Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Qui alias tenetur asperiores aspernatur quas,
              veniam eveniet repellendus doloremque? Temporibus ad sunt
              accusantium laudantium reiciendis magni doloribus laborum fugiat
              corporis quasi.
            </p>
          </div>

        <div className={`tags mt-1 flex gap-3`}>
          <Tag txt='Health' />
          <Tag txt='Lifestyle' />
        </div>
      </article>
    </Container>
  )
}
