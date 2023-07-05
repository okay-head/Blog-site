import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  const [isSignedIn, setSignedIn] = useState(true)

  return (
    <SignInContext.Provider value={{ isSignedIn, setSignedIn }}>
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
