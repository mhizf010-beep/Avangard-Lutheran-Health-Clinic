import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Target,
  Shield,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'We put our patients first in everything we do, ensuring compassionate, personalized care for every individual.'
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We strive for the highest standards of medical care, continuously improving our services and outcomes.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Our multidisciplinary teams work together to provide comprehensive, coordinated care.'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'We believe quality healthcare should be accessible to all, regardless of location or background.'
  },
];

const milestones = [
  { year: '2000', event: 'The Orthopedic Hospital founded in Fort Wayne, Indiana' },
  { year: '2005', event: 'Expanded services to include comprehensive orthopedic care' },
  { year: '2010', event: 'Joined Lutheran Health Network' },
  { year: '2015', event: 'AVANGARD established in Porto Alegre, Brazil' },
  { year: '2020', event: 'Launched international patient services' },
  { year: '2025', event: 'Celebrating 25 years of exceptional healthcare' },
];

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">About Lutheran Health Network</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Providing exceptional healthcare across borders for over 25 years.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lutheran Health Network is dedicated to improving the health and well-being 
                  of the communities we serve. Through our network of hospitals, clinics, and 
                  specialized care centers in the United States and Brazil, we provide 
                  compassionate, high-quality healthcare that puts patients first.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of experienced physicians, nurses, and healthcare professionals 
                  work together to deliver personalized care using the latest medical 
                  advancements and technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#003366] to-[#0066CC] rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be the leading healthcare network recognized for excellence in patient 
                  care, medical innovation, and community health improvement. We envision 
                  a world where everyone has access to quality healthcare, regardless of 
                  where they live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-12 lg:py-16 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at Lutheran Health Network.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 card-shadow card-hover">
                  <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#003366]" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600">
                Milestones in our history of healthcare excellence.
              </p>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-bold text-[#003366] text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 bg-[#003366] rounded-full" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-200" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 lg:py-16 bg-[#003366]">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Years of Service</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">2</div>
                <div className="text-blue-200">Countries</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Expert Physicians</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">100K+</div>
                <div className="text-blue-200">Patients Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-gray-800 mb-4">
                Our Leadership
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the physicians leading our medical teams.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link 
                to="/doctors/orthopedic-surgeon"
                className="bg-white rounded-xl overflow-hidden card-shadow card-hover block"
              >
                <div className="h-48 bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#003366]" />
                    <span className="text-sm text-gray-500">United States</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Michael Kelvin</h3>
                  <p className="text-gray-600 mb-3">Orthopedic Surgeon</p>
                  <p className="text-gray-500 text-sm mb-4">Lead Physician, The Orthopedic Hospital</p>
                  <span className="text-[#003366] font-medium text-sm flex items-center gap-1">
                    View Profile <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link 
                to="/doctors/bariatric-surgeon"
                className="bg-white rounded-xl overflow-hidden card-shadow card-hover block"
              >
                <div className="h-48 bg-gradient-to-br from-[#4A7C59] to-[#5a9c6d] flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#4A7C59]" />
                    <span className="text-sm text-gray-500">Brazil</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. AVANGARD</h3>
                  <p className="text-gray-600 mb-3">Bariatric Surgeon</p>
                  <p className="text-gray-500 text-sm mb-4">Lead Physician, AVANGARD Centro de Otimização Metabólica</p>
                  <span className="text-[#4A7C59] font-medium text-sm flex items-center gap-1">
                    View Profile <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-2xl lg:text-3xl text-gray-800 mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented healthcare professionals to join our growing network.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              View Careers <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
