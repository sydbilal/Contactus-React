import './App.css'
import Body from './components/Body'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Body />
      <main className=''>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
