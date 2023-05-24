import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyClose)
    }

    handleKeyClose = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleClose = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose()
        }
    }

  render() {
      const {srcModal, alt} = this.props
      
      return ( 
        createPortal(<div className={css.overlay} onClick={this.handleClose}>
            <div className={css.modal}>
                <img src={srcModal} alt={alt} />
            </div>
        </div>, modalRoot) 
    )
  }
}


Modal.propTypes = {
    srcModal: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}






