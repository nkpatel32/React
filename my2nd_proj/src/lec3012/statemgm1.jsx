import * as React from "react";
class StateABC extends React.Component {
    state = {
        first:false,
        second :1.33,
        third : "hello",
        fourth :"red",
        fifth : "green",
    };
    render() {
        const {first, second, third,fourth,fifth} = this.state;
        return (<div>
            <button disabled={first}>my button</button><div/>
            <p style ={{color:fourth}}>value of float variable is {second}</p>
             <p style ={{color:fifth}}>value of String variable is {third}   </p>
             
             </div>
             );
    }
};
export default StateABC;