import useContextHook from '../../state/useContextHook'
import axios from 'axios'
import Container from '../Container'
import Card1 from './../cards/Card1'
import { useEffect, useState } from 'react'

export default function MyArticles() {
  const {
    user: { user_articles },
  } = useContextHook()
  console.log(`User articles: User's articles- `, user_articles)
  // get feed data (iife)
  const [feedData, setFeedData] = useState('No feed data')
  console.log({ feedData })
  useEffect(() => {
    const data = (async () => {
      try {
        return Promise.all(
          user_articles.map((id) =>
            axios.get(`http://localhost:3000/data/${id}`)
          )
        )
      } catch (e) {
        alert(e)
        console.log(e)
      }
    })()

    data.then((res) => setFeedData(res.map(({ data }) => data)))
  }, [])

  return (
    <section className='my-articles pb-8 pt-[4.5rem]'>
      <Container classVars='pt-10'>
        <div className='heading-text justify-between border-b-2 pb-4  md:mb-10 md:flex md:pb-6'>
          <div className='heading'>
            <h1 className='block text-lg font-bold md:text-2xl'>My articles</h1>
          </div>

          {/* <div className='search-bar relative flex-1 py-1 pt-4 md:ms-auto md:max-w-xs md:p-0 lg:max-w-md'>
            <input
              type='text'
              placeholder='Search'
              className='input-bordered input h-auto w-full rounded-3xl !border-[1px] py-2 ps-10 placeholder:text-sm  md:max-w-xs lg:max-w-md '
            />
            <img
              src='/assets/loupe(2).png'
              alt='search-icon'
              className='absolute left-4 top-[1.90rem] block w-4 md:top-[.90rem]'
            />
          </div> */}
        </div>
        <div className='articles-flex-container grid grid-flow-row grid-cols-2 gap-10'>
          {Array.isArray(feedData) ? (
            feedData?.map((x) => (
              <Card1
                key={x.id}
                data={x}
                classVars='bg-[var(--gray-100)] p-6 rounded-lg !border-t-0'
                forTag='!border-2 !border-[var(--gray-200)]'
              />
            ))
          ) : (
            <h2>Loader</h2>
          )}
        </div>
      </Container>
    </section>
  )
}
