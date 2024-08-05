import React, { useState } from "react";
import List from "./List";
import Addfood from './Addfood.jsx'
function Fregment() {
    // let list = [];
    let [list, setlist] = useState([]);
    let [value, setvalue] = useState("");
    
    const getFood = (event) => {
        setvalue(event.target.value);
        if(event.key == 'Enter' && event.target.value != ""){
            let word = event.target.value;
            setvalue("");
            word = [...list, word];
            setlist(word)
            event.target.value = "";
            
        }
        
    }
    
    return <React.Fragment>
        <div className="container mt-5 mb-5">
            <h1 style={{ textAlign: 'center', fontWeight: '800', color: 'white', backgroundColor: 'black', padding: '10px 0px' }} className="mb-3">Task 3</h1>
            <div className="row justify-content-center">
                <h1 className={`text-dark`} >All About Food</h1>
                <Addfood getFood= {getFood} text = {value}></Addfood>
                <h5 className="mt-3">List of all Fast foods</h5>
               <List foodlist={list} />
            </div>
        </div>
    </React.Fragment>


    // the second and easiest way is to use <></> as we mostly use
}
export default Fregment;