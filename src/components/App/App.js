import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import style from './App.scss';
import BottomPage from './../BottomPage';
import {connect} from 'react-redux';
import HomePage from './../HomePage';
import TopPage from './../TopPage';
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
          <TopPage />
          <BottomPage/>
          {
            this.props.screen.screenType === "Project" ? <p> {this.props.screen.screenType} </p>
            : this.props.screen.screenType === "Experience" ? <p> {this.props.screen.screenType} </p>
            : this.props.screen.screenType === "Education" ? <p> {this.props.screen.screenType} </p>
            : this.props.screen.screenType === "Default" ? <HomePage />
            : <HomePage />
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
