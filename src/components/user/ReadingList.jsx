import useContextHook from '../../state/useContextHook'

export default function ReadingList() {
  const {
    user: { user_bookmarks },
  } = useContextHook()
  console.log(`Reading list: User's reading list- `, user_bookmarks)
  return <div className='pt-24'>ReadingList</div>
}
