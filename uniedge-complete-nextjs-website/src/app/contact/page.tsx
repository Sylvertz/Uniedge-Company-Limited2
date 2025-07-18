export default function ContactPage() {
  return (
    <section className="bg-lightBlue text-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6 space-y-8 text-center">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg">
          For inquiries, consultations, or to explore how Uniedge can support your business, use the form below or reach out directly.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" className="w-full rounded border border-gray-300 px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded border border-gray-300 px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea className="w-full rounded border border-gray-300 px-4 py-2 h-32" />
          </div>
          <button type="submit" className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full uppercase tracking-wider hover:bg-lightBlue">
            Send Message
          </button>
        </form>

        <div className="space-y-2 pt-8">
          <p>📍 Plot 23, Block 2, Mombasa Road, Zanzibar</p>
          <p>📞 +255 787 692 167</p>
          <p>✉️ admin@uniedgecoltd.com</p>
        </div>
      </div>
    </section>
  );
}
