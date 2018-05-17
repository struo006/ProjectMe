import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import style from './Modals.scss';
import { toggleShowCreate } from './../../actions';
import {Firebase, FirebaseRef} from './../../lib/firebase.js';

/**
 * UI Component
 * @type {Class}
 */
class Modals extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.pageClick = this.pageClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.pageClick, false);
  }

  pageClick (event) {
    let modal = document.getElementById('modal');
      if (event.target == modal && this.props.modal.shouldShowModal) {
          this.props.toggleShowCreate(false);
      }
  }

  handleCreate () {
    let rand = 10000 + Math.random() * (99999 - 10000);
    rand = Math.round(rand).toString();
    FirebaseRef.child("ids").child(rand.toString()).once('value', (snapshot) => {
      let idExists = true;
      while (idExists) {
        snapshot.val() === null ? idExists = false : rand = Math.round(10000 + Math.random() * (99999 - 10000)).toString();
      }
    }).then(() => {
      let obj = {};
      obj[rand.toString()] = {temp: 'temp'}
      FirebaseRef.child("Projects").update(obj);
      this.props.toggleShowCreate(false);
    })
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    let showModal = this.props.modal.shouldShowModal;
    return (
      <div>
        {
          showModal ?
            <div>
              <div className={style.modal}></div>
              <Modal.Dialog
                id="modal"
                style={{display: 'flex', alignItems: 'center'}}>
               <Modal.Body style={{backgroundColor: 'ghostwhite', borderRadius: '5px', width: '490px'}}>
               <Form inline>
                 <FormGroup>
                   <ControlLabel style={{paddingRight: '15px', fontWeight: 500}}>Name</ControlLabel>
                   <FormControl style={{backgroundColor: 'ghostwhite'}} type="text" placeholder="Sanbox Name" />
                   <Button
                    style={{right: '15px', position: 'absolute'}}
                    bsClass={style.create}
                    onClick={this.handleCreate}>
                      Create
                    </Button>
                 </FormGroup>
                </Form>
               </Modal.Body>
              </Modal.Dialog>
            </div> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state || {},
})

const mapDispatchToProps = dispatch => ({
  toggleShowCreate: shouldShowModal => dispatch(toggleShowCreate(shouldShowModal))
}) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Modals)
