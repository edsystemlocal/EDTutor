// components/Footer.js
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
      <div className="bg-gray-900 text-gray-300 py-10 px-3 my-auto">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
            <p className="text-sm">
              We provide cutting-edge solutions in engineering drawing and design,
              ensuring precision and innovation for your projects. Explore our resources
              to take your designs to the next level.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#services" className="hover:text-blue-400">Our Services</a>
              </li>
              <li className="mb-2">
                <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-blue-400">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="hover:text-blue-400">FAQ</a>
              </li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <i className="fas fa-phone-alt text-blue-400"></i> +1 234 567 890
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope text-blue-400"></i> astrtechsolutions03@gmail.com
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i> 123 Main Street,
             Khargone City
              </li>
            </ul>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest updates on engineering tools, tutorials, and tips directly
              to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>
  
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm">
            © 2024 <span className="font-semibold text-white">EngDraw</span>. All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
  