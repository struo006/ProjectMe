import React from 'react';
import style from './BottomPage.scss';
import InfoButtons from './InfoButtons/InfoButtons.js';
import SideInfo from './SideInfo/SideInfo.js';

/**
 * UI Component
 * @type {Class}
 */
class BottomPage extends React.Component {
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
   * Render function for BottomPage Component
   * @return {JSX} Component to render
   */
  render () {
    const clicked = this.state.clicked;
    return (
      <div className={style.container} onClick={this.toggle}>
        <div className={style.info}>
            <SideInfo/>
        </div>
        <div style={{flex: 1}}>
            <InfoButtons buttonType="Project"/>
        </div>
        <div style={{flex: 1}}>
          <InfoButtons buttonType="Education"/>
        </div>
        <div style={{flex: 1}}>
            <InfoButtons buttonType="Experience"/>
        </div>
      </div>
    );
  }
}

export default BottomPage;
