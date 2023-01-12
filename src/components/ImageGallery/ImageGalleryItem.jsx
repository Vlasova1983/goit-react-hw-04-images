import {useState} from "react";
import { Modal } from '../Modal/Modal';
import { PropTypes } from 'prop-types';

import styles  from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem =({image})=>  {
 const [isOpen,setIsModalOpen]=useState(false);    
    return ( 
        <>
            <li className={styles.ImageGalleryItem} onClick={() => setIsModalOpen(true)}>
                <img src={image.webformatURL} alt="" className={styles.ImageGalleryItem_image} />
            </li> 
            {isOpen && (<Modal onClose={() => setIsModalOpen(false)} imageModal={image.largeImageURL}/>)}
        </> 
    )    
}

ImageGalleryItem.propTypes = { 
    images: PropTypes.shape(), 
}
