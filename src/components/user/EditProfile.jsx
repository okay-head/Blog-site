import useContextHook from '../../state/useContextHook'

export default function EditProfile() {
  const {user} = useContextHook()
  console.log(`Edit profile: Edit profile for ${user?.user_displayName} `,user);
  return <div className='pt-24'>EditProfile</div>
}
