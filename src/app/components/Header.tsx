import { Link } from 'react-router';
import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#1E3A8A]">ASQA GROUP</div>
              <div className="text-xs text-gray-600">ISO Certification & Digital Solutions</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-[#1E3A8A] hover:text-blue-600 transition-colors">Home</Link>
            <a href="#about" className="text-[#1E3A8A] hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-[#1E3A8A] hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-[#1E3A8A] hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
