import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
// styles
import '../../../assets/styles/tools/stockImg/stockImg.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StockImg = () => {

  // busqueda
  const [Search, setSearch] = useState('');
  // resultados por pagina
  const [PerPage, setPerPage] = useState('10');
  // array de resultados
  const [Results, setResults] = useState([]);

  console.log(Results)

  const handleChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  }

  const noOfPics = (event) => {
    const perPage = event.target.value;
    setPerPage(perPage);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://api.pexels.com/v1/search?query=" + Search + "&per_page=" + PerPage; 
    const accessToken = 'kXEbhc39hxtzf1D81yx6jM5MPup552itXKyIeymaJwIyEZxnPSIJfXnT';
    // llamada a la API
    axios.get(url, {  
      headers: {  
          'Authorization': `${accessToken}`  
      }  
      }).then(data => { setResults(data.data.photos); })
  }

  

  return (
      <div className="tool-container">
        <div className="stockImg-container"> 
          <form className='form-stockImg' onSubmit={handleSubmit}>

            <motion.h2 
                            className='title-tool'
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                        >
                            FreeStockImg <br />
                        <span className='name-logo'>Imagenes de stock gratuitas.</span>
            </motion.h2>
            
            <div className='searchbar-img'>
                <input 
                  type="text"
                  onChange={handleChange}
                  className='input-search-img'
                  placeholder='Buscar imagenes...'
                  required
                  />
                <input 
                  type="number"
                  onChange={noOfPics}
                  name="deliveryNumber"
                  placeholder='Cantidad de imagenes...'
                  className='input-number-of-img'
                  required
                  />
                  <motion.input
                    whileHover={{scale:1.01}}
                    whileTap={{scale:0.99}} 
                    type="submit"
                    value='Buscar'
                    className="search-btn"
                  />  
              </div>

              <div className="images-container-stockImg">
                <Swiper className="img-container"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={120}
                  slidesPerView={3}
                  loop={true}
                  scrollbar={{ draggable: true }}>
                  {Results.length === 0 ?
                    <p>No se encontraron resultados, intenta con otra palabra.</p> 
                      : 
                    Results.map(search => (                                           
                      <SwiperSlide><img className='img-stock' src={search.src.landscape} alt={search.photographer} /></SwiperSlide>
                      ))}    
                      </Swiper>
              </div>
          </form>
        </div>
      </div>
  )
}

export default StockImg