import React,{useState} from 'react'
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Experiments from './components/Experiments';
import Navbar from './components/Navbar';
import Randomwords from './components/Randomwords';
import {Switch,Route,Link,BrowserRouter as Router ,Routes} from "react-router-dom"
import About from './components/About';
import Replacetext from './components/Replacetext';

function App() {
  
  let clientmode = localStorage.getItem('Name'); 
  if(clientmode == null){
    localStorage.setItem('Name','light');
  }
  let [mode,updatemode] = useState(clientmode === 'dark'?'dark':'light')
  
  function darkmode(){
    if(clientmode === 'light'){ 
      updatemode('dark');
      localStorage.setItem('Name','dark');
    }else{
      updatemode('light')
      localStorage.setItem('Name','light');
     
    }
  }
  return (
    <Router>
      <div>
        <Navbar mode={mode}  darkmode={darkmode}></Navbar >
       <Routes>
        <Route path='/' element={<Body mode={mode} ></Body>}></Route>
        <Route path='/randomwords' element={<Randomwords mode={mode}></Randomwords>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/replace' element={<Replacetext mode={mode}></Replacetext>}></Route>
       </Routes>
        {/* <Experiments></Experiments> */}
        <Footer mode={mode}></Footer>
      </div>
    </Router>
    
  );
}

export default App;
