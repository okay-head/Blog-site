// import './index.css'
import Navbar from './components/Navbar'
import Card1 from './components/cards/Card1'
import FormContainer from './components/forms/FormContainer'
export default function App() {
  return (
    <>
      <Navbar />
      {/* <FormContainer /> */}
      <div className='dummy-card-container mx-6 mt-16 md:mx-10'>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </>
  )
}
