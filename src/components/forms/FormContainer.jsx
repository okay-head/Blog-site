import { Outlet, useNavigate } from 'react-router-dom'
import Container from '../Container'
import { useEffect } from 'react'
import useContextHook from '../../state/useContextHook'

export default function FormContainer() {
  const navigate = useNavigate()
  const { isSignedIn } = useContextHook()

  // first check if the user is already logged in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [isSignedIn])

  return (
    <Container>
      <article className='form-container grid min-h-[calc(90vh-4.625rem)] place-items-center py-10 pt-32 md:min-h-[calc(100vh-4.625rem)]'>
        <div
          className='shadow-custom card rounded-lg bg-[var(--white-base)] drop-shadow-xl'
          style={{ width: 'min(24rem,100% )' }}
        >
          <div className='card-body py-12'>
            <Outlet />
          </div>
        </div>
      </article>
    </Container>
  )
}
