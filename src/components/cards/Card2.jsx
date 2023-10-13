import { useRef } from 'react'
import defaultData from './../../state/defaultData.js'
import { useNavigate } from 'react-router-dom'

export default function Card2({ data = defaultData }) {
  const articleRef = useRef(null)
  const navigate = useNavigate()

  const adjustTitle = (txt) => {
    const maxLen = 46
    txt = txt.trim()
    if (txt.length < maxLen) return txt

    const newTxt = txt.slice(0, 46) + ' ...'
    return newTxt
  }

  const adjustAuthor = (name, maxLen) => {
    name = name.trim()
    if (name.length < maxLen) return name

    const [firstname, lastname] = name.split(' ')
    let newName = `${firstname[0]}. ${lastname}`

    if (newName.length < maxLen) return newName

    newName = `${firstname[0]}. ${lastname[0]}.`
    return newName
  }

  return (
    <article ref={articleRef} id={`${data.id}`} className='pt-8'>
      <div className='card-content grid h-40 grid-cols-[0.9fr,1.1fr] items-center gap-4 overflow-hidden'>
        <div
          className='img-container bg-style h-36 min-w-[130px]  rounded-md bg-[#b0b1b3]'
          style={{
            backgroundImage: 'url("/assets/(md)galaxy.jpg")',
          }}
        ></div>

        <div className='grid h-36 place-items-center'>
          <div>
            <h2
              className='cursor-pointer pb-1 text-lg font-semibold !leading-5 hover:underline'
              onClick={() => {
                navigate(`/view/${articleRef?.current?.id}`, {
                  state: { data },
                })
              }}
            >
              {adjustTitle(data?.title) || adjustTitle(defaultData?.title)}
            </h2>
            <p className='max-h-[8ch] overflow-hidden py-1 text-sm text-[var(--text-gray)]'>
              {data?.body || defaultData?.body}
            </p>

            <div className='card-head flex max-h-7 gap-2 overflow-hidden pt-2 xl:gap-5'>
              <div>
                <span className='block text-sm font-semibold'>
                  {adjustAuthor(data?.author, 14) ||
                    adjustAuthor(defaultData?.author, 14)}
                </span>
              </div>
              <div>
                <span className='bullet relative mt-[1px] block text-xs font-semibold text-[var(--text-gray)]'>
                  {data?.date || defaultData?.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
