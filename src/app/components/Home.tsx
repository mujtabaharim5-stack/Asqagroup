import { useNavigate } from 'react-router';
import { TranslucentButton } from './TranslucentButton';
import {
  Award,
  Briefcase,
  FileText,
  Globe,
  Palette,
  Server,
  Phone,
  MessageCircle,
  CheckCircle,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'ISO 9001',
    description: 'Quality Management System',
    path: '/iso-9001-request',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'ISO 14001',
    description: 'Environmental Management',
    path: '/iso-14001-request',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'ISO 45001',
    description: 'Health & Safety',
    path: '/iso-45001-request',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'ISO 22000',
    description: 'Food Safety',
    path: '/iso-22000-request',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    title: 'HACCP',
    description: 'Critical Control Points',
    path: '/haccp-request',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Award,
    title: 'GMP',
    description: 'Manufacturing Practice',
    path: '/gmp-request',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: TrendingUp,
    title: 'Business Planning',
    description: 'Strategy & Growth',
    path: '/business-planning-request',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: FileText,
    title: 'Company Profile',
    description: 'Professional Design',
    path: '/company-profile-request',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Custom Websites',
    path: '/web-design-request',
    color: 'from-violet-500 to-violet-600'
  },
  {
    icon: Server,
    title: 'Domain & Hosting',
    description: 'Web Infrastructure',
    path: '/domain-hosting-request',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Brand Identity',
    path: '/branding-request',
    color: 'from-rose-500 to-rose-600'
  }
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      {/* Mobile Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] via-blue-700 to-blue-900 text-white px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
              <Award className="w-12 h-12" />
            </div>
            <h1 className="text-3xl mb-3 leading-tight">
              Grow Your Business With ASQA GROUP
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Professional ISO Consulting & Digital Solutions
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <TranslucentButton
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Our Services
            </TranslucentButton>
            <TranslucentButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="secondary"
            >
              Get Free Consultation
            </TranslucentButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-2xl bg-blue-100 mb-3">
              <Users className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h2 className="text-2xl mb-3 text-[#1E3A8A]">About Us</h2>
            <h3 className="text-xl mb-4 text-blue-700">ISO & Business Consultant</h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Company Profile, Branding, Website Development, and Certification Services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Supporting businesses to grow and meet international standards.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">ISO Certification Services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">Digital Solutions & Web Development</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">Business Consulting & Planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-2xl bg-blue-100 mb-3">
              <Briefcase className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h2 className="text-2xl mb-2 text-[#1E3A8A]">Our Services</h2>
            <p className="text-gray-600">Professional solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(service.path)}
                  className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 active:scale-[0.98] transition-transform border-2 border-gray-100 hover:border-blue-200"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg text-[#1E3A8A] mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <TranslucentButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request Free Quote
            </TranslucentButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-2xl bg-blue-100 mb-3">
              <Phone className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h2 className="text-2xl mb-2 text-[#1E3A8A]">Contact Us</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+93765829292"
              className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 mb-1">Call Us</p>
                <p className="text-lg text-[#1E3A8A]">+93 (0) 765 82 92 92</p>
              </div>
            </a>

            <a
              href="https://wa.me/93796702006"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                <p className="text-lg text-[#1E3A8A]">+93 (0) 796 70 2006</p>
              </div>
            </a>
          </div>

          <div className="mt-8 bg-gradient-to-br from-[#1E3A8A] to-blue-700 rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl mb-2">Need Help?</h3>
            <p className="text-blue-100 mb-4">We're here to support your business growth</p>
            <TranslucentButton
              onClick={() => navigate('/business-planning-request')}
              variant="secondary"
            >
              Get Free Consultation Now
            </TranslucentButton>
          </div>
        </div>
      </section>
    </div>
  );
}
