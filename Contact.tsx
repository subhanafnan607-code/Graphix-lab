import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Palette, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Professional Digital Services for Your <span className="text-blue-500">Business Growth</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We provide high-quality digital solutions to help your brand grow online. From web development to financial solutions, we are your partner in success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-semibold rounded-lg text-white hover:bg-slate-800 transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              GRAPHIX LAB is a premier digital services agency dedicated to empowering businesses and individuals. We specialize in website development, creative design, SEO strategies, and essential online business solutions including payment gateway assistance. Our mission is to provide secure, reliable, and professional services that drive real results.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Web Development", desc: "Modern, responsive websites tailored to your brand." },
              { icon: Palette, title: "Graphic Design", desc: "Visuals that capture attention and communicate your message." },
              { icon: TrendingUp, title: "SEO Growth", desc: "Strategies to improve your visibility and organic traffic." },
              { icon: DollarSign, title: "Financial Solutions", desc: "Expert help with PayPal & Payoneer accounts." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your business?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project or account needs. We are here to help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
