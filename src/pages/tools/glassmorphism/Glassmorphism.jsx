import React, { useState } from 'react'
import '../../../assets/styles/tools/glassmorphism/glassmorphism.css'
import BoxContainer from './BoxContainer';
// materialui
import { Slider } from '@mui/material'
import { SketchPicker } from 'react-color';
// react icons
import {AiFillCopy} from 'react-icons/ai'
// ctc
import {CopyToClipboard} from 'react-copy-to-clipboard';
// sweetalert
import swal from 'sweetalert';
import { motion } from 'framer-motion';



const Glassmorphism = () => {

  const [blur, setBlur] = useState(10);
  const [borderRadius, setborderRadius] = useState(20);
  const [color, setColor] = useState({r: 0, g: 0, b: 0 , a: 0.5})

  return (
    <div className='tool-container'>
      <div className="glass-controls">
        <motion.h2 
            className='title'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }} 
            >GlassMorphism
            <hr />
            <span className='name-logo'>By Practienda</span>
            </motion.h2>
        <div className="glass-control">
          Blur: {" "}
          <Slider style={{ width: 200, marginLeft: 20, marginRight: 20 }} value={blur} onChange={(e, value) => setBlur(value)}/>{" "}
          <input type="text" style={{width: 50}} value={blur} />
        </div>
        <div className="glass-control">
          Border Radius: {" "}
          <Slider style={{ width: 200, marginLeft: 20, marginRight: 20 }} value={borderRadius} onChange={(e, value) => setborderRadius(value)}/>{" "}
          <input type="text" style={{width: 50}} value={borderRadius} />
        </div>
        <div className="glass-control">
          <SketchPicker color={color} onChangeComplete={(x) => setColor(x.rgb)}  />
        </div>
          <CopyToClipboard text={`backdrop-filter: blur(${blur}px;) \n-webkit-backdrop-filter: blur(${blur}px);\n-moz-backdrop-filter : blur(${blur}px);\nborder-radius: ${borderRadius}px;\nbackground-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`}>
          <motion.h3 
            className='copy-text'
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => swal({
              title: "Efecto Copiado!",
              text: "Pegalo en tu CSS!",
              icon: "success",
              button: "Seguir Explorando!",
            })}
              >Copiar 
              <AiFillCopy style={{position: 'relative', top: '5px'}} />
            </motion.h3>
          </CopyToClipboard>
          <textarea className='code-glass' value={`backdrop-filter: blur(${blur}px;) \n-webkit-backdrop-filter: blur(${blur}px);\n-moz-backdrop-filter : blur(${blur}px);\nborder-radius: ${borderRadius}px;\nbackground-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`}></textarea>
      </div>
      <BoxContainer blur={blur} borderRadius={borderRadius} color={color}/>
    </div>
  )
}

export default Glassmorphism