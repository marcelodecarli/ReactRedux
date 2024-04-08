import "./Card.css"
import React from "react";


export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#6495ED',
        borderColor: props.color || '#6495ED',
    }

    return (<div className="Card" style={cardStyle}>

        <div className="Title">{props.titulo}</div>
        <div className="Content">
            {props.children}
            </div>

    </div>
    )
}