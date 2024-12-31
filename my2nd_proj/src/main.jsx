import {StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InputTest from './lecture2412/component3';
import TimeTable from './lecture2412/TimeTable';
import StateABC from './lec3012/statement';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Component1> */}
    {/* <InputTest/> */}
    <StateABC/>
     </StrictMode>,
)
