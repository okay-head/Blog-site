export default function NotSignedIn() {
  return (
    <section
      className='mx-2 my-4 grid min-w-[16rem] place-items-center bg-[var(--white-base)] p-8 shadow-xl sm:mx-auto sm:max-w-md lg:my-0 lg:me-4
    lg:ms-6  lg:min-h-[25rem]'
    >
      <div className='lg:max-w-[8rem] '>
        <h2 className='text-lg font-medium lg:text-2xl'>SIGN IN</h2>
        <p className='text-[var(--text-gray)]'>
          to acess your reading list, favourites and much more...
        </p>
      </div>
    </section>
  )
}
