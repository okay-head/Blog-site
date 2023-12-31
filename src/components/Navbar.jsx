import editing from './../assets/editing(1).webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCircleUser,
  faCommentDots,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from './Container'
import useContextHook from '../state/useContextHook'
import { Link, useLocation } from 'react-router-dom'
import LoadingScreen from './shared/LoadingScreen'

export default function Navbar() {
  const { isSignedIn, setSignedIn, user } = useContextHook()

  const location = useLocation().pathname

  const hideAlertBox = () => {
    document.getElementById('alert-box').classList.add('hidden')
  }

  const handleClose = () => {
    const checkBoxToggle = document.getElementsByClassName('drawer-toggle')[0]
    checkBoxToggle.checked = false
  }

  return (
    <nav className='fixed inset-0 bottom-[unset] z-30 bg-[var(--white-base)] shadow-md'>
      <LoadingScreen />
      <Container>
        <div className='drawer'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          {/* <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>  */}
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu relative min-h-full w-72 bg-base-200 p-4 pt-20 text-base-content sm:w-80'>
              <span
                onClick={handleClose}
                className='absolute right-5 top-6 cursor-pointer'
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size='xl'
                  style={{ color: '#1e1e1e' }}
                />
              </span>
              {/* Sidebar content here */}
              <li className='w-full'>
                <a
                  className='text-base'
                  href='https://whispermeter.com/feedback/EUID7RV2TX'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      size='lg'
                      style={{ color: '#1e1e1e' }}
                    />
                    <span className='mb-1 ms-2'>Drop a feedback</span>
                  </span>
                </a>
              </li>
              <li className='w-full'>
                <a
                  className='text-base'
                  href='https://github.com/okay-head/Blog-site'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='lg'
                      style={{ color: '#1e1e1e' }}
                    />
                    <span className='ms-2'>Github</span>
                  </span>
                </a>
              </li>
              <span className='mx-auto mb-4 mt-auto w-full text-center text-xs sm:w-max'>
                Made with ♡ by{' '}
                <a
                  className='hover:underline'
                  href='https://github.com/okay-head'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Shashwat&nbsp;Jaiswal
                </a>
              </span>
            </ul>
          </div>
        </div>

        <div className='fluid-wrapper min-h-16 flex items-center justify-between py-4'>
          <div className='resize-svg'>
            <button className='relative -ms-2 rounded-lg p-2 transition-all duration-200 hover:bg-[var(--gray-100)]'>
              <FontAwesomeIcon
                icon={faBars}
                size='xl'
                style={{ color: '#1e1e1e' }}
              />
              <label
                htmlFor='my-drawer'
                className='absolute inset-0 cursor-pointer'
              ></label>
            </button>
          </div>
          <h1 className='title ms-2 font-montserrat text-3xl font-bold md:ms-20'>
            <Link to='/'>On the Blog</Link>
          </h1>

          <div className='resize-svg | -ms-7 flex items-center gap-3 md:gap-6'>
            <Link
              to={isSignedIn ? '/create' : '/auth/signin'}
              state={{ from: location, to: '/create' }}
              className='btn h-auto min-h-0 border-none bg-transparent p-1 capitalize  text-inherit hover:bg-[var(--gray-100)] md:bg-[var(--gray-100)] md:px-4 md:py-2 md:hover:bg-[var(--gray-200)] '
            >
              <img
                src={editing}
                alt='edit'
                className='| mb-[2px] ms-1 aspect-square w-6 md:ms-0 md:w-[19px] '
              />
              <span className='hidden md:inline-block lg:text-base'>Write</span>
            </Link>
            <div
              className='group relative'
              onMouseOver={hideAlertBox}
              onClick={hideAlertBox}
            >
              <button className='rounded-full'>
                {isSignedIn ? (
                  <img
                    src={user?.user_avatar}
                    alt='user-img'
                    className='-mb-1 aspect-square w-8 rounded-full md:w-9'
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    size='2x'
                    style={{ color: '#C6C3BD' }}
                  />
                )}
                <span className='absolute inset-0 -left-4 h-12 w-16 bg-transparent  text-transparent'>
                  to ease hover
                </span>
              </button>

              {isSignedIn ? (
                <ul
                  tabIndex={0}
                  id='user-menu-logged-in'
                  className='menu dropdown-content absolute -left-24 top-10 z-[100] hidden w-[8.8rem] rounded-lg bg-[var(--white-base)] p-2 text-[var(--text-gray)] shadow ring-1 ring-inset ring-[var(--text-gray)] hover:block group-hover:block md:-left-32 md:top-12 md:w-40 lg:text-base'
                >
                  <li>
                    <Link className='mt-1' to='/user/articles'>
                      My articles
                    </Link>
                  </li>
                  <li>
                    <Link className='mt-1' to='/user/bookmarks'>
                      My bookmarks
                    </Link>
                  </li>
                  <li>
                    <Link className='mt-1' to='/user/profile' replace>
                      Edit profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='mt-1'
                      onClick={() => {
                        if (location === '/') window.location.reload()
                        setSignedIn(false)
                        localStorage.clear()
                        //there's a delay here
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex={0}
                  id='user-menu-not-logged-in'
                  className='menu dropdown-content absolute -left-10 top-10 z-[100] hidden w-20 rounded-lg bg-[var(--white-base)] p-2 text-center text-[var(--text-gray)] shadow ring-1 ring-inset ring-[var(--text-gray)] hover:block group-hover:block md:-left-10 md:top-11 md:w-[5.5rem] lg:text-base'
                >
                  <li>
                    <Link to='/auth/signin' state={{ from: location }}>
                      Login
                    </Link>
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
