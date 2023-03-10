import React from 'react'
import { motion } from 'framer-motion';
import '../../assets/styles/footer/footer.css'; 
import { RiPaypalFill } from 'react-icons/ri'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdAdsClick } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='infoPage'>
        <div className='title'>
          <motion.h2 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.03}} 
            transition={{ type: "spring", stiffness: 400 }} 
            className='titleLogo'
            >Developer <br /> 
            <span className='tools'>Tools</span> 
            <hr />
            <span className='practienda'>By Practienda</span>
            </motion.h2>
            <p className='p-underTitle'>Optimiza tu experiencia de desarrollo GRATIS con nuestras herramientas completas de front-end y back-end. Lo tenemos todo cubierto. ¡Potencia tu flujo de trabajo con nosotros hoy mismo!</p>
        </div>
      </div>

        <div className='tools-company'>
          <div className="servicios">
            <h2 className='title-tools'>Servicios</h2>
            <ul className='footer-list'>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
            </ul>
          </div>
          <div className="company">
            <h2 className='title-tools'>Compañia</h2>
            <ul className='footer-list'>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
            </ul>
          </div>
        </div>

      <div className='socials'>
        <div>
          <h2 className='title-tools'>Redes Sociales</h2>
        <ul className='list-socials'>
          <li><BsInstagram /></li>
          <li><BsLinkedin /></li>
          <li><MdAdsClick /></li>
        </ul>
        </div>
        <div>
          <a className='donate-button' href="#" target='_blank' rel='noreferrer'><RiPaypalFill className='icon' /> Donate Now</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer