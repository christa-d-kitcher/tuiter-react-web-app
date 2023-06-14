//3.1.5 Implementing Home screen placeholder

import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeScreen;


