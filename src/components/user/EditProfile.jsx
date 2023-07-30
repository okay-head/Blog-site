import axios from 'axios'
import { useEffect, useState } from 'react'

export default function EditProfile() {
  const [data, setData] = useState('User data is empty')
  console.log(data)

  useEffect(() => {
    try {
      (async function getData() {
        const response = await axios.get('http://localhost:3300/user')
        setData(response.data)
      })()

    } catch (e) {
      throw new Error(e)
    }
  }, [])

  return <div className='pt-24'>EditProfile</div>
}
