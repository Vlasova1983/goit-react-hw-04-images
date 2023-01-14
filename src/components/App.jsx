import {useState,useEffect} from "react";
import { Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import styles  from './App.module.css';
import axios from 'axios';
import Notiflix from 'notiflix';

export const App  =()=> {  
  console.log('App');
  const [images,setIsImages] = useState([]);   
  const [value,setIsValue] = useState('');
  const [page,setIsPage] = useState(1);
  const [isLoading,setIsLoader] = useState(false);
  const [isLoadMore,setIsLoadMore] = useState(false); 

  useEffect(()=> {
    if(value!=='' || page!==1) {
      setIsLoader(true);
      setIsLoadMore(true);      
      fetchData({value}, page);   
    }             
  },[value,page]);

  const fetchData = async ({value}, page) => {   
    try {
      const response= await axios.get(`https://pixabay.com/api/?key=31294159-be9d27b57dbd5b4db758a00af&q=${value}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
      const images = response.data.hits;      
      setIsImages([...images,...images]);                      
    }
    catch (error) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
    finally{
      setIsLoader(false);    
    }        
  }; 
  
  const handleSubmit = async ({value})=>{    
    setIsValue(value)
    setIsPage(1);
    setIsImages([]);
  };  
      
  return (
    <div className={styles.App}> 
      <Searchbar  onSubmit={handleSubmit}/>
      <ImageGallery  images={images}/>        
      {isLoading && <Loader/>}
      {isLoadMore && <Button onClick={()=>setIsPage(prev => prev +1)}/>}            
    </div> 
  );   
};
