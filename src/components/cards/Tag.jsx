export default function Tag({ txt = '' }) {
  if (txt === '') {
    return null
  }
  return (
    <button disabled className='btn-custom rounded-3xl px-3 py-2 font-normal text-[var(--text-gray)] disabled:bg-[var(--gray-100)] disabled:text-[var(--text-gray)]'>
      {txt}
    </button>
  )
}
