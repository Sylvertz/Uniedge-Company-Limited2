import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uniedge Consulting | Driven by Insights, Powered by Results</title>
        <meta name="description" content="Empowering businesses in Zanzibar and East Africa with strategic consulting, market intelligence, and B2B solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Uniedge Consulting</h1>
          <nav className="space-x-6 hidden md:block">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="relative">
        <img src="/hero.jpg" alt="Consulting Hero" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Driven by Insights, Powered by Results.</h2>
          <p className="max-w-2xl text-lg mb-6">Empowering businesses in Zanzibar and East Africa with strategic consulting, market intelligence, and B2B solutions.</p>
          <div className="space-x-4">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">Our Services</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">What We Do</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Business Strategy</h4>
            <p>Strategic planning, market entry, and operational support for sustainable growth in Zanzibar and East Africa.</p>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Business & Tax Consulting</h4>
            <p>Compliance, tax optimization, and regulatory guidance tailored for the local business environment.</p>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">B2B & Agency Supply</h4>
            <p>Reliable sourcing, supply chain support, and agency representation for corporates and organizations.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
        <div className="mb-4">
          <p>Uniedge Company Limited | Plot 23, Block 2, Mombasa Road, Zanzibar</p>
          <p>+255 787 692 167 | admin@uniedgecoltd.com</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Uniedge. All rights reserved.</p>
      </footer>
    </>
  );
}
