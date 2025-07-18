import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-4xl font-bold">About Uniedge</h1>
        <p className="text-lg leading-relaxed">
          Uniedge Company Limited was founded to bridge the gap between market potential and operational success in Zanzibar and the region.
          Our team combines strategic expertise, market insight, and local compliance mastery to deliver real business impact.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            To empower businesses in East Africa with tailored strategy, tax solutions, and reliable B2B services that drive sustainable growth.
          </p>

          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Local Expertise:</strong> Deep knowledge of Zanzibar and regional markets.</li>
            <li><strong>Integrity:</strong> Transparent and ethical consulting.</li>
            <li><strong>Client-Focus:</strong> Delivering measurable impact.</li>
          </ul>
        </div>

        <Link href="/contact">
          <a className="inline-block bg-blue-900 text-white font-semibold px-8 py-3 rounded-full uppercase tracking-wider hover:bg-lightBlue">
            Get in Touch
          </a>
        </Link>
      </div>
    </section>
  );
}
