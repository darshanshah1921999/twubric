import React from "react";
import {getDateFromTime} from "./../utils/dateConverter";

export default function User(props) {
    const {user,id,handleRemove} = props;
    return (
        <div className="userContainer">
            <div className="header">
                <div className="name">
                    {user.fullname}
                </div>
                <div className="twubric-score">
                    {user.twubric.total}
                </div>
            </div>
            <div className="twubric-details">
                <div className="twubric-friends">
                    <div className="friends-score">
                        {user.twubric.friends}
                    </div>
                    <div className="friends-label">
                        Friends
                    </div>
                </div>
                <div className="twubric-influence">
                    <div className="influence-score">
                        {user.twubric.influence}
                    </div>
                    <div className="influence-label">
                        Influence
                    </div>
                </div>
                <div className="twubric-chirpiness">
                    <div className="chirpiness-score">
                        {user.twubric.chirpiness}
                    </div>
                    <div className="chirpiness-label">
                        Chirpiness
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="join-date">
                    {getDateFromTime(user.join_date)}
                </div>
                <div className="button-container">
                    <button onClick={()=>handleRemove(id)}>Remove</button>
                </div>
            </div>
        </div>
    );
}
