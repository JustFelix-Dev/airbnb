import React from 'react'
import { motion } from 'framer-motion';

const Loader = () => {
  return (
      <>
        <div className='h-[80vh] w-full flex items-center justify-center'>
            <motion.div initial={{rotate:0,scale:0.4}} animate={{rotate:'360deg',scale:1}} transition={{duration:2, repeat:'infinity',repeatType:'loop'}}>
             <img src="/images/airbnb.png" alt="loader" height={100} width={100} />
            </motion.div>
        </div>
      </>
  )
}

export default Loader
