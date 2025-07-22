import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">
            Uniedge
          </a>
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'about', 'testimonials', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-colors ${activeSection === section ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-3 space-y-3">
              {['home', 'services', 'about', 'testimonials', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block text-sm font-medium ${activeSection === section ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Driven by Insights,
                  <span className="text-indigo-600"> Powered by Results</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Empowering businesses in Zanzibar and East Africa with expert strategies, compliance solutions, and market intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center">Get Started</a>
                  <a href="#services" className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors text-center">Our Services</a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
                  <img src="https://picsum.photos/600/400" alt="Business consulting" className="relative rounded-2xl shadow-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We offer business strategy, tax consulting, B2B supply, and more tailored to your business goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Strategy</h3>
                <p className="text-gray-600">Customized strategies for startups, SMEs, corporates, and NGOs to achieve sustainable growth.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Consulting</h3>
                <p className="text-gray-600">Expert tax planning, compliance services, and regulatory guidance in Zanzibar and beyond.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">B2B & Agency Supply</h3>
                <p className="text-gray-600">Corporate sourcing, strategic B2B partnerships, and supply management tailored to your needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img src="https://picsum.photos/600/400?random=2" alt="About us" className="rounded-xl shadow-lg w-full" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Uniedge</h2>
                <p className="text-gray-600 mb-6">Uniedge Company Limited is a trusted consulting and business solutions partner in Zanzibar, delivering tailored strategies and market intelligence to clients across various industries.</p>
                <p className="text-gray-600 mb-8">We help businesses navigate growth, compliance, and success through a results-driven approach backed by local expertise.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Contact Uniedge Company Limited today to discuss how we can help you achieve your business goals.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <ul className="space-y-4 text-gray-700">
                  <li><strong>Address:</strong> Plot 23, Block 2, Mombasa Road, Zanzibar</li>
                  <li><strong>Email:</strong> admin@uniedgecoltd.com</li>
                  <li><strong>Phone:</strong> +255 787 692 167</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Uniedge Company Limited</h3>
            <p className="text-gray-400 mb-4">Driven by Insights, Powered by Results.</p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Uniedge Company Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
