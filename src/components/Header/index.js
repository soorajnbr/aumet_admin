import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/img/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          {/* <!-- Sidebar toggle button--> */}
          <div>
            <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
              <div className="responsive_nav" />
            </a>
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="livicon" data-name="message-flag" data-loop="true" data-color="#42aaca" data-hovercolor="#42aaca" data-size="28" />
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu dropdown-messages pull-right">
                  <li className="dropdown-title">4 New Messages</li>
                  <li className="unread message">
                    <a href="javascript:;" className="message"> <i className="pull-right" data-toggle="tooltip" data-placement="top" title="Mark as Read"><span className="pull-right ol livicon" data-n="adjust" data-s="10" data-c="#287b0b" /></i>
                      <img data-src="holder.js/45x45/#000:#fff" className="img-responsive message-image" alt="icon" />
                      <div className="message-body">
                        <strong>Riot Zeast</strong>
                        <br />Hello, You there?
                        <br />
                        <small>8 minutes ago</small>
                      </div>
                    </a>
                  </li>
                  <li className="unread message">
                    <a href="javascript:;" className="message">
                      <i className="pull-right" data-toggle="tooltip" data-placement="top" title="Mark as Read"><span className="pull-right ol livicon" data-n="adjust" data-s="10" data-c="#287b0b" /></i>
                      <img data-src="holder.js/45x45/#000:#fff" className="img-responsive message-image" alt="icon" />
                      <div className="message-body">
                        <strong>John Kerry</strong>
                        <br />Can we Meet ?
                        <br />
                        <small>45 minutes ago</small>
                      </div>
                    </a>
                  </li>
                  <li className="unread message">
                    <a href="javascript:;" className="message">
                      <i className="pull-right" data-toggle="tooltip" data-placement="top" title="Mark as Read">
                        <span className="pull-right ol livicon" data-n="adjust" data-s="10" data-c="#287b0b" />
                      </i>
                      <img data-src="holder.js/45x45/#000:#fff" className="img-responsive message-image" alt="icon" />
                      <div className="message-body">
                        <strong>Jenny Kerry</strong>
                        <br />Dont forgot to call...
                        <br />
                        <small>An hour ago</small>
                      </div>
                    </a>
                  </li>
                  <li className="unread message">
                    <a href="javascript:;" className="message">
                      <i className="pull-right" data-toggle="tooltip" data-placement="top" title="Mark as Read">
                        <span className="pull-right ol livicon" data-n="adjust" data-s="10" data-c="#287b0b" />
                      </i>
                      <img data-src="holder.js/45x45/#000:#fff" className="img-responsive message-image" alt="icon" />
                      <div className="message-body">
                        <strong>Ronny</strong>
                        <br />Hey! sup Dude?
                        <br />
                        <small>3 Hours ago</small>
                      </div>
                    </a>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="livicon" data-name="bell" data-loop="true" data-color="#e9573f" data-hovercolor="#e9573f" data-size="28" />
                  <span className="label label-warning">7</span>
                </a>
                <ul className=" notifications dropdown-menu">
                  <li className="dropdown-title">You have 7 notifications</li>
                  <li>
                    {/* <!-- inner menu: contains the actual data --> */}
                    <ul className="menu">
                      <li>
                        <i className="livicon danger" data-n="timer" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">after a long time</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                Just Now
                        </small>
                      </li>
                      <li>
                        <i className="livicon success" data-n="gift" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">Jef's Birthday today</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                Few seconds ago
                        </small>
                      </li>
                      <li>
                        <i className="livicon warning" data-n="dashboard" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">out of space</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                8 minutes ago
                        </small>
                      </li>
                      <li>
                        <i className="livicon bg-aqua" data-n="hand-right" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">New friend request</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                An hour ago
                        </small>
                      </li>
                      <li>
                        <i className="livicon danger" data-n="shopping-cart-in" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">On sale 2 products</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                3 Hours ago
                        </small>
                      </li>
                      <li>
                        <i className="livicon success" data-n="image" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">Lee Shared your photo</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                Yesterday
                        </small>
                      </li>
                      <li>
                        <i className="livicon warning" data-n="thumbs-up" data-s="20" data-c="white" data-hc="white" />
                        <a href="#">David liked your photo</a>
                        <small className="pull-right">
                            <span className="livicon paddingright_10" data-n="timer" data-s="10" />
                                                2 July 2014
                        </small>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img data-src="holder.js/35x35/#fff:#000" width="35" className="img-circle img-responsive pull-left" height="35" alt="riot" />
                  <div className="riot">
                    <div>
                                            Riot
                      <span>
                        <i className="caret" />
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  {/* <!-- User image --> */}
                  <li className="user-header bg-light-blue">
                    <img data-src="holder.js/90x90/#fff:#000" className="img-responsive img-circle" alt="User Image" />
                    <p className="topprofiletext">Riot Zeast</p>
                  </li>
                  {/* <!-- Menu Body --> */}
                  <li>
                    <a href="#">
                      <i className="livicon" data-name="user" data-s="18" /> My Profile
                    </a>
                  </li>
                  <li role="presentation" />
                  <li>
                    <a href="#">
                      <i className="livicon" data-name="gears" data-s="18" /> Account Settings
                    </a>
                  </li>
                  {/* <!-- Menu Footer--> */}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="lockscreen.html">
                        <i className="livicon" data-name="lock" data-s="18" /> Lock
                      </a>
                    </div>
                    <div className="pull-right">
                      <a href="login.html">
                        <i className="livicon" data-name="sign-out" data-s="18" /> Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(null)(Header);
