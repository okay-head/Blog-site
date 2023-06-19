import editing from './../assets/editing(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Container from './Container'

export default function Navbar() {
  return (
    <nav className='overflow-hidden bg-[var(--white-base)] shadow-md fixed inset-0 bottom-[unset]'>
      <Container>
        <div className='fluid-wrapper min-h-16 flex items-center justify-between py-4'>
          <div className='resize-svg'>
            <button className='-ms-2 rounded-lg p-2 transition-all duration-200 hover:bg-[var(--gray-100)]'>
              <FontAwesomeIcon
                icon={faBars}
                size='xl'
                style={{ color: '#1e1e1e' }}
              />
            </button>
          </div>
          <h1 className='title ms-2 font-montserrat text-3xl font-bold md:ms-20'>
            On the Blog
          </h1>

          <div className='resize-svg | -ms-7 flex items-center gap-3 md:gap-6'>
            <button className='btn h-auto min-h-0 border-none bg-transparent p-1 capitalize  text-inherit hover:bg-[var(--gray-100)] md:bg-[var(--gray-100)] md:px-4 md:py-2 md:hover:bg-[var(--gray-200)] '>
              <img
                src={editing}
                alt='edit'
                className='| mb-[2px] ms-1 aspect-square w-6 md:ms-0 md:w-[19px] '
              />
              <span className='hidden md:inline-block'>Write</span>
            </button>

            <button className='| rounded-full border-[4px] border-transparent transition-all duration-200 hover:border-[var(--gray-100)]'>
              <FontAwesomeIcon
                icon={faCircleUser}
                size='2x'
                style={{ color: '#C6C3BD' }}
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
