import react from "react";

export default function List(props) {
    return <div>
        <ul>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.indexes+1} {props.datas}</div>
                  
                </div>
                <button onClick={()=>{props.delEvent(props.indexes)}} className="badge bg-danger rounded-pill">X</button>
            </li>


        </ul>
    </div>
}