import { userData } from '../data/user';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {userData.name}. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
            {/* Simple footer links */}
            <a href={userData.socials.github} className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href={userData.socials.linkedin} className="text-gray-400 hover:text-white transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;