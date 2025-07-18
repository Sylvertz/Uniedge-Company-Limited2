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
      <section className="bg-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          <h1 className="text-5xl font-bold">Uniedge Consulting</h1>
          <p className="text-lg">Driven by Insights, Powered by Results. Empowering businesses in Zanzibar and East Africa with strategic consulting, market intelligence, and B2B solutions.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full">Book a Consultation</Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
              <p>Strategic planning, market entry support, and operational excellence for sustainable growth.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Business & Tax Consulting</h3>
              <p>Regulatory compliance, tax optimization, and governance advisory tailored to Zanzibar’s business landscape.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">B2B & Agency Supply</h3>
              <p>Reliable sourcing, agency representation, and B2B supply chain support for corporates and organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">About Uniedge</h2>
          <p>Uniedge Company Limited was founded to bridge the gap between market potential and operational success in Zanzibar and the region. Our team combines strategic expertise, market insight, and local compliance mastery to deliver real business impact.</p>
          <Link href="/about" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full">Our Story</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Let's Grow Together</h2>
          <p>Discuss your project or business goals with us.</p>
          <Link href="/contact" className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-full">Get Started</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        <div className="space-y-2">
          <p>Uniedge Company Limited | Plot 23, Block 2, Mombasa Road, Zanzibar</p>
          <p>+255 787 692 167 | admin@uniedgecoltd.com</p>
          <p>&copy; {new Date().getFullYear()} Uniedge. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
