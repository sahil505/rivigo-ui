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
          {this.props.children}
          <div className="modalFooter">
            <button onClick={this.onClose.bind(this)}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
