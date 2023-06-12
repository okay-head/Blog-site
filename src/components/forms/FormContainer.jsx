import Container from '../Container'
import Form from './Form'
export default function FormContainer() {
  return (
    <Container>
    <article className='form-container grid min-h-screen place-items-center'>
      {/* card from daisyui */}
      <div className='card shadow-xl rounded-lg ' style={{width:'min(24rem,100% )'}}>
        <div className='card-body'>
          <h2 className='card-title'><u>Sign in</u></h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <Form />
          

        </div>
      </div>
    </article>
    </Container>
  )
}
