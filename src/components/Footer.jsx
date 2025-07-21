import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0D4A68] text-white text-sm py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Column 1: Company */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">COMPANY</h4>
          <a href="/">Home</a>
          <a href="/products">Our Products</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Column 2: Programs */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">PROGRAMS</h4>
          <a href="/internship">Internship</a>
          <a href="/training">Corporate Training</a>
          <a href="/journey">Hiring Journey</a>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">RESOURCES</h4>
          <a href="/blogs">Blogs</a>
          <a href="/success">Success Stories</a>
          <a href="/events">Events</a>
        </div>

        {/* Column 4: Products */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">PRODUCTS</h4>
          <a href="/datagpt">DataGPT</a>
          <a href="/nutrigen">Nutrigen</a>
          <a href="/resume">Resume Analyzer</a>
        </div>

        {/* Column 5: Connect */}
        <div className="flex flex-col min-w-[150px] mb-5 gap-2">
          <h4 className="text-[#AFCBDB] mb-2">CONNECT WITH US</h4>
          <a href="/whatsapp">WhatsApp Chat</a>
          <a href="/form">Form</a>
          <a href="/calendly">Calendly</a>
          <a href="/map">Map</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#285f7a] mt-8 pt-4 text-center text-[#d9e6f2] text-xs">
        <p>© 2025 Senkusha Solutions LLP</p>
        <div>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline">
            Terms
          </a>{" "}
          |{" "}
          <a href="/cookies" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
