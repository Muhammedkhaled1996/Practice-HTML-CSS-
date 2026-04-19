"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative font-playfair bg-[url('/images/fotter_image.png')] bg-cover bg-center bg-no-repeat text-white pt-24 pb-16 font-playfair">
      {/* Dark overlay to match the coffee background design */}
      <div className="absolute z-0 inset-0 bg-coffee/90"></div>
      
      <div className="container relative z-10 px-6 md:px-16 grid md:grid-cols-4 gap-10 md:gap-16">
        {/* Column 1: Brand */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-[54px] font-bold font-clicker">Bean Scene</h2>
          <p className="text-[14px] leading-relaxed text-white/80 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/30 hover:bg-main-gold hover:border-main-gold hover:text-black transition-colors">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/30 hover:bg-main-gold hover:border-main-gold hover:text-black transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/30 hover:bg-main-gold hover:border-main-gold hover:text-black transition-colors">
              <FaYoutube size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/30 hover:bg-main-gold hover:border-main-gold hover:text-black transition-colors">
              <FaTwitter size={16} />
            </a>
          </div>
        </motion.div>

        {/* Column 2: About */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:pl-4"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">About</h3>
          <ul className="flex flex-col gap-4 text-white/80 text-[18px] font-sans">
            <li><a href="#menu" className="hover:text-main-gold active:text-main-gold transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-main-gold active:text-main-gold transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">News & Blogs</a></li>
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">Help & Supports</a></li>
          </ul>
        </motion.div>

        {/* Column 3: Company */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">Company</h3>
          <ul className="flex flex-col gap-4 text-white/80 text-[18px] font-sans">
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">How we work</a></li>
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">Terms of service</a></li>
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-main-gold active:text-main-gold transition-colors">FAQ</a></li>
          </ul>
        </motion.div>

        {/* Column 4: Contact Us */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-white/80 text-[18px] font-sans leading-relaxed">
            <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
            <li><a href="tel:+12029182132" className="hover:text-main-gold transition-colors">+1 202-918-2132</a></li>
            <li><a href="mailto:beanscene@mail.com" className="hover:text-main-gold transition-colors">beanscene@mail.com</a></li>
            <li><a href="https://www.beanscene.com" className="hover:text-main-gold transition-colors">www.beanscene.com</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}