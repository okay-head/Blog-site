import axios from 'axios'
import Container from '../Container'
import Card1 from './../cards/Card1'
import { useEffect, useState } from 'react'
import toTitleCase from './../../utility/toTitleCase'

export default function Feed() {
  // get feed data (iife)
  const [feedData, setFeedData] = useState('No feed data')
  const [filterData, setFilterData] = useState('')
  const [inputTxt, setInputTxt] = useState('')
  useEffect(() => {
    const data = (async () => {
      try {
        return await axios.get('http://localhost:3000/data')
      } catch (e) {
        // alert(e)
        console.log(e)
      }
    })()

    data.then((res) => {
      setFeedData(res.data)
      setFilterData(res.data)
    })
  }, [])

  const filterByQuery = (e) => {
    const q = e.target.value
    setInputTxt(q)

    if (q == '') {
      setFilterData(feedData)
      return
    }
    // ig wont work for the 1st word?
    const filteredData = filterData.filter(
      (el) =>
        el.title.search(q) != -1 ||
        el.title.search(q.toLowerCase()) != -1 ||
        el.title.search(q.toUpperCase()) != -1 ||
        el.title.search(toTitleCase(q)) != -1
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
              src='/assets/loupe(2).png'
              alt='search-icon'
              className='absolute left-4 top-[1.90rem] block w-4 md:top-[.90rem]'
            />
          </div>
        </div>
        {/* no articles */}
        {Array.isArray(filterData) && filterData.length == 0 ? (
          <div className='relative max-h-screen overflow-hidden border-t-2'>
            <div className='absolute inset-0 top-[-30%] z-10 col-span-2 grid place-items-center'>
              <div>
                <img
                  src='/assets/image-removebg-preview(1).png'
                  alt='Not found magnifying glass'
                />
                <h3 className='mt-4 text-center text-lg italic text-[var(--text-lighter)]'>
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
