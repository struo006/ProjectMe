import React from 'react';
import style from './SideInfo.scss';

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
      <div className={style.container} onClick={this.toggle}>
      <p> Email: struo006@ucr.edu </p>
      <p> Phone number: (626)-675-4063 </p>
      </div>
    );
  }
}

export default SideInfo;
