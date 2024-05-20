import { useForm } from 'react-hook-form'
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom'
import useContextHook from '../../state/useContextHook'
import triggerAlert from './../shared/triggerAlert'
import { triggerLoadingScreen } from '../shared/LoadingScreen'
import { signInFn } from '../../firebase/auth'
import { getFn } from '../../firebase/realtimeDb'

export default function Signin() {
  // __Imports
  const { setSignedIn, setUser } = useContextHook()
  const navigate = useNavigate()
  let { redirectTo } = useOutletContext()
  // const { state } = useLocation()
  // if (state) redirectTo = state?.from || redirectTo

  // __React hook form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: 'cheems@doge.com', password: 'cheemsthedoge' },
  })

  const onSubmit = (vals) => signInHandler(vals)
  const onError = (err) => console.error(err)

  // runs only after validation checks by react-hook-form are passed
  const signInHandler = async ({ email, password }) => {
    // Firebase auth
    const user = await signInFn(email, password)
    if (!user) return

    // //console.log('Signinjsx | sign in successfull')
    const userEmail = user?.user?.email
    const userId = user?.user?.uid

    // Fetch user info from db/users/userId
    triggerLoadingScreen(true)
    const userData = await getFn('users/' + userId, false)
    triggerLoadingScreen(false)

    //  if user has no data (not possible but still a check for dev)
    if (!userData) {
      triggerAlert(undefined, 'No user data is present!')
      return
    }

    setUser(userData)
    triggerAlert(undefined, 'Signed in as ' + userEmail)
    setSignedIn(true)
    navigate(redirectTo)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className='card-title mb-10'>
        <u>Sign in</u>
      </h2>
      {/* email */}
      <div className='email-container form-control min-h-[7rem] w-full max-w-sm'>
        <label htmlFor='email' className='label'>
          <span className='label-text font-semibold'>Email</span>
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: '/^[^s@]+@[^s@]+.[^s@]+$/',
              message: 'Please enter a valid email',
            },
          })}
          type='email'
          name='email'
          id='email'
          placeholder='Type here'
          className='custom-input input input-bordered w-full max-w-sm border-2'
        />
        {errors.email && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.email.message}</span>
          </label>
        )}
      </div>

      {/* password */}
      <div className='password-container form-control min-h-[7rem] w-full max-w-sm'>
        <label htmlFor='password' className='label'>
          <span className='label-text font-semibold'>Password</span>
        </label>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Should be atleast 8 chars',
            },
          })}
          type='password'
          name='password'
          id='password'
          placeholder='Type here'
          className='custom-input input input-bordered w-full max-w-sm border-2'
        />
        {errors.password && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.password.message}</span>
          </label>
        )}
      </div>

      <div className='card-actions justify-center'>
        <button className='btn-custom my-4 px-4 py-3'>Sign in</button>
      </div>

      <div className='sign-in-help mt-8 flex flex-col gap-4 text-center text-sm'>
        <div className='italic'>Don't have an account?</div>
        <div>
          <Link
            to='/auth/signup'
            state={{ from: redirectTo }}
            className='underline hover:no-underline'
          >
            Sign up instead
          </Link>
        </div>
      </div>
    </form>
  )
}
