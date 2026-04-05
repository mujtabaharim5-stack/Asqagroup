import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, Award, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Mobile App Header */}
      <header className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white px-4 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-lg leading-tight">ASQA GROUP</h1>
              <p className="text-xs text-blue-100">ISO & Digital Solutions</p>
            </div>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-[72px] bottom-0 w-64 bg-white shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-2">
              <button
                onClick={() => {
                  navigate('/');
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'bg-blue-500 text-white'
                    : 'text-[#1E3A8A] hover:bg-blue-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-[#1E3A8A] hover:bg-blue-50 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-[#1E3A8A] hover:bg-blue-50 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-[#1E3A8A] hover:bg-blue-50 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="sticky bottom-0 bg-white border-t-2 border-gray-100 shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
              isActive('/') && location.pathname === '/'
                ? 'text-blue-500'
                : 'text-gray-400'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center gap-1 px-6 py-2 rounded-xl text-gray-400 transition-all"
          >
            <Award className="w-6 h-6" />
            <span className="text-xs">Services</span>
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center gap-1 px-6 py-2 rounded-xl text-gray-400 transition-all"
          >
            <Mail className="w-6 h-6" />
            <span className="text-xs">Contact</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
