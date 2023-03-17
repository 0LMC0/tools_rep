import React, { useState } from 'react'
import { motion } from 'framer-motion';
import chroma from 'chroma-js';
import '../../../assets/styles/tools/gradientGenerator/gradientGenerator.css'
// reacticons
import {CgRadioChecked} from 'react-icons/cg'
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from 'react-icons/ai'
import {BsArrowDownLeft, BsArrowDownRight, BsArrowUpLeft, BsArrowUpRight} from 'react-icons/bs'


const GradientGenerator = () => {

    const [gradientStyles, setGradientStyles] = useState('linear')
    const [gradientDirection, setGradientDirection] = useState('')

    const generateColors = (startColor, endColor, colorCount, colorScale) => {
        return chroma.scale([startColor, endColor])
            .mode(colorScale)
            .colors(colorCount);
        };

    const [gradientData, setGradientData] = useState({
        startColor: "#FF0000",
        endColor: "#000000",
        numColors: 5,
        colorScale: gradientStyles
    });

    const colors = generateColors(gradientData.startColor, gradientData.endColor, gradientData.colorCount, gradientData.colorScale);

    
    return (
        <div className='tool-container'>
            <div className="gradient-container">
                <div className='content-left'>
                    {/* <span>click aca para cambiar el color! ''flecha</span> */}
                    <motion.h2 
                        className='title-tool'
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                    >
                        GradientGenerator
                        <hr />
                    <span className='name-logo'>By Practienda</span>
                    </motion.h2>
                    
                    <div className='color-display-gradient'>
                        <div className="color-display-item">
                            <input id='startColor' className='input-color' type="color" value={gradientData.startColor} onChange={(e) => setGradientData({ ...gradientData, startColor: e.target.value })} />
                            <div className='info-display-box'>
                                <label className='label-gradient' htmlFor='startColor'>Desde:</label> 
                                <span className='color-text'>{gradientData.startColor}</span>
                            </div>
                        </div>

                        <div className="color-display-item">
                            <input id='endColor' className='input-color' type="color" value={gradientData.endColor} onChange={(e) => setGradientData({ ...gradientData, endColor: e.target.value })} />
                            <div className="info-display-box">
                                <label className='label-gradient' htmlFor='endColor'>Hasta:</label>
                                <span className='color-text'>{gradientData.endColor}</span>
                            </div>
                        </div>
                    </div>

                    <div className='controls-gradient'>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('radial'); setGradientDirection(''); }}><CgRadioChecked className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('to bottom,')}}><AiOutlineArrowDown className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('to top,')}}><AiOutlineArrowUp className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('to left,')}}><AiOutlineArrowLeft className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('to right,')}}><AiOutlineArrowRight className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('45deg,')}}><BsArrowUpRight className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('-45deg,')}}><BsArrowUpLeft className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('125deg,')}}><BsArrowDownRight className='icon-control-gradient' /></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} className='button-control-gradient' onClick={() => { setGradientStyles('linear');setGradientDirection('-125deg,')}}><BsArrowDownLeft className='icon-control-gradient' /></motion.span>
                    </div>
                    </div>
                    <div className='content-right'>
                        <div className='box-gradient' style={{ background: `${gradientStyles}-gradient(${gradientDirection} ${colors.join(', ')})`}}></div>
                    </div>
            </div>
        </div>

    )
}

export default GradientGenerator