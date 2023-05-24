import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'
import { Component } from 'react';
import { Modal } from '../Modal/Modal'

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  openModal = () => this.setState({ isModalOpen: true })
  
  closeModal =()=> this.setState({ isModalOpen: false })

  render() {
      const { src, alt, srcModal } = this.props
      const {isModalOpen} = this.state
    return (
        <li className={css.galleryItem} >
            <img src={src} alt={alt} className={css.galleryImage} onClick={this.openModal} />
            {isModalOpen && <Modal
                srcModal={srcModal}
                alt={alt}
                onClose={this.closeModal} />} 
        </li>
    )
  }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    srcModal: PropTypes.string.isRequired,
}
