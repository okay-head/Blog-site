import axios from 'axios'
import { useEffect, useState } from 'react'
import Card2 from '../cards/Card2'
import Card2Skeleton from '../cards/Card2Skeleton'
import Card1 from '../cards/Card1'
import Card1Skeleton from '../cards/Card1Skeleton'

// idk why but i'm separating the fetches and aside body render logic
export default function RenderSuggestions({ baseUrl, width, lg, isSignedIn }) {
  const [suggestions, setSuggestions] = useState()
  const [loading, setLoading] = useState(true)
  console.log(loading)
  useEffect(() => {
    if (!isSignedIn) {
      return
    }
    // ____setSuggestions____
    ;(async function getSuggestions() {
      const res = await Promise.all([
        axios.get(`${baseUrl}/data/7`),
        axios.get(`${baseUrl}/data/8`),
        axios.get(`${baseUrl}/data/9`),
      ])

      setSuggestions(res)
      setLoading(false)
    })()
  }, [])

  return loading ? (width > lg ? (
    <>
      <Card2Skeleton />
      <Card2Skeleton />
      <Card2Skeleton />
    </>
  ) : (<>
    <Card1Skeleton />
    <Card1Skeleton />
    <Card1Skeleton />
  </>)
  ): Array.isArray(suggestions) && width > lg ? (
    Array.isArray(suggestions) &&
    suggestions?.map((x) => <Card2 key={x?.data?.id} data={x?.data} />)
  ) : (
    Array.isArray(suggestions) &&
    suggestions?.map((x) => (
      <Card1 tagNone={'hidden'} key={x?.data?.id} data={x?.data} />
    ))
  )
}
