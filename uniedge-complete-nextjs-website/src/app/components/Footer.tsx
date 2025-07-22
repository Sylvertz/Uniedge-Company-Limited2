import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand + Description + Socials */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">UniEdge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your Gateway to Zanzibar Market Excellence. Helping businesses establish, expand, and thrive since 2025.
            </p>
            <div className="flex space-x-4">
              {/* Add actual SVG paths */}
              <SocialIcon svgPath="TWITTER_SVG_PATH" />
              <SocialIcon svgPath="LINKEDIN_SVG_PATH" />
              <SocialIcon svgPath="GITHUB_SVG_PATH" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['/', '/about', '/services', '/contact'].map((href, i) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {['Home', 'About Us', 'Services', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Uniedge Company Limited</li>
              <li>Year Established: February 2025</li>
              <li>Legal Status: Limited Liability Company</li>
              <li>Website: Under development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UniEdge Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ svgPath }: { svgPath: string }) {
  return (
    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={svgPath} />
      </svg>
    </div>
  );
}
