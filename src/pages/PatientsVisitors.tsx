import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  FileText, 
  UserCheck,
  CreditCard,
  Car,
  Wifi,
  Coffee,
  Accessibility,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

const quickLinks = [
  { title: 'Patient Portal', description: 'Access your medical records online', icon: UserCheck, link: '#' },
  { title: 'Billing & Insurance', description: 'Payment options and insurance info', icon: CreditCard, link: '#' },
  { title: 'Medical Records', description: 'Request your health records', icon: FileText, link: '#' },
  { title: 'Visitor Guidelines', description: 'Hours and policies for visitors', icon: UserCheck, link: '#' },
];

const amenities = [
  { title: 'Free Parking', description: 'Convenient parking for patients and visitors', icon: Car },
  { title: 'Free WiFi', description: 'Stay connected during your visit', icon: Wifi },
  { title: 'Cafeteria', description: 'Dining options available on-site', icon: Coffee },
  { title: 'Accessibility', description: 'Full accessibility for all patients', icon: Accessibility },
];

const faqs = [
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or imaging studies.'
  },
  {
    question: 'How early should I arrive for my appointment?',
    answer: 'We recommend arriving 15-20 minutes before your scheduled appointment time to complete any necessary paperwork.'
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans. Please contact our billing department or check with your insurance provider to verify coverage.'
  },
  {
    question: 'Can I get a copy of my medical records?',
    answer: 'Yes, you can request your medical records through our Patient Portal or by contacting our Medical Records department.'
  },
];

export default function PatientsVisitors() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Patients & Visitors</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">Patients & Visitors</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Everything you need to know for your visit to Lutheran Health Network.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-12 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="bg-white rounded-xl p-5 card-shadow card-hover block"
                >
                  <item.icon className="w-8 h-8 text-[#003366] mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="py-12">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-2xl font-bold text-gray-800 mb-6">Our Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* US Location */}
              <div className="bg-white rounded-xl overflow-hidden card-shadow">
                <div className="h-48 bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">United States</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">The Orthopedic Hospital</h3>
                  <p className="text-gray-600 mb-4">
                    7952 W Jefferson Blvd<br />
                    Fort Wayne, IN 46804
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      (260) 435-2999
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      Mon - Fri: 8:00 AM - 5:00 PM
                    </div>
                  </div>
                  <Link 
                    to="/doctors/orthopedic-surgeon"
                    className="text-[#003366] font-medium text-sm flex items-center gap-1 mt-4"
                  >
                    View Doctors <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Brazil Location */}
              <div className="bg-white rounded-xl overflow-hidden card-shadow">
                <div className="h-48 bg-gradient-to-br from-[#4A7C59] to-[#5a9c6d] flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">Brazil</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">AVANGARD</h3>
                  <p className="text-gray-600 mb-1">Centro de Otimização Metabólica</p>
                  <p className="text-gray-600 mb-4">
                    Av. Paulista, 1000<br />
                    Porto Alegre, RS, Brazil
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      +55 (51) 99999-9999
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      Seg - Sex: 8h às 18h
                    </div>
                  </div>
                  <Link 
                    to="/doctors/bariatric-surgeon"
                    className="text-[#4A7C59] font-medium text-sm flex items-center gap-1 mt-4"
                  >
                    View Doctors <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="py-12 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-2xl font-bold text-gray-800 mb-6">Patient Amenities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {amenities.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 card-shadow">
                  <item.icon className="w-8 h-8 text-[#003366] mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#003366]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-5 card-shadow">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-12 bg-[#003366]">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="section-title text-2xl lg:text-3xl mb-4">
              Have More Questions?
            </h2>
            <p className="text-blue-100 mb-6">
              Our patient services team is here to help. Contact us for assistance.
            </p>
            <Link to="/contact" className="btn-secondary inline-block">
              Contact Patient Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
