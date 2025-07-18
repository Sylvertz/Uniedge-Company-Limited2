import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uniedge Consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-10">
          <div className="md:w-1/2 space-y-6">
            <img src="/logo.png" alt="Uniedge Consulting Logo" className="h-16" />
            <h1 className="text-4xl md:text-5xl font-bold">Driven by Insights, Powered by Results.</h1>
            <p className="text-lg">Empowering businesses in Zanzibar and East Africa with strategic consulting, market intelligence, and B2B solutions.</p>
            <Link href="/contact">
              <a className="inline-block bg-lightBlue text-blue-900 font-semibold px-8 py-3 rounded-full uppercase tracking-wide">
                Book a Consultation
              </a>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/hero.jpg" alt="Consulting Hero" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Business Strategy", "Business & Tax Consulting", "B2B & Agency Supply"].map((svc) => (
              <div key={svc} className="bg-blue-50 hover:bg-lightBlue/30 transition rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{svc}</h3>
                <p>
                  {svc === "Business Strategy" &&
                    "Strategic planning, market entry support, and operational excellence for sustainable growth."}
                  {svc === "Business & Tax Consulting" &&
                    "Regulatory compliance, tax optimization, and governance advisory tailored to Zanzibar’s business landscape."}
                  {svc === "B2B & Agency Supply" &&
                    "Reliable sourcing, agency representation, and B2B supply chain support for corporates and organizations."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-lightBlue text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">About Uniedge</h2>
          <p className="text-lg leading-relaxed">
            Uniedge Company Limited was founded to bridge the gap between market potential and operational success in Zanzibar and the region. Our team combines strategic expertise, market insight, and local compliance mastery to deliver real business impact.
          </p>
          <Link href="/about">
            <a className="inline-block mt-8 bg-blue-900 text-white font-semibold px-8 py-3 rounded-full uppercase tracking-wide">
              Our Story
            </a>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Grow Together</h2>
          <p className="text-lg mb-8">Discuss your project or business goals with us.</p>
          <Link href="/contact">
            <a className="inline-block bg-lightBlue text-blue-900 font-semibold px-8 py-3 rounded-full uppercase tracking-wide">
              Get Started
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-2 text-sm">
          <p>Uniedge Company Limited | Plot 23, Block 2, Mombasa Road, Zanzibar</p>
          <p>+255 787 692 167 | admin@uniedgecoltd.com</p>
          <p>&copy; {new Date().getFullYear()} Uniedge. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
