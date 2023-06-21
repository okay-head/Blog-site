import Container from '../Container'
import Card1 from '../cards/Card1'

export default function Aside() {
  return (
    <aside className='bg-[var(--gray-100)] lg:max-w-lg '>
      <Container classVars='pt-10 lg:ps-6'>
        <section className='reading-list'>
          <h1 className='block text-lg font-bold md:text-2xl'>My reading list</h1>
          <Card1 />
          {/* card1 */}
          {/* card2 */}
          {/* card3 */}
        </section>

        <section className='suggestions'>
          <Card1 />
          <Card1 />
        </section>
      </Container>
    </aside>
  )
}
