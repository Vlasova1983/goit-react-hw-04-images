
import { PropTypes } from 'prop-types';


import { ImageGalleryItem } from './ImageGalleryItem'
import styles  from '../ImageGallery/ImageGallery.module.css';


export const ImageGallery = ({images}) => {  
    return (  
        <ul className={styles.ImageGallery}>              
            {images?.map((image)=>( 
                <ImageGalleryItem key={image.id} image={image}/> 
            ))}   
        </ul>         
    );
}  
   
ImageGallery.propTypes = { 
    images: PropTypes.arrayOf( PropTypes.shape()), 
}
    
  
