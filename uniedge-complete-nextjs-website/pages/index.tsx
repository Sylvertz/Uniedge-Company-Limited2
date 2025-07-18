import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/uniedge-logo.png" alt="Uniedge Consulting Logo" className="h-12 mb-4" />
            <h1 className="text-4xl font-bold">Uniedge Consulting</h1>
            <p className="mt-4 text-xl text-gray-700">Driven by Insights, Powered by Results.</p>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for hero image */}
            <img src="/images/consulting-hero.jpg" alt="Consulting" className="mt-8 md:mt-0 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">Bridging Potential &amp; Performance</h2>
          <p className="mt-4 text-gray-700">
            Uniedge Consulting leverages strategic expertise and deep market insight to empower businesses in Zanzibar and the wider region. Our local compliance mastery ensures your company's success is built on solid foundations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold">Business Strategy</h3>
              <p className="mt-2 text-gray-700">Bespoke strategies for sustainable growth.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Business &amp; Tax Consulting</h3>
              <p className="mt-2 text-gray-700">Expert advice on operations and tax compliance.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">B2B &amp; Agency Supply</h3>
              <p className="mt-2 text-gray-700">Connecting businesses with trusted partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-700">
            Uniedge Company Limited was founded to bridge the gap between market potential and operational success in Zanzibar and the region. Our team combines strategic expertise, market insight, and local compliance mastery to deliver real business impact.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold text-white">Let's Grow Together</h2>
          <a href="/contact" className="mt-6 inline-block bg-white text-blue-900 font-medium py-3 px-6 rounded">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-700 text-sm">
          <p>Plot 23, Block 2, Mombasa Road, Zanzibar</p>
          <p>+255 787 692 167</p>
          <p>admin@uniedgecoltd.com</p>
        </div>
      </footer>
    </>
  );
}
