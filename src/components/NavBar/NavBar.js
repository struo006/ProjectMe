import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'

import style from './NavBar.scss';

import Search from './Search';
import { toggleShowCreate } from '../../actions';

/**
 * UI Component
 * @type {Class}
 */
class NavBar extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  // constructor (props) {
  //   super(props);
  //   this.handleKeyPress = this.handleKeyPress.bind(this);
  //   this.state = {
  //     value: ''
  //   };
  // }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={style.NavBar}>
        <div className={style.tempLogo}>
          <p> TraceMyCode </p>
        </div>

        <Search />

        <Button
          bsClass={style.create}
          onClick={() => this.props.toggleShowCreate(true)}>
          Create Sandbox
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleShowCreate: shouldShowModal => dispatch(toggleShowCreate(shouldShowModal))
})
 
export default connect(null, mapDispatchToProps)(NavBar)
