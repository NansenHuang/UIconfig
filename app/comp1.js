import React from 'react';
import {Select} from 'antd';
import {Button} from 'antd';
import {Input} from 'antd';
import {Table} from 'antd';
import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
import styles from '../CSS/CSS1.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip} from 'recharts';

/* 定位管理 board 组件 */

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

/*  定位管理>工点定位 */

export class Workpoitposition extends React.Component {
    render() {
        return (
            <div className={styles.boardworkposition}>
                <p className={styles.nav}>定位管理 > 工点定位</p>
                <br/>
                <div className={styles.selectposition}>
                    <Select
                        showSearch
                        style={{width: 240}}
                        placeholder="选择合同段"
                        optionFilterProp="children"
                        size="small"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">合同工段_LJ8</Option>
                        <Option value="2">合同工段_LJ9</Option>
                        <Option value="3">合同工段_LJ10</Option>
                        <Option value="4">合同工段_LJ11</Option>
                        <Option value="5">合同工段_LJ12</Option>
                        <Option value="6">合同工段_LJ13</Option>
                        <Option value="7">合同工段_LJ14</Option>
                        <Option value="8">合同工段_LJ15</Option>
                        <Option value="9">合同工段_LJ16</Option>
                        <Option value="10">合同工段_LJ17</Option>
                    </Select>
                    <br/>

                    <Select
                        showSearch
                        style={{width: 240}}
                        placeholder="选择工点类型"
                        optionFilterProp="children"
                        size="small"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">边沟盲沟（左）</Option>
                        <Option value="2">边沟盲沟（右）</Option>
                        <Option value="3">横向填挖交界渗沟</Option>
                        <Option value="4">纵向填挖交界渗沟</Option>
                        <Option value="5">挡土墙（左）</Option>
                        <Option value="6">挡土墙（右）</Option>
                        <Option value="7">软基处理</Option>
                        <Option value="8">桥梁</Option>
                        <Option value="9">互通</Option>
                        <Option value="10">涵洞</Option>
                        <Option value="11">隧道</Option>
                        <Option value="12">天桥</Option>
                        <Option value="13">地质</Option>
                        <Option value="14">停车区</Option>
                        <Option value="15">服务区</Option>
                    </Select>
                    <br/>
                    <Button className={styles.button} type="primary" size="small"> 查询 </Button>
                </div>

            </div>
        )
    }
}

/* 定位管理 > 名称定位 */

const Search = Input.Search;

export class Nameposition extends React.Component {
    render() {
        return (
            <div className={styles.board}>
                <p className={styles.nav}>定位管理 > 名称定位</p>
                <br/><br/>
                <div className={styles.searchposition}>
                    <Search
                        className={styles.search}
                        size={"small"}
                        placeholder="输入工点名称关键字或拼音"
                        style={{width: 240}}
                        onSearch={value => console.log(value)
                        }
                    />
                </div>
            </div>
        )
    }
}

/* 定位管理 > 工段定位 > 详细信息 */

const columns = [{
    title: '合同段编号',
    dataIndex: 'name',
}, {
    title: '起始桩号',
    dataIndex: 'age',
}, {
    title: '结束桩号',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'LJ8',
    age: 'K83+765.84',
    address: 'K94+850',
}, {
    key: '2',
    name: 'LJ9',
    age: 'K94+850',
    address: 'K102+480',
}, {
    key: '3',
    name: 'LJ10 ',
    age: 'K102+180',
    address: 'K115+323.33',
}];

export class Engineerposition extends React.Component {
    render() {
        return (
            <div className={styles.formboard}>
                <p className={styles.nav}>定位管理 > 工段定位 > 详细信息</p>

                <br/>
                <div className={styles.table}>
                    <Table className={styles.tabler} columns={columns} dataSource={data} size={"small"}/>
                </div>

            </div>
        )
    }
}

/* 定位管理 > 桩号定位 */

const Option1 = Select.Option;
const Search1 = Input.Search;

function handleChange1(value) {
    console.log(`selected ${value}`);
}

function handleBlur1() {
    console.log('blur');
}

function handleFocus1() {
    console.log('focus');
}


export class Pileposition extends React.Component {
    render() {
        return (
            <div className={styles.boardpileposition}>
                <p className={styles.nav}>定位管理 > 桩号定位</p>
                <br/>
                <div className={styles.selectposition}>
                    <Select
                        showSearch
                        style={{width: 240}}
                        size={"small"}
                        placeholder="请选择线路"
                        optionFilterProp="children"
                        onChange={handleChange1}
                        onFocus={handleFocus1}
                        onBlur={handleBlur1}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">主线</Option>
                        <Option value="2">左线</Option>
                        <Option value="3">其他线路</Option>
                    </Select>
                    <br/>
                    <Search1
                        placeholder="输入桩号，例如：90000"
                        size={"small"}
                        style={{width: 240}}
                        onSearch={value => console.log(value)}
                    />
                </div>
                <br/><br/>
                <p className={styles.statement}>范围：K111+641.20 ~ K114+193.61</p>
            </div>
        )
    }
}

/* 定位管理 > 部件定位 */

const Option2 = Select.Option;
const Search2 = Input.Search;

function handleChange2(value) {
    console.log(`selected ${value}`);
}

function handleBlur2() {
    console.log('blur');
}

function handleFocus2() {
    console.log('focus');
}

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

function handleChange5(value) {
    console.log(`selected ${value}`);
}

function handleBlur5() {
    console.log('blur');
}

function handleFocus5() {
    console.log('focus');
}

export class Compposition extends React.Component {
    render() {
        return (
            <div className={styles.boardcompposition}>
                <p className={styles.nav}>定位管理 > 部件定位</p>
                <br/>
                <div className={styles.selectposition}>
                    <Select
                        showSearch
                        style={{width: 240}}
                        size={"small"}
                        placeholder="选择地点"
                        optionFilterProp="children"
                        onChange={handleChange2}
                        onFocus={handleFocus2}
                        onBlur={handleBlur2}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">桥梁</Option>
                        <Option value="2" disabled>隧道</Option>
                        <Option value="3" disabled>天桥</Option>
                        <Option value="4" disabled>涵洞</Option>
                    </Select>
                    <br/>

                    <Select
                        showSearch
                        style={{width: 240}}
                        size={"small"}
                        placeholder="选择合同段"
                        optionFilterProp="children"
                        onChange={handleChange3}
                        onFocus={handleFocus3}
                        onBlur={handleBlur3}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">合同工段_LJ8</Option>
                        <Option value="2">合同工段_LJ9</Option>
                        <Option value="3">合同工段_LJ10</Option>
                    </Select>
                    <br/>
                    <Select
                        showSearch
                        style={{width: 240}}
                        size={"small"}
                        placeholder="选择桥梁"
                        optionFilterProp="children"
                        onChange={handleChange4}
                        onFocus={handleFocus4}
                        onBlur={handleBlur4}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">犁鸳沟大桥</Option>
                        <Option value="2">凤凰咀大桥</Option>
                        <Option value="3">凤凰坡一号大桥</Option>
                        <Option value="4">凤凰坡二号中桥</Option>
                        <Option value="5">大石板沟大桥</Option>
                        <Option value="6">猴儿湾中桥</Option>
                        <Option value="7">马牙石大桥</Option>
                        <Option value="8">左边沟水库大桥</Option>
                        <Option value="9">马儿沟中桥</Option>
                        <Option value="10">静林湾大桥</Option>
                        <Option value="11">菜花堂一号中桥</Option>
                        <Option value="12">菜花堂二号大桥</Option>
                        <Option value="13">白果咀大桥</Option>
                        <Option value="14">板栗咀大桥</Option>
                        <Option value="15">龙崩坼大桥</Option>
                        <Option value="16">石板田大桥</Option>
                        <Option value="17">陶家坝大桥</Option>
                        <Option value="18">老鹰山1号大桥</Option>
                        <Option value="19">老鹰山2号中桥</Option>
                        <Option value="20">胶岩冲大桥</Option>
                    </Select>
                    <br/>
                    <Select
                        showSearch
                        style={{width: 240}}
                        size={"small"}
                        placeholder="选择部件类型（可选）"
                        optionFilterProp="children"
                        onChange={handleChange5}
                        onFocus={handleFocus5}
                        onBlur={handleBlur5}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="1">墩系梁</Option>
                        <Option value="2">桥墩</Option>
                        <Option value="3">桥台</Option>
                        <Option value="4">墩系梁</Option>
                        <Option value="5">湿接缝</Option>
                        <Option value="6">地系梁</Option>
                        <Option value="7">盖梁</Option>
                        <Option value="8">护梁</Option>
                        <Option value="9">T梁</Option>
                        <Option value="10">桩</Option>
                    </Select>
                    <br/>
                    <Button className={styles.buttoncompposition} type="primary" size="small">查询</Button>
                </div>
            </div>
        )
    }
}

export class Tab extends React.Component {
    render()
    {  return(
        <div>
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                style={{ height: 220 }}
            >
                <TabPane tab="Tab 1" key="1"><div className={styles.tab}><Compposition /></div></TabPane>
                <TabPane tab="Tab 2" key="2"><div className={styles.tab}><Pileposition /></div></TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
            </Tabs>
        </div>

    )}

}

class A extends React.Component {
    render()
    { return(
        <p>ABC</p>
    )}
}



export class ChartAA extends React.Component {
    render()
    { return(
        <div>
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        </div>
    )
    }
}


/*
export class ChartisanBB extends React.Component {
    render()
    { return(
        <div>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" tick={<CustomAxisTick />} />
            <YAxis />
            <Tooltip />
        </LineChart>
        </div>

    )}
}*/