import React from 'react';
import style from './InfoButtons.scss';
import {setPage} from './../../../actions';
import {connect} from 'react-redux';

/**
 * UI Component
 * @type {Class}
 */
class InfoButtons extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
  }

  /**
   * Render function for InfoButtons Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.container} onClick={() => this.props.setPage(this.props.buttonType)}>
          <p> {this.props.buttonType} </p>
      </div>
    );
  }
}

//access to actions, callled to manipulate state
const mapDispatchToProps = dispatch => ({
  setPage: screenType => dispatch(setPage(screenType))
})

export default connect(null, mapDispatchToProps)(InfoButtons)
