import React from 'react';
import lodash from "lodash";
import { Button, Flex, Grid, Carousel, WingBlank, NavBar, Icon, Modal, Toast } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
import "./css/moreServices.scss";
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
export default class MyApplication extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal1: false,
            servesData: [{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            },{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            },{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            },{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            },{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            },{
                title: "成都购房",
                suitableForPeople: "快递费是地方都是热望热望热望人，额我热温热微软，梵蒂冈地方官梵蒂冈的官方给的",
                businessIntroduct: "业务介绍，声卡的加速度还是积分活动经费，多少积分v二位；大夫十分大师傅士大夫沙发上而恶气十分士大夫十分。"
            }]
        }
    }
    goback = () => {
        this.props.history.goBack()
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
    copy = () => {
        Toast.success('复制成功', 1);
    }
    render(){
        return  <div className="moreServices-container container">
             <NavBar
                className="header-container"
                leftContent={[
                    <Icon type="left" onClick={e=> this.goback()}/>,
                    <span onClick={e=> this.goback()}>返回</span>
                ]}
                ><span className="header-title">更多服务</span></NavBar>
                <div className="content-container">
                    {/* <div className="servies-item">
                        <p className="servies-item-title">成都购房</p>
                        <div className="servies-item-desc">
                            <p className="item-desc-title">适合人群：</p>
                            <span className="item-desc-text">适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群</span>
                        </div>
                        <div className="servies-item-desc">
                            <p className="item-desc-title">业务介绍</p>
                            <span className="item-desc-text">业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍业务介绍</span>
                        </div>
                        <div className="servies-item-btnbox">
                            <Button  className="btn btn1">复制业务介绍</Button>
                            <Button  className="btn btn2">生成宣传海报</Button>
                            <Button  className="btn btn3">备注</Button>
                        </div>
                    </div> */}
                    {
                        lodash.map(this.state.servesData, (item, index) => {
                            return <div className="servies-item">
                            <p className="servies-item-title">{item.title}</p>
                            <div className="servies-item-desc">
                                <p className="item-desc-title">适合人群：</p>
                                <span className="item-desc-text">{item.suitableForPeople}</span>
                            </div>
                            <div className="servies-item-desc">
                                <p className="item-desc-title">业务介绍</p>
                                <span className="item-desc-text">{item.businessIntroduct}</span>
                            </div>
                            <div className="servies-item-btnbox">
                                <Button  className="btn btn1" size="small" onClick={this.copy}>复制业务介绍</Button>
                                <Button  className="btn btn2" size="small">生成宣传海报</Button>
                                <Button  className="btn btn3" size="small" onClick={this.showModal('modal1')}>备注</Button>
                            </div>
                        </div>
                        })
                    }
                </div>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    onClose={this.onClose('modal1')}
                    footer={false}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    className="remarks-modal"
                    >
                    <div className="remarks-modal-container">
                        备注信息。。。
                    </div>
                </Modal>
                <FooterComponent />
        </div>
    }
}