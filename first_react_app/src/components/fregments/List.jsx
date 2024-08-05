import { useState } from 'react';
import Swal from 'sweetalert2';
import ListItem from './child/ListItem';
function List({foodlist}) {
    // function List({  food_list }){  RECOMMENDED RATHER THAN USING PROPS.ATTRIBUTE OR VALUE
    // let {foodlist} = props;
    // let food_list = [];


    // on buy click alerting that the product has been purchased 
    
    let [actives, setactives] = useState([]);

    const alerting = (item) => {
        let newitems = [...actives,item];
        setactives(newitems);
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your ${item} has been saved`,
            showConfirmButton: false,
            timer: 1500
          });
   
    }

    // on buy click alerting that the product list is empty
    let alert = <div className="alert alert-danger" style={{width: '95%'}} role="alert">
    None of the item is Available right now!!! <b>Sorry</b>.
  </div>;

    return <>
        {/* {food_list == 0 ? alert : null} ternary operator */}
        {foodlist == 0 && alert}       
        

        <ol className="list-group list-group-numbered">
            {foodlist.map(item => 
            <ListItem item = {item} key={item} bought={actives.includes(item)} alerting={alerting}></ListItem>
            )}
        </ol>
    </>
}
export default List 