import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Home from "../pages/home/index"
import MyApplication from "../pages/myApplication/index"
import MyPromotion from "../pages/myPromotion/index"
import AllPositions from "../pages/allPositions/index"
import RecruitmentBrochure from "../pages/recruitmentBrochure/index"
import ToApply from "../pages/toApply/index"
import MoreServices from "../pages/moreServices/index"

export default class RouterMaps extends React.Component{
    render(){
        return  (<Router history={this.props.history}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/myApplication" component={MyApplication}/>
        <Route path="/myPromotion" component={MyPromotion}/>
        <Route path="/allPositions" component={AllPositions}/>
        <Route path="/recruitmentBrochure" component={RecruitmentBrochure}/>
        <Route path="/toApply" component={ToApply}/>
        <Route path="/moreServices" component={MoreServices}/>
     </Router>)
    }
}