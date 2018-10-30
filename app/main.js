import React from 'react';
import ReactDOM from 'react-dom';
import {
    Workpoitposition,
    Nameposition,
    Engineerposition,
    Pileposition,
    Compposition,
    Tab,
    ChartAA
} from './comp1.js';
import {
    Sitemanage,
    Addmanage,
    Viewsite,
    Addsite,
    Logout,
    Confirm1,
    Systemsetting,
    Condition,
    SimpleChart,
    SimpleBarChart,
    TestConst,
    Gain
} from './comp3.js';
import {Construct} from './comp4.js'

ReactDOM.render(
    <div>
        <Construct/>
        <br/>
        <Workpoitposition/>
        <br/>
        <Nameposition/>
        <br/>
        <Engineerposition/>
        <br/>
        <Pileposition/>
        <br/>
        <Compposition/>
        <br/>
        <Sitemanage/>
        <br/>
        <Addmanage/>
        <br/>
        <Viewsite/>
        <br/>
        <Addsite/>
        <br/>
        <Tab/>
        <br/>
        <Logout/>
        <br/>
        <Confirm1/>
        <br/>
        <Systemsetting/>
        <br/>
        <Condition/>
        <br/>
        <ChartAA/>
        <br/>
        <SimpleChart/>
        <br/>
        <SimpleBarChart/>
        <br/>
        <TestConst/>
        <br/>
        <Gain />
    </div>,
    document.getElementById('root')
);