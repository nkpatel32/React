import MyButton from "./mybtn";
import Mylist from "./mylist";
import * as React from "react";

class MyComponent extends React.Component {
    state = {
        abc:"My button",
        xyz :true,
        itms :["a","b","c","d","e"],
    };
    render() {
        return (
            <div>
                <MyButton abc={abc} xyz={xyz}/>
                <Mylist itms={itms}/>
            </div>
        );
    }
    }
    export default MyComponent;