import React from 'react';
import { motion } from 'framer-motion';
import { Code, Search, PenTool, Youtube, CreditCard, RefreshCw, AlertTriangle, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Website Design",
      description: "Custom, visually stunning designs that reflect your brand identity. We focus on user experience (UX) and user interface (UI) to create engaging digital environments.",
      icon: PenTool
    },
    {
      title: "Website Development",
      description: "Robust and responsive website development using modern technologies. From landing pages to full-scale e-commerce platforms, we build sites that perform.",
      icon: Code
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Data-driven SEO strategies to improve your search engine rankings. We optimize your content and technical structure to drive organic traffic and growth.",
      icon: Search
    },
    {
      title: "Graphic Design",
      description: "Professional graphic design services including logos, branding materials, social media graphics, and marketing collateral to make your brand stand out.",
      icon: PenTool
    },
    {
      title: "Copywriting",
      description: "Compelling and persuasive copy that converts. We write website content, blog posts, ad copy, and more to effectively communicate your message.",
      icon: FileText
    },
    {
      title: "YouTube Channel Setup & Optimization",
      description: "Complete YouTube channel setup, branding, and video optimization to help you reach a wider audience and grow your subscriber base.",
      icon: Youtube
    },
    {
      title: "Payoneer Account Setup Help",
      description: "Expert guidance on setting up your Payoneer account correctly to ensure smooth international transactions and payments.",
      icon: CreditCard
    },
    {
      title: "PayPal Account Setup Help",
      description: "Assistance with creating and verifying PayPal accounts, ensuring you can send and receive payments globally without hassle.",
      icon: CreditCard
    },
    {
      title: "PayPal to PKR Exchange Assistance",
      description: "Reliable assistance for exchanging your PayPal funds to PKR, providing a secure bridge for your international earnings.",
      icon: RefreshCw
    },
    {
      title: "Payoneer to PKR Exchange Assistance",
      description: "Seamless support for withdrawing or exchanging Payoneer funds to PKR, helping freelancers and businesses access their revenue.",
      icon: RefreshCw
    },
    {
      title: "Account Limitation Solutions",
      description: "Specialized support for resolving PayPal and Payoneer account limitations. We help you navigate restrictions to restore your account access.",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">
            Comprehensive digital and financial solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="text-slate-700 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
