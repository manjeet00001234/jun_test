import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './utiliti/Header'
import Footer from './utiliti/Footer'
import MainRouting from './mainRouting/MainRouting'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
           

            <Header />
            <MainRouting />
            <Footer />
       </>
  );
}

export default App
