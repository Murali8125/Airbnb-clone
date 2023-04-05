import React from "react";
import "./Card.css"
export default function Card(props){
    // console.log(props);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
    <div className="card ">
       {badgeText && <div className="card--badge">
           {badgeText}
        </div>}
        <img className="card--image" src={props.item.coverImg} alt="Perons"/>
        <div className="card--stats">
            <img src="Images/star.png" alt="rating"/>
            <span className="card--star">{props.item.stats.rating} </span>
            <span className="gray"> . ({props.item.stats.reviewCount})</span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className="bold">From ${props.item.price}</span>/ person</p>
        <p></p>
    </div>
    );

}