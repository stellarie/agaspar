import { useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';

const App = () => {

  useEffect(() => {
    if(window.location.hash !== "#home" || !window.location.hash) {
      window.location.href = "#home";
    }
  },[])

  return <>
    <Homepage />
  </>
}

export default App;
