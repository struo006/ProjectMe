import React from 'react';
import style from './SideInfo.scss';
// import {setPage} from './../../../actions';
// import {connect} from 'react-redux';
/**
 * UI Component
 * @type {Class}
 */
class SideInfo extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
  }

  /**
   * Toggle
   * @return {void}
   */

  /**
   * Render function for SideInfo Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.container} >
        <p> Email: steventr96@gmail.com </p>
        <p> Phone number: (626)-675-4063 </p>
      </div>
    );
  }
}
export default SideInfo;
// const mapDispatchToProps = dispatch => ({
//   setPage: screenType => dispatch(setPage(screenType))
// })
//
// export default connect(null, mapDispatchToProps)(SideInfo)
