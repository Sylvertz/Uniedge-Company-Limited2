import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Uniedge Consulting</h1>
        <p className="text-xl max-w-xl mb-6">
          Driven by Insights, Powered by Results. We help businesses in Zanzibar and East Africa grow with tailored strategies, compliance solutions, and market intelligence.
        </p>
        <Link href="/contact" className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-gray-100 transition">
          Get in Touch
        </Link>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
            <p>Customized growth strategies for startups, SMEs, and corporates.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Business & Tax Consulting</h3>
            <p>Expert compliance, tax planning, and regulatory advisory in Zanzibar and the region.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">B2B & Agency Supply</h3>
            <p>Corporate sourcing, strategic B2B partnerships, and supply management services.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          At Uniedge, we’re committed to delivering actionable insights and measurable results. With deep market knowledge and experienced consultants, we help you unlock sustainable growth.
        </p>
        <Link href="/about" className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition">
          Learn More About Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Uniedge Company Limited. All rights reserved.
      </footer>
    </main>
  );
}
