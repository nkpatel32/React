import * as React from "react";

const MyButton3 = ({abc,def})=><button disabled={abc}>
    {def}
</button>;

MyButton3.defaultProps={abc:false,
    def:"default button"};
    
export default MyButton3;