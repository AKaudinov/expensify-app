import React from "react";

//
const Loading = () => {
    return(
        <div className="loader">
            <img className="loader__image" src="/images/loader.gif"/>
        </div>
    );
};


export default Loading; //exporting it this way instead of
//export default () => {
// }
//actually gives this function/component a name in react dev tools, in this case it'd be Loading
//it won't be anonymous since we explicitly exported the Loading function
