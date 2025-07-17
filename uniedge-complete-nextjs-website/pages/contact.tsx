import React from 'react';

export default function Contact() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 text-lg">Office: Plot 23, Block 2, Mombasa Road, Zanzibar</p>
      <p className="mb-4 text-lg">Phone: <a className="text-blue-600" href="tel:+255787692167">+255 787 692 167</a></p>
      <p className="mb-4 text-lg">Email: <a className="text-blue-600" href="mailto:admin@uniedgecoltd.com">admin@uniedgecoltd.com</a></p>
      <p className="mb-8 text-lg">Website & Socials: Under development</p>
      <form className="flex flex-col space-y-4">
        <input className="p-3 border rounded" type="text" placeholder="Your Name" required />
        <input className="p-3 border rounded" type="email" placeholder="Your Email" required />
        <input className="p-3 border rounded" type="text" placeholder="Subject" required />
        <textarea className="p-3 border rounded" placeholder="Message" rows={5} required></textarea>
        <button className="bg-blue-600 text-white p-3 rounded font-semibold" type="submit">Send Message</button>
      </form>
    </main>
  );
}
