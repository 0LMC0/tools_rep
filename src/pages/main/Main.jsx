import React, { useRef } from 'react'
import '../../assets/styles/main/main.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCursorClick } from 'react-icons/hi'
import Typewriter from 'typewriter-effect';




const Main = () => {
  const parentRef = useRef();


  const examples = [
    {
      id: 1,
      content: (
        <motion.div
          className='box glassMorphism'
          drag
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5 }}
          dragElastic={0.5}>
        <p>Glass<br />Morphism</p>
        </motion.div>
      )
    },
    {
      id: 2,
      content: (
        <motion.div
          className='box colorPallete'
          drag
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5 }}
          dragElastic={0.5}
          >
      <p>Generador de paletas de colores</p>
      </motion.div>
      )
    },
    {
      id: 3,
      content: (
        <motion.div
          className='box shadowGenerator'
          drag
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5 }}
          dragElastic={0.5}
          style={{
            zIndex: '99',
            position: 'absolute',

          }}
          >
      <p>Generador de Sombras</p>
      </motion.div>
      )
    },
    {
      id: 4,
      content: (
        <motion.div
          className='box text-editor'
          drag
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.2, rotate: 5 }}
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
      </motion.div>
      )
    }
  ]


  return (
    <div className='container' ref={parentRef}>
        {examples.map((example) => {
          return <div key={example.id}>{example.content}</div>
        })}
      <motion.div 
        className='main-text'
        drag
        dragSnapToOrigin={true}
          dragConstraints={{parentRef}}
        >
        <fieldset>
          <legend>Arrastrar y Soltar</legend>
          <h1>Herramientas Indispensables para Desarrolladores web. Completamente <span>GRATIS</span>.</h1>
        </fieldset>
      </motion.div>
        <motion.div 
          className='button-main'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          >
          <Link className='link-button-main'> <HiCursorClick className='icon' /> Chequea nuestras herramientas</Link>
        </motion.div>
    </div>
  )
}

export default Main