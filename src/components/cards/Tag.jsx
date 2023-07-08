export default function Tag({ txt = '', classVars = '' }) {
  if (txt === '') {
    return null
  }
  return (
    <button
      disabled
      className={`btn-custom rounded-3xl px-3 py-1 text-xs font-medium text-[var(--text-gray)] disabled:bg-[var(--gray-100)] disabled:text-[var(--text-gray)] md:text-sm ${classVars}`}
    >
      {txt}
    </button>
  )
}
