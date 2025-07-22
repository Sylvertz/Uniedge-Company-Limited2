import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      category: "Agency Services",
      items: [
        "Brand Representation",
        "Market Penetration",
        "Product Distribution",
        "B2B Sales"
      ]
    },
    {
      category: "Consultation Services",
      items: [
        "Business Development Strategies",
        "Market Linkages",
        "Regulatory & Compliance Guidance",
        "Market Research & Analysis"
      ]
    },
    {
      category: "Support Services",
      items: [
        "Sales Support",
        "Logistics Coordination",
        "Marketing Services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive solutions designed to help your business succeed in the Zanzibar market and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From market entry to scale-up, we provide the expertise and support your business needs to thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.category}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Expansion */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Strategic Expansion</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Broadening our reach to serve more clients across Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="text-6xl font-bold mb-4">Pemba</div>
              <h4 className="text-xl font-semibold mb-2">Zanzibar</h4>
              <p className="text-orange-100">Focusing on Pemba Upcoming Projects</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="text-6xl font-bold mb-4">Mainland TZ</div>
              <h4 className="text-xl font-semibold mb-2">Tanzania</h4>
              <p className="text-orange-100">Broadening our presence in Dar es Salaam, Arusha, Dodoma, Mwanza</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you navigate the Zanzibar market with confidence and achieve sustainable growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}