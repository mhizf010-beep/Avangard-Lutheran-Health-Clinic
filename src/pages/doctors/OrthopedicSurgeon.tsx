import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  GraduationCap, 
  Stethoscope,
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const specialties = [
  'Hip Replacement Surgery',
  'Knee Replacement Surgery',
  'Sports Medicine',
  'Arthroscopic Surgery',
  'Joint Preservation',
  'Fracture Care',
];

const education = [
  {
    degree: 'Doctor of Medicine (MD)',
    school: 'Harvard Medical School',
    year: '1998'
  },
  {
    degree: 'Residency in Orthopedic Surgery',
    school: 'Mayo Clinic',
    year: '2003'
  },
  {
    degree: 'Fellowship in Joint Replacement',
    school: 'Hospital for Special Surgery',
    year: '2004'
  },
];

const certifications = [
  'American Board of Orthopedic Surgery',
  'Fellow of the American Academy of Orthopedic Surgeons',
  'American Association of Hip and Knee Surgeons',
];

export default function OrthopedicSurgeon() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/doctors" className="hover:text-white">Find a Doctor</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Dr. Michael Kelvin</span>
            </nav>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#4A7C59] text-white text-xs font-medium px-3 py-1 rounded-full">
                United States
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Dr. Michael Kelvin</h1>
            <p className="text-blue-100 mt-2">Orthopedic Surgeon</p>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Photo & Quick Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl overflow-hidden card-shadow mb-6">
                  <img 
                    src="/images/nurse-talking-to-female-patient-healthy-highlight.jpg" 
                    alt="Dr. Michael Kelvin"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Dr. Michael Kelvin</h2>
                    <p className="text-[#4A7C59] font-medium mb-4">Orthopedic Surgeon</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        Fort Wayne, Indiana
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        (260) 435-2999
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        dr.kelvin@lutheranhealth.net
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Mon - Fri: 8:00 AM - 5:00 PM
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-500 mb-2">Hospital</p>
                      <p className="font-medium text-gray-800">The Orthopedic Hospital</p>
                      <p className="text-sm text-gray-600">Lutheran Health Network</p>
                      <p className="text-sm text-gray-500 mt-1">
                        7952 W Jefferson Blvd<br />
                        Fort Wayne, IN 46804
                      </p>
                    </div>

                    <Link 
                      to="/contact" 
                      className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-[#003366]" />
                    About Dr. Kelvin
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dr. Michael Kelvin is a board-certified orthopedic surgeon with over 20 years of 
                    experience in treating musculoskeletal conditions. He specializes in hip and knee 
                    replacement surgery, sports medicine, and minimally invasive surgical techniques.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Kelvin is committed to providing personalized care to each patient, utilizing 
                    the latest advancements in orthopedic surgery to ensure optimal outcomes. His 
                    approach combines surgical expertise with a compassionate, patient-centered philosophy.
                  </p>
                </section>

                {/* Specialties */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Areas of Expertise</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#4A7C59]" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#003366]" />
                    Education & Training
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0">
                        <div>
                          <p className="font-medium text-gray-800">{edu.degree}</p>
                          <p className="text-gray-600">{edu.school}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{edu.year}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#003366]" />
                    Certifications & Memberships
                  </h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#4A7C59]" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Services Link */}
                <section className="bg-gradient-to-r from-[#003366] to-[#0066CC] rounded-xl p-6 lg:p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Orthopedic Services</h3>
                      <p className="text-blue-100">
                        Learn more about the orthopedic treatments and procedures we offer.
                      </p>
                    </div>
                    <Link 
                      to="/services/orthopedic" 
                      className="bg-white text-[#003366] font-semibold px-6 py-3 rounded hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                      View Services <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
