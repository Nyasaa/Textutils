import React, {useState} from 'react'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/textForm'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";


const App = (props) => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 4000);
  }
  

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert ("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert ("Light mode has been enabled", "success")
    }
  }
  return (
      <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here "  mode={mode}/>} /> 
        <Route path='/about' element={<About />} />
        
      </Routes>
      </div>
      </BrowserRouter>
       </>
  )
}

export default App
