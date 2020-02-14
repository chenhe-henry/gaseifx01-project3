import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BackGroundVideo from "./BackGroundVideo";
import "../assets/Header.scss";

class Header extends React.Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a
            href="/auth/google"
            className="section-header__nav--navi-link--login-white"
          >
            Log in with Google
          </a>
        );
      default:
        return (
          <div>
            <div>Welcome, {this.props.auth.googleId}</div>
            <a
              href="/api/logout"
              className="section-header__nav--navi-link--login-white"
            >
              Logout
            </a>
          </div>
        );
    }
  }
  render() {
    return (
      <div className="section-header">
        <BackGroundVideo />
        <div className="section-header__nav">
          <div className="section-header__nav--brand">
            <Link to="/" className="section-header__nav--brand-link">
              <img
                src="/findhome-logo_transparent.png"
                className="section-header__nav--brand-link--img"
              ></img>
              <p className="section-header__nav--brand-link--text">Find Home</p>
            </Link>
          </div>
          <div className="section-header__nav--navi">
            <div className="section-header__nav--navi-link">
              <Link to="/filter" className="section-header__nav--navi-link">
                Find a Property
              </Link>
            </div>
            <div className="section-header__nav--navi-link">News</div>
            <div className="section-header__nav--navi-link--login">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
