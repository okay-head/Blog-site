import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import View from './components/articleView/View'
import ArticleEdit from './components/forms/articleEdit'
import FormContainer from './components/forms/FormContainer'
import NotFound from './components/NotFound'
import Signin from './components/forms/Signin'
import Signup from './components/forms/Signup'
import CheckAuth from './components/CheckAuth'
import MyArticles from './components/user/MyArticles'
import ReadingList from './components/user/ReadingList'
import EditProfile from './components/user/EditProfile'

export default function App() {
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
          <Route path='view' element={<View />} />
          <Route path='notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />

          {/* Protected routes / Only accessible when signedIn */}
          <Route element={<CheckAuth />}>
            <Route path='edit' element={<ArticleEdit />} />
            <Route path='user/articles' element={<MyArticles />} />
            <Route path='user/bookmarks' element={<ReadingList />} />
            <Route path='user/profile' element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
