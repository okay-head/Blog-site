import editing from './../assets/editing(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <nav className='overflow-hidden shadow-md'>
      <div className='aka-container max-w-[1920px] mx-auto px-4 md:px-10'>
        <div className='min-h-16 py-4 fluid-wrapper flex justify-between items-center'>
          <div className='resize-svg'>
            <button className='hover:bg-[var(--gray-100)] transition-all duration-200 p-2 -ms-2 rounded-lg'>
              <FontAwesomeIcon
                icon={faBars}
                size='xl'
                style={{ color: '#1e1e1e' }}
              />
            </button>
          </div>
          <h1 className='font-montserrat text-3xl title font-bold'>
            On the Blog
          </h1>

          <div className='-ms-7 resize-svg flex gap-3 items-center | md:gap-6'>
            <button className='btn capitalize font-lato  min-h-0 h-auto p-1 bg-transparent border-none hover:bg-[var(--gray-100)] | md:py-2 md:px-4 md:bg-[var(--gray-100)] | md:hover:bg-[var(--gray-300)] '>
              <img
                src={editing}
                alt='edit'
                className='aspect-square mb-[2px] w-6 ms-1 | md:w-[19px] md:ms-0 '
              />
              <span className='hidden md:inline-block'>Write</span>
            </button>

            <button className='rounded-full border-[4px] border-transparent transition-all duration-200 | hover:border-[var(--gray-100)]'>
              <FontAwesomeIcon
                icon={faCircleUser}
                size='2x'
                style={{ color: '#C6C3BD' }}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
