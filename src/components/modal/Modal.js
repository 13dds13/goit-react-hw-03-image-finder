import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  onKeyDownEsc = (e) => {
    this.props.onModalClosing(e);
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDownEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDownEsc);
  }

  render() {
    const { largeImageURL, tags } = this.props.image;
    return (
      <div className="Overlay" onClick={this.props.onModalClosing}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClosing: PropTypes.func,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default Modal;
