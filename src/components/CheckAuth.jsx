import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useContextHook from '../state/useContextHook'

export default function CheckAuth() {
  const { isSignedIn } = useContextHook()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isSignedIn) navigate('/')
  }, [isSignedIn])

  return <Outlet />
}
