export default function Tooltip({
  text = 'tooltip',
  left = '',
  groupHover = 'group-hover:flex',
}) {
  return (
    <div
      className={`absolute bottom-[115%] hidden flex-col items-center ${groupHover} ${left}`}
    >
      <span className='tooltip-box z-10 whitespace-nowrap rounded-md bg-[#808080] p-3 text-xs leading-none text-white shadow-lg'>
        <b>{text}</b>
      </span>
      <div className='tooltip-bottom-arrow -mt-2 h-3 w-3 rotate-45 bg-[#808080e7]'></div>
    </div>
  )
}
