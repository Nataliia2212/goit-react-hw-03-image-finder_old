import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) => {
    return (
     <ul className={css.gallery}>
            {images.map(({id, tags, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                    srcModal={largeImageURL}
                    />
            ))}   
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        src: PropTypes.string,
        alt: PropTypes.string,
        srcModal: PropTypes.string,
    }))
}