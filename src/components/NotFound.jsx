import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const url = useLocation().pathname
  const navigate = useNavigate()
  useEffect(() => {
    if (url !== '/') {
      navigate('/notfound')
    }
  }, [])

  // add dedicated not found (see 404 page inspirations)
  return (
    <div className='bg-red-200 pt-32'>
      <h1>NotFound</h1>
    </div>
  )
}
