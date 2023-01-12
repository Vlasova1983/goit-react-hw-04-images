
import { Component } from 'react';
import styles  from '../Searchbar/Searchbar.module.css';
import { PropTypes } from 'prop-types';

export class  Searchbar extends Component  {
    state = {
        value:'',    
    }

    handleChange = event => {    
        const { value } = event.target;
        this.setState({ value: value });          
    };

    handleSubmit = event =>{ 
        event.preventDefault();             
        const { value} = this.state;        
        this.props.onSubmit({value});
        this.setState({ value: ''});
    };

    render(){
        const {value}=this.state;
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
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
                        onChange={this.handleChange} 
                    />
                </form>
            </header>  
        );
    }
    
}
    
Searchbar.propTypes = {     
    onSubmit:PropTypes.func.isRequired,    
  }

