import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import View from './components/articleView/View'
import ArticleEdit from './components/forms/articleEdit'
import { ContextProvider } from './state/ContextProvider'
import FormContainer from './components/forms/FormContainer'
import NotFound from './components/NotFound'
import Signin from './components/forms/Signin'
import Signup from './components/forms/Signup'
export default function App() {
  return (
    <ContextProvider>
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
    </ContextProvider>
  )
}
