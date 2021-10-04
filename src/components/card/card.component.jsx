import React from "react";
import './card.styles.css'

const Card = (props) => {
    return (
       <div className="card-container">
           <img alt={props.user.name} src={`https://robohash.org/=${props.user.id}?set=set3&size=180x180`} />
           <h2 key={props.user.id}>{props.user.name}</h2>
           <span>{props.user.email}</span>
       </div>    
    );
}
 
export default Card;