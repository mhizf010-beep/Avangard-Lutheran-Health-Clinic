import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Bone, Scale, HeartPulse, Activity, ClipboardCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'orthopedic',
    title: 'Orthopedic Surgery',
    description: 'Comprehensive care for bones, joints, and muscles. Our orthopedic specialists provide advanced surgical and non-surgical treatments for a wide range of musculoskeletal conditions.',
    icon: Bone,
    image: '/images/nurse-talking-to-female-patient-healthy-highlight.jpg',
    location: 'United States',
    link: '/services/orthopedic',
    treatments: [
      'Hip & Knee Replacement',
      'Sports Medicine',
      'Arthroscopic Surgery',
      'Fracture Care',
      'Joint Preservation'
    ]
  },
  {
    id: 'bariatric',
    title: 'Bariatric Surgery',
    description: 'Weight loss surgery and metabolic optimization to improve your health and quality of life. Our bariatric team provides comprehensive care before, during, and after surgery.',
    icon: Scale,
    image: '/images/perder-barriga-ilustracao.jpg',
    location: 'Brazil',
    link: '/services/bariatric',
    treatments: [
      'Gastric Bypass',
      'Sleeve Gastrectomy',
      'Nutritional Support',
      'Metabolic Optimization',
      'Post-Surgery Care'
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency medical services with experienced physicians and state-of-the-art facilities. We\'re here when you need us most.',
    icon: HeartPulse,
    image: '/images/medicos.png',
    location: 'All Locations',
    link: '/contact',
    treatments: [
      'Trauma Care',
      'Cardiac Emergency',
      'Stroke Care',
      'Pediatric Emergency'
    ]
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Imaging',
    description: 'Advanced imaging services including MRI, CT scans, X-rays, and ultrasound to help diagnose and treat medical conditions.',
    icon: Activity,
    image: '/images/faca-as-pazes-com-a-balanca.jpg',
    location: 'All Locations',
    link: '/contact',
    treatments: [
      'MRI Scans',
      'CT Scans',
      'X-Ray',
      'Ultrasound'
    ]
  },
  {
    id: 'checkup',
    title: 'Health Checkups',
    description: 'Comprehensive health screenings and preventive care to help you maintain optimal health and catch potential issues early.',
    icon: ClipboardCheck,
    image: '/images/avangard4.jpg',
    location: 'All Locations',
    link: '/contact',
    treatments: [
      'Annual Physicals',
      'Lab Tests',
      'Preventive Screenings',
      'Vaccinations'
    ]
  },
];

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
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
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">Our Services</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Comprehensive healthcare services across the United States and Brazil. 
              From orthopedic surgery to bariatric procedures, we're here for your health journey.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="service-card bg-white rounded-xl overflow-hidden card-shadow card-hover"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-2/5 h-64 lg:h-auto relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#003366] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {service.location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-[#003366]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                      </div>

                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 mb-2">Key Treatments:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.treatments.map((treatment, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              {treatment}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        to={service.link}
                        className="inline-flex items-center gap-2 text-[#003366] font-medium hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-2xl lg:text-3xl text-gray-800 mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to guide you to the right care. Contact us for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/doctors" className="btn-outline">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
