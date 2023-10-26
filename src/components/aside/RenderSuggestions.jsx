import { useEffect, useState } from 'react'
import Card2 from '../cards/Card2'
import Card2Skeleton from '../cards/Card2Skeleton'
import Card1 from '../cards/Card1'
import Card1Skeleton from '../cards/Card1Skeleton'
import { getFn } from '../../firebase/realtimedb'

// idk why but i'm separating the fetches and aside body render logic
export default function RenderSuggestions({ width, lg, isSignedIn }) {
  const [suggestions, setSuggestions] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    // ____setSuggestions____
    ;(async function getSuggestions() {
      const res = await Promise.all([
        getFn(`/data/7`),
        getFn(`/data/8`),
        getFn(`/data/9`),
      ])

      setSuggestions(res)
      setLoading(false)
    })()
  }, [])

  return loading ? (
    width > lg ? (
      <>
        <Card2Skeleton />
        <Card2Skeleton />
        <Card2Skeleton />
      </>
    ) : (
      <>
        <Card1Skeleton />
        <Card1Skeleton />
        <Card1Skeleton />
      </>
    )
  ) : Array.isArray(suggestions) && width > lg ? (
    Array.isArray(suggestions) &&
    suggestions?.map((x) => <Card2 key={x?.id} data={x} />)
  ) : (
    Array.isArray(suggestions) &&
    suggestions?.map((x) => <Card1 tagNone={'hidden'} key={x?.id} data={x} />)
  )
}
