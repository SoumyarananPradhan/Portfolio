import { Mail, MapPin, Phone } from 'lucide-react';
import { userData } from '../data/user';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mt-4">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-center">
            
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={userData.socials.email} className="text-gray-600 hover:text-indigo-600">
                soumyaranjanaman54@gmail.com
              </a>
            </div>

            <div className="hidden md:block w-px h-32 bg-gray-200"></div>

            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Hyderabad, Telangana, India</p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              href={userData.socials.email} 
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;