// app/layout.tsx
import './globals.css';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Uniedge Consulting',
  description: 'Driven by Insights, Powered by Results. Strategic consulting and B2B solutions in Zanzibar and East Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans antialiased">
        {/* Navigation */}
        <header className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Uniedge Logo" className="h-10" />
              <span className="text-xl font-semibold">Uniedge Consulting</span>
            </Link>
            <nav className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-lightBlue">Home</Link>
              <Link href="/services" className="hover:text-lightBlue">Services</Link>
              <Link href="/about" className="hover:text-lightBlue">About</Link>
              <Link href="/contact" className="hover:text-lightBlue">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700">
          <div className="max-w-7xl mx-auto p-6 py-12 text-center text-sm space-y-2">
            <p>Uniedge Company Limited · Plot 23, Block 2, Mombasa Road, Zanzibar</p>
            <p>+255 787 692 167 · admin@uniedgecoltd.com</p>
            <p>&copy; {new Date().getFullYear()} Uniedge. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
