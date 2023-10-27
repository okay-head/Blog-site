import { useForm } from 'react-hook-form'
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom'
import useContextHook from '../../state/useContextHook'
import userImg from '/public/assets/blob/userImg'
import toTitleCase from '../../utility/toTitleCase'
import triggerAlert from './../shared/triggerAlert'
import { triggerLoadingScreen } from '../shared/LoadingScreen'
import { signInFn, signUpFn } from '../../firebase/auth'
import { setUserFn } from '../../firebase/realtimeDb'

export default function Signup() {
  // Imports
  let { redirectTo } = useOutletContext()
  // const { state } = useLocation()
  // if (state) {
  //   redirectTo = state?.from || redirectTo
  // }

  console.log(redirectTo)
  const { setSignedIn, setUser } = useContextHook()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // __React hook form validation
  const onSubmit = (vals) => signUpHandler(vals)
  const onError = (err) => console.error(err)

  const signUpHandler = async ({ name, email, password, avatar }) => {
    // check if user already exists
    const user = await signInFn(email, password, true)
    if (user) {
      triggerAlert(undefined, 'Email already in use!')
      return
    }

    // it does not, great | create new user

    // --loading screen--
    triggerLoadingScreen(true)
    const newUser = await signUpFn(email, password)
    // user created
    const userId = newUser?.user?.uid

    // create an entry in the database
    const postHandler = async () => {
      console.log('posting to db')

      // 'id' attribute is important to every payload !!
      const payload = {
        id: userId,
        user_id: userId,
        user_displayName: toTitleCase(name),
        user_email: email,
        user_avatar: avatar,
        user_articles: [],
        user_bookmarks: [],
        user_passHash: password,
      }

      // post to db
      await setUserFn(payload)
      // After entry is added
      triggerLoadingScreen(false)
      setUser(payload)
      triggerAlert(undefined, 'Signing in as ' + email)
      setSignedIn(true)
      navigate(redirectTo)
    }

    if (avatar == '' || Object.values(avatar || {}).length == 0) {
      avatar = userImg()
      postHandler()
      return
    }
    // process image if exists
    let reader = new FileReader()
    reader.readAsDataURL(avatar[0])

    reader.onload = () => {
      avatar = reader.result
      postHandler()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className='card-title mb-10'>
        <u>Sign up</u>
      </h2>
      {/* display-name */}
      <div className='display-name-container form-control min-h-[6rem] w-full max-w-sm'>
        <label htmlFor='name' className='label'>
          <span className='label-text font-semibold'>Display name</span>
        </label>
        <input
          {...register('name', {
            required: 'Display name is required',
            minLength: {
              value: 7,
              message: 'Should be atleast 7 chars',
            },
          })}
          type='text'
          name='name'
          id='name'
          placeholder='Type here'
          className='input input-bordered w-full max-w-sm border-2'
        />
        {errors.name && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.name.message}</span>
          </label>
        )}
      </div>

      {/* email */}
      <div className='email-container form-control min-h-[6rem] w-full max-w-sm'>
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
          className='input input-bordered w-full max-w-sm border-2'
        />
        {errors.email && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.email.message}</span>
          </label>
        )}
      </div>

      {/* password */}
      <div className='password-container form-control min-h-[6rem] w-full max-w-sm'>
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
          className='input input-bordered w-full max-w-sm border-2'
        />
        {errors.password && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.password.message}</span>
          </label>
        )}
      </div>
      {/* avatar */}
      <div className='avatar-container form-control min-h-[6rem] w-full max-w-sm'>
        <label htmlFor='avatar' className='label'>
          <span className='label-text font-semibold'>Avatar (optional)</span>
        </label>
        <input
          {...register('avatar', {
            required: false,
          })}
          type='file'
          name='avatar'
          id='avatar'
          accept='.jpg, .jpeg, .png'
          className='input input-bordered w-full max-w-sm border-2 pt-2'
        />
      </div>

      <div className='card-actions justify-center'>
        <button className='btn-custom my-4 px-4 py-3'>Sign up</button>
      </div>

      <div className='sign-up-help mt-8 flex flex-col gap-4 text-center text-sm'>
        <div className='italic'>Already have an account?</div>
        <div>
          <Link
            to='/auth/signin'
            state={{ from: redirectTo }}
            className='underline hover:no-underline'
          >
            Sign in instead
          </Link>
        </div>
      </div>
    </form>
  )
}

//
