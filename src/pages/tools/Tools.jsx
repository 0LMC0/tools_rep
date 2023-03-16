import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {IoIosCloseCircle} from 'react-icons/io'
import Glassmorphism from './glassmorphism/Glassmorphism';
import ColorSelector from './colorSelector/ColorSelector';
import TextEditor from './textEditor/TextEditor';
import FindIMG from './findIMG/FindIMG';
import ShadowGenerator from './shadowGenerator/ShadowGenerator';
import WebScroll from './webscroll/WebScroll';
import Neuromorphism from './neuromorphism/Neuromorphism';

import '../../assets/styles/tools/tools.css'
import GradientGenerator from './gradientGenerator/GradientGenerator';


const Tools = () => {
  const [selectedId, setSelectedId] = useState(null);

  const toolsList = [
    {
      id: 1,
      title: 'GlassMorphism', 
      subtitle: 'Translúcido, Borde, Sombra.', 
      class: 'card',
      content: <Glassmorphism />
    },
    { id: 2,
      title: 'PaletteImage', 
      class: 'card card-2',
      subtitle: 'Extracción de colores de una imagen.', 
      content : <ColorSelector />
    },
    { id: 3,
      title: 'GradientGenerator', 
      class: 'card',
      subtitle: 'Crea gradientes únicos', 
      content : <GradientGenerator />
    },
    { id: 4,
      title: 'Editor de texto', 
      class: 'card',
      subtitle: 'Edición fácil y rápida.', 
      content : <TextEditor />
    },
    { id: 5,
      title: 'Encuentra la Imagen!', 
      class: 'card',
      subtitle: 'Banco de imagenes gratuito.', 
      content : <FindIMG />
    },
    { id: 6,
      title: 'WebScroll',
      class: 'card card-2',
      subtitle: 'Genera un Webscroll rapido.', 
      content : <WebScroll />
    },
    { id: 7,
      title: 'Shadow', 
      class: 'card',
      subtitle: 'Creación de efectos sombreados', 
      content : <ShadowGenerator />
    },
    { id: 8,
      title: 'NeuroMorphism', 
      class: 'card card-2',
      subtitle: 'Profundidad y volumen', 
      content : <Neuromorphism />
    },
    { id: 9,
      title: 'Generador de z', 
      class: 'card',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },
    { id: 10,
      title: 'Generador de z', 
      class: 'card card-2',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },
    { id:11,
      title: 'Generador de z', 
      class: 'card',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },
    { id: 12,
      title: 'Generador de z', 
      class: 'card',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },
    { id: 13,
      title: 'Generador de z', 
      class: 'card',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },
    { id: 14,
      title: 'Generador de z', 
      class: 'card card-2',
      subtitle: 'zz', 
      content : <Neuromorphism />
    },

  ]; 

  return (
    <div className="grid-container">
      {toolsList.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className={item.class}
          onClick={() => setSelectedId(item.id)}
        >
          <h2>{item.title}</h2>
          <h5>{item.subtitle}</h5>
        </motion.div>
      ))}
      <AnimatePresence >
        {selectedId && (
          <motion.div
            key="modal"
            layoutId={selectedId}
            className="modal"
          >
            <motion.div className="modal-content">
              <button onClick={() => setSelectedId(null)}><IoIosCloseCircle /></button>
              {toolsList.find((item) => item.id === selectedId).content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tools;