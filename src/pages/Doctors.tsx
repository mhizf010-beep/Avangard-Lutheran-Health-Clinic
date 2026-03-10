import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Award, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    id: 'orthopedic-surgeon',
    name: 'Dr. Michael Kelvin',
    title: 'Orthopedic Surgeon',
    specialty: 'Joint Replacement & Sports Medicine',
    location: 'Fort Wayne, Indiana, USA',
    hospital: 'The Orthopedic Hospital - Lutheran Health Network',
    image: '/images/nurse-talking-to-female-patient-healthy-highlight.jpg',
    education: 'MD, Harvard Medical School',
    experience: '20+ years',
    description: 'Dr. Kelvin is a board-certified orthopedic surgeon specializing in hip and knee replacements, sports medicine, and minimally invasive surgical techniques.',
    link: '/doctors/orthopedic-surgeon'
  },
  {
    id: 'bariatric-surgeon',
    name: 'Dr. AVANGARD',
    title: 'Bariatric Surgeon',
    specialty: 'Metabolic & Bariatric Surgery',
    location: 'Porto Alegre, RS, Brazil',
    hospital: 'AVANGARD - Centro de Otimização Metabólica',
    image: '/images/Fotos-308-768x512.jpg',
    education: 'MD, Universidade de São Paulo',
    experience: '15+ years',
    description: 'Dr. AVANGARD is a leading bariatric surgeon in Brazil, specializing in gastric bypass, sleeve gastrectomy, and metabolic optimization.',
    link: '/doctors/bariatric-surgeon'
  },
];

export default function Doctors() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.doctor-list-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.doctors-list',
            start: 'top 70%',
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Find a Doctor</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">Find a Doctor</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Connect with our network of experienced physicians across the United States and Brazil.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border-b">
        <div className="px-4 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] outline-none">
                  <option>All Specialties</option>
                  <option>Orthopedic Surgery</option>
                  <option>Bariatric Surgery</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-[#003366] outline-none">
                  <option>All Locations</option>
                  <option>United States</option>
                  <option>Brazil</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="doctors-list py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 text-gray-600">
              Showing {doctors.length} physicians
            </div>

            <div className="space-y-6">
              {doctors.map((doctor) => (
                <Link 
                  key={doctor.id}
                  to={doctor.link}
                  className="doctor-list-card bg-white rounded-xl overflow-hidden card-shadow card-hover block"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/4 h-64 lg:h-auto relative">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#4A7C59] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {doctor.location.includes('USA') ? 'United States' : 'Brazil'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/4 p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h2>
                          <p className="text-[#4A7C59] font-medium mb-2">{doctor.title}</p>
                          <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {doctor.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {doctor.education}
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              {doctor.experience} experience
                            </span>
                          </div>

                          <p className="text-gray-600 mb-4 line-clamp-2">{doctor.description}</p>

                          <div className="flex items-center gap-1 text-[#003366] font-medium">
                            View Full Profile <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="lg:text-right">
                          <p className="text-sm text-gray-500 mb-2">Hospital</p>
                          <p className="font-medium text-gray-800">{doctor.hospital}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-12">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-2xl lg:text-3xl text-gray-800 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the right physician for your needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
