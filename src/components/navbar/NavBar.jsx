import React, { useState } from 'react'
import '../../assets/styles/navbar/navbar.css';
import {MdNavigateNext} from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const NavBar = () => {

    // to know if its hovering
    const [IsHovering, setIsHovering] = useState(false);
    // wich element is hovering
    const [hoveredItemId, setHoveredItemId] = useState(null);
  
    const handleMouseOver = (itemId) => {
      setIsHovering(true);
      setHoveredItemId(itemId);
    }
  
    const handleMouseOut = () => {
      setIsHovering(false);
      setHoveredItemId(null);
    }

  const navElements = [
    {id:1,
      tabName: 'Inicio',
      linkUrl: '/'
    },
    {
      id:2,
      tabName: 'Herramientas',
      linkUrl: '/herramientas',
      content: (
        <motion.div className='navHoverElement' 
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={handleMouseOut}
        initial={{ opacity: 0 }}
        animate={{ opacity: IsHovering && hoveredItemId === 1 ? 1 : 0 }}
        >
          <ul className='listHover'>
            <li><MdNavigateNext className='icon-list' />Kanban - Grabable List</li>
            <li><MdNavigateNext className='icon-list' />Color Finder</li>
            <li><MdNavigateNext className='icon-list' />Find IMG Source</li>
            <li><MdNavigateNext className='icon-list' />Glassmorphism and Shadow Generator</li>
          </ul>
        </motion.div>
      )
    },
    {id:3,
      tabName: 'Iniciar Sesion',
      linkUrl: '/login',
      content: (
          <motion.div 
            className='navHoverElement'
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={handleMouseOut}
          initial={{ opacity: 0 }}
          animate={{ opacity: IsHovering && hoveredItemId === 3 ? 3 : 0 }}
          >
          <h2>Hovered Div 4</h2>
          <p>This is the content for Div 3</p>
        </motion.div>
      )
    }
  ]

  return(
    <>
    <div className='navbar'>
        <div className='title'>
          <Link className='titleLogo' to='/'>
          <motion.h2 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }} 
            >Developer <br /> <span className='tools'>Tools</span>
            <hr />
            <span className='practienda'>By Practienda</span>
            </motion.h2>
            </Link>
        </div>
        <ul className='list-nav'>
              {navElements.map((listItem) => 
                <motion.li className='item-nav' key={listItem.id}  onMouseOver={() => handleMouseOver(listItem.id)} onMouseOut={handleMouseOut}>
                    <MdNavigateNext className='icon' />
                    <Link to={listItem.linkUrl} className='name-list-nav'>{listItem.tabName}</Link>
                  {hoveredItemId === listItem.id && <p>{listItem.content}</p>}
                </motion.li>
                
              )}

        </ul>
    </div>
    <hr />
  </>
  )
}

export default NavBar