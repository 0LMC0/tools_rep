import { React, useEffect, useState } from 'react';
import { extractColors } from 'extract-colors'
import '../../../assets/styles/tools/colorSelector/colorSelector.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsUpload } from 'react-icons/bs'
import Color from './Color';
import { motion } from 'framer-motion';

const ColorSelector = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (imageUpload) {
      extractColors(imageUpload)
        .then((res) => setColors(Object.values(res)))
        .catch(console.error);
    }
  }, [imageUpload]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const dataURL = reader.result;
      setImageUpload(dataURL);
    };
  };

  return (
    <div className="tool-container">
      <div className="colorSelector-container" style={ imageUpload ? {justifyContent: 'space-around' } : {justifyContent: 'center'}}>

        <div className='input-colorSelector'>
          {imageUpload ? 
              <motion.label 
                for="image-upload"
                class="custom-file-upload-second"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.99 }}
                >
              Cambiar Imagen...
            </motion.label> 
            :
            <div className='container-tool-colorSelector'>
              <motion.h2 
                className='title-tool'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} 
              >
                Extractor de paleta de colores sobre imagen
                <hr />
              <span className='name-logo'>By Practienda</span>
              </motion.h2>
              
              <motion.label for="image-upload"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.99 }}
                className="custom-file-upload-first">
              <BsUpload className='icon-upload'/> Subir Imagen
              </motion.label> 
            </div>
          }
        <input
          id="image-upload"
          type="file"
          name="myImage"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleImageUpload}
        />
        </div>

        {imageUpload &&
        <div className="image-display">
            <img src={imageUpload} alt="" />
        </div>
        }

        {imageUpload && <AiOutlineArrowRight className='icon-colorSelector' /> }

        {imageUpload && 
        <div className="color-display" >
          <h2 style={{width: '100%', fontSize: '2.5rem'}}>Click en el color para copiarlo</h2>
          {colors.map((color, index) => (
            <>
              <Color key={index} color={color} /> 
            </> ))}
        </div>
        }

      </div>

    </div>
  );
};

export default ColorSelector;