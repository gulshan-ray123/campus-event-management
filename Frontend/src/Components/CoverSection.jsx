import React from 'react'
import { motion } from 'framer-motion';

function CoverSection() {
  const text = "Join Us In Creating Events, Spreading Joy";

  return (
    <div>
      <motion.div initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}

 className="bg-[url('./src/college_event.png')] md:bg-contain bg-center h-[620px] w-full bg-cover">
      <span className='flex absolute top-[50%] md:w-1/2 w-full ml-4'><motion.h1    initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
 className='text-4xl md:text-5xl font-extrabold bottom-28 font-stretch-expanded tracking-wide md:tracking-wider text-white merriweather ml-3 md:ml-0 relative md:bottom-[250px] lg:top-0  '>Celebrate & Unite</motion.h1>
 <motion.span  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, delay:5 }}
 className='absolute  md:top-[-120px] lg:top-24'>
    <button className="bg-orange-500 text-white px-4 py-2  hover:bg-orange-600 hover:border-yellow-300 hover:border-2 transition w-36 p-5 rounded-lg">
            Explore Events
            </button>
            <button className="bg-white border border-orange-500 md:top-[-120px] lg:top-24 text-orange-500 px-4 py-2 rounded hover:bg-orange-100 transition md:ml-20 w-48 p-5 hover:border-b-red-600 hover:border-2 mr-10 mt-5 ml-6">
            Become a Voulenteer
            </button>
</motion.span>
     <motion.div
    className="text-[15px] md:text-3xl text-white italic absolute  bottom-20  ml-3 md:ml-0 lg:top-14"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
</span>
</motion.div>

    </div>
  )
}

export default CoverSection
