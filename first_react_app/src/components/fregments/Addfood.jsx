const Addfood = ({ text, getFood}) => {
   return <>
    <h5>Add all the foods you like</h5>
    <input type="text" className="mb-3 p-2" onKeyDown={getFood} style={{width: '95%'}} /> 
    <p>{text}</p>
    </>
}
export default Addfood