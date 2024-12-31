import {StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InputTest from './lecture2412/component3';
import TimeTable from './lecture2412/TimeTable';
//import StateABC from './lec3012/statemgm1';
import StateXYZ from './lec3012/statemgmt2';
import StateMerge from './lec3012/statemgmt3';
import Purefunc from './lec3112/purefunc';
import MyButton3 from './lec3112/purefunc2';
import FuncComp1 from './lec3112/hookcomp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Component1> */}
    {/* <InputTest/> */}
    {/* <StateABC/> */}
    {/* <StateMerge/> */}
    {/* <MyComponent/> */}
    {/* <Purefunc abc={true} xyz={"Hello"} /> */}
    {/* <Purefunc abc={false} xyz={"How"} /> */}
    {/* <Purefunc abc={true} xyz={"Are you"} /> */}
    {/* <MyButton3/>  */}
    {/* <MyButton3 abc={true} def={"hello"}/> */}
    {/* <MyButton3 abc={true} />
    <MyButton3 abc={"xyzzzzzz"} /> */}
    <FuncComp1 />
     </StrictMode>,
)
