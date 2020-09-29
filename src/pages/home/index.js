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
import ersvg from "../../common/svg/er.svg"

export default class Home extends React.Component{
    constructor(props){ 
        super(props)
        this.state={
            classifyCount: [{name: "国企", value:23},{name: "国企2", value:232},{name: "国企3", value:223},{name: "国企4", value:323}],
            totalCount: 0,
            sliderSwiper: [],
            imgHeight:150,
            comIntroduce: ""
        }
    }

    gotoMypromotion = () => {
        this.props.history.push({pathname:'/myPromotion'});
    }

    getlist = () => {
        CommonApi.getList()
        .then(res => {
            this.setState({
                classifyCount: res.classifyCount,
                totalCount: res.totalCount
            })
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    };

    getIntroduce = () => {
        CommonApi.getIntroduce()
        .then(res => {
            this.setState({
                comIntroduce: res.comIntroduce,
                ansIntroduce: res.ansIntroduce?JSON.parse(res.ansIntroduce): []
            })
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {

        })
    }

    getQrcode = () => {
        CommonApi.getQrcode()
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
          this.getIntroduce();
          this.getQrcode();
    }

    render(){
        const {classifyCount, totalCount, comIntroduce, ansIntroduce} = this.state;
        return  <div className="container">
            <NavBar
                className="header-container"
                leftContent={[
                    <img src={usersvg} alt="" onClick={e => this.gotoMypromotion()}/>,
                    <span className="user-name" onClick={e => this.gotoMypromotion()}>user name</span>
                ]}
                rightContent={[
                    <img alt="" src={ersvg}/>
                ]}
                ><span className="header-title home">安乐就业</span></NavBar>
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
                        <span className="positionNum">{totalCount}</span>
                        <span className="positon-unit">个</span>
                    </div>
                    <div className="position-box">
                        {
                            lodash.map(classifyCount, (dataItem, dataIndex) => {
                                return <div className="positionItem" key={dataIndex}>
                                    <span className="position-name">{dataItem.classify} : </span>
                                    <span className="position-value">{dataItem.count}</span>
                                </div>
                            })
                        }
                    </div>
                    <Button className="myallposition" siz="small" onClick={e => this.props.history.push({pathname:'/allPositions'})}>查询所有岗位</Button>
                </div>
                <div className="content-module">
                    <div className="text-center title2">我们的优势</div>
                    <div className="text-content">{comIntroduce}</div>
                </div>
                <div className="content-module content-module-last">
                    <div className="text-center title3">职场优势</div>
                    {
                        lodash.map(ansIntroduce, (item,index) => {
                            return <div>
                                <div className="text-quest">Q: {item.question}</div>
                    <div className="text-anser">A: {item.answer}</div>
                            </div>
                        })
                    }
                </div>
            </div>
            <FooterComponent />
        </div>
    }
}