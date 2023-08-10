import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import View from './components/articleView/View'
import FormContainer from './components/forms/FormContainer'
import NotFound from './components/NotFound'
import Signin from './components/forms/Signin'
import Signup from './components/forms/Signup'
import CheckAuth from './components/CheckAuth'
import MyArticlesAndBookmarks from './components/user/MyArticlesAndBookmarks'
import ReadingList from './components/user/ReadingList'
import EditProfile from './components/user/EditProfile'
import { ErrorBoundary } from 'react-error-boundary'
import CreateArticle from './components/forms/CreateArticle'
import EditArticle from './components/forms/EditArticle'

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}
export default function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Main />} />
            <Route path='auth/' element={<FormContainer />}>
              <Route path='signin' element={<Signin />} />
              <Route path='signup' element={<Signup />} />
            </Route>
            <Route path='view/:id' element={<View />} />
            <Route path='notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />

            {/* Protected routes / Only accessible when signedIn */}
            <Route element={<CheckAuth />}>
              <Route element={<EditArticle />} path='edit' />
              <Route element={<CreateArticle />} path='create' />
              <Route path='user/articles' element={<MyArticlesAndBookmarks mode='articles' />} />
              <Route path='user/bookmarks' element={<MyArticlesAndBookmarks mode='bookmarks' />} />
              <Route path='user/profile' element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
