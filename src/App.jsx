import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import View from './components/articleView/View'
import ArticleEdit from './components/forms/articleEdit'
import SignInContext from './state/ContextProvider'
import FormContainer from './components/forms/FormContainer'
import NotFound from './components/NotFound'
import Signin from './components/forms/Signin'
import Signup from './components/forms/Signup'
import { useContext, useEffect } from 'react'

export default function App() {
  const { setSignedIn } = useContext(SignInContext)

  useEffect(() => {
    // init signedInState with local storage
    const flag = JSON.parse(localStorage.getItem('signedIn')) || false
    setSignedIn(flag)
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Main />} />
          <Route path='auth/' element={<FormContainer />}>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='edit' element={<ArticleEdit />} />
          <Route path='view' element={<View />} />
          <Route path='notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
