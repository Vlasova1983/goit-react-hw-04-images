import {ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles  from '../ImageGallery/ImageGallery.module.css';
import { PropTypes } from 'prop-types';



export const ImageGallery = ({images}) => {     

    return (  
        <ul className={styles.ImageGallery}>              
            {images.map((image)=>(                 
                <ImageGalleryItem key={image.id} image={image}/> 
            ))}   
        </ul>         
    );
}  
   
ImageGallery.propTypes = { 
    images: PropTypes.arrayOf( PropTypes.shape()), 
}
    
  
