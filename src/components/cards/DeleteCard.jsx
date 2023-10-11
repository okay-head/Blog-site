import Tooltip from '../shared/Tooltip'

export default function DeleteCard({ minus = false, mode, id, deleteCard }) {
  const onClickHandler = () => {
    deleteCard(mode, id)
  }

  return (
    <button
      onClick={onClickHandler}
      className={`group/btn absolute right-4 top-7 md:right-6 ${
        minus ? '' : 'hidden'
      }`}
    >
      <svg
        style={{ color: '#808080' }}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`feather feather-minus-circle hover:!text-red-500`}
      >
        <circle cx='12' cy='12' r='10'></circle>
        <line x1='8' y1='12' x2='16' y2='12'></line>
      </svg>
      <Tooltip
        text='Remove'
        left='-left-[90%]'
        groupHover='group-hover/btn:flex'
      />
    </button>
  )
}
