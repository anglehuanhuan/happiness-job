import React from 'react';
import lodash from "lodash";
import queryString from "query-string";
import { Button, NavBar, Icon, Modal } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
import {CommonApi} from "../../common/api/index.js"
import "./css/recruitmentBrochure.scss";
import im1 from "../../common/svg/v2_qdgcar.jpg"
import addimg from "../../common/svg/add.svg"
import shareimg from "../../common/svg/share.svg"
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
export default class RecruitmentBrochure extends React.Component{
    constructor(props){ 
        super(props)
        this.state={
            modal1: false
        }
    }
    goback = () => {
        this.props.history.goBack()
    }
    gotoApply = () => {
        this.props.history.push({pathname:'/toApply',search: queryString.stringify({ position: JSON.stringify(this.state.positionInfo) })});
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
    }

    getPositionDatail = positionInfo => {
        const param ={
            postCode: positionInfo.postCode
        }
        CommonApi.getAPositionDetail(param)
        .then(res => {
            console.log(res);
            this.setState({
                // positionData: res
            })
            
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    };
    componentDidMount(){
        // console.log(this.props.location.search);
        const { position } = queryString.parse(this.props.location.search);
        // console.log(position);
        const positionInfo = JSON.parse(position);
        // console.log(positionInfo);
        this.setState({
            positionInfo
        })
        this.getPositionDatail(positionInfo)
    }
    render(){
        return  <div className="recruitmentBrochure-container container">
            <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">招聘简章</span></NavBar>
            <div className="content-container"> 
                <div className="info-box">
                    <div className="info-item info-title">
                        <span className="info-name">安检护卫</span>
                        <span className="info-code">HKP001</span>
                    </div>
                    <div className="info-item info-detail">
                        <p className="detail-item">
                            <span className="detail-item-name">用人单位：</span>
                            <span className="detail-item-value">天府/双流机场</span>
                        </p>
                        <p className="detail-item">
                            <span className="detail-item-name">企业性质：</span>
                            <span className="detail-item-value">国企</span>
                        </p>
                        <p className="detail-item">
                            <span className="detail-item-name">合同性质：</span>
                            <span className="detail-item-value">派遣</span>
                        </p>
                    </div>
                    <div className="info-item info-duty">
                        <p className="duty-title">岗位职责</p>
                        <p className="duty-text">负责航站楼，候机楼，大厅，通道，机坪等区域旅客安检检查工作，主要检查旅客行李物品，随身物品和进入特殊区域旅客登机证和工作人员工作证/通行证。 </p>
                    </div>
                    <div className="info-item info-work">
                        <p className="work-item">
                            <span className="work-item-name">工作时间：</span>
                            <span className="work-item-value">上一休二或上一休一</span>
                        </p>
                        <p className="work-item">
                            <span className="work-item-name">工作地点：</span>
                            <span className="work-item-value">双流机场/天府机场</span>
                        </p>
                    </div>
                    <div className="info-item info-duty">
                        <p className="duty-title">任职要求：</p>
                        <p className="duty-text">18-28岁，男性，172cm以上，中专及以上学历。身体健康，普通话标准，形象气质佳，无残疾，无平底足，无重听，无口吃，无色盲、色弱，校正视力1.0以上；遵纪守法，作风正派，品质良好；未受过少年管教、劳动教养或刑事处分。/通行证。 </p>
                    </div>
                    <div className="info-item info-salary">
                        <p className="salary-title">薪酬福利：</p>
                        <p className="salary-text">18-税后年薪6-7万，逐年递增。入职购买五险一金，4-6人空调宿舍，带薪年假7-15天。.0以上；遵纪守法，作风正派，品质良好；未受过少年管教、劳动教养或刑事处分。/通行证。 </p>
                        <p className="salary-remarks">
                            <Button className="remarks-btn" size="small" onClick={this.showModal('modal1')}>备注</Button>
                        </p>
                    </div>
                </div>
                <div className="info-action">
                    <div className="left">
                        <img src={im1} alt=""/>
                    </div>
                    <div className="right">
                        <Button className="remarks-btn btn1"><img src={shareimg} alt=""/>分享职位</Button>
                        <Button className="remarks-btn btn2" onClick={e=> this.gotoApply()}>
                            <img src={addimg} alt=""/>
                            <span>我要申请</span>
                        </Button>
                    </div>

                </div>
                
            </div>
            <FooterComponent />
            <Modal
                    visible={this.state.modal1}
                    transparent
                    onClose={this.onClose('modal1')}
                    footer={false}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    className="remarks-modal"
                    >
                    <div className="remarks-modal-container">
                        <p>7-11月3个月可上岗；12-2月1-2周可上岗；3-6月1个月可上岗，具体以机场安排为准，不作时限承诺。</p>
                    </div>
                </Modal>
                <FooterComponent />
        </div>
    }
}