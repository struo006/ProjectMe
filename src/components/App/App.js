import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import style from './App.scss';
import NavBar from './../BottomPage';
import {connect} from 'react-redux';
// import Modals from './../Modals';

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
        {console.log(this.props.screen.screenType)}
        <Router>
          <div className={style.App}>
          <NavBar/>
          {
            this.props.screen.screenType === "Project" ? console.log("This is where you call your project component")
            : this.props.screen.screenType === "Experience" ? console.log("This is where you call your experience component")
            : this.props.screen.screenType === "Education" ? console.log("Education") : null
          }
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state || {},
})

export default connect(mapStateToProps, null)(App)
