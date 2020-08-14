import React from 'react';
import lodash from "lodash";
import { Button, Flex, Grid, Carousel, WingBlank, NavBar, Icon } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
import "./css/myApplication.scss";

export default class MyApplication extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myApplyData: [{
                applyPosition: "行政助理",
                applyTime: "2020-09-30 15:24:34",
                applyStatus: 1,// 申请中
            },
            {
                applyPosition: "运维管理岗",
                applyTime: "2020-09-30 15:24:34",
                applyStatus: 0, // 失效
            },{
                applyPosition: "会计财务",
                applyTime: "2020-09-30 15:24:34",
                applyStatus: 2, // 成功
            },{
                applyPosition: "安检护卫",
                applyTime: "2020-09-30 15:24:34",
                applyStatus: 1,
            },{
                applyPosition: "行政助理岗位2",
                applyTime: "2020-09-30 15:24:34",
                applyStatus: 2,
            }]
        }
    }
    goback = () => {
        this.props.history.goBack()
    }
    render(){
        return  <div className="myapplication-container container">
             <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">我的申请</span></NavBar>
                <div className="content-container">
                    {/* <div className="myapply-item">
                        <ul className="myapply-info">
                            <li  className="myapply-li"><span className="info-name">申请岗位：</span><span className="info-value">udernsdjfh nusdihf</span></li>
                            <li  className="myapply-li"><span className="info-name">申请时间：</span><span className="info-value">LV.12</span></li>
                            <li  className="myapply-li"><span className="info-name">申请状态：</span><span className="info-value">18人</span></li>
                        </ul>
                        <div  className="myapply-btn">
                            <Button  className="btn active" size="small">邀请助力</Button>
                        </div>
                        <div className="myapply-tooltip">
                            <p className="tooltip1">
                                <span className="span1">每有一位亲友助力，获得</span>
                                <span className="span2">10</span>
                                <span className="span1">点助力值。</span>
                            </p>
                            <p className="tooltip2">
                                <span className="span1">* 助力值上限</span>
                                <span className="span2">500</span>
                                <span className="span1">点。邀请助力链接生成</span>
                                <span className="span3">24小时</span>
                                <span className="span1">后失效。</span>
                            </p>
                        </div>
                    </div> */}
                    {
                        lodash.map(this.state.myApplyData, (item,index) => {
                            return <div className="myapply-item">
                            <ul className="myapply-info">
                                <li  className="myapply-li"><span className="info-name">申请岗位：</span><span className="info-value">{item.applyPosition}</span></li>
                                <li  className="myapply-li"><span className="info-name">申请时间：</span><span className="info-value">{item.applyTime}</span></li>
                                <li  className="myapply-li">
                                    <span className="info-name">申请状态：</span>
                                    <span className={`info-value active${item.applyStatus}`}>{item.applyStatus ===1 ?"申请中":""}{item.applyStatus ===2 ?"申请成功":""}{item.applyStatus ===0 ?"已失效":""}</span>
                                </li>
                            </ul>
                            <div  className="myapply-btn">
                                <Button  className={item.applyStatus ===1 ?"btn active":"btn inactive"} size="small">邀请助力</Button>
                            </div>
                            {
                                item.applyStatus ===1?
                                <div className="myapply-tooltip">
                                    <p className="tooltip1">
                                        <span className="span1">每有一位亲友助力，获得</span>
                                        <span className="span2">10</span>
                                        <span className="span1">点助力值。</span>
                                    </p>
                                    <p className="tooltip2">
                                        <span className="span1">* 助力值上限</span>
                                        <span className="span2">500</span>
                                        <span className="span1">点。邀请助力链接生成</span>
                                        <span className="span3">24小时</span>
                                        <span className="span1">后失效。</span>
                                    </p>
                                </div>:null
                            }
                            
                        </div>
                        })
                    }
                </div>
                <FooterComponent />
        </div>
    }
}