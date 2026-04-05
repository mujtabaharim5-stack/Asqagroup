import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TranslucentButton } from './TranslucentButton';
import { ArrowLeft, CheckCircle, Award } from 'lucide-react';

interface ServiceRequestPageProps {
  serviceName: string;
  serviceDescription: string;
}

export function ServiceRequestPage({ serviceName, serviceDescription }: ServiceRequestPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', { ...formData, service: serviceName });

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        description: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-6 flex items-center">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl mb-4 text-[#1E3A8A]">Request Submitted!</h2>
            <p className="text-base text-gray-700 mb-8">
              Thank you for your interest in {serviceName}. Our team will contact you shortly.
            </p>
            <TranslucentButton onClick={() => navigate('/')}>
              Return to Home
            </TranslucentButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-6 px-6 pb-24">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1E3A8A] hover:text-blue-600 mb-6 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl">{serviceName}</h1>
                <p className="text-base text-blue-100 mt-1">{serviceDescription}</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-base">
                ✨ Get Free Consultation | Request Free Quote
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl mb-2 text-[#1E3A8A]">Request Consultation</h2>
              <p className="text-sm text-gray-600">Please fill out the form below and our team will contact you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[#1E3A8A]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-[#1E3A8A]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-base"
                  placeholder="+93 (0) XXX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#1E3A8A]">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm mb-2 text-[#1E3A8A]">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-base"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-[#1E3A8A]">
                  Selected Service
                </label>
                <input
                  type="text"
                  id="service"
                  value={serviceName}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600 text-base"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm mb-2 text-[#1E3A8A]">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none text-base"
                  placeholder="Please provide any additional information about your requirements..."
                />
              </div>

              <div className="pt-4">
                <TranslucentButton
                  onClick={() => {}}
                  className="w-full text-base py-4"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </TranslucentButton>
              </div>

              <div className="text-center text-xs text-gray-600">
                <p>By submitting this form, you agree to be contacted by ASQA GROUP</p>
              </div>
            </form>

            <div className="mt-8 p-5 bg-blue-50 rounded-2xl border-2 border-blue-100">
              <h3 className="text-base mb-3 text-[#1E3A8A]">📊 Google Sheets Integration Setup</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>To connect this form to Google Sheets:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-2 text-xs">
                  <li>Create a Google Sheet named "ASQA GROUP Clients"</li>
                  <li>Add columns: Name, Phone, Email, Company, Service, Message, Timestamp</li>
                  <li>Use Google Apps Script or a service like Sheet.best, Sheetson, or Google Forms</li>
                  <li>Update the form submission handler in the code with your endpoint</li>
                </ol>
                <p className="mt-3 text-xs text-gray-600">
                  All service requests will be collected in one centralized sheet for easy management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
