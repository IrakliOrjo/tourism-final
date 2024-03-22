import './index.css'
import Banners from './components/Banners'
import Journal from './components/Journal'
 
import NewsLetter from './components/NewsLetter'
import Countries from './components/Countries'
import Travel from './components/Travel'
import Footer from './components/Footer'
 
 


function App() {
  

  return( 
  <div className='min-h-screen flex flex-col flex-grow font-josefin-san '>
    

    <Banners />
   
    <div className='flex-grow overflow-hidden relative"' >
    <Journal  />
    </div>
    <NewsLetter />
    <Countries />
    <Travel />
    <Footer />
  </div>)
}

export default App
