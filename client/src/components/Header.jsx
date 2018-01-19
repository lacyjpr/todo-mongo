import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="nav-login">
            <a href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
          <div className="nav-logout">
            <a href="api/logout">Logout</a>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">{this.renderContent()}</div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, actions)(Header);
