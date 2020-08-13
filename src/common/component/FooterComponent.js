import React from 'react';
import weixin from '../svg/weixin.svg';
import phone from '../svg/phone.svg';

export default class FooterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return <footer className="footer-container">
        <div className="flex footer-box">
            <div className="left">
                <img src={weixin} alt="weixin" className="footer-icon"/>
                <span className="footer-text">在线咨询</span>
            </div>
            <span className="split"></span>
            <div className="right">
                <img src={phone} alt="phone" className="footer-icon"/>
                <span className="footer-text">电话咨询</span>
            </div>
        </div>
    </footer>
    }
}