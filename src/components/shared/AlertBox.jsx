const AlertBox = () => {
  return (
    <div
      id='alert-box'
      className={`alert-box alert gap-1 sm:gap-4 fixed left-[50%] z-40 hidden w-52 sm:w-80 !translate-y-16 translate-x-[-50%] border-0 bg-[var(--gray-100)] opacity-0 shadow-md
      `}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>Your purchase has been confirmed!</span>
    </div>
  )
}

export default AlertBox
