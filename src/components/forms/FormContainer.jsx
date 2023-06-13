import Container from '../Container'
import Form from './Form'
export default function FormContainer() {
  return (
    <Container>
      <article className='form-container grid min-h-screen place-items-center'>
        {/* card from daisyui */}
        <div
          className='card rounded-lg shadow-xl'
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
