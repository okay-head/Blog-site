import Container from '../Container'
import Signin from './Signin'
import Signup from './Signup'
export default function FormContainer() {
  return (
    <Container>
      <article className='form-container grid min-h-[calc(90vh-4.625rem)] place-items-center md:min-h-[calc(100vh-4.625rem)] py-10'>
        <div
          className='card rounded-lg bg-[var(--white-base)] shadow-custom drop-shadow-xl'
          style={{ width: 'min(24rem,100% )' }}
        >
          <div className='card-body py-12'>
            {/* <Signin /> */}
            <Signup />
          </div>
        </div>
      </article>
    </Container>
  )
}