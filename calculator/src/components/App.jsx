import styles from '../assets/app.module.css';
import Display from './Display.jsx';
import Buttons from './Buttons.jsx';
import { useState } from 'react';
function App() {

  let [numbers, setnumbers] = useState("");
  let alerting = (items) => {
    setnumbers(items);
    if(items == "C"){
      setnumbers("");
    }else if(items == "="){
      let newvalue = eval(numbers)
      setnumbers(newvalue)
    }else{
      let newvalue = numbers+items;
      setnumbers(newvalue);
    }
  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles['row']}>
          <h1>Calculator</h1>
      </div>
      <Display numbers={numbers}></Display>
      <Buttons alerting={alerting}></Buttons>
    </div>
    </>
  )
}

export default App
