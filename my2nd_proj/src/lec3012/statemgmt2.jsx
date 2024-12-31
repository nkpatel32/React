import * as React from "react";
class StateXYZ extends React.Component {
    state = {
        first:false,
        second :1.33,
        third : "hello",
        fourth :"red",
        fifth : "green",
    };
    constructor(){
        super();
        setTimeout(() =>{  //after 3 seconds, change state
        this.setState = this.setState({first:true,second:3.14,third:"hello",fourth:"yellow",fifth:"magenta"})
     }, 3000);
      
    }
    render() {
        const {first, second, third,fourth,fifth} = this.state;
        return (<div>
            <button disabled={first}>my button</button>
            <p style ={{color:fourth}}>value of float variable is {second}</p>
             <p style ={{color:fifth}}>value of String variable is {third}  </p>
             </div>
             );
    }
};
export default StateXYZ;