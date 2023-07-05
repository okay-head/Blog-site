import Container from '../Container'
import Card1 from './../cards/Card1'
export default function Feed() {
  return (
    <section className='feed'>
      <Container classVars='pt-10'>
        <div className='heading-text justify-between pb-4 md:flex md:pb-6'>
          <div className='heading'>
            <h1 className='block text-lg font-bold md:text-2xl'>Articles</h1>
          </div>

          <div className='search-bar relative flex-1 py-1 pt-4 md:ms-auto md:max-w-xs md:p-0 lg:max-w-md'>
            <input
              type='text'
              placeholder='Search'
              className='input-bordered input h-auto w-full rounded-3xl !border-[1px] py-2 ps-10 placeholder:text-sm  md:max-w-xs lg:max-w-md '
            />
            <img
              src='/assets/loupe(2).png'
              alt='search-icon'
              className='absolute left-4 top-[1.90rem] block w-4 md:top-[.90rem]'
            />
          </div>
        </div>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </Container>
    </section>
  )
}
