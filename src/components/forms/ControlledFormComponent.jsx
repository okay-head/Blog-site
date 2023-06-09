import { useState } from 'react'
export default function ControlledFormComponent () {
  // never init input values w null/undefined
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  return (
    <section className='h-screen grid place-items-center'>
      <form
        id='form'
        className='shadow-md bg-[var(--gray-100)] py-20 px-10'
        onSubmit={e => {
          e.preventDefault()
          console.log('formdata', { email, username })
        }}
      >
        <label htmlFor='input_email'>Enter your email</label>
        <input
          type='email'
          name='email'
          id='input_email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />

        <label htmlFor='input_username'>Enter your username</label>
        <input
          type='text'
          name='text'
          id='input_username'
          value={username}
          onChange={e => {
            setUsername(e.target.value)
          }}
        />

        <button
          id='btn-submit'
          type='submit'
          htmlFor='form'
          className=' mt-4 px-4 py-2 shadow-md'
        >
          Submit
        </button>
      </form>
    </section>
  )
}
