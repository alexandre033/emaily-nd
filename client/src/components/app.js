import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import {Landing} from './landing';
import {Dashboard} from './dashboard';
import {NewSurvey} from './newsurvey';
import {connect} from 'react-redux';
import * as actions from '../action/index';

class App extends Component {

componentDidMount(){
  this.props.fetchUser();
}

render() {
    return(
      <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/survey/new" component={NewSurvey}/>
        </div>
      </BrowserRouter>
    </div>
    )
	}
}

export default connect(null, actions)(App)
