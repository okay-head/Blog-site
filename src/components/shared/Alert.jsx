// custom alert box
// put this here so that it can be shared b/w all the pages

import { Outlet } from 'react-router-dom'
import AlertBox from './AlertBox'

export default function Alert() {
  return (
    <>
      <AlertBox />
      <Outlet />
    </>
  )
}
