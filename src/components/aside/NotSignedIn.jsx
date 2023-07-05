export default function NotSignedIn() {
  return(
    <section className='bg-[var(--white-base)] min-w-[16rem] grid place-items-center shadow-xl mx-2 lg:ms-6 lg:me-4
    p-8  lg:min-h-[25rem]'>
      <div className='lg:max-w-[8rem] '>
      <h2 className='text-lg lg:text-2xl font-medium'>SIGN IN</h2>
      <p className='text-[var(--text-gray)]'>to acess your reading list, favourites and much more...</p>
      </div>
    </section>
  )
}