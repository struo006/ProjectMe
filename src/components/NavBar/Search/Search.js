import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import {Firebase,FirebaseRef} from './../../../lib/firebase.js';
import style from './Search.scss';


/**
 * UI Component
 * @type {Class}
 */
class Search extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
   this.setState({ value: e.target.value });
  }

  handleKeyPress(target) {
    if(target.charCode==13){
      this.search();
    }
  }

  search() {
    //placeholder
    let value = this.state.value;
    if (value != '') {
      FirebaseRef.child("heyass").set({temp: "pleasework"})
    }
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={style.searchBar}>
        <FormGroup style={{paddingTop: '18px', color: 'ghostwhite'}}>
          <FormControl
            bsClass={style.search}
            placeholder="Sandbox ID"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            />
          <Button
            bsClass={style.find}
            onClick={() => this.search()}>
            Search
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default Search;
