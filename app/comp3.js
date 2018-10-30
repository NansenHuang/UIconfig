import React from 'react';
import {Select} from 'antd';
import {Button, Modal} from 'antd';
import {Input} from 'antd';
import {Popconfirm} from 'antd';
import {Slider, Checkbox} from 'antd';
import {Radio} from 'antd';

const RadioGroup = Radio.Group;
const Option = Select.Option;
import styles from '../CSS/CSS1.css';


/* 现场管理 > 查看监控 */

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

function handleChange1(value) {
    console.log(`selected ${value}`);
}

function handleBlur1() {
    console.log('blur');
}

function handleFocus1() {
    console.log('focus');
}

export class Sitemanage extends React.Component {
    render() {
        return (
            <div className={styles.boardsitemanage}>
                <p className={styles.nav}>现场管理 > 查看监控</p>
                <br/>
                <div className={styles.inputposition}><Select
                    showSearch
                    style={{width: 240}}
                    placeholder="选择合同段"
                    size="small"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="1">合同工段_LJ8</Option>
                    <Option value="2">合同工段_LJ9</Option>
                    <Option value="3">合同工段_LJ10</Option>
                </Select>
                </div>
                <br/>
                <div className={styles.inputposition}><Select
                    showSearch
                    style={{width: 240}}
                    optionFilterProp="children"
                    size="small"
                    onChange={handleChange1}
                    onFocus={handleFocus1}
                    onBlur={handleBlur1}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="1" disabled>无匹配结果</Option>
                </Select></div>

                <br/>
                <div className={styles.buttonsitemanage}><Button type="primary">前往查看</Button></div>
            </div>
        )
    }
}

/* 现场管理 > 添加监控 */

function handleChange2(value) {
    console.log(`selected ${value}`);
}

function handleBlur2() {
    console.log('blur');
}

function handleFocus2() {
    console.log('focus');
}


export class Addmanage extends React.Component {
    render() {
        return (
            <div className={styles.boardaddmanage}>
                <p className={styles.nav}>现场管理 > 添加监控</p>
                <br/>
                <p>摄像头类型</p>
                <div>
                    <Select
                        showSearch
                        style={{width: 240}}
                        optionFilterProp="children"
                        size="small"
                        onChange={handleChange2}
                        onFocus={handleFocus2}
                        onBlur={handleBlur2}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">型号A</Option>
                        <Option value="2">型号B</Option>
                    </Select>
                </div>
                <div><img/></div>

                <p className={styles.word}>监控点名称：</p>
                <div><Input size="small"/></div>
                <br/>
                <p className={styles.word}>角度：</p>
                <div><Input size="small"/></div>
                <br/>
                <p className={styles.word}>视频流地址：</p>
                <div><Input size="small"/></div>
                <br/>
                <div className={styles.buttona}><Button type="primary">添加</Button></div>
            </div>
        )
    }
}

/* 现场管理 > 查看场地 */

function handleChange3(value) {
    console.log(`selected ${value}`);
}

function handleBlur3() {
    console.log('blur');
}

function handleFocus3() {
    console.log('focus');
}

function handleChange4(value) {
    console.log(`selected ${value}`);
}

function handleBlur4() {
    console.log('blur');
}

function handleFocus4() {
    console.log('focus');
}

export class Viewsite extends React.Component {
    render() {
        return (
            <div className={styles.boardviewsite}>
                <p className={styles.nav}>现场管理 > 查看场地</p>
                <br/>
                <div className={styles.inputposition}>
                    <Select
                        showSearch
                        style={{width: 240}}
                        optionFilterProp="children"
                        placeholder="选择合同段"
                        size="small"
                        onChange={handleChange3}
                        onFocus={handleFocus3}
                        onBlur={handleBlur3}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">合同工段_LJ8</Option>
                        <Option value="2">合同工段_LJ9</Option>
                        <Option value="3">合同工段_LJ10</Option>
                    </Select>
                </div>
                <br/>
                <div className={styles.inputposition}>
                    <Select
                        showSearch
                        style={{width: 240}}
                        optionFilterProp="children"
                        size="small"
                        onChange={handleChange4}
                        onFocus={handleFocus4}
                        onBlur={handleBlur4}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1" disabled>无匹配结果</Option>
                    </Select>
                </div>
                <br/>
                <div className={styles.inputposition}><Button type="primary">前往查看</Button></div>
            </div>
        )
    }
}


/* 现场管理 > 添加场地 */

export class Addsite extends React.Component {
    render() {
        return (
            <div className={styles.boardaddsite}>
                <p className={styles.nav}>现场管理 > 添加场地</p>
                <br/>
                <p>名称：</p>
                <div><Input size="small"/></div>

                <br/>
                <p>高度：</p>
                <div><Input defaultValue="3.6" size="small"/></div>

                <br/>
                <p>使用类型：</p>
                <div><Input size="small"/></div>

                <br/>
                <div className={styles.buttona}><Button type="primary">添加</Button></div>

            </div>
        )
    }
}


