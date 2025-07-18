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
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
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
        <img src="/hero.jpg" alt="" className="w-full h-[450px] object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 text-center text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Driven by Insights, Powered by Results.</h1>
            <p className="text-lg">Empowering businesses in Zanzibar and East Africa with strategy, tax consulting, and B2B solutions.</p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">Let's Chat</Link>
          </div>
        </div>
      </section>

      {/* Intro & Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold">Helping you achieve your goals</h2>
          <p className="text-gray-700">We support ambitious businesses in Zanzibar and East Africa with tailored strategy advice, tax & regulatory support, and supply-chain solutions.</p>
          <Link href="/services" className="inline-block bg-white border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition">See All Services</Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Core Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">Business Strategy</h4>
              <p>Strategic planning, market entry and operational excellence for sustainable growth.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">Business & Tax Consulting</h4>
              <p>Compliance, tax optimization and governance advice tailored to Zanzibar’s landscape.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">B2B & Agency Supply</h4>
              <p>Sourcing, supply-chain support and agency representation for corporates and organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <h3 className="text-3xl font-bold">Why Choose Uniedge?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2">Local Market Experts</h4>
              <p>Deep understanding of Zanzibar and East Africa’s unique business and regulatory environments.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Tailored Growth Strategies</h4>
              <p>Customized solutions designed to drive growth, efficiency, and compliance for your organization.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Trusted Partner</h4>
              <p>Transparent, results-driven consulting services you can count on for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case1.jpg" alt="Case Study 1" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Scaling a Regional Distributor</h4>
                <p>How Uniedge supported a distributor to expand across Zanzibar and mainland Tanzania.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case2.jpg" alt="Case Study 2" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Tax Optimization for SMEs</h4>
                <p>Helping local SMEs optimize tax structures while ensuring full compliance with local regulations.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src="/case3.jpg" alt="Case Study 3" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h4 className="font-semibold text-xl mb-2">Building Sustainable Supply Chains</h4>
                <p>Enhancing supply reliability and reducing costs for a hospitality group in Zanzibar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          <h3 className="text-3xl font-bold">Ready to begin?</h3>
          <p>Get in touch to explore how we can support your growth journey.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold">Request a Call</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 md:flex md:justify-between">
          <div className="space-y-2">
            <p>Uniedge Company Limited</p>
            <p>Plot 23, Block 2, Mombasa Road, Zanzibar</p>
            <p>+255 787 692 167</p>
            <p>admin@uniedgecoltd.com</p>
          </div>
          <div className="mt-6 md:mt-0">
            <p>&copy; {new Date().getFullYear()} Uniedge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
