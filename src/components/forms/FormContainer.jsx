import Container from '../Container'
import Form from './Form'
export default function FormContainer() {
  return (
    <Container>
      <article className='form-container grid min-h-[calc(90vh-4.625rem)] place-items-center md:min-h-[calc(100vh-4.625rem)]'>
        {/* card from daisyui */}
        <div
          className='card rounded-lg bg-[var(--white-base)] shadow-xl'
          style={{ width: 'min(24rem,100% )' }}
        >
          <div className='card-body py-12'>
            <Form />
          </div>
        </div>
      </article>
    </Container>
  )
}
