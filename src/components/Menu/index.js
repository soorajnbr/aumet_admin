import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Menu extends Component {

  render() {
    return (
      <aside className="left-side sidebar-offcanvas">
        <section className="sidebar ">
          <div className="page-sidebar  sidebar-nav">
            {/* <!-- BEGIN SIDEBAR MENU --> */}
            <ul id="menu" className="page-sidebar-menu">
              <li>
                <Link to="/dashboard">
                  <i className="livicon" data-name="home" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="livicon" data-name="user" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/countries">
                  <i className="livicon" data-name="flag" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Countries</span>
                </Link>
              </li>
              <li>
                <Link to="/regions">
                  <i className="livicon" data-name="location" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Regions</span>
                </Link>
              </li>
              <li>
                <Link to="/specialities">
                  <i className="livicon" data-name="pencil" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Specialities</span>
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <i className="livicon" data-name="list-ul" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/scientificNames">
                  <i className="livicon" data-name="sandglass" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Scientific Names</span>
                </Link>
              </li>
            </ul>
            {/* <!-- END SIDEBAR MENU --> */}
          </div>
        </section>
      </aside>
    );
  }
}

export default connect(null)(Menu);
