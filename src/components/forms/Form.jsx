export default function Form() {
  return (
    <form action=''>
      <div className='Email-container form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text font-semibold'>Email</span>
        </label>
        <input
          type='email'
          name='email'
          placeholder='Type here'
          className='input-bordered input w-full max-w-xs custom-input'
        />
        <label className='label'>
          <span className='label-text-alt'>Error label</span>
        </label>
      </div>

      <div className='card-actions justify-center'>
        <button className='btn-custom px-4 py-2'>Sign in</button>
      </div>

    </form>
  )
}

// 