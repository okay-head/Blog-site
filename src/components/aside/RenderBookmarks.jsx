import Card2Skeleton from '../cards/Card2Skeleton'
import { useEffect, useState } from 'react'
import Card2 from '../cards/Card2'
import Card1 from '../cards/Card1'
import Card1Skeleton from '../cards/Card1Skeleton'
import { getFn } from '../../firebase/realtimedb'

export default function RenderBookmarks({
  width,
  lg,
  user_bookmarks,
  isSignedIn,
}) {
  const [bookmarks, setBookmarks] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!isSignedIn) {
      return
    }
    // ____setBookmarks____
    ;(async function () {
      // check for undefined, not likely to happen but still a check
      if (user_bookmarks == undefined) {
        setBookmarks(undefined)
        setLoading(false)
        return
      }

      // get bookmarks
      const res = await Promise.all(
        user_bookmarks.map((x) => getFn(`/data/${x}`))
      )
      setBookmarks(res)
      setLoading(false)
    })()
  }, [])

  return loading
    ? width > lg
      ? Array(user_bookmarks?.length)
          .fill(1)
          .map((_, i) => {
            return <Card2Skeleton key={i} />
          })
      : Array(user_bookmarks?.length)
          .fill(1)
          .map((_, i) => {
            return <Card1Skeleton key={i} />
          })
    : Array.isArray(bookmarks) && width > lg
    ? Array.isArray(bookmarks) &&
      bookmarks?.map((x) => <Card2 key={x?.id} data={x} />)
    : Array.isArray(bookmarks) &&
      bookmarks?.map((x) => (
        <Card1 tagNone={'hidden'} key={x?.id} data={x} />
      ))
}