export class Logout extends React.Component {
    render() {
        return (
            <Popconfirm title="确认退出系统？" okText="确定" cancelText="取消">
                <a href="#"><Button type="primary">登出</Button></a>
            </Popconfirm>
        )
    }
}

function confirm() {
    Modal.confirm({
        title: '温馨提示',
        content: '确认退出该系统？',
        cancelText: '取消',
        okText: '确认',

    });
}

export class Confirm1 extends React.Component {
    render() {
        return (
            <div><Button type="primary" onClick={confirm}>登出</Button></div>

        )
    }
}

const confirm1 = Modal.confirm;

function showConfirm() {
    confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {
        },
    });
}

export class Confirm2 extends React.Component {
    render() {
        return (
            <Button onClick={showConfirm}>
                登出
            </Button>
        )
    }
}

/* system settings */

function onChange10(e) {
    console.log(`checked = ${e.target.checked}`);
}

const marks = {
    0: '0时',
    12: '12时',
    24: '24时',
};


export class Systemsetting extends React.Component {
    render() {
        return (
            <div className={styles.boardmargin}>
                <div className={styles.boardsystem}>
                    <p>日照时间</p>
                    <div><Slider marks={marks} min={0} max={24} defaultValue={12}/></div>
                    <div><p className={styles.showshadow}><Checkbox onChange={onChange10}>显示阴影 </Checkbox></p></div>
                </div>
            </div>
        )
    }
}

/* compare */

export class App12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log('radio checked', event.target.value);
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>Option A</Radio>
                <Radio style={radioStyle} value={2}>Option B</Radio>
            </RadioGroup>
        )
    }
}


export class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: null};

        this.handleClickA = this.handleClickA.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
        this.handleClickC = this.handleClickC.bind(this);
        this.handleClickD = this.handleClickD.bind(this);
        this.handleClickF = this.handleClickF.bind(this);
    }


    handleClickA() {
        if (this.state.index === "A")
            this.setState({index: "Z"});
        else
            this.setState({index: "A"});


    }

    handleClickB() {
        if (this.state.index === "B")
            this.setState({index: "Z"});
        else
            this.setState({index: "B"});
    }

    handleClickC() {
        if (this.state.index === "C")
            this.setState({index: "Z"});
        else
            this.setState({index: "C"})
    }

    handleClickD() {
        if (this.state.index === "D")
            this.setState({index: "Z"});
        else
            this.setState({index: "D"})
    }

    handleClickF() {
        if (this.state.index === "F")
            this.setState({index: "Z"});
        else
            this.setState({index: "F"})
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleClickA}>工点定位</button>
                    <br/>
                    <button onClick={this.handleClickB}>名称定位</button>
                    <br/>
                    <button onClick={this.handleClickC}>工段定位</button>
                    <br/>
                    <button onClick={this.handleClickD}>桩号定位</button>
                    <br/>
                    <button onClick={this.handleClickF}>部件定位</button>
                </div>
                <div>
                    <Comp ele={this.state.index}/>
                </div>
            </div>
        )
    }
}

/*  this.setState({index:this.state.index==="A"?"Z":"A"})  */


class Comp extends React.Component {

    render() {
        if (this.props.ele === "Z")
            return null;
        return (
            <div>

                {this.props.ele === "A" ? "bad" : null}
                {this.props.ele === "B" ? "dsaf" : null}
                {this.props.ele === "C" ? "dfaew" : null}
                {this.props.ele === "D" ? "dfjoiew" : null}
                {this.props.ele === "F" ? "dfjiowjo" : null}

            </div>

        )
    }
}


import PropTypes from 'prop-types';
import Container from './container.js'
import {Row, Col, Card} from 'antd'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const colProps = {
    lg: 30,
    md: 15,
};

const SimpleLineChart = () => (

    <div>
        <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{
                      r: 8,
                  }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
        </LineChart>
    </div>

);


export const SimpleChart = () => (

    <div className="content-inner">
        <Row gutter={32}>
            <Col {...colProps}>
                <Card title="SimpleLineChart">
                    <SimpleLineChart/>
                </Card>
            </Col>
        </Row>
    </div>
);

import {
    BarChart,
    Bar,
} from 'recharts'

export const SimpleBarChart = () => (
    <div>
        <BarChart data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
        >
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="pv" fill="#8884d8"/>
            <Bar dataKey="uv" fill="#82ca9d"/>
        </BarChart>
    </div>
);

export const TestConst = () => (
    <div>
        <h1>ABCD</h1>
    </div>
);

export const Gain = () => (
    <div>
        <Viewsite/>
    </div>
);

