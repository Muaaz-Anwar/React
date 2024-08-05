const ListItem = ({item, alerting, bought}) => {
    return <li className={`list-group-item d-flex justify-content-between align-items-start ${bought && "active"}`} >
                <div className="ms-2 me-auto">
                    <div className='fw-bold' >{item}</div>
                    Content for list item
                </div>
                
                <span className="badge text-bg-primary rounded-pill me-3 ms-auto">Available {Math.floor(Math.random() * 10)}</span>
                <div className="me-3 ms-auto"><button className="btn btn-success" 
                onClick={() => {alerting(item)}}
                
                >
                    Buy</button></div>
                {/* <span className="badge text-bg-primary rounded-pill">{Math.floor( Math.random(0-10000)*10) }</span> */}
            </li>
}

export default ListItem;