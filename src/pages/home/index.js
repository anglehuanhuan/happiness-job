import React from 'react';
import lodash from "lodash";
import { Button, Flex, Carousel, WingBlank, NavBar, Icon } from 'antd-mobile';
import FooterComponent from "../../common/component/FooterComponent"
import {CommonApi} from "../../common/api/index.js"
import 'antd-mobile/dist/antd-mobile.css';
import  "./css/home.scss"
import usersvg from "../../common/svg/user.svg"
import apply from "../../common/svg/apply.svg"
import promotion from "../../common/svg/promotion.svg"
import linesvg from "../../common/svg/line.svg"

export default class Home extends React.Component{
    constructor(props){ 
        super(props)
        this.state={
            positionTypeData: [{name: "国企", value:23},{name: "国企2", value:232},{name: "国企3", value:223},{name: "国企4", value:323}],
            sliderSwiper: [],
            imgHeight:150,
        }
    }

    gotoMypromotion = () => {
        this.props.history.push({pathname:'/myPromotion'});
    }

    getlist = () => {
        CommonApi.getList()
        .then(res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                sliderSwiper: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
            });
          }, 100);
          this.getlist();
    }

    render(){
        const {positionTypeData} = this.state;
        return  <div className="container">
            <NavBar
                className="header-container"
                leftContent={[
                    <img src={usersvg} alt=""/>,
                    <span className="user-name">user name</span>
                ]}
                rightContent={[
                    <img alt="我的二维码"/>
                ]}
                ><span className="header-title">安乐就业</span></NavBar>
            <div className="content-container">
                <div className="banner">
                    <div className="swiper-container">
                    <WingBlank className="swiper-wingblank">
                        <Carousel
                        autoplay
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.sliderSwiper.map(val => (
                            <a  key={val} href="#" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} >
                            <img
                                src={promotion}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                    </div>
                    <div className="content-module">
                        <div className="btn-box">
                            <Button className="mytuiguang btn"  onClick={e => this.gotoMypromotion()}><img src={promotion} alt=""/>我的推广</Button>
                            <Button  className="myapply btn"  onClick={e => this.props.history.push({pathname:'/myApplication'})}><img src={apply} alt=""/>我的申请</Button>

                        </div>
                       
                    </div>
                </div>
                <div className="content-module">
                    <div className="positon-title">招聘中的岗位</div>
                    <div className="text-center">
                        <span className="positionNum">233</span>
                        <span className="positon-unit">个</span>
                    </div>
                    <div className="position-box">
                        {
                            lodash.map(positionTypeData, (dataItem, dataIndex) => {
                                return <div className="positionItem" key={dataIndex}>
                                    <span className="position-name">{dataItem.name} : </span>
                                    <span className="position-value">{dataItem.value}</span>
                                </div>
                            })
                        }
                    </div>
                    <Button className="myallposition" siz="small" onClick={e => this.props.history.push({pathname:'/allPositions'})}>查询所有岗位</Button>
                </div>
                <div className="content-module">
                    <div className="text-center title2">我们的优势</div>
                    <div className="text-content">发顺丰的方式发送的司法斯蒂芬很舒服士大夫类似的方式开发深刻的反思疯狂世界东方士大夫胜多负少，十分士大夫十分</div>
                </div>
                <div className="content-module content-module-last">
                    <div className="text-center title3">职场优势</div>
                    <div className="text-quest">问题：为妾请问</div>
                    <div className="text-anser">发顺丰的方式发送的司法斯蒂芬很舒服士大夫类似的方式开发深刻的反思疯狂世界东方士大夫胜多负少，十分士大夫十分</div>
                </div>
            </div>
            <FooterComponent />
        </div>
    }
}