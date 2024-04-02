
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, {useState} from 'react';
import Alert from './components/Alert';
function App() {
  const[mode, setMode] = useState('light');
  //const[alert, setAlert] = useState(null);
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }
  setTimeout(() =>{
    setAlert(null);
  }, 3000);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor='#042743';
      document.title="Text-Utils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="Text-Utils - Light Mode";
      showAlert("Light has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar text='Text-Util App' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Form showAlert={showAlert} heading="Enter Your Text Here To Analyze" mode={mode}/>
    </div>
    </>
  )
}

export default App;
