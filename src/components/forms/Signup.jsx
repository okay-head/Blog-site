import { useForm } from 'react-hook-form'
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // {...register(name, options)}

  const onSubmit = (vals) => console.log(vals)
  const onError = (err) => console.error(err)

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className='card-title mb-10'>
        <u>Sign up</u>
      </h2>
      {/* display-name */}
      <div className='display-name-container form-control min-h-[6rem] w-full max-w-sm'>
        <label className='label'>
          <span className='label-text font-semibold'>Display name</span>
        </label>
        <input
          {...register('name', {
            required: 'Display name is required'
          })}
          type='text'
          name='name'
          id='name'
          placeholder='Type here'
          className='input-bordered input w-full max-w-sm border-2'
        />
        {errors.name && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.name.message}</span>
          </label>
        )}
      </div>

      {/* email */}
      <div className='email-container form-control min-h-[6rem] w-full max-w-sm'>
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
          type='email'
          name='email'
          id='email'
          placeholder='Type here'
          className='input-bordered input w-full max-w-sm border-2'
        />
        {errors.email && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.email.message}</span>
          </label>
        )}
      </div>

      {/* password */}
      <div className='password-container form-control min-h-[6rem] w-full max-w-sm'>
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
          className='input-bordered input w-full max-w-sm border-2'
        />
        {errors.password && (
          <label className='label pb-0'>
            <span className='label-text-alt'>{errors.password.message}</span>
          </label>
        )}
      </div>
      {/* avatar */}
      <div className='avatar-container form-control min-h-[6rem] w-full max-w-sm'>
        <label className='label'>
          <span className='label-text font-semibold'>Avatar (optional)</span>
        </label>
        <input
             {...register('avatar', {
              required: false,
            })}
          type='file'
          name='avatar'
          id='avatar'
          accept=".jpg, .jpeg, .png"
          className='input-bordered input w-full max-w-sm border-2 pt-2'
        />
      </div>

      <div className='card-actions justify-center'>
        <button className='btn-custom my-4 px-4 py-3'>Sign up</button>
      </div>

      <div className='sign-up-help mt-8 flex flex-col gap-4 text-center text-sm'>
        <div className='italic'>Already have an account?</div>
        <div>
          <a href='#' className='underline hover:no-underline'>
            Sign in instead
          </a>
        </div>
      </div>
    </form>
  )
}

//
