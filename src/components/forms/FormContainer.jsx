import Container from '../Container'
import Signin from './Signin'
import Signup from './Signup'
export default function FormContainer() {
  return (
    <Container>
      <article className='form-container grid min-h-[calc(90vh-4.625rem)] place-items-center py-10 pt-32 md:min-h-[calc(100vh-4.625rem)]'>
        <div
          className='shadow-custom card rounded-lg bg-[var(--white-base)] drop-shadow-xl'
          style={{ width: 'min(24rem,100% )' }}
        >
          <div className='card-body py-12'>
            <Signin />
            {/* <Signup /> */}
          </div>
        </div>
      </article>
    </Container>
  )
}
