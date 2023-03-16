import React from 'react'
import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import swal from 'sweetalert';

const Color = ({color}) => {
    return (
        <CopyToClipboard text={`${color.hex}`}>

        <motion.div             
            onClick={() => swal({
                title: `Copiaste ${color.hex}!`,
                text: "Pegalo en tu CSS!",
                icon: "success",
                button: "Seguir Explorando!",
            })}
            className="color-container"                 
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }} >
            <div
                className='box-color'
                style={{
                    backgroundColor: color.hex
                }}
                
                >
            </div>
            <p className='text-color'>{color.hex}</p>
        </motion.div>
        </CopyToClipboard>
    )
}

export default Color

