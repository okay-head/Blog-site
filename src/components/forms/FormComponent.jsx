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
        <label className='label' htmlFor='input_email'>
          Enter your email
        </label>
        <input
          id='input_email'
          type='email'
          name='email'
          placeholder=''
          className='input input-bordered w-full max-w-xs h-auto py-1'
        />

        {/* or alternatively you can do */}
        <label className='label' htmlFor='input_username'>Enter your username</label>
          <input
            type='text'
            name='text'
            id='input_username'
            placeholder=''
            className='input input-bordered w-full max-w-xs h-auto py-1'
          />

        <button id='btn-submit' type="submit" value="Submit" className="btn h-auto min-h-0 py-2 mt-4">Submit</button>

      </form>
    </section>
  )
}
