import Container from './Container'
import Card1 from './cards/Card1'
export default function Main() {
  return (
    <Container>
      <main className='pt-28 pb-2'>
        <section className='main-section'>
          <div className="heading-text pb-4 md:pb-6 md:flex justify-between">
            <div className="heading">
            <h1 className='text-lg font-bold block md:text-2xl'>Articles</h1>
            <img src="/assets/loupe.png" alt="search-icon" className='md:hidden block w-10' />
            </div>

            <div className="search-bar py-1 pt-4 md:p-0 md:ms-auto flex-1 md:max-w-xs lg:max-w-md">
            <input type="text" placeholder="Search" className="input input-bordered w-full rounded-3xl h-auto py-2  !border-[1px] placeholder:text-sm  md:max-w-xs lg:max-w-md " />
            </div>
          </div>
          <Card1 />
          <Card1 />
          <Card1 />
        </section>
        <aside>
          <section className='reading-list'></section>
          <section className='suggestions'></section>
        </aside>
      </main>
    </Container>
  )
}
