function Time(){
    let time = new Date();    
    // time = time.split("GMT");
    return <>
    <p>The time is <b>{time.toLocaleDateString()}</b> and time is <b>{time.toLocaleTimeString()}</b></p>
    </>
}
export default Time;