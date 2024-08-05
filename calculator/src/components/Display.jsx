import styles from '../assets/display.module.css'
const Display = ({numbers}) => {
return <div className={`${styles['main-row']}`}>
<input type="text" value={numbers} readOnly placeholder='20'  />
</div>;
}
export default Display;