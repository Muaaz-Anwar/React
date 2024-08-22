import { useEffect } from "react";
import { useState } from "react";

function Time(){
    const [time,settime] = useState(new Date());
    useEffect(()=> {
        const intervalId = setInterval(() => {
            settime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    })
    return <>
    <p>The time is <b>{time.toLocaleDateString()}</b> and time is <b>{time.toLocaleTimeString()}</b></p>
    </>
}
export default Time;