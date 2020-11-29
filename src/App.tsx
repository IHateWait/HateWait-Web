import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPagePresenter from './main/MainPagePresenter';
import SignInPagePresenter from './signin/SignInPagePresenter';
import SignUpTest from './signup/SignUpPagePresenter';
import CustomerPagePresenter from './customer/CustomerPagePresenter';
import SignInSuccessPresenter from './signup/SignUpSuccessPresenter';
import WaitingPagePresenter from './waiting/WaitingPagePresenter';
import CouponPagePresenter from './coupon/CouponPagePresenter';
import AboutPresenter from './about/AboutPresenter';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={MainPagePresenter} />
        <Route exact path="/about" component={AboutPresenter} />
        <Route exact path="/signin" component={SignInPagePresenter}/>
        <Route exact path="/signup" component={SignUpTest}/>
        <Route exact path="/success" component={SignInSuccessPresenter}/>
        <Route exact path="/customer" component={CustomerPagePresenter}/>
        <Route exact path="/waiting" component={WaitingPagePresenter}/>
        <Route exact path="/coupon" component={CouponPagePresenter}/>
      </Switch>
  );
}

export default App;
