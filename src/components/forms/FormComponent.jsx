export default function FormComponent () {
  function handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    for (const [key, value] of formData) {
      console.log(`${key} : ${value}`)
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
      <form
        id='form'
        className='shadow-md bg-[var(--gray-100)] py-20 px-10'
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor='input_email'>Enter your email</label>
        <input type='email' name='email' id='input_email' defaultValue={''} />

        {/* or alternatively you can do */}
        <label>
          Enter your username
          <input type='text' name='text' id='input_username' />
        </label>
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
