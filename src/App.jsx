import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Footer } from './components/lastelem/Footer'
import { Navbar } from './components/navbar/Navbar'
import { HomePage } from './components/page/HomePage'
import { Page1 } from './components/page/Page1'
import { Page2 } from './components/page/Page2'
import { Page3 } from './components/page/Page3'
import { Page5 } from './components/page/Page5'
function App() {
  return (
    <>
    
    <Navbar/>
     <div>
     <HomePage/>
     <Page1/>
      <Page2/>
      <Page3/>
      <Page5/>
     </div>
     <Footer/>
    </>
  )
}

export default App
