import { useForm } from 'react-hook-form'
import Container from '../Container'
import useContextHook from '../../state/useContextHook'
import { useEffect } from 'react'

export default function EditProfile() {
  const { user } = useContextHook()

  useEffect(() => {
    const collection = document.getElementsByTagName('input')
    for (const element of collection) {
      switch (element.id) {
        case 'name':
          element.value = user?.user_displayName
          break;
          case 'email':
          element.value = user?.user_email
          break;
        case 'password':
          element.value = user?.user_passHash
          break;
        case 'avatar':
          document.getElementById('current-avatar').setAttribute('src',user?.user_avatar)
          break;
      
        default:
          break;
      }
      // console.log(element.get);
    }
  }, [])
  // console.log(`Edit profile: Edit profile for ${user?.user_displayName} `, user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => submitHandler(data)
  const onError = (err) => console.error(err)

  const submitHandler = ({ name, email, password, avatar }) => {
    // apply more validations, firebase auth etc..
    console.clear()

    // user cannot change email to something that already exists
    // instead of performing this check, which would be costly
    // disable edit for the email input

    /* __ Post to db__ */
    // process image
    let reader = new FileReader()
    reader.readAsDataURL(avatar[0])
    
    reader.onload =  ()=> {
      avatar = reader.result

    let post = undefined
    try {
      post = async () => {
        const payload = JSON.stringify({
          user_displayName: name,
          user_email: email,
          user_passHash: password,
          user_avatar: avatar,
          user_articles: [],
          user_bookmarks: [],
        })

        return await axios.post('http://localhost:3300/user', payload, {
          headers: { 'Content-Type': 'application/json' },
        })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  post.then((res)=>console.log(`Entry updated!`,res))
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
              <label className='label'>
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
                className='input-bordered input w-full max-w-2xl border-2'
              />
              {errors.name && (
                <label className='label pb-0'>
                  <span className='label-text-alt'>{errors.name.message}</span>
                </label>
              )}
            </div>

            {/* email */}
            <div className='email-container form-control min-h-[6rem] w-full max-w-2xl'>
              <label className='label'>
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
                disabled
                type='email'
                name='email'
                id='email'
                placeholder='Type here'
                className='input-bordered input w-full max-w-2xl border-2'
              />
              {errors.email && (
                <label className='label pb-0'>
                  <span className='label-text-alt'>{errors.email.message}</span>
                </label>
              )}
            </div>

            {/* password */}
            <div className='password-container form-control min-h-[6rem] w-full max-w-2xl'>
              <label className='label'>
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
                className='input-bordered input w-full max-w-2xl border-2'
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
              <label className='label'>
                <span className='label-text font-semibold'>
                  Avatar (optional)
                </span>
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
                  className='file-input-bordered file-input w-full max-w-xl border-2'
                />
                <img src='/assets/user.png' id='current-avatar' className='ms-4 w-11 lg:w-14' alt='current user image'/>
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

// pull out user from context ✔
// data from axios
