import * as React from "react";

function FuncComp1(){
    const [name] = React.useState("hello");
    return <h1>{name}</h1>;

}

export default FuncComp1;