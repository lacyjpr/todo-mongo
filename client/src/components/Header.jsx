import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }
const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Header);
