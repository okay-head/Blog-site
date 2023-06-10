import editing from './../assets/editing(1).png'
import user from './../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <nav className='overflow-hidden shadow-md'>
      <div className='aka-container max-w-[1920px] mx-auto px-4 md:px-10'>
        <div className='min-h-16 py-4 fluid-wrapper flex justify-between items-center'>
          <div className='resize-svg'>
            <FontAwesomeIcon
              icon={faBars}
              size='xl'
              style={{ color: '#1e1e1e' }}
            />
          </div>
          <h1 className='font-montserrat text-3xl title font-bold'>
            On the Blog
          </h1>

          <div className='-ms-7 resize-svg-2 flex gap-3 items-center | md:gap-6'>
            <button className='btn capitalize font-lato  min-h-0 h-auto p-1 bg-transparent border-none | md:py-2 md:px-4 md:bg-[#f2f2f2]'>
              <img
                src={editing}
                alt='edit'
                className='aspect-square mb-[2px] w-6 ms-1 | md:w-[19px] md:ms-0'
              />
              <span className='hidden md:inline-block'>Write</span>
            </button>
            <FontAwesomeIcon
              icon={faCircleUser}
              size='2x'
              style={{ color: '#C6C3BD' }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
