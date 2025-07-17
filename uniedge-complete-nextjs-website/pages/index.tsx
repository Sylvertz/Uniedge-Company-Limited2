import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Uniedge Consulting</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Driven by Insights, Powered by Results. Empowering businesses in Zanzibar and East Africa with strategic consulting, market intelligence, and B2B solutions.
        </p>
        <Link href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Book a Consultation
        </Link>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="mb-10 text-lg text-gray-700">We partner with businesses, NGOs, and institutions to deliver tangible growth, regulatory clarity, and trusted supply solutions.</p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-xl mb-2">Business Strategy</h3>
            <p className="text-gray-700">Strategic planning, market entry support, and operational excellence for sustainable growth.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-xl mb-2">Business & Tax Consulting</h3>
            <p className="text-gray-700">Regulatory compliance, tax optimization, and corporate governance advisory tailored to Zanzibar’s business landscape.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-xl mb-2">B2B & Agency Supply</h3>
            <p className="text-gray-700">Reliable sourcing, agency representation, and B2B supply chain support for corporates and organizations.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Uniedge</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Uniedge Company Limited was founded to bridge the gap between market potential and operational success in Zanzibar and the region. Our team combines strategic expertise, market insight, and local compliance mastery to deliver real business impact.
        </p>
        <Link href="/about" className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800">Our Story</Link>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Grow Together</h2>
        <p className="mb-6 text-lg text-gray-700">Discuss your project or business goals with us.</p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800">
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-sm text-gray-600 text-center">
        <p>Uniedge Company Limited | Plot 23, Block 2, Mombasa Road, Zanzibar</p>
        <p>+255 787 692 167 | admin@uniedgecoltd.com</p>
        <p>&copy; {new Date().getFullYear()} Uniedge. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
