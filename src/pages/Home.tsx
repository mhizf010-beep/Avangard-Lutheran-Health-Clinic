import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Users, Award, Heart, Stethoscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: '50+', label: 'Expert Physicians' },
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Heart, value: '100K+', label: 'Patients Served' },
  { icon: Stethoscope, value: '15+', label: 'Specialties' },
];

const featuredDoctors = [
  {
    name: 'Dr. Michael Kelvin',
    specialty: 'Orthopedic Surgery',
    location: 'Fort Wayne, IN',
    image: '/images/nurse-talking-to-female-patient-healthy-highlight.jpg',
    link: '/doctors/orthopedic-surgeon'
  },
  {
    name: 'Dr. AVANGARD',
    specialty: 'Bariatric Surgery',
    location: 'Porto Alegre, Brazil',
    image: '/images/Fotos-308-768x512.jpg',
    link: '/doctors/bariatric-surgeon'
  },
];

const services = [
  {
    title: 'Orthopedic Surgery',
    description: 'Comprehensive care for bones, joints, and muscles. From hip replacements to sports medicine.',
    icon: '🦴',
    link: '/services/orthopedic'
  },
  {
    title: 'Bariatric Surgery',
    description: 'Weight loss surgery and metabolic optimization for improved health and quality of life.',
    icon: '⚕️',
    link: '/services/bariatric'
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency services with experienced physicians and state-of-the-art facilities.',
    icon: '🚑',
    link: '/services'
  },
  {
    title: 'Physical Therapy',
    description: 'Rehabilitation services to help you recover and regain mobility after surgery or injury.',
    icon: '💪',
    link: '/services'
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo('.stat-card',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.service-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 70%',
          }
        }
      );

      gsap.fromTo('.doctor-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.doctors-section',
            start: 'top 70%',
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] via-[#004080] to-[#0066CC] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative px-4 lg:px-8 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="hero-content">
                <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                  Welcome to Lutheran Health Network
                </span>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                  Exceptional Healthcare{' '}
                  <span className="text-blue-200">Across Borders</span>
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-xl">
                  World-class orthopedic and bariatric surgical care in the United States and Brazil. 
                  Your health journey starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/doctors" className="btn-secondary flex items-center justify-center gap-2">
                    Find a Doctor
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded transition-all flex items-center justify-center">
                    Our Services
                  </Link>
                </div>
              </div>
              
              <div className="hero-content hidden lg:block">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#4A7C59] rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200">24/7 Emergency Line</p>
                        <p className="text-xl font-bold">1-800-555-0123</p>
                      </div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2 text-sm text-blue-200 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Multiple Locations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-200">
                        <Clock className="w-4 h-4" />
                        <span>Open 24/7 for Emergencies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-12 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card bg-white rounded-xl p-6 text-center card-shadow">
                <stat.icon className="w-8 h-8 text-[#003366] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#003366] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 lg:py-24">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#4A7C59] font-semibold text-sm tracking-wider uppercase mb-2 block">
                Our Services
              </span>
              <h2 className="section-title text-3xl lg:text-4xl text-gray-800 mb-4">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From orthopedic surgery to bariatric procedures, we offer a wide range of 
                specialized medical services to meet your healthcare needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="service-card bg-white rounded-xl p-6 card-shadow card-hover border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <span className="text-[#003366] font-medium text-sm flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="doctors-section py-16 lg:py-24 bg-gray-50">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <span className="text-[#4A7C59] font-semibold text-sm tracking-wider uppercase mb-2 block">
                  Meet Our Team
                </span>
                <h2 className="section-title text-3xl lg:text-4xl text-gray-800">
                  Featured Physicians
                </h2>
              </div>
              <Link to="/doctors" className="btn-outline text-sm">
                View All Doctors
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredDoctors.map((doctor, index) => (
                <Link 
                  key={index} 
                  to={doctor.link}
                  className="doctor-card bg-white rounded-2xl overflow-hidden card-shadow card-hover flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 h-48 sm:h-auto">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-[#4A7C59] font-medium mb-2">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {doctor.location}
                    </div>
                    <span className="text-[#003366] font-medium text-sm flex items-center gap-1">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#003366]">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with one of our expert physicians today. 
              We're here to help you achieve your health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Book an Appointment
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
