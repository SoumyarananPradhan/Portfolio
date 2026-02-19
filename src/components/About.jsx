import { motion } from 'framer-motion';
import { userData } from '../data/user';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* FIX: Use motion.div */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-xl transform rotate-3 opacity-10"></div>
            <img 
              src="/about-me.jpeg" 
              alt="About Me" 
              className="relative rounded-xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {userData.summary}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I am passionate about solving complex problems through clean code and efficient algorithms. 
              My journey involves constant learning and applying new technologies to real-world scenarios.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;