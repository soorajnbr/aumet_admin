import React, { Component } from 'react';
import { connect } from 'react-redux';

const $ = window.$;
class Menu extends Component {
  componentDidMount() {
    // $('.livicon').addLivicon();
  }

  render() {
    return (
      <aside className="left-side sidebar-offcanvas">
        <section className="sidebar ">
          <div className="page-sidebar  sidebar-nav">
            {/* <!-- BEGIN SIDEBAR MENU --> */}
            <ul id="menu" className="page-sidebar-menu">
              <li>
                <a href="index.html">
                  <i className="livicon" data-name="home" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="profile.html">
                  <i className="livicon" data-name="user" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Profile</span>
                </a>
              </li>
              <li>
                <a href="countries.html">
                  <i className="livicon" data-name="flag" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Countries</span>
                </a>
              </li>
              <li>
                <a href="regions.html">
                  <i className="livicon" data-name="location" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Regions</span>
                </a>
              </li>
              <li>
                <a href="specialities.html">
                  <i className="livicon" data-name="pencil" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Specialities</span>
                </a>
              </li>
              <li>
                <a href="categories.html">
                  <i className="livicon" data-name="list-ul" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Categories</span>
                </a>
              </li>
              <li>
                <a href="scientific-names.html">
                  <i className="livicon" data-name="sandglass" data-size="18" data-c="#fff" data-hc="#00bc8c" data-loop="true" />
                  <span className="title">Scientific Names</span>
                </a>
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
