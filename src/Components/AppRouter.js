import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './Layout.scss';

// import NavHeader from '../NavBar/NavHeader';
import Footer from './Footer';
import Login from './Login';
// import NotFound from './NotFound';

function AppRouter() {
  return(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ Login } />
          
        </Switch>
      
        <Footer />
      </React.Fragment>
    </Router>
  )
}

export default AppRouter;