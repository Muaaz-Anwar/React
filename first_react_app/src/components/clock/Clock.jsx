import Country_clock from "./Country_clock"
import Time from "./Time";
function Clock() {

    return <>
    <div className="container mt-5">
    <h1 style={{textAlign:'center', fontWeight:'800', color:'white', backgroundColor:'black', padding:'10px 0px'}} className="mb-3">Task 2</h1>
        <Country_clock />
        <Time />
        </div>
    </>
}

export default Clock;