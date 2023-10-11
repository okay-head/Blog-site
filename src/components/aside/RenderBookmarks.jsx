import axios from 'axios'
import Card2Skeleton from '../cards/Card2Skeleton'
import { useEffect, useState } from 'react'
import Card2 from '../cards/Card2'
import Card1 from '../cards/Card1'

export default function RenderBookmarks({ baseUrl, width, lg, user_bookmarks, isSignedIn }) {
  const [bookmarks, setBookmarks] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!isSignedIn) {
      return
    }
    // ____setBookmarks____
    ;(async function getBookmarks() {
      const res = await Promise.all(
        user_bookmarks.map((x) => axios.get(`${baseUrl}/data/${x}`))
      )
      setBookmarks(res)
      setLoading(false)
    })()
  }, [])

  return loading ? (
    Array(user_bookmarks?.length).fill(1).map((_,i)=>{
      return <Card2Skeleton key={i}/>
    })
  ) : Array.isArray(bookmarks) && width > lg ? (
    Array.isArray(bookmarks) &&
    bookmarks?.map((x) => <Card2 key={x?.data?.id} data={x?.data} />)
  ) : (
    Array.isArray(bookmarks) &&
    bookmarks?.map((x) => (
      <Card1 tagNone={'hidden'} key={x?.data?.id} data={x?.data} />
    ))
  )
}
