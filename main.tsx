import React from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">About Muhammad Afnan</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Owner of GRAPHIX LAB, dedicated to providing top-tier digital and financial solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Profile</h2>
            <div className="prose prose-slate text-slate-600 space-y-6">
              <p>
                Hello, I am Muhammad Afnan, the founder and owner of GRAPHIX LAB. With years of experience in the digital landscape, I have established GRAPHIX LAB as a trusted partner for businesses and freelancers looking to establish a strong online presence and manage their international finances securely.
              </p>
              <p>
                My expertise spans across the full spectrum of digital services. I am a skilled website developer and graphic designer, passionate about creating visual experiences that resonate with audiences. Beyond aesthetics, I specialize in SEO and copywriting, ensuring that the beautiful websites we build also perform exceptionally well in search engines and convert visitors into customers.
              </p>
              <p>
                One of my core areas of specialization is providing solutions for international payment gateways. I understand the challenges freelancers and businesses face with platforms like PayPal and Payoneer. I provide expert assistance in account setup, resolving limitations, and facilitating secure exchanges to PKR, ensuring that your hard-earned revenue is accessible and secure.
              </p>
              <p>
                At GRAPHIX LAB, my goal is simple: to help clients grow their online businesses by providing secure, reliable, and high-quality digital services.
              </p>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div className="flex flex-col">
                    <span className="font-medium">Payoneer: subhanafnan607@gmail.com</span>
                    <span className="font-medium">PayPal: rileyeliss93@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="text-blue-600" size={20} />
                  <span className="font-medium">+92 332 3089376</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Summary */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Expertise</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <ul className="space-y-4">
                {[
                  "Website Design & Development",
                  "Search Engine Optimization (SEO)",
                  "Graphic Design & Branding",
                  "Professional Copywriting",
                  "YouTube Channel Optimization",
                  "PayPal & Payoneer Account Setup",
                  "Account Limitation Solutions",
                  "Currency Exchange Assistance (PKR)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Why Choose GRAPHIX LAB?</h3>
              <p className="text-slate-300 mb-6">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that actually work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
