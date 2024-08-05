import styles from '../../../assets/child_prop/child.module.css'
const Child_1 = (props) => {
    return <div className={styles.background}> {props.children} </div>
}
export default Child_1;