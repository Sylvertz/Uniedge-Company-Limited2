import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-16 px-4">
      <div className="flex justify-center mb-6">
        <Image src="/UniLogo.PNG" alt="Uniedge Company Limited Logo" width={180} height={180} />
      </div>
      <h1 className="text-4xl font-bold">Uniedge Company Limited</h1>
      <p className="mt-4 text-lg text-gray-600">Driven by Insights, Powered by Results</p>
      <p className="mt-2 text-md text-gray-500">Zanzibar's trusted partner in business strategy, consulting, marketing, and B2B supply.</p>
    </section>
  );
}
