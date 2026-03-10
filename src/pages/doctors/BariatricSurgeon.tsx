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
  CheckCircle,
  Globe
} from 'lucide-react';

const specialties = [
  'Gastric Bypass Surgery',
  'Sleeve Gastrectomy',
  'Gastric Banding',
  'Revisional Bariatric Surgery',
  'Metabolic Syndrome Treatment',
  'Post-Surgery Nutritional Support',
];

const education = [
  {
    degree: 'Doctor of Medicine (MD)',
    school: 'Universidade de São Paulo',
    year: '2005'
  },
  {
    degree: 'Residency in General Surgery',
    school: 'Hospital das Clínicas - USP',
    year: '2010'
  },
  {
    degree: 'Fellowship in Bariatric Surgery',
    school: 'Cleveland Clinic, USA',
    year: '2011'
  },
];

const certifications = [
  'Sociedade Brasileira de Cirurgia Bariátrica (SBCBM)',
  'International Federation for the Surgery of Obesity (IFSO)',
  'American Society for Metabolic and Bariatric Surgery (ASMBS)',
];

export default function BariatricSurgeon() {
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
              <span className="text-white">Dr. AVANGARD</span>
            </nav>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#4A7C59] text-white text-xs font-medium px-3 py-1 rounded-full">
                Brazil
              </span>
              <span className="bg-[#0066CC] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Português
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Dr. AVANGARD</h1>
            <p className="text-blue-100 mt-2">Cirurgião Bariátrico / Bariatric Surgeon</p>
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
                    src="/images/Fotos-308-768x512.jpg" 
                    alt="Dr. AVANGARD"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Dr. AVANGARD</h2>
                    <p className="text-[#4A7C59] font-medium mb-4">Cirurgião Bariátrico</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        Porto Alegre, RS, Brazil
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        +55 (51) 99999-9999
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        contato@avangard.com.br
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Seg - Sex: 8h às 18h
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-500 mb-2">Hospital / Clínica</p>
                      <p className="font-medium text-gray-800">AVANGARD</p>
                      <p className="text-sm text-gray-600">Centro de Otimização Metabólica</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Av. Paulista, 1000<br />
                        Porto Alegre, RS
                      </p>
                    </div>

                    <Link 
                      to="/contact" 
                      className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
                    >
                      <Calendar className="w-5 h-5" />
                      Agendar Consulta
                    </Link>
                  </div>
                </div>

                {/* Language Note */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-sm text-blue-800">
                    <strong>Language:</strong> Dr. AVANGARD and his team provide care in Portuguese. 
                    English-speaking patients are welcome with advance notice.
                  </p>
                </div>
              </div>

              {/* Right Column - Detailed Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-[#003366]" />
                    Sobre o Dr. AVANGARD / About
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Português:</strong> O Dr. AVANGARD é um cirurgião bariátrico renomado 
                      com mais de 15 anos de experiência em cirurgia de perda de peso e otimização 
                      metabólica. Ele é dedicado a ajudar pacientes a alcançarem uma vida mais saudável 
                      através de tratamentos cirúrgicos e não-cirúrgicos personalizados.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>English:</strong> Dr. AVANGARD is a renowned bariatric surgeon with over 
                      15 years of experience in weight loss surgery and metabolic optimization. He is 
                      dedicated to helping patients achieve a healthier life through personalized surgical 
                      and non-surgical treatments.
                    </p>
                  </div>
                </section>

                {/* Specialties */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Áreas de Especialidade / Specialties
                  </h3>
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
                    Formação Acadêmica / Education
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
                    Certificações / Certifications
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

                {/* Clinic Photos */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Nossa Clínica / Our Clinic
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <img 
                      src="/images/avangard2.jpg" 
                      alt="AVANGARD Clinic Reception"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <img 
                      src="/images/avangard3.jpg" 
                      alt="AVANGARD Waiting Room"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </section>

                {/* Services Link */}
                <section className="bg-gradient-to-r from-[#4A7C59] to-[#5a9c6d] rounded-xl p-6 lg:p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Serviços Bariátricos / Bariatric Services</h3>
                      <p className="text-green-100">
                        Conheça mais sobre os tratamentos e procedimentos que oferecemos.
                      </p>
                    </div>
                    <Link 
                      to="/services/bariatric" 
                      className="bg-white text-[#4A7C59] font-semibold px-6 py-3 rounded hover:bg-green-50 transition-colors flex items-center gap-2"
                    >
                      Ver Serviços <ArrowRight className="w-5 h-5" />
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
