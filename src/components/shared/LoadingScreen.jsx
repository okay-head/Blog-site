export default function LoadingScreen() {
  return (
    <div
      id='loading-screen'
      className='fixed inset-0 z-50 min-h-screen bg-[#eae8ea] bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/assets/spectacle-loader.gif")' }}
    ></div>
  )
}
