import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SignInContext from '../state/ContextProvider'

export default function CheckAuth() {
  const { isSignedIn } = useContext(SignInContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isSignedIn) navigate('/')
  }, [isSignedIn])

  return <Outlet />
}
