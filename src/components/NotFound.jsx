import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const url = useLocation().pathname
  const navigate = useNavigate()
  useEffect(() => {
    if (url!=='/') {
      navigate('/notfound')
    }
    }, [])
  
  return (
    <div className='pt-32 bg-red-200'>
    <h1>NotFound</h1>
    </div>
  )
}