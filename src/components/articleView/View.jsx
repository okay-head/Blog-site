import useContextHook from '../../state/useContextHook'
import Container from '../Container'
import Tag from '../cards/Tag'
import { Link } from 'react-router-dom'

export default function View() {
  const { isSignedIn } = useContextHook()
  return (
    <Container classVars='lg:max-w-5xl xl:px-0'>
      <article
        className='flex flex-col gap-6 pb-7 pt-24 md:pb-8 md:pt-28'
        style={{ container: 'inline-size' }}
      >
        <div className='article-heading'>
          <h2 className='-mb-2 text-2xl font-bold md:text-3xl lg:mb-1 lg:text-4xl'>
            Long term effects of our increasing disconnect from nature
          </h2>
        </div>

        <div className='card-head flex items-center gap-2 lg:gap-3'>
          <div>
            <img src='/assets/user.png' alt='avatar' className='w-11 lg:w-14' />
          </div>

          <div className='flex flex-col gap-[1px]'>
            <span className='block text-base font-semibold lg:text-lg'>
              Chris coyer
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              3 min read
            </span>
            <span className='block text-xs font-semibold text-[var(--text-gray)] lg:text-sm'>
              Last updated: 16th Apr, 2023
            </span>
          </div>

          {isSignedIn ? (
            <div
              id='user-logged-in-article-tools'
              className='me-6 ms-auto flex gap-3 self-end'
            >
              <button
                id='edit-article'
                className='-mb-1 block w-8 rotate-[270deg] lg:w-11'
              >
                <img src='/assets/pen(1).png' alt='pencil' />
              </button>
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

        <div className={`tags mt-1 flex gap-3`}>
          <Tag txt='Health' classVars='lg:text-base' />
          <Tag txt='Lifestyle' classVars='lg:text-base' />
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
