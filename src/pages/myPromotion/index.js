import React from 'react';
import lodash from "lodash";
import { Button, Flex, Grid, Carousel, WingBlank, NavBar, Icon } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
// import MobileTable from "../../common/component/MobileTable"
import {CommonApi} from "../../common/api/index.js"
import "./css/myPromotion.scss";

export default class MyPromotion extends React.Component{
    constructor(props){ 
        super(props)
        this.state={
            teamConstruct:[{
                name: "user 01",
                date: "2020/07/01",
                commitNum: 20,
                omWorkName: 10,
            },{
                name: "user 02",
                date: "2020/07/01",
                commitNum: 20,
                omWorkName: 10,
            }],
            teamProject: [{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            },{
                teamer: "user 01",
                customername: "zhangsan 里斯",
                commitDate: "2020-08-09",
                status: "tijiao",
                status2: "结算清除"
            }]
        }
    }
    goback = () => {
        this.props.history.goBack()
    }

    getUserInfo = () => {
        CommonApi.getUserInfo()
        .then(res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    };

    getTeamInfo = () => {
        const param ={
            pageIndex: 0,
            pageSize: 0,
            params: {}
        }
        CommonApi.getTeamInfo(param)
        .then(res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    };

    getTeamPost = () => {
        CommonApi.getTeamPost()
        .then(res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    };

    componentDidMount(){
        this.getUserInfo();
        this.getTeamInfo();
        this.getTeamPost();
    }

    render(){
        // const {positionTypeData} = this.state;
        return  <div className="myPromotion-container container">
            {/* <Flex justify="between" className="header-container">
                <div className="header-user">
                    <span>user name</span>
                </div>
                <div className="header-title">
                    <span>我的推广</span>
                </div>
                <div className="header-QRcode"></div>
            </Flex> */}
            <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">我的推广</span></NavBar>
            <div className="content-container"> 

                <div className="basin-info-container">
                    <ul className="left">
                        <li><span className="info-name">用户名称：</span><span className="info-value">udernsdjfh nusdihf</span></li>
                        <li><span className="info-name">用户等级：</span><span className="info-value">LV.12</span></li>
                        <li><span className="info-name">我的团队：</span><span className="info-value">18人</span></li>
                    </ul>
                    <div className="right">

                    </div>
                </div>
                <div className="team-table-container table-container">
                    <p className="table-title">团队成员</p>
                    <table className="table-box" border="1" cellSpacing="0" cellPadding="3">
                        <thead>
                            <tr>
                                <td>用户名</td>
                                <td>加入日期</td>
                                <td>提交人数</td>
                                <td>上岗人数</td>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                lodash.map(this.state.teamConstruct, (item, index) => {
                                    return <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.commitNum}</td>
                                        <td>{item.omWorkName}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="team-table-container table-container">
                    <p className="table-title">团队项目</p>
                    <table className="table-box" border="1" cellSpacing="0" cellPadding="3">
                        <thead>
                            <tr>
                                <td>提交人员</td>
                                <td>客户姓名</td>
                                <td>提交日期</td>
                                <td>流程状态</td>
                                <td>结算状态</td>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                lodash.map(this.state.teamProject, (item, index) => {
                                    return <tr key={index}>
                                        <td>{item.teamer}</td>
                                        <td>{item.customername}</td>
                                        <td>{item.commitDate}</td>
                                        <td>{item.status}</td>
                                        <td>{item.status2}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="moreserves-box">
                    <Button  className="moreserves" onClick={e => this.props.history.push({pathname:'/moreServices'})} size="small">更多服务</Button>
                </div>
            </div>
            <FooterComponent />
        </div>
    }
}