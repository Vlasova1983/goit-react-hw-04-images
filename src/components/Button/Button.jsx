import styles  from '../Button/Button.module.css';
import { PropTypes } from 'prop-types';

export const Button = ({onClick}) => { 
    return (
        <button type="submit" className={styles.Button} onClick={onClick}>
          <span >Load more</span>
        </button>        
    )
}

Button.propTypes = { 
    onClick:PropTypes.func.isRequired,    
}