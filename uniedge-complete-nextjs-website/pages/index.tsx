import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uniedge Consulting | Strategic Growth & B2B Solutions</title>
        <meta name="description" content="Driving business transformation in Zanzibar & East Africa through strategy, tax consulting, and supply solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <img src="/logo.png" alt="Uniedge Consulting" className="h-10" />
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img src="/hero.jpg" alt="" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-bold">Driven by Insights, Powered by Results.</h1>
            <p className="text-lg">Empowering businesses in Zanzibar and East Africa with strategy, tax consulting, and B2B solutions.</p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded text-white font-semibold">Let's Chat</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold">Helping you achieve your goals</h2>
          <p className="text-gray-700 text-lg">We support ambitious businesses in Zanzibar and East Africa with tailored strategy advice, tax & regulatory support, and supply-chain solutions.</p>
          <Link href="/services" className="inline-block border border-gray-300 px-6 py-3 rounded hover:bg-gray-100">See All Services</Link>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <img src="/about-image.jpg" alt="About Uniedge" className="rounded-lg shadow" />
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold">Local expertise, regional reach</h3>
            <p className="text-gray-700 text-lg">Our team combines market intelligence with regulatory know-how to help you succeed in Zanzibar and beyond. From strategic growth to sustainable supply, we deliver measurable results.</p>
            <Link href="/about" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Our Core Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-2xl mb-3">Business Strategy</h4>
              <p className="text-gray-700">Strategic planning, market entry and operational excellence for sustainable growth.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-2xl mb-3">Business & Tax Consulting</h4>
              <p className="text-gray-700">Compliance, tax optimization and governance advice tailored to Zanzibar’s business environment.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-2xl mb-3">B2B & Agency Supply</h4>
              <p className="text-gray-700">Reliable sourcing, supply-chain support, and agency representation for organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
          <h3 className="text-4xl font-bold">Why Choose Uniedge?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Local Market Experts</h4>
              <p className="text-gray-700">Deep understanding of Zanzibar and East Africa’s unique business and regulatory environments.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Tailored Growth Strategies</h4>
              <p className="text-gray-700">Customized solutions to drive growth, efficiency, and compliance.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Trusted Partner</h4>
              <p className="text-gray-700">Transparent, results-driven consulting services for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case1.jpg" alt="Scaling a Distributor" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Scaling a Regional Distributor</h4>
                <p className="text-gray-700">How Uniedge supported a distributor to expand across Zanzibar and Tanzania.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case2.jpg" alt="Tax Optimization" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Tax Optimization for SMEs</h4>
                <p className="text-gray-700">Helping local SMEs optimize tax structures while ensuring compliance.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case3.jpg" alt="Supply Chains" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Building Sustainable Supply Chains</h4>
                <p className="text-gray-700">Enhancing supply reliability and reducing costs for hospitality groups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <h3 className="text-4xl font-bold">Ready to get started?</h3>
          <p className="text-lg">Let's discuss your project and drive success together.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded hover:bg-gray-100">Request a Call</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between space-y-6 md:space-y-0">
          <div className="space-y-2">
            <p>Uniedge Company Limited</p>
            <p>Plot 23, Block 2, Mombasa Road, Zanzibar</p>
            <p>+255 787 692 167</p>
            <p>admin@uniedgecoltd.com</p>
          </div>
          <p>&copy; {new Date().getFullYear()} Uniedge. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
