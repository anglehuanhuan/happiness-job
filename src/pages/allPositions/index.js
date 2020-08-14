import React from 'react';
import lodash from "lodash";
import queryString from "query-string";
import { Button, Flex, Grid, Carousel, WingBlank, NavBar, Icon, PickerView } from 'antd-mobile';
// import { Select } from 'antd';
import FooterComponent from "../../common/component/FooterComponent"
import "./css/allPositions.scss";
// const {Option} = Select;

export default class AllPositions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            birthYear: "",
            birthYearList:[{
                label: "1988",
                value: "1988",
            },{
                label: "1998",
                value: "1998",
            },{
                label: "2008",
                value: "2008",
            },],
            sexList:[{
                label: "女",
                value: "women",
            },{
                label: "男",
                value: "men",
            }],
            educationList: [{
                label: "中专",
                value: "1",
            },{
                label: "高中",
                value: "2",
            },{
                label: "大专",
                value: "3",
            },{
                label: "本科",
                value: "4",
            },{
                label: "硕士",
                value: "5",
            },{
                label: "博士",
                value: "6",
            }],
            contractValueList: [{
                label: "派遣",
                value: "1",
            },{
                label: "直签",
                value: "2",
            }],

            positionData: [{
                name: "安检护卫",
                namedesc: "天府/双流机场",
                value: "8-9万",
                valuedesc: "逐年递增",
                componey: "国企",
                workTime: "上一休二或上一休一",
                workaddres: "双流机场/天府机场"
            },{
                name: "安检护卫3",
                namedesc: "天府/双流机场",
                value: "8-9万",
                valuedesc: "逐年递增",
                componey: "国企",
                workTime: "上一休二或上一休一",
                workaddres: "双流机场/天府机场"
            },{
                name: "安检护卫4",
                namedesc: "天府/双流机场",
                value: "8-9万",
                valuedesc: "逐年递增",
                componey: "国企",
                workTime: "上一休二或上一休一",
                workaddres: "双流机场/天府机场"
            },{
                name: "安检护卫5",
                namedesc: "天府/双流机场",
                value: "8-9万",
                valuedesc: "逐年递增",
                componey: "国企",
                workTime: "上一休二或上一休一",
                workaddres: "双流机场/天府机场"
            },{
                name: "安检护卫6",
                namedesc: "天府/双流机场",
                value: "8-9万",
                valuedesc: "逐年递增",
                componey: "国企",
                workTime: "上一休二或上一休一",
                workaddres: "双流机场/天府机场"
            }]

        }
    }
    goback = () => {
        this.props.history.goBack()
    }

    handleChange = (str) => e => {
        // console.log(e);
        e.preventDefault();
        this.setState({
            [str]:  e.target.value
        })
    }
    gotoDetail = obj => {
        console.log(obj);
        this.props.history.push({pathname:'/recruitmentBrochure',search: queryString.stringify({ position: JSON.stringify(obj) })});
    }
    render(){
        return  <div className="allPositions-container container">
             <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">岗位查询</span></NavBar>
                <div className="content-container">
                    <div className="myapply-item">
                        <ul className="myapply-info">
                            <li  className="myapply-li">
                                <span className="info-name">出生年份：</span>
                                <select  className="info-select" value={this.state.birthYear} onChange={this.handleChange("birthYear")}>
                                        <option value="">请选择</option>
                                    {
                                        lodash.map(this.state.birthYearList, (item,index) => {
                                            return <option key={index} index={index} value={item.value}>{item.label}</option>
                                        })
                                    }
                                </select>
                                <span className="redmust">(必填)</span>
                            </li>
                            <li  className="myapply-li">
                                <span className="info-name">性别：</span>
                                <select  className="info-select" value={this.state.sex} onChange={this.handleChange("sex")}>
                                        <option value="">请选择</option>
                                    {
                                        lodash.map(this.state.sexList, (item,index) => {
                                            return <option key={index} index={index} value={item.value}>{item.label}</option>
                                        })
                                    }
                                </select>
                                <span className="redmust">(必填)</span>
                            </li>
                            <li  className="myapply-li">
                                <span className="info-name">学历：</span>
                                <select  className="info-select" value={this.state.education} onChange={this.handleChange("education")}>
                                        <option value="">请选择</option>
                                    {
                                        lodash.map(this.state.educationList, (item,index) => {
                                            return <option key={index} index={index} value={item.value}>{item.label}</option>
                                        })
                                    }
                                </select>
                            </li>
                            <li  className="myapply-li">
                                <span className="info-name">合同性质：</span>
                                <select  className="info-select" value={this.state.contractValue} onChange={this.handleChange("contractValue")}>
                                        <option value="">请选择</option>
                                    {
                                        lodash.map(this.state.contractValueList, (item,index) => {
                                            return <option key={index} index={index} value={item.value}>{item.label}</option>
                                        })
                                    }
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div  className="position-item">
                        <hr className="position-split"/>
                        <ul className="position-info">
                            <li  className="position-li">
                                <div className="info-left">
                                    <p className="position-name">安检护卫</p>
                                    <p className="position-name-sub">天府/双流机场</p>
                                </div>
                                <div className="info-right">
                                    <p><span className="position-value">6-7万/年</span> <span className="position-value-unit">税后</span></p>
                                    <p className="position-desc">逐年递增</p>
                                </div>
                            </li>
                            <li  className="position-li">
                                <p className="info-left">
                                    <span className="position-detal-name">企业性值：</span>
                                    <span className="position-detail-value">国企</span>
                                </p>
                                <p className="info-right">
                                    <span className="position-detal-name">上班时间：</span>
                                    <span className="position-detail-value">上一休二或上一休一</span>
                                </p>
                            </li>
                            <li  className="position-li">
                                <p className="info-left">
                                    <span className=" position-detal-name">工作地点：</span>
                                    <span className="position-detail-value">天府/双流机场</span>
                                </p>
                            </li>
                        </ul>
                        {
                            lodash.map( this.state.positionData, (item, index) => {
                                return <ul className="position-info" onClick={() => this.gotoDetail(item)}>
                                <li  className="position-li">
                                    <div className="info-left">
                                        <p className="position-name">{item.name}</p>
                                        <p className="position-name-sub">{item.namedesc}</p>
                                    </div>
                                    <div className="info-right">
                                        <p><span className="position-value">{item.value}</span> <span className="position-value-unit">税后</span></p>
                                        <p className="position-desc">{item.valuedesc}</p>
                                    </div>
                                </li>
                                <li  className="position-li">
                                    <p className="info-left">
                                        <span className="position-detal-name">企业性值：</span>
                                        <span className="position-detail-value">{item.componey}</span>
                                    </p>
                                    <p className="info-right">
                                        <span className="position-detal-name">上班时间：</span>
                                        <span className="position-detail-value">{item.workTime}</span>
                                    </p>
                                </li>
                                <li  className="position-li">
                                    <p className="info-left">
                                        <span className=" position-detal-name">工作地点：</span>
                                        <span className="position-detail-value">{item.workaddres}</span>
                                    </p>
                                </li>
                            </ul>
                            })
                        }
                    </div>
                    
                </div>
                <FooterComponent />
        </div>
    }
}