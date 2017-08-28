import React, { Component } from 'react';
import Lightbox from 'react-images';

import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);
    // console.log("props:");
    // console.log(props);
    this.state = {
      open: false
    };
  }

  handleButton(){
    // console.log(this.state.open);
    this.setState({
      open: this.state.open ? false : true
    });
    // console.log(this.state);
  }

  render() {
    const open = this.state.open ? 'profile-open' : 'profile-closed';
    return (
      <div className={open}>
        <div className='profile__pic'>
          <img src={require("./images/profilepic.png")} />
        </div>
        <div onClick={()=>{this.handleButton();}} className='profile__openbutton'>
        <span className='arrow'>{this.state.open ? '►' : '◄'}</span>
        </div>

      </div>
    );
  }
}

export default Project;
