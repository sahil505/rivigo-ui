import React, { Component } from 'react';

class Modal extends Component {
  onClose(e){
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <div className="modalContent">
            <div className="modalHeader">
              <span className="close-btn" onClick={this.onClose.bind(this)}>x</span>
              <h2 className="modalHeading">Manage Team</h2>
            </div>
            <div className="modalBody">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
