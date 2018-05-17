import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import style from './App.scss';
import NavBar from './../NavBar';
import Modals from './../Modals';

/**
 * App Component
 * @type {Class}
 */
class App extends React.Component {
  /**
   * Render function for App Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div>
        <Router>
          <div className={style.App}>
            <Route path='/' component={NavBar} />
            <Route path='/' component={Modals} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
