import Container from './Container'
import Aside from './aside/Aside'
import Feed from './feed/Feed'
export default function Main() {
  return (
    // <Container>
      <main className='pt-[4.5rem] pb-2 lg:flex'>
        <Feed />
        <Aside />
      </main>
    // </Container>
  )
}
