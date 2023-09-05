import { useForm } from 'react-hook-form'
import Container from '../Container'
import useContextHook from '../../state/useContextHook'
import { useEffect } from 'react'
import axios from 'axios'
import toTitleCase from '../../utility/toTitleCase'

export default function EditProfile() {
  const { user, setUser } = useContextHook()
  const postUrl = `http://localhost:3000/user/${user.id}`

  // prefill with user values - use default props (refs don't work, so don't controlled components, and neither regular DOM manipulation)
  useEffect(() => {
    document
      .getElementById('current-avatar')
      .setAttribute('src', user?.user_avatar)
  }, [user])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => submitHandler(data)
  const onError = (err) => console.error(err)

  const patchHandler = async (name, email, password, avatar) => {
    try {
      const payload = JSON.stringify({
        user_displayName: name,
        user_email: email,
        user_passHash: password,
        user_avatar: avatar,
      })
      return await axios.patch(postUrl, payload, {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  const submitHandler = ({ name, email, password, avatar }) => {
    // apply more validations, firebase auth etc..
    console.clear()

    /* __ Post to db__ */

    // check if img input is left unchanged
    if (avatar == '' || Object.values(avatar).length == 0) {
      avatar = user.user_avatar
      patchHandler(toTitleCase(name), email, password, avatar)
      patchHandler().then((d) => {
        alert('update successful!')
        console.log(d)
        // update the data in context as well
        setUser(d.data)
      })
      return
    }
    // process image if input changed
    let reader = new FileReader()
    reader.readAsDataURL(avatar[0])

    reader.onload = () => {
      avatar = reader.result
      patchHandler(toTitleCase(name), email, password, avatar)
      patchHandler().then((d) => {
        alert('update successful!')
        console.log(d)
        // update the data in context as well
        setUser(d.data)
      })
    }
  }
  return (
    <Container classVars='pt-28 pb-4 lg:max-w-5xl xl:px-0'>
      <section className='edit-profile'>
        <div className='heading mb-8 border-b-2 pb-3'>
          <h1 className='block text-lg font-bold md:text-2xl'>
            {`Edit profile`}
          </h1>
        </div>
        <div className='profile-edit-form form-body'>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='flex flex-col gap-6'
          >
            {/* display-name */}
            <div className='display-name-container form-control min-h-[6rem] w-full max-w-2xl'>
              <label htmlFor='name' className='label'>
                <span className='label-text font-semibold'>Display name</span>
              </label>
              <input
                {...register('name', {
                  required: 'Display name is required',
                })}
                type='text'
                name='name'
                id='name'
                placeholder='Type here'
                className='input input-bordered w-full max-w-2xl border-2'
                defaultValue={user?.user_displayName || ''}
              />
              {errors.name && (
                <label className='label pb-0'>
                  <span className='label-text-alt'>{errors.name.message}</span>
                </label>
              )}
            </div>

            {/* email */}
            <div className='email-container form-control min-h-[6rem] w-full max-w-2xl'>
              <label htmlFor='email' className='label'>
                <span className='label-text font-semibold'>Email</span>
              </label>
              <input
                // {...register('email', {
                //   required: 'Email is required',
                //   pattern: {
                //     value: '/^[^s@]+@[^s@]+.[^s@]+$/',
                //     message: 'Please enter a valid email',
                //   },
                // })}
                disabled
                type='email'
                name='email'
                id='email'
                placeholder='Type here'
                className='input input-bordered w-full max-w-2xl border-2'
                defaultValue={user?.user_email || ''}
              />
              {errors.email && (
                <label className='label pb-0'>
                  <span className='label-text-alt'>{errors.email.message}</span>
                </label>
              )}
            </div>

            {/* password */}
            <div className='password-container form-control min-h-[6rem] w-full max-w-2xl'>
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
                className='input input-bordered w-full max-w-2xl border-2'
                defaultValue={user?.user_passHash || ''}
              />
              {errors.password && (
                <label className='label pb-0'>
                  <span className='label-text-alt'>
                    {errors.password.message}
                  </span>
                </label>
              )}
            </div>
            {/* avatar */}
            <div className='avatar-container form-control min-h-[6rem] w-full max-w-2xl'>
              <label htmlFor='avatar' className='label'>
                <span className='label-text font-semibold'>Avatar</span>
              </label>

              <div className='flex items-center justify-between'>
                <input
                  {...register('avatar', {
                    required: false,
                  })}
                  type='file'
                  name='avatar'
                  id='avatar'
                  accept='.jpg, .jpeg, .png'
                  className='file-input file-input-bordered w-full max-w-xl border-2'
                  defaultValue={''}
                />
                <img
                  src='/assets/user.png'
                  id='current-avatar'
                  className='ms-4 w-11 lg:w-14'
                  alt='current user image'
                />
              </div>
            </div>

            <button className='btn-custom my-4 max-w-[6rem] px-4 py-3'>
              Ok
            </button>
          </form>
        </div>
      </section>
    </Container>
  )
}
