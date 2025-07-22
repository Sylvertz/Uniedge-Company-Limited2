'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
 return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Your Gateway to
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Zanzibar</span>
                <br />Market Excellence
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                A dynamic agency and consultancy firm helping businesses establish, expand, and thrive in Zanzibar's evolving commercial landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image 
                  src="https://placehold.co/600x400/1e40af/ffffff?text=Zanzibar+Business" 
                  alt="Zanzibar Business Landscape"
                  width={600}
                  height={400}
                  className="rounded-lg w-full shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">Est. 2025</div>
                  <div className="text-sm opacity-90">Building Legacies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About UniEdge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empowering businesses with expert representation, market intelligence, and actionable strategies that drive growth, compliance, and success.
            </p>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive solutions designed to help your business succeed in the Zanzibar market and beyond.
            </p>
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "Agency Services",
                items: ["Brand Representation", "Market Penetration", "B2B Sales"]
              },
              {
                category: "Consultation Services",
                items: ["Business Development Strategies", "Regulatory & Compliance Guidance", "Market Research & Analysis"]
              },
              {
                category: "Support Services",
                items: ["Sales Support", "Logistics Coordination", "Marketing Services"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experienced professionals dedicated to your business success in Zanzibar.
            </p>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Meet Our Team
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Sylvester Urio",
                role: "Founder & CEO",
                expertise: "Finance and Marketing Specialist with over 6 years in the Zanzibar business sector.",
                image: " https://placehold.co/300x300/1e40af/ffffff?text=SU"
              },
              {
                name: "Cyprian Matembo",
                role: "Founder & COO",
                expertise: "Experienced in Procurement, Accounting, and B2B Sales, with 4+ years in business operations and marketing.",
                image: " https://placehold.co/300x300/059669/ffffff?text=CM"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src={leader.image} 
                  alt={leader.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-700 text-sm">{leader.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Zanzibar's Market Potential?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business thrive in Zanzibar's dynamic commercial landscape.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}