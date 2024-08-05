import styles from '../assets/Buttons.module.css'
const Buttons = ({ alerting}) => {
  let buttons = ['C' , '1' , '2' , '3' , '+' , '4' , '5' , '6' , '-' , '7' , '8' , '9' , '=','*' ,'.', '0'];
    return <>
    <div className={`${styles.buttons} mt-2 row`}>
      {buttons.map(items =>
         <div className="col-3" key={items} onClick={() => {alerting(items)}}><button> {items}</button></div>
         )}
      </div>
    </>
}
export default Buttons;