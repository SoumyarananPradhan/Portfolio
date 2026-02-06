import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { userData } from '../data/user';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          <p className="text-gray-600 mt-2">Professional achievements and learning</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {userData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-4 -bottom-4 text-indigo-100 opacity-50">
                <Award size={100} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white mb-6 shadow-md">
                  <Award size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-medium">{cert.issuer}</span>
                </div>
                
                <div className="text-sm text-gray-500 font-medium">
                   Issued: {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;