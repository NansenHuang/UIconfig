import React from 'react';
import styles from '../CSS/CSSconstruct.css'
import styled from 'styled-components';
import { Icon } from  'antd';

const Div = styled.div`
   margin-bottom:5px;
`;
const DivWhole = styled.div`
    display: flex;
    flex-direction: column;
    height:180px;
    width:350px;
    border:1px solid black;
    padding:20px;
`;
const DivFlex = styled.div`
   display: flex;
   justify-content: space-between;
`;
const DivUnderline = styled.div`
   margin-bottom: 5px;
   text-decoration: underline;
`;


export class Construct extends React.Component {
    render() {
     return (
         <DivWhole>
             <DivFlex><Div><Icon type="user"></Icon>近期填报人:</Div><div><Icon type="schedule"></Icon> 2018年8月15日       16:40</div></DivFlex>
             <Div><Icon type="copy"></Icon>类型:</Div>
             <Div><Icon type="fork"></Icon>标段:</Div>
             <Div><Icon type="book"></Icon>所有人:</Div>
             <Div><Icon type="environment"></Icon>辖区:</Div>
             <DivUnderline><Icon type="info-circle"></Icon>征拆详细信息</DivUnderline>
         </DivWhole>
     )
    }
}