import { useState} from 'react';
import styles  from '../Searchbar/Searchbar.module.css';
import { PropTypes } from 'prop-types';

export const Searchbar =({onSubmit})=>  {
    const [value,setIsValue] = useState(''); 

    const  handleChange = event => {    
        const { value}  = event.target;       
        setIsValue(value);       
    };

    const handleSubmit = event =>{ 
        event.preventDefault();
        onSubmit({value});
        setIsValue('');
    };    
        
    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}>Search</span>
                </button>

                <input
                    className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={value}
                    placeholder="Search images and photos"
                    onChange={handleChange} 
                />
            </form>
        </header>  
    );   
}
    
Searchbar.propTypes = {     
    onSubmit:PropTypes.func.isRequired,    
  }

