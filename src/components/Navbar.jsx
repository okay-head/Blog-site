import editing from './../assets/editing(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Container from './Container'
import { useContext } from 'react'
import SignInContext from './../state/ContextProvider'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { isSignedIn, setSignedIn } = useContext(SignInContext)
  return (
    <nav className='fixed inset-0 bottom-[unset] z-30 bg-[var(--white-base)] shadow-md'>
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
            <Link to='/'>On the Blog</Link>
          </h1>

          <div className='resize-svg | -ms-7 flex items-center gap-3 md:gap-6'>
            <Link to={isSignedIn ? '/edit' : '/auth/signin'}>
              <button className='btn h-auto min-h-0 border-none bg-transparent p-1 capitalize  text-inherit hover:bg-[var(--gray-100)] md:bg-[var(--gray-100)] md:px-4 md:py-2 md:hover:bg-[var(--gray-200)] '>
                <img
                  src={editing}
                  alt='edit'
                  className='| mb-[2px] ms-1 aspect-square w-6 md:ms-0 md:w-[19px] '
                />
                <span className='hidden md:inline-block lg:text-base'>
                  Write
                </span>
              </button>
            </Link>

            <div className='group relative'>
              <button className='rounded-full'>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size='2x'
                  style={{ color: '#C6C3BD' }}
                />
                <span className='absolute inset-0 -left-4 h-12 w-16 bg-transparent  text-transparent'>
                  to ease hover
                </span>
              </button>

              {isSignedIn ? (
                <ul
                  tabIndex={0}
                  id='user-menu-logged-in'
                  className='dropdown-content menu absolute -left-24 top-10 z-[100] hidden w-[8.6rem] rounded-lg bg-[var(--white-base)] p-2 text-[var(--text-gray)] shadow ring-1 ring-inset ring-[var(--text-gray)] hover:block group-hover:block md:-left-28 md:top-11 md:w-40 lg:text-base'
                >
                  <li>
                    <a>My articles</a>
                  </li>
                  <li>
                    <a>My reading list</a>
                  </li>
                  <li>
                    <a>Edit profile</a>
                  </li>
                  <li>
                    <Link onClick={()=>{
                      setSignedIn(false)
                    }} >Logout</Link>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex={0}
                  id='user-menu-not-logged-in'
                  className='dropdown-content menu absolute -left-10 top-10 z-[100] hidden w-20 rounded-lg bg-[var(--white-base)] p-2 text-center text-[var(--text-gray)] shadow ring-1 ring-inset ring-[var(--text-gray)] hover:block group-hover:block md:-left-10 md:top-11 md:w-[5.5rem] lg:text-base'
                >
                  <li>
                    <Link to='/auth/signin'>Login</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}
