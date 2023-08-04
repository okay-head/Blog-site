import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  //init from localStorage for persistence
  const flag = JSON.parse(localStorage.getItem('signedIn')) || false
  const user_data = JSON.parse(localStorage.getItem('user_data')) || {data: 'no data present!'}

  // sign in state
  const [isSignedIn, setIsSignedIn] = useState(flag)
  // user state
  const [user, setUserFn] = useState(user_data)
  

  const setSignedIn = (val, _user={}) => {
    setIsSignedIn(val)
    localStorage.setItem('signedIn', val)
  }
  const setUser = (val) => {
    setUserFn(val)
    localStorage.setItem('user_data', JSON.stringify(val))
  }
  return (
    <SignInContext.Provider value={{ isSignedIn, setSignedIn, user, setUser }}>
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
