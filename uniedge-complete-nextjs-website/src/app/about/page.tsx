'use client';
import Link from "next/link";

export default function AboutPage() {
 const values = [
    { icon: "🎯", title: "Integrity", description: "We conduct business with honesty and ethical standards" },
    { icon: "💼", title: "Professionalism", description: "We maintain the highest standards in all our interactions" },
    { icon: "📊", title: "Market Insight", description: "We leverage deep local knowledge for client success" },
    { icon: "✅", title: "Accountability", description: "We take responsibility for our actions and results" },
    { icon: "🤝", title: "Collaboration", description: "We work together with clients as true partners" }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", detail: "Over 5 years of combined operational experience" },
    { number: "$3M+", label: "B2B Sales", detail: "In combined B2B sales within the last 3 years" },
    { number: "Strong Networks", label: "With investors", detail: "Local and international connections" },
    { number: "Regulatory Expertise", label: "Proven familiarity", detail: "With ZIPA and TIC operations" }
  ];

  const leadership = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About UniEdge</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Empowering businesses with expert representation, market intelligence, and actionable strategies that drive growth, compliance, and success.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape our approach to client partnerships and business excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src=" https://placehold.co/600x400/3b82f6/ffffff?text=Zanzibar+Office" 
                alt="UniEdge Office"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-700 text-lg">
                    To become the most trusted and results-driven agency and consulting partner in Zanzibar and the region.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
                  <p className="text-gray-700 text-lg">
                    To empower our clients with expert representation, market intelligence, and actionable strategies that drive growth, compliance, and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our business philosophy and client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our value lies in deep knowledge and active involvement in the Zanzibar business ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Focus */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Strategic Expansion</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Broadening our reach to serve more clients across Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="text-6xl font-bold mb-4">Pemba</div>
              <h4 className="text-xl font-semibold mb-2 text-white">Zanzibar</h4>
              <p className="text-orange-100">Focusing on Pemba Upcoming Projects</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="text-6xl font-bold mb-4">Mainland TZ</div>
              <h4 className="text-xl font-semibold mb-2 text-white">Tanzania</h4>
              <p className="text-orange-100">Broadening our presence in Dar es Salaam, Arusha, Dodoma, Mwanza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your business success in Zanzibar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
           
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-700">{leader.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Message */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "We don't just represent brands, we build legacies with them. Our commitment is to walk with you from market entry to scale-up, leveraging our networks, deep local knowledge and operational discipline to drive measurable results."
            </blockquote>
            <cite className="text-lg font-semibold text-gray-900">— Sylvester Urio, Founder & CEO</cite>
          </div>
        </div>
      </section>
    </div>
  );
}