import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{
  headerLink(){
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render(){
    console.log(this.props)
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emaily</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
           {this.headerLink()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}){
  return{auth};
}
export default connect(mapStateToProps)(Header);
