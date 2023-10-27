import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
       <h1>Schedule </h1>
    </motion.div>
  );
}

export default Schedule;