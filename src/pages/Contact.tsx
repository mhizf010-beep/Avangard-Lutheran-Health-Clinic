import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar
} from 'lucide-react';

const locations = [
  {
    name: 'The Orthopedic Hospital',
    address: '7952 W Jefferson Blvd',
    city: 'Fort Wayne, IN 46804',
    country: 'United States',
    phone: '(260) 435-2999',
    email: 'info@lutheranhealth.net',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    color: 'blue'
  },
  {
    name: 'AVANGARD',
    subtitle: 'Centro de Otimização Metabólica',
    address: 'Av. Paulista, 1000',
    city: 'Porto Alegre, RS',
    country: 'Brazil',
    phone: '+55 (51) 99999-9999',
    email: 'contato@avangard.com.br',
    hours: 'Seg - Sex: 8h às 18h',
    color: 'green'
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">Contact Us</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              We're here to help. Reach out to us for appointments, questions, or more information.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="section-title text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input 
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <input 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Location
                        </label>
                        <select 
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                        >
                          <option value="">Select a location</option>
                          <option value="us">The Orthopedic Hospital (United States)</option>
                          <option value="brazil">AVANGARD (Brazil)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}

                {/* Alternative Contact */}
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-[#003366]" />
                    <h3 className="font-semibold text-gray-800">Prefer to call?</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our team is available to take your call during business hours.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-[#003366]" />
                      <strong>US:</strong> (260) 435-2999
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-[#4A7C59]" />
                      <strong>Brazil:</strong> +55 (51) 99999-9999
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h2 className="section-title text-2xl font-bold text-gray-800 mb-6">
                  Our Locations
                </h2>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        location.color === 'blue' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {location.country}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{location.name}</h3>
                      {location.subtitle && (
                        <p className="text-gray-600 mb-3">{location.subtitle}</p>
                      )}
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <div>
                            {location.address}<br />
                            {location.city}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          {location.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          {location.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          {location.hours}
                        </div>
                      </div>
                      <a 
                        href="#"
                        className={`inline-flex items-center gap-1 text-sm font-medium mt-4 ${
                          location.color === 'blue' ? 'text-[#003366]' : 'text-[#4A7C59]'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
