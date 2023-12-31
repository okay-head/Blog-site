import { useForm } from 'react-hook-form'
import Container from '../Container'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'fecha'
import toTitleCase from '../../utility/toTitleCase'
import triggerAlert from '../shared/triggerAlert'
import { patchFn } from '../../firebase/realtimeDb'

export default function EditArticle() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [articleData, setArticleData] = useState(state?.data)
  //notice we didnt init w a useEffect here as in View.jsx
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => submitHandler(data)
  const onError = (err) => console.error(err)

  const patchUrl = `/data/${articleData.id}`

  const submitHandler = async ({ title, body, tags }) => {
    // make a patch

    await patchFn(patchUrl, {
      title: toTitleCase(title),
      body,
      tags: tags
        .trim()
        .split(' ')
        .map((el) => toTitleCase(el)),
      date: format(Date.now(), 'Do MMMM, YYYY'),
    })

    triggerAlert(undefined, 'Article edited!')
    navigate(state?.from)
  }
  return (
    <Container classVars='pt-28 pb-4 lg:max-w-5xl xl:px-0'>
      <section className='edit-article'>
        <div className='heading mb-8 border-b-2 pb-3'>
          <h1 className='block text-lg font-bold md:text-2xl'>
            {`Edit Article`}
          </h1>
        </div>
        <div className='article-edit-form form-body'>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='flex flex-col gap-6'
          >
            {/* form-title */}
            <div className='form-title form-control w-full max-w-2xl'>
              <label
                className='mb-3 text-base font-semibold text-[var(--text-gray)]'
                htmlFor='title'
              >
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                placeholder='Enter article title'
                className='input input-bordered w-full max-w-2xl border-2 text-sm lg:text-base'
                {...register('title', {
                  required: { value: true, message: 'Title is required' },
                  minLength: {
                    value: 2,
                    message: 'Title should be greater than 1 char',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Title should be less than 100 chars',
                  },
                })}
                defaultValue={articleData?.title || ''}
              />
              {errors.title && (
                <label className='label'>
                  <span className='label-text-alt ms-1 lg:!text-xs'>
                    {errors.title.message || `error`}
                  </span>
                </label>
              )}
            </div>

            {/* form-body */}

            <div className='form-body form-control w-full max-w-2xl'>
              <label
                className='mb-3 text-base font-semibold text-[var(--text-gray)]'
                htmlFor='body'
              >
                Body
              </label>

              <textarea
                id='body'
                name='body'
                type='text'
                placeholder='Enter article body'
                className='textarea textarea-bordered h-64 w-full max-w-2xl border-2 text-sm focus:border-2 focus:border-[#1f1f1fcf] focus:outline-0 lg:text-base'
                {...register('body', {
                  required: { value: true, message: 'Body is required' },
                  minLength: {
                    value: 100,
                    message: 'Body should be atleast 100 chars long',
                  },
                  maxLength: {
                    value: 7000,
                    message: 'Body should be less than 7000 chars',
                  },
                })}
                defaultValue={articleData?.body || ''}
              />
              {errors.body && (
                <label className='label'>
                  <span className='label-text-alt ms-1 lg:!text-xs'>
                    {errors.body.message || `error`}
                  </span>
                </label>
              )}
            </div>

            {/* form-hero-img */}

            <div className='form-hero form-control w-full max-w-sm'>
              <label
                className='mb-3 text-base font-semibold text-[var(--text-gray)]'
                htmlFor='hero'
              >
                Hero image
              </label>
              <input
                id='hero'
                name='hero'
                type='file'
                placeholder='Enter article hero'
                className='file-input file-input-bordered w-full max-w-sm border-2 text-sm lg:text-base'
                // {...register('hero', {
                //   // required: {
                //   //   value: true,
                //   //   message: 'Please upload a hero image',
                //   // },
                // })}
              />
              {errors.hero && (
                <label className='label'>
                  <span className='label-text-alt ms-1 lg:!text-xs'>
                    {errors.hero.message || `error`}
                  </span>
                </label>
              )}
            </div>

            {/* form-tags */}
            <div className='form-tags form-control w-full max-w-sm'>
              <label
                className='mb-3 text-base font-semibold text-[var(--text-gray)]'
                htmlFor='tags'
              >
                Tags
              </label>
              <input
                id='tags'
                name='tags'
                type='text'
                placeholder='Enter space separated article tags'
                className='input input-bordered w-full max-w-sm border-2 text-sm lg:text-base'
                {...register('tags', {
                  required: {
                    value: true,
                    message: 'Atleast two tags are required',
                  },
                })}
                defaultValue={
                  (Array.isArray(articleData?.tags) &&
                    articleData?.tags.join(' ')) ||
                  ''
                }
              />
              {errors.tags && (
                <label className='label'>
                  <span className='label-text-alt ms-1 lg:!text-xs'>
                    {errors.tags.message || `error`}
                  </span>
                </label>
              )}
            </div>

            <button className='btn-custom my-4 max-w-[6rem] px-4 py-3'>
              Edit
            </button>
          </form>
        </div>
      </section>
    </Container>
  )
}
