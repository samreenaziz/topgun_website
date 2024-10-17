import { useState } from 'react';
import { motion } from 'framer-motion';
import './CardFlip.scss';

const CardFlip = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="card-container"
      onClick={handleClick}
      style={{ perspective: 1000 }} // Add perspective to the parent element
    >
      <motion.div
        className="card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.10 }}
      >
        {/* Front Side */}
        <motion.div
          className="card-front"
        >
          {frontContent}
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="card-back"
        >
          {backContent}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
