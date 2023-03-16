import React, { useState } from 'react'
import { motion } from 'framer-motion';
import chroma from 'chroma-js';


const GradientGenerator = () => {

    const [gradientStyles, setGradientStyles] = useState('linear')
    const [gradientDirection, setGradientDirection] = useState('')

    const generateColors = (startColor, endColor, colorCount, colorScale) => {
        return chroma.scale([startColor, endColor])
            .mode(colorScale)
            .colors(colorCount);
        };

    const [gradientData, setGradientData] = useState({
        startColor: "#ffffff",
        endColor: "#000000",
        numColors: 5,
        colorScale: gradientStyles
    });

    const colors = generateColors(gradientData.startColor, gradientData.endColor, gradientData.colorCount, gradientData.colorScale);

    
    return (
        <div className='tool-container' style={{color: '#fff',background: `${gradientStyles}-gradient(${gradientDirection} ${colors.join(', ')})`}}>
                <motion.h2 
                    className='title-tool'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                >
                    Extractor de paleta de colores sobre imagen
                    <hr />
                <span className='name-logo'>By Practienda</span>
                </motion.h2>
            <div>
            <label htmlFor='startColor'>Desde:</label>
            <input id='startColor' className='input-color' type="color" value={gradientData.startColor} onChange={(e) => setGradientData({ ...gradientData, startColor: e.target.value })} />

            <label htmlFor='endColor'>Hasta:</label>
            <input id='endColor' className='input-color' type="color" value={gradientData.endColor} onChange={(e) => setGradientData({ ...gradientData, endColor: e.target.value })} />

            </div>
            <div className='controls-gradient'>
                <span onClick={() => { setGradientStyles('radial'); setGradientDirection(''); }}>Radial</span>
                <hr />
                <span onClick={() => { setGradientStyles('linear');setGradientDirection('to bottom,')}}>down</span>
                <span onClick={() => { setGradientStyles('linear');setGradientDirection('to left,')}}>left</span>
                <span onClick={() => { setGradientStyles('linear');setGradientDirection('45deg,')}}>45%</span>
                <span onClick={() => { setGradientStyles('linear');setGradientDirection('-45deg,')}}>-45%</span>
            </div>
        </div>
    )
}

export default GradientGenerator