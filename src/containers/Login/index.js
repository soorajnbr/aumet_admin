import React, { Component } from 'react';
import { connect } from 'react-redux';

import primaryLogo from '../../assets/img/logo-primary.png';
import '../../assets/css/login.css';

class Login extends Component {
  componentWillMount() {
    document.body.classList.remove('skin-josh');
  }

  validateLogin(e) {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="row vertical-offset-100">
        <div className="col-sm-6 col-sm-offset-3  col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4">
          <div id="container_demo">
            <a className="hiddenanchor" id="toregister" />
            <a className="hiddenanchor" id="tologin" />
            <a className="hiddenanchor" id="toforgot" />
            <div id="wrapper">
              <div id="login" className="animate form">
                <form action="index.html" autoComplete="on" method="post">
                  <h3>
                    <img src={primaryLogo} alt="josh logo" />
                    <br />Log in</h3>
                  <p>
                    <label style={{ marginBottom: '0px' }} htmlFor="username" className="uname">
                      <i className="livicon" data-name="user" data-size="16" data-loop="true" data-c="#66c4ae" data-hc="#66c4ae" />
                                        E- mail or Username
                    </label>
                    <input id="username" name="username" required type="text" placeholder="username or e-mail" />
                  </p>
                  <p>
                    <label style={{ marginBottom: '0px' }} htmlFor="password" className="youpasswd">
                      <i className="livicon" data-name="key" data-size="16" data-loop="true" data-c="#66c4ae" data-hc="#66c4ae" />
                                        Password
                    </label>
                    <input id="password" name="password" required type="password" placeholder="eg. X8df!90EO" />
                  </p>
                  <p className="keeplogin">
                    <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                    <label htmlFor="loginkeeping">Keep me logged in</label>
                  </p>
                  <p className="login button">
                    <input type="submit" value="Login" className="btn btn-success" onClick={(e) => this.validateLogin(e)} />
                  </p>
                  <p className="change_link">
                    <a href="#toforgot">
                      <button type="button" className="btn btn-responsive botton-alignment btn-warning btn-sm">Forgot password</button>
                    </a>
                    <a href="#toregister">
                      <button type="button" className="btn btn-responsive botton-alignment btn-success btn-sm" style={{ float: 'right' }}>Sign up</button>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null)(Login);
