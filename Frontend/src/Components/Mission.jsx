import React from 'react'
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

function Mission() {
      const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const missions = [
  {
    title: 'Engage the Campus',
    description: 'Designing events that bring students together, ensuring everyone feels included and involved.',
    icon: '🎉', // Replace with SVG/icon
  },
  {
    title: 'Creative Spaces',
    description: 'Providing platforms for students to showcase talent, collaborate, and innovate through events.',
    icon: '🎨',
  },
  {
    title: 'Support Local Talent',
    description: 'Empowering student clubs, artists, and entrepreneurs by featuring them in campus events.',
    icon: '🌟',
  },
  {
    title: 'Build Connections',
    description: 'Fostering friendships and networks through interactive activities, workshops, and celebrations.',
    icon: '🤝',
  },
];

  return (
    <motion.div  ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8  }}
>
       <section className="py-12 bg-gradient-to-b from-yellow-500 to-orange-200" id='mission'>
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Our Mission
      </h2>

      <motion.div   ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay:1 }} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:bg-orange-400 hover:border-2 hover:border-yellow-300"
          >
            <div className="text-5xl mb-4">{mission.icon}</div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              {mission.title}
            </h3>
            <p className="text-gray-600 text-sm">{mission.description}</p>
          </div>
        ))}
      </motion.div>
    </section>

    </motion.div>
  )
}

export default Mission
