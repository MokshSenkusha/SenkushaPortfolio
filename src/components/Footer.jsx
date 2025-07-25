import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="bg-purple-600/85 text-white text-sm py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Column 1: Company */}
<div className="flex flex-col min-w-[150px] mb-5 gap-2">
  <h4 className="text-[#AFCBDB] mb-2">COMPANY</h4>
  <Link to="/">Home</Link>
  <Link to="/service/data-consulting">Services</Link> {/* Default or overview */}
  <Link to="/contact">Contact</Link>
</div>

{/* Column 2: Programs */}
<div className="flex flex-col min-w-[150px] mb-5 gap-2">
  <h4 className="text-[#AFCBDB] mb-2">SERVICES</h4>
  <Link to="/service/data-consulting">Data Consulting</Link>
  <Link to="/service/ai-integration">AI Integration</Link>
  <Link to="/service/cloud-migration">Cloud Migration</Link>
</div>


        {/* Column 3: Resources */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">RESOURCES</h4>
          <Link to="/blogs">Blogs</Link>
          <Link to="/success">Success Stories</Link>
          <Link to="/events">Events</Link>
        </div>

        {/* Column 4: Products */}
<div className="flex flex-col min-w-[150px] mb-5 gap-2">
  <h4 className="text-[#AFCBDB] mb-2">PRODUCTS</h4>
  <Link to="/product/datagpt">DataGPT</Link>
  <Link to="/product/nutrigen">Nutrigen</Link>
  <Link to="/product/resume-analyzer">Resume Analyzer</Link>
</div>


        {/* Column 5: Connect */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">CONNECT WITH US</h4>
          <Link to="/whatsapp">WhatsApp Chat</Link>
          <Link to="/form">Form</Link>
          <Link to="/calendly">Calendly</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#285f7a] mt-8 pt-4 text-center text-[#d9e6f2] text-xs">
        <p>© 2025 Senkusha Solutions LLP</p>
        <div>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link> |{" "}
          <Link to="/terms" className="hover:underline">Terms</Link> |{" "}
          <Link to="/cookies" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
