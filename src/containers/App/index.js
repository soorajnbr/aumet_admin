import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Dashboard from '../../containers/Dashboard';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const App = (props) => {
  console.log('props', props);
  const pathName = props.history.location.pathname;
  const wrapperClass = pathName === '/' ? 'container' : 'wrapper row-offcanvas row-offcanvas-left';
  return (
    <div className={wrapperClass}>
      { pathName !== '/' && <Header /> }
      { pathName !== '/' && <Menu /> }
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
