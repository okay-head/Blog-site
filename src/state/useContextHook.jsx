import { useContext } from 'react'
import SignInContext from './ContextProvider'

function useContextHook() {
  const context = useContext(SignInContext)
  return context
}
export default useContextHook
