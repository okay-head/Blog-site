import {useForm} from 'react-hook-form'
export default function Form() {
  const {register, handleSubmit, formState:{errors}} = useForm()

  // {...register(name, options)}

  const onSubmit = (vals)=>console.log(vals)
  const onError = (err)=>console.error(err)

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className='card-title mb-8'>
        <u>Sign in</u>
      </h2>
      {/* email */}
      <div className='email-container form-control w-full max-w-xs min-h-[7rem]'>
        <label className='label'>
          <span className='label-text font-semibold'>Email</span>
        </label>
        <input {...register('email',{required: 'Email is required', pattern:{
          value: '/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
          message: 'Please enter a valid email'
        }})}
          type='email'
          name='email'
          id='email'
          placeholder='Type here'
          className='custom-input input-bordered input w-full max-w-xs border-2'
        />
        {errors.email && 
        <label className='label pb-0'>
          <span className='label-text-alt'>{errors.email.message}</span>
        </label>
        }
      </div>

      {/* password */}
      <div className='password-container form-control w-full max-w-xs min-h-[7rem]'>
        <label className='label'>
          <span className='label-text font-semibold'>Password</span>
        </label>
        <input {...register('password',{required: 'Password is required', minLength:{
          value: 8,
          message: 'Should be atleast 8 chars'
        }})}
          type='password'
          name='password'
          id='password'
          placeholder='Type here'
          className='custom-input input-bordered input w-full max-w-xs border-2'
        />
        {errors.password && 
        <label className='label pb-0'>
          <span className='label-text-alt'>{errors.password.message}</span>
        </label>
        }
      </div>

      <div className='card-actions justify-center'>
        <button className='btn-custom px-4 py-3 my-4'>Sign in</button>
      </div>

      <div className="sign-in-help text-center text-sm mt-8 flex flex-col gap-4">
        <div className='italic'>Don't have an account?</div>
        <div><a href="#" className='underline hover:no-underline'>Sign up instead</a></div>
      </div>
    </form>
  )
}

//
