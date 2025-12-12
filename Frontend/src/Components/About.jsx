import React from 'react'
import {motion,useInView} from 'framer-motion';
import {  useRef} from "react";
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const objectives = [
  {
    icon: '🌐',
    title: 'Digital Access to Events',
    description: 'Enable students to discover, register, or host college events with just a few clicks—bringing campus life online.',
  },
  {
    icon: '🤝',
    title: 'Student Engagement',
    description: 'Foster unity by connecting clubs, volunteers, and organizers across departments and interests.',
  },
  {
    icon: '📍',
    title: 'Location-Based Discovery',
    description: 'Find nearby events, view schedules, and get directions—making participation effortless.',
  },
  {
    icon: '📸',
    title: 'Campus Showcase',
    description: 'Highlight performances, competitions, and student creativity through photos, videos, and shared content.',
  },
  {
    icon: '📊',
    title: 'Impact Tracking',
    description: 'Visualize attendance, feedback, and reach of each event to measure success and improve future planning.',
  },
  {
    icon: '🛠️',
    title: 'Organizer Tools',
    description: 'Provide intuitive dashboards for event scheduling, volunteer coordination, and resource management.',
  },
];

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}>
       <section className="bg-gradient-to-t from-yellow-500 to-orange-200 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-4">About Campus Connect</h2>
        <p className="text-lg text-gray-700 mb-10">
        Our portal is a dynamic digital platform designed to connect students, clubs, and organizers through events, creativity, and collaboration. Our mission is to make planning, hosting, and participating in college activities effortless, inclusive, and joyful—strengthening campus culture while fostering unity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {objectives.map((obj, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-3xl mb-4 text-orange-600">{obj.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{obj.title}</h3>
            <p className="text-gray-600">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>

    </motion.div>
  )
}

export default About
