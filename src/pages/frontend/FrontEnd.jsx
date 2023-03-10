import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
  { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
  { id: 3, title: "Item 3", subtitle: "Subtitle 3" },
  { id: 4, title: "Item 4", subtitle: "Subtitle 4" }
];

const FrontEnd = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container_main">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
            <motion.h2>{items[selectedId - 1].title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FrontEnd;