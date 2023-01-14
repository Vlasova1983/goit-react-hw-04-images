import {useState} from "react";
import { Modal } from '../Modal/Modal';
import { PropTypes } from 'prop-types';

import styles from  '../ImageGalleryItem/ImageGalleryItem.module.css'

export const ImageGalleryItem =({image,key})=>  {
 const [isOpen,setIsModalOpen]=useState(false); 
 
//  console.log(key);
    return ( 
        <>
            <li className={styles.ImageGalleryItem} onClick={() => setIsModalOpen(true)}>
                <img src={image.webformatURL} alt="" className={styles.ImageGalleryItem_image}/>
            </li> 
            {isOpen && (<Modal onClose={() => setIsModalOpen(false)} imageModal={image.largeImageURL}/>)}
        </> 
    )    
}

ImageGalleryItem.propTypes = { 
    images: PropTypes.shape(), 
}
