import React from 'react';
import lodash from "lodash";
import queryString from "query-string";
import { Button, NavBar, Icon, Modal } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
// import MobileTable from "../../common/component/MobileTable"
import "./css/toApply.scss";
import im1 from "../../common/svg/v2_qdgcar.jpg"
import addimg from "../../common/svg/add.svg"
import shareimg from "../../common/svg/share.svg"

export default class ToApply extends React.Component{
    constructor(props){ 
        super(props)
        this.state={
            apllyerName: "",
            apllyerPhone: "",
            apllyerAdress: "",
            apllyerPosition: ""
        }
    }
    goback = () => {
        this.props.history.goBack()
    }
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    componentDidMount(){
        console.log(this.props.location.search);
        const { position } = queryString.parse(this.props.location.search);
        console.log(position);
        const positionInfo = JSON.parse(position);
        console.log(positionInfo);
        this.setState({
            positionInfo
        })
    }
    render(){
        return  <div className="toApply-container container">
            <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">我要申请</span></NavBar>
            <div className="content-container"> 
                <div className="inp-box">
                    <div className="inp-item">
                        <span className="inp-name">姓名：</span>
                        <div className="inp-value-box">
                            <input className="inp-value" value={this.state.apllyerName} name="apllyerName" onChange={this.onInputChange} placeholder="请输入您的姓名"/>
                        </div>
                        
                    </div>
                    <div className="inp-item">
                        <span className="inp-name">手机：</span>
                        <div className="inp-value-box">
                            <input className="inp-value" value={this.state.apllyerPhone} name="apllyerPhone" onChange={this.onInputChange} placeholder="请输入您的手机号"/>
                        </div>
                    </div>
                    <div className="inp-item">
                        <span className="inp-name">现居住地：</span>
                        <div className="inp-value-box">
                            <input className="inp-value" value={this.state.apllyerAdress} name="apllyerAdress" onChange={this.onInputChange} placeholder="请输入您的住址"/>
                        </div>
                    </div>
                    <div className="inp-item">
                        <span className="inp-name">申请岗位：</span>
                        <div className="inp-value-box">
                            <input className="inp-value" value={this.state.apllyerPosition} name="apllyerPosition" onChange={this.onInputChange} placeholder="请输入您想申请的岗位名称"/>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                  <Button className="btn" size="small">提交</Button>
                </div>
                
                
            </div>
            <FooterComponent />
        </div>
    }
}