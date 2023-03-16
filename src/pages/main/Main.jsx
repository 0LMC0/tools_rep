import React, { useRef } from 'react'
import '../../assets/styles/main/main.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCursorClick } from 'react-icons/hi'
import Typewriter from 'typewriter-effect';
import arrowDown from '../../assets/img/arrow-main.png'




const Main = () => {
  const parentRef = useRef();


  const examples = [
    {
      id: 1,
      content: (
        <motion.div
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} 
          className='box glassMorphism'
          drag
          dragConstraints={parentRef}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2, rotate: 5, zIndex: 9999}}
          dragElastic={0.5}>
        <p>Glass<br />Morphism</p>
        <Link to='/frontend-tools/glassmorphism' className='button-box'>¡Vamos!</Link>
        </motion.div>
      )
    },
    {
      id: 2,
      content: (
        <motion.div
          initial={{ opacity: 0, x:50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} 
          className='box colorPallete'
          drag
          whileHover={{ scale: 1.1 }}
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5, zIndex: 9999}}
          dragElastic={0.5}
          >
      <p>Generador de paletas de colores</p>
      <Link to='/frontend-tools' className='button-box'>¡Ver Mas!</Link>
      </motion.div>
      )
    },
    {
      id: 3,
      content: (
        <motion.div
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className='box shadowGenerator'
          drag
          dragConstraints={parentRef}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2, rotate: 5, zIndex: 9999}}
          dragElastic={0.5}
          style={{
            zIndex: '99',
            position: 'absolute',

          }}
          >
      <p>Generador de Sombras</p>
      <Link to='/frontend-tools' className='button-box'>¡Comenzar!</Link>
      </motion.div>
      )
    },
    {
      id: 4,
      content: (
        <motion.div
          className='box text-editor'
          drag
          initial={{ opacity: 0, y:-50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          whileHover={{ scale: 1.1 }}
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5, zIndex: 9999}}
          dragElastic={0.5}
          style={{
            zIndex: '99',
            position: 'absolute',
            top: '20%',
            right: '5%'
          }}
          >
      <p className='text-editor-text'>
      <Typewriter
        options={{
          strings: ['Editor De Texto'],
          autoStart: true,
          loop: true,
        }}
      />
      </p>
      <Link to='/frontend-tools' className='button-box'>¡Visitar!</Link>
      </motion.div>
      )
    },
    {
      id:5,
      content:(
          <fieldset className='text-box text-box-left'>
            <legend>Historia</legend>
            <h2>Como surgio la idea?</h2>
            <p>Nos dimos cuenta de que había un problema en nuestro proceso de desarrollo: estábamos utilizando múltiples herramientas en diferentes sitios, lo que dificultaba la eficiencia y la colaboración en equipo. Para solucionar esto, implementamos una solución integrada que nos permite trabajar en un solo lugar y tener acceso a todas las herramientas que necesitamos. ¡Ahora podemos desarrollar con mayor eficiencia y trabajar juntos en un entorno más colaborativo!</p>
          </fieldset>
      )
    }
  ]


  return (
    <div className='container' ref={parentRef}>
        {examples.map((example) => {
          return <div key={example.id}>{example.content}</div>
        })}
      <motion.div 
        initial={{ opacity: 0, y:-50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}      
        className='main-text'
        drag
        whileHover={{ scale: 1.01 }}
        dragSnapToOrigin={true}
          dragConstraints={parentRef}
        >
        <fieldset>
          <legend>Arrastrar y Soltar</legend>
          <h1>Herramientas Indispensables para Desarrolladores web. Completamente <span>GRATIS</span>.</h1>
        </fieldset>
      </motion.div>
        <img className='arrow' src={arrowDown} alt="arrow" />
        <motion.div 
          className='button-main'
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          >
          <Link to='/herramientas' className='link-button-main'> <HiCursorClick className='icon' /> Chequea nuestras herramientas</Link>
        </motion.div>
    </div>
  )
}

export default Main