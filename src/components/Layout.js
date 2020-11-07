import React from "react";

const Layout = (props) => {
    return (
        <div>
        <h1>The Layout</h1>
        <div>{props.children}</div>
        <h1>end of layout</h1>
        </div>
    )
}

export default Layout;