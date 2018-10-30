import React from 'react';
import {Select} from 'antd';
import {Button} from 'antd';
import {Input} from 'antd';
import {Table} from 'antd';
import {Icon} from 'antd';
import {Slider} from 'antd';
import {DatePicker} from 'antd';
import {Checkbox} from 'antd';
import {InputNumber} from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';


const {MonthPicker, RangePicker} = DatePicker;

import styles from '../CSS/CSS1.css';

/* 空间分析 > 空间算量 */

export class Spacecal extends React.Component {

    render() {
        return (

            <div className={styles.spacecalposition}>
                <div className={styles.box}>
                    <p className={styles.nav}>空间分析 > 空间算量</p>
                    <br/><br/>
                    <div className={styles.column}>
                        <span className={styles.item}><Buttonspacecal1/></span>
                        <br/>
                        <span className={styles.item}><Buttonspacecal2/></span>
                        <br/>
                    </div>
                    <br/><br/><br/>
                    <div className={styles.column}>
                        <span className={styles.item}><Buttonspacecal3/></span>
                        <br/>
                        <span className={styles.item}><Buttonspacecal4/></span>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

class Buttonspacecal1 extends React.Component {
    render() {
        return (

            <div>

                <div>
                    <div className={styles.divpic}><Icon type="compass" style={{fontSize: 16, color: '#08c'}}/></div>
                    <div><p>坐标测量</p></div>
                </div>


            </div>
        )
    }
}

class Buttonspacecal2 extends React.Component {
    render() {
        return (

            <div>

                <div>
                    <div className={styles.divpic}><Icon type="smile-o" style={{fontSize: 16, color: '#08c'}}/></div>
                    <div><p>高度测量</p></div>
                </div>


            </div>
        )
    }
}

class Buttonspacecal3 extends React.Component {
    render() {
        return (

            <div>

                <div>
                    <div className={styles.divpic}><Icon type="heart-o" style={{fontSize: 16, color: '#08c'}}/></div>
                    <div><p>距离测量</p></div>
                </div>


            </div>
        )
    }
}

class Buttonspacecal4 extends React.Component {
    render() {
        return (

            <div>
                <div>
                    <div className={styles.divpic}><Icon type="hourglass" style={{fontSize: 16, color: '#08c'}}/></div>
                    <div><p>面积测量</p></div>
                </div>
            </div>
        )
    }
}

/* 空间分析 > 日照分析 */

function onChangeDate(date, dateString) {
    console.log(date, dateString);
}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const marks = {
    0: '0时',
    12: '12时',
    24: '24时',
};

export class Sunalalysis extends React.Component {
    render() {
        return (
            <div className={styles.boardsunalayise}>
                <p className={styles.nav}>空间分析 > 日照分析</p>
                <br/>
                <div>
                    <div><p>参数设置</p></div>
                    <br/>
                    <div><DatePicker onChange={onChangeDate} placeholder="请选择日期"/></div>
                    <br/>
                    <div><Slider marks={marks} min={0} max={24} defaultValue={12}/></div>
                    <br/>
                    <div><p className={styles.showshadow}><Checkbox onChange={onChange}>显示阴影</Checkbox></p></div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <div><p>动态演示</p></div>
                    <br/>
                    <div><p className={styles.activeperform}><Icon type="play-circle-o" style={{
                        fontSize: 16,
                        color: 'dodgerblue'
                    }}/>&nbsp;&nbsp;&nbsp;按时刻变化</p></div>
                    <div><p className={styles.activeperform1}>一天二十四小时中的太阳高度变化</p></div>
                    <br/>
                    <div><p className={styles.activeperform}><Icon type="play-circle-o" style={{
                        fontSize: 16,
                        color: 'dodgerblue'
                    }}/>&nbsp;&nbsp;&nbsp;按日期变化</p></div>
                    <div><p className={styles.activeperform1}>一年当中每天同一时刻的太阳高度变化</p></div>
                </div>

            </div>
        )
    }
}


/* 空间分析 > 淹没分析 */

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

function onChange1(value) {
    console.log('changed', value);
}

export class Submerge extends React.Component {
    render() {
        return (
            <div className={styles.boardsubmerge}>
                <p className={styles.nav}>空间分析 > 淹没分析</p>
                <br/>
                <div><p>降雨等级：</p> <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="请选择降雨程度"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="1">小雨</Option>
                    <Option value="2">中雨</Option>
                    <Option value="3">大雨</Option>
                    <Option value="4">暴雨</Option>
                    <Option value="5">大暴雨</Option>

                </Select>
                </div>
                <br/>
                <div><p>&nbsp;&nbsp;&nbsp;降水量：&nbsp;&nbsp;</p><InputNumber min={0} max={10} defaultValue={5}
                                                                       formatter={value => `${value}毫米`}
                                                                       parser={value => value.replace('毫米', '')}
                                                                       onChange={onChange1}/>
                </div>

                <br/>

                <div className={styles.wordsubmerge}><p>降水范围：0~10mm</p></div>

                <br/>

                <div className={styles.buttonsubmerge}><Button type="primary">执行淹没分析</Button></div>

                <br/>

                <hr/>
                <br/>
                <p style={{color: 'grey'}}>最近一次分析结果:</p>
                <br/>
                <p>影响面积：XX平方公里</p>
                <br/>
                <p>积水深度：XX米</p>

            </div>
        )
    }
}

/* 空间分析 > 视域分析 */

function onChange2(value) {
    console.log('changed', value);
}

const marks1 = {
    0: '0m',
    500: '500m',
    1000: '1000m',
};


export class Viewanalyse extends React.Component {
    render() {
        return (
            <div className={styles.boardview}>
                <p className={styles.nav}>空间分析 > 视域分析</p>
                <br/>
                <div><p>俯仰角设置：</p><InputNumber min={-100} max={100} defaultValue={-45} onChange={onChange2}/>
                </div>

                <br/>

                <div><p>视线距离：</p>
                    <Slider marks={marks1} min={0} max={1000} defaultValue={0}/>
                </div>

                <div className={styles.buttonview}><Button type="primary">拾取观察点</Button></div>
            </div>
        )
    }
}


/* 空间分析 > 行车模拟 */

function handleChange5(value) {
    console.log(`selected ${value}`);
}

function handleBlur5() {
    console.log('blur');
}

function handleFocus5() {
    console.log('focus');
}

function handleChange6(value) {
    console.log(`selected ${value}`);
}

function handleBlur6() {
    console.log('blur');
}

function handleFocus6() {
    console.log('focus');
}

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange7(value) {
    console.log(`Selected: ${value}`);
}

function handleChange8(value) {
    console.log(`Selected: ${value}`);
}


const marks2 = {
    0: '0',
    90: '90',
    180: '180',
};


export class Drivesimu extends React.Component
{
    render()
    { return (
        <div className={styles.boarddrivesimu}>
        <p className={styles.nav}>空间分析 > 行车模拟</p>
           <br/>
            <div>
                <p>路线选择</p>
                <br/>
                 <div className={styles.inputposition}><Select
                     showSearch
                     style={{ width: 200 }}
                     optionFilterProp="children"
                     size="small"
                     onChange={handleChange5}
                     onFocus={handleFocus5}
                     onBlur={handleBlur5}
                     filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                 >
                     <Option value="1">主线</Option>
                     <Option value="2">其他路线</Option>
                 </Select>
                 </div>
                <br/>
                <div className={styles.inputposition}>
                    <Select
                        mode="combobox"
                        size="small"
                        placeholder="起始桩号"
                        onChange={handleChange7}
                        style={{ width: 200 }}
                    >
                        {children}
                    </Select>
                </div>
                <br/>

                <div className={styles.inputposition}>
                    <Select
                        mode="combobox"
                        size="small"
                        placeholder="结束桩号"
                        onChange={handleChange8}
                        style={{ width: 200 }}
                    >
                        {children}
                    </Select>
                </div>
                <br/>
                <div className={styles.inputposition}><Select
                    showSearch
                    style={{ width: 200 }}
                    size="small"
                    optionFilterProp="children"
                    onChange={handleChange6}
                    onFocus={handleFocus6}
                    onBlur={handleBlur6}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="1">右线</Option>
                    <Option value="2">左线</Option>
                </Select>
                </div>
                <br/>
                <div>
                    <p>最大车速（ km/h )</p>
                    <Slider marks={marks2} min={0} max={180} defaultValue={90} />
                </div>

                <div className={styles.buttonsimudrive}><Button type="primary">开始模拟驾驶</Button></div>

            </div>
        </div>
    )}
}