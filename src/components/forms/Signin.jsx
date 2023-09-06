import { useForm } from 'react-hook-form'
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom'
import useContextHook from '../../state/useContextHook'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Signin() {
  // get all users
  const [data, setData] = useState('User data is empty')
  useEffect(() => {
    try {
      ;(async function getData() {
        const response = await axios.get('http://localhost:3000/user')
        setData(response.data)
      })()
    } catch (e) {
      throw new Error(e)
    }
  }, [])
  let { redirectTo } = useOutletContext()
  const { state } = useLocation()

  if (state) {
    redirectTo = state?.from || redirectTo
  }

  const { setSignedIn, setUser } = useContextHook()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // {...register(name, options)}

  const onSubmit = (vals) => signInHandler(vals)
  const onError = (err) => console.error(err)

  const signInHandler = ({ email, password }) => {
    // apply more validations, firebase auth etc..

    console.clear()

    // check if the user exists / check password
    const user = data.find((x) => x.user_email == email)
    if (!user) {
      alert('Email not found!\nPlease Sign Up if you are a new user.')
      return
    }
    if (user.user_passHash != password) {
      alert('Incorrect password! Try again.')
      return
    }
    console.log(`Signed in as ${user?.user_displayName}`, user)
    setSignedIn(true)
    setUser(user)
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

//
