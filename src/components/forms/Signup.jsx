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
import userImg from '/public/assets/blob/userImg'
import toTitleCase from '../../utility/toTitleCase'
import triggerAlert from './../shared/triggerAlert'
import { triggerLoadingScreen } from '../shared/LoadingScreen'

export default function Signup() {
  // get all users
  const [data, setData] = useState('No user data')
  if (Array.isArray(data)) triggerLoadingScreen(false)
  else triggerLoadingScreen(true)
  const { baseUrl } = useContextHook()
  useEffect(() => {
    try {
      ;(async function getData() {
        const response = await axios.get(`${baseUrl}/user`)
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

  const onSubmit = (vals) => signUpHandler(vals)
  const onError = (err) => console.error(err)

  const signUpHandler = ({ name, email, password, avatar }) => {
    // apply more validations, firebase auth etc..
    console.clear()

    // check if the user exists / check password
    if (!Array.isArray(data)) {
      triggerAlert(undefined, `Please wait...`)
      return
    }
    let user = data.find((x) => x.user_email == email)
    if (user) {
      triggerAlert(undefined, 'Email already in use!')
      return
    }

    // if not then post to db
    const postHandler = () => {
      const seed = (Math.random() * 100).toFixed(0) + Date.now()
      let post = undefined
      // 'id' attribute is important to every payload !!
      try {
        // console.log(avatar)
        post = async () => {
          const payload = JSON.stringify({
            id: seed,
            user_id: seed,
            user_displayName: toTitleCase(name),
            user_email: email,
            user_passHash: password,
            user_avatar: avatar,
            user_articles: [],
            user_bookmarks: [],
          })

          return await axios.post(`${baseUrl}/user`, payload, {
            headers: { 'Content-Type': 'application/json' },
          })
        }
      } catch (e) {
        throw new Error(e)
      }
      // After entry is added
      post().then((d) => {
        user = d.data
        // console.log(`Signed in as ${user?.user_displayName}`, user)
        setSignedIn(true)
        setUser(user)
        navigate(redirectTo)
      })
    }

    if (avatar == '' || Object.values(avatar).length == 0) {
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
