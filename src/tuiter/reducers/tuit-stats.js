//Implementing Tuit Summary Item as a react component

import React from "react";
const TuitStats = (
    {
        tuit = {
            "replies": "123",
            "retuits": "432",
            "likes": "12345",
        }
    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <i className="fa fa-comment"/>
                    <span>{tuit.replies}</span>
                </div>
                <div className="col-3">
                    <i className="fa fa-repeat"/>
                    <span>{tuit.retuits}</span>
                </div>
                <div className="col-3">
                    if({tuit.likes} > 1) {
                    <i className="fa fa-heart" style="color: tomato"/>
                } else {
                    <i className="fa fa-heart" style="color: white"/>
                }
                    <span>{tuit.likes}</span>
                </div>
                <div className="col-3">
                    <i className="fa fa-share-square"/>
                </div>
            </div>
        </li>
    );
};
export default TuitStats;