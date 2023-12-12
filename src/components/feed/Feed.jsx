import Container from '../Container'
import Card1 from './../cards/Card1'
import { useEffect, useState } from 'react'
import toTitleCase from './../../utility/toTitleCase'
import Card1Skeleton from '../cards/Card1Skeleton'
import { getAllDataFn } from '../../firebase/realtimeDb'

export default function Feed() {
  const [feedData, setFeedData] = useState('No feed data')
  const [loading, setLoading] = useState(true)
  const [filterData, setFilterData] = useState('')
  const [inputTxt, setInputTxt] = useState('')
  const [sm, md, lg, xl] = [640, 768, 1024, 1280]
  const [width, setWidth] = useState(window.innerWidth)

  // get feed data
  useEffect(() => {
    ;(async () => {
      const d = await getAllDataFn('/data')
      setFeedData(d)
      setFilterData(d)
      setLoading(false)
    })()
  }, [])

  const filterByQuery = (e) => {
    const q = e.target.value
    setInputTxt(q)

    if (q == '') {
      setFilterData(feedData)
      return
    }
    const filteredData = feedData.filter(
      (el) =>
        el.title.includes(q) ||
        el.title.includes(q.toLowerCase()) ||
        el.title.includes(q.toUpperCase()) ||
        el.title.includes(toTitleCase(q))
    )
    setFilterData(filteredData)
  }

  return (
    <section className='feed'>
      <Container classVars='pt-10'>
        <div className='heading-text justify-between pb-4 md:flex md:pb-6'>
          <div className='heading'>
            <h1 className='block text-lg font-bold md:text-2xl'>Articles</h1>
          </div>

          <div className='search-bar relative flex-1 py-1 pt-4 md:ms-auto md:max-w-xs md:p-0 lg:max-w-md'>
            <input
              type='text'
              placeholder='Search'
              value={inputTxt}
              onChange={(e) => filterByQuery(e)}
              className='input input-bordered h-auto w-full rounded-3xl !border-[1px] py-2 ps-10 placeholder:text-sm  md:max-w-xs lg:max-w-md '
            />
            <img
              src='/assets/loupe(2).webp'
              alt='search-icon'
              className='absolute left-4 top-[1.90rem] block w-4 md:top-[.90rem]'
            />
            <button
              onClick={() => {
                setInputTxt('')
                setFilterData(feedData)
              }}
              className={`absolute right-3 top-7 md:right-4 md:top-[26%] ${
                inputTxt == '' ? 'hidden' : ''
              }`}
            >
              <img
                src='/assets/icons8-close-new-24.webp'
                alt='close-cross'
                className='w-5'
              />
            </button>
          </div>
        </div>
        {/* no articles */}
        {loading ? (
          <>
            <Card1Skeleton />
            <Card1Skeleton />
            <Card1Skeleton />
            <Card1Skeleton />
            <Card1Skeleton />
            <Card1Skeleton />
            {width > lg ? <Card1 classVars='opacity-0' /> : <></>}
          </>
        ) : Array.isArray(filterData) && filterData.length == 0 ? (
          <div className='relative max-h-screen overflow-hidden border-t-2'>
            <div className='absolute inset-0 top-[-30%] z-10 col-span-2 grid place-items-center'>
              <div className='w-60 md:w-[unset]'>
                <img
                  src='/assets/image-removebg-preview(1).webp'
                  alt='Not found magnifying glass'
                />
                <h3 className='mt-4 text-center text-base italic text-[var(--text-lighter)] md:text-lg'>
                  No articles found! Try something different.
                </h3>
              </div>
            </div>

            <Card1 classVars='opacity-0' />
            <Card1 classVars='opacity-0' />
          </div>
        ) : (
          Array.isArray(filterData) &&
          filterData.map((x) => <Card1 key={x.id} data={x} />)
        )}
      </Container>
    </section>
  )
}
