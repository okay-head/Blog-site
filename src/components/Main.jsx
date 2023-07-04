import Container from './Container'
import Aside from './aside/Aside'
import Feed from './feed/Feed'
export default function Main() {
  return (
    // <Container>
    <main className='pb-2 pt-[4.5rem] lg:flex'>
      <Feed />
      <Aside />
    </main>
    // </Container>
  )
}
