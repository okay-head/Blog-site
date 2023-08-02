import useContextHook from '../../state/useContextHook'

export default function MyArticles() {
  const {user:{user_articles}} = useContextHook()
  console.log(`User articles: User's articles- `,user_articles);

  return <div className='pt-24'>MyArticles</div>
}
