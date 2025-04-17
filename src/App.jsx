
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
function App() {
 

  return (
    <>
  <div className='container_div container'>
    
<Header></Header>
<Profile></Profile>
<Projects></Projects>
<Experience></Experience>
<ContactForm></ContactForm>
  </div>
    </>
  )
}

export default App
