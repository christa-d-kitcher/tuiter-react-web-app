//2.1.2 Implementing the Labs Component

import {Link} from "react-router-dom";
import Nav from "/Users/christad.kitcher/2023/summer/webdev/tuiter-react-web-app/src/nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route} from "react-router";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Assignment3/>
                <Route path="a4"
                       element={<Assignment4/>}/>
            </Routes>
        </div>
    );
}
export default Labs;