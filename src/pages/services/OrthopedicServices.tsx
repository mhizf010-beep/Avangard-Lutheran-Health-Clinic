import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Bone, 
  Activity,
  UserCheck,
  Clock,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';

const procedures = [
  {
    title: 'Hip Replacement',
    description: 'Total and partial hip replacement using minimally invasive techniques for faster recovery.',
    recovery: '6-12 weeks'
  },
  {
    title: 'Knee Replacement',
    description: 'Advanced knee replacement surgery to restore mobility and reduce pain.',
    recovery: '6-12 weeks'
  },
  {
    title: 'Shoulder Surgery',
    description: 'Arthroscopic and open procedures for rotator cuff tears, impingement, and arthritis.',
    recovery: '4-16 weeks'
  },
  {
    title: 'Sports Medicine',
    description: 'Treatment of sports-related injuries including ACL tears, meniscus injuries, and fractures.',
    recovery: 'Varies by injury'
  },
  {
    title: 'Spine Surgery',
    description: 'Minimally invasive procedures for herniated discs, spinal stenosis, and degenerative conditions.',
    recovery: '4-12 weeks'
  },
  {
    title: 'Hand & Wrist Surgery',
    description: 'Treatment for carpal tunnel, trigger finger, fractures, and arthritis.',
    recovery: '2-8 weeks'
  },
];

const conditions = [
  'Arthritis',
  'Fractures',
  'Sports Injuries',
  'Joint Pain',
  'Back Pain',
  'Tendonitis',
  'Bursitis',
  'Ligament Tears',
];

export default function OrthopedicServices() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Orthopedic Surgery</span>
            </nav>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#4A7C59] text-white text-xs font-medium px-3 py-1 rounded-full">
                United States
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Orthopedic Surgery</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Comprehensive musculoskeletal care from experienced orthopedic specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Orthopedic Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At The Orthopedic Hospital, part of Lutheran Health Network, we provide comprehensive 
                    orthopedic care using the latest techniques and technology. Our team of board-certified 
                    orthopedic surgeons specializes in treating conditions affecting bones, joints, muscles, 
                    ligaments, and tendons.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're dealing with chronic joint pain, a sports injury, or need joint replacement 
                    surgery, our experienced team is dedicated to helping you return to an active, pain-free life.
                  </p>
                </section>

                {/* Procedures */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Procedures</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {procedures.map((procedure, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 card-shadow card-hover">
                        <div className="flex items-center gap-2 mb-3">
                          <Bone className="w-5 h-5 text-[#003366]" />
                          <h3 className="font-semibold text-gray-800">{procedure.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{procedure.description}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          Recovery: {procedure.recovery}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conditions Treated */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {conditions.map((condition, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#4A7C59]" />
                        {condition}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Patient Journey */}
                <section className="bg-gradient-to-r from-[#003366] to-[#0066CC] rounded-xl p-6 lg:p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Your Patient Journey</h2>
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <p className="font-medium">Consultation</p>
                      <p className="text-sm text-blue-200">Initial evaluation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <p className="font-medium">Diagnosis</p>
                      <p className="text-sm text-blue-200">Imaging & tests</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <p className="font-medium">Treatment</p>
                      <p className="text-sm text-blue-200">Surgery or therapy</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <p className="font-medium">Recovery</p>
                      <p className="text-sm text-blue-200">Rehabilitation</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Location Card */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#003366]" />
                    Location
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="font-medium text-gray-800">The Orthopedic Hospital</p>
                    <p className="text-gray-600">
                      7952 W Jefferson Blvd<br />
                      Fort Wayne, IN 46804
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      (260) 435-2999
                    </div>
                  </div>
                </div>

                {/* Doctor Card */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#003366]" />
                    Lead Physician
                  </h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/nurse-talking-to-female-patient-healthy-highlight.jpg" 
                      alt="Dr. Michael Kelvin"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Dr. Michael Kelvin</p>
                      <p className="text-sm text-gray-600">Orthopedic Surgeon</p>
                    </div>
                  </div>
                  <Link 
                    to="/doctors/orthopedic-surgeon"
                    className="text-[#003366] font-medium text-sm flex items-center gap-1 mt-4"
                  >
                    View Profile <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* CTA Card */}
                <div className="bg-[#4A7C59] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Schedule a consultation with our orthopedic team today.
                  </p>
                  <Link 
                    to="/contact"
                    className="bg-white text-[#4A7C59] font-semibold px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </div>

                {/* Insurance */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#003366]" />
                    Insurance
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    We accept most major insurance plans. Contact us to verify your coverage.
                  </p>
                  <Link to="/contact" className="text-[#003366] font-medium text-sm">
                    Verify Insurance →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
