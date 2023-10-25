export default function LoadingScreen() {
  return (
    <div
      id='loading-screen'
      className='fixed inset-0 z-50 hidden min-h-screen bg-[#eae8ea] bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/assets/spectacle-loader.gif")' }}
    ></div>
  )
}

// when passed true, displays the loading screen
export const triggerLoadingScreen = (flag) => {
  flag
    ? document.getElementById('loading-screen')?.classList?.remove('hidden')
    : document.getElementById('loading-screen')?.classList?.add('hidden')
}
