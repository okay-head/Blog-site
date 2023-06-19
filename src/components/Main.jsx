import Container from './Container'
import Card1 from './cards/Card1'
export default function Main() {
  return (
    <Container>
      <main className='pt-10 pb-2'>
        <section className='main-section'>
          <div className="heading-text pb-4 md:pb-6 md:flex">
            <h1 className='text-lg font-bold block md:text-2xl'>Articles</h1>
            <div className="search-bar py-1 pt-4 md:p-0 md:ms-auto">
            <input type="text" placeholder="Search" className="input input-bordered w-full rounded-3xl h-auto py-2 placeholder:text-sm  md:max-w-xs  lg:!max-w-none" />
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
