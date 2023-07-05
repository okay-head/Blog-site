import Main from './components/Main'
import Navbar from './components/Navbar'
import { ContextProvider } from './state/ContextProvider'
export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Main />
    </ContextProvider>
  )
}
