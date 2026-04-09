import { useNavigate } from 'react-router';
import { TranslucentButton } from './TranslucentButton';
import {
  Award,
  Briefcase,
  FileText,
  Globe,
  Mail,
  Palette,
  Server,
  Phone,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management System',
    path: '/iso-9001-request',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'ISO 14001:2015',
    description: 'Environmental Management',
    path: '/iso-14001-request',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Award,
    title: 'ISO 45001:2018',
    description: 'Health & Safety Management',
    path: '/iso-45001-request',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Award,
    title: 'ISO 22000:2018',
    description: 'Food Safety Management',
    path: '/iso-22000-request',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Award,
    title: 'HACCP',
    description: 'Hazard Analysis & Critical Control',
    path: '/haccp-request',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    title: 'GMP',
    description: 'Good Manufacturing Practice',
    path: '/gmp-request',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Briefcase,
    title: 'Business Planning',
    description: 'Strategic Business Development',
    path: '/business-planning-request',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: FileText,
    title: 'Company Profile',
    description: 'Professional Company Documentation',
    path: '/company-profile-request',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Custom Website Development',
    path: '/web-design-request',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Server,
    title: 'Domain & Hosting',
    description: 'Web Infrastructure Services',
    path: '/domain-hosting-request',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Brand Identity & Design',
    path: '/branding-request',
    color: 'from-rose-500 to-rose-600'
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTNBOEEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4 text-[#1E3A8A]">
              Grow Your Business With ASQA GROUP
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Professional ISO Consulting & Digital Solutions
            </p>
            <TranslucentButton onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Services
            </TranslucentButton>
          </div>

          {/* Banner Image Placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 h-64 md:h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <CheckCircle className="w-20 h-20 mx-auto mb-4" />
                <p className="text-2xl">Building Success Through Quality & Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 text-[#1E3A8A]">About Us</h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl mb-4 text-gray-800">ISO & Business Consultant</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Company Profile, Branding, Website Development, and Certification Services.
                Supporting businesses to grow and meet international standards.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <Award className="w-16 h-16 mx-auto mb-4 text-[#1E3A8A]" />
              <h4 className="text-xl mb-2 text-[#1E3A8A]">ISO Certification</h4>
              <p className="text-gray-600">Expert guidance for international standards compliance</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-[#1E3A8A]" />
              <h4 className="text-xl mb-2 text-[#1E3A8A]">Business Consulting</h4>
              <p className="text-gray-600">Strategic planning and business development</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <Globe className="w-16 h-16 mx-auto mb-4 text-[#1E3A8A]" />
              <h4 className="text-xl mb-2 text-[#1E3A8A]">Digital Solutions</h4>
              <p className="text-gray-600">Complete web and branding services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1E3A8A]">Our Services</h2>
            <p className="text-xl text-gray-700">Comprehensive solutions for your business growth</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2 text-[#1E3A8A]">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <TranslucentButton
                    onClick={() => navigate(service.path)}
                    variant="secondary"
                    className="w-full text-sm"
                  >
                    Request Service
                  </TranslucentButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 text-[#1E3A8A]">Contact Us</h2>
            <p className="text-xl text-gray-700 mb-8">Get in touch for a free consultation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="tel:+93765829292"
              className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Phone</div>
                <div className="text-xl text-[#1E3A8A]">+93 (0) 765 82 92 92</div>
              </div>
            </a>

            <a
              href="https://wa.me/93796702006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                <div className="text-xl text-[#1E3A8A]">+93 (0) 796 70 2006</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">© 2026 ASQA GROUP. All rights reserved.</p>
          <p className="text-blue-200">ISO Certification & Digital Solutions</p>
        </div>
      </footer>
    </div>
  );
}
