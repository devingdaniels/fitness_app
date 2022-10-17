import React from "react";

function Footer(){
    const date = new Date().getFullYear()
    return (        
        <p>Created &copy;<i>{date}</i><cite> Devin Daniels</cite></p>
    )
}

export default Footer