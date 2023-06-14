//2.1.4 Breaking out Hello World into a separate component

import {Link} from "react-router-dom";
import Nav from "/Users/christad.kitcher/2023/summer/webdev/tuiter-react-web-app/src/nav";
function HelloWorld() {
    return(
        <div>
            <Nav/>
        <h1>Hello World!</h1>
        </div>
    );
};
export default HelloWorld;

