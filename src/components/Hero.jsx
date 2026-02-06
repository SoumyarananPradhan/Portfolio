import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { userData } from '../data/user';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* WE USE motion.div HERE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="text-center md:text-left"
        >
          {/* WE USE motion.h2 HERE */}
          <motion.h2 variants={fadeInUp} className="text-xl text-indigo-600 font-semibold mb-2">
            Hi, I'm
          </motion.h2>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {userData.name}
          </motion.h1>
          
          <motion.h3 variants={fadeInUp} className="text-2xl text-gray-600 mb-6 font-medium">
            {userData.role}
          </motion.h3>
          
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {userData.heroTagline}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30"
            >
              Let's Talk <ArrowRight size={20} />
            </a>
            
            <a 
              href={userData.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium flex items-center justify-center gap-2 hover:border-indigo-600 hover:text-indigo-600 transition"
            >
              Resume <FileText size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* WE USE motion.div HERE TOO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -bottom-4 right-10"></div>
          
          <img 
            src="/profile-pic.jpg" 
            alt={userData.name}
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;