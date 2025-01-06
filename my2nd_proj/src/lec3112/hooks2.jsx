import { useState } from "react";

function StateExample(){
    const [name] = useState("rku");
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default StateExample;