
import React from 'react';
import style from './TopPage.scss';
import {setPage} from './../../actions';
import {connect} from 'react-redux';

/**
 * UI Component
 * @type {Class}
 */
class TopPage extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = { clicked: true };
    this.toggle = this.toggle.bind(this);
  }

  /**
   * Toggle
   * @return {void}
   */
  toggle () {
    this.setState({clicked: !this.state.clicked});
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    const clicked = this.state.clicked;

    return (
      <div className={style.container} onClick={() => this.props.setPage("Default")}>
        <p>Steven Truong</p>
      </div>
    );
  }
}

//access to actions, callled to manipulate state
const mapDispatchToProps = dispatch => ({
  setPage: screenType => dispatch(setPage(screenType))
})

export default connect(null, mapDispatchToProps)(TopPage)
