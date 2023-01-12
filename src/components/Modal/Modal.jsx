import styles  from '../Modal/Modal.module.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

export const Modal =({imageModal,onClose})=> {
  useEffect(()=>{
    const handleKeyClose = event => {   
    if (event.code === 'Escape') {
      onClose();
    }
  };
  
  window.addEventListener('keydown', handleKeyClose);
  return ()=>{
    window.removeEventListener('keydown', handleKeyClose);
  }
 }, [onClose]) 

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
    
  return ( 
    <>
      <div className={styles.Backdrop}/>     
      <div className={styles.Overlay} onClick={handleClose}>
        <div className={styles.Modal}>                  
          <img src={imageModal} alt="" />
        </div>
      </div>      
    </>                      
  );  
}

Modal.propTypes = { 
  imageModal: PropTypes.string.isRequired,
  onClose:PropTypes.func.isRequired,    
}