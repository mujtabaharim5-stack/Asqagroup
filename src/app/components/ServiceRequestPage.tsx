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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Google Sheets integration would go here
    // For now, we'll simulate a successful submission
    console.log('Form submitted:', { ...formData, service: serviceName });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);

    // Reset form after 3 seconds and show success
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl mb-4 text-[#1E3A8A]">Request Submitted Successfully!</h2>
            <p className="text-lg text-gray-700 mb-8">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1E3A8A] hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl">{serviceName}</h1>
                <p className="text-lg text-blue-100 mt-2">{serviceDescription}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-lg">
                ✨ Get Free Consultation | Request Free Quote
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl mb-2 text-[#1E3A8A]">Request Consultation</h2>
              <p className="text-gray-600">Please fill out the form below and our team will contact you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600"
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
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please provide any additional information about your requirements..."
                />
              </div>

              <div className="pt-4">
                <TranslucentButton
                  onClick={() => {}}
                  className="w-full text-lg py-4"
                >
                  Submit Request
                </TranslucentButton>
              </div>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>By submitting this form, you agree to be contacted by ASQA GROUP</p>
              </div>
            </form>

            {/* Google Sheets Integration Instructions */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
              <h3 className="text-lg mb-3 text-[#1E3A8A]">📊 Google Sheets Integration Setup</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>To connect this form to Google Sheets:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
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
