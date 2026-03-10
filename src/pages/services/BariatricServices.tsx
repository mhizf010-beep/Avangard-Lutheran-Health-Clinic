import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Scale, 
  Apple,
  UserCheck,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Heart,
  Globe
} from 'lucide-react';

const procedures = [
  {
    title: 'Gastric Bypass (Y-de-Roux)',
    description: 'Creates a small stomach pouch and reroutes the small intestine. Results in significant weight loss and improvement in obesity-related conditions.',
    weightLoss: '60-80% excess weight',
    recovery: '2-4 weeks'
  },
  {
    title: 'Sleeve Gastrectomy',
    description: 'Removes approximately 80% of the stomach, leaving a tube-shaped stomach. Reduces hunger and food intake.',
    weightLoss: '50-70% excess weight',
    recovery: '2-3 weeks'
  },
  {
    title: 'Gastric Banding (Adjustable)',
    description: 'Places an adjustable band around the upper stomach to create a small pouch. Less invasive, reversible procedure.',
    weightLoss: '40-50% excess weight',
    recovery: '1-2 weeks'
  },
  {
    title: 'Revisional Bariatric Surgery',
    description: 'Corrective procedures for patients who have had previous bariatric surgery and need additional treatment.',
    weightLoss: 'Varies',
    recovery: '3-6 weeks'
  },
];

const benefits = [
  'Significant and sustained weight loss',
  'Improvement or resolution of type 2 diabetes',
  'Reduced risk of heart disease',
  'Lower blood pressure',
  'Improved sleep apnea',
  'Enhanced quality of life',
  'Increased mobility and energy',
  'Long-term health improvements',
];

const supportServices = [
  {
    title: 'Nutritional Counseling',
    description: 'Personalized meal plans and ongoing nutritional support from registered dietitians.',
    icon: Apple
  },
  {
    title: 'Psychological Support',
    description: 'Mental health support to help you prepare for and adapt to life changes after surgery.',
    icon: Heart
  },
  {
    title: 'Exercise Programs',
    description: 'Customized physical activity plans to support your weight loss and overall health.',
    icon: UserCheck
  },
];

export default function BariatricServices() {
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
              <span className="text-white">Bariatric Surgery</span>
            </nav>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#4A7C59] text-white text-xs font-medium px-3 py-1 rounded-full">
                Brazil
              </span>
              <span className="bg-[#0066CC] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Português / English
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Bariatric Surgery</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Transform your life with our comprehensive weight loss surgery and metabolic optimization programs.
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Sobre a Cirurgia Bariátrica / About Bariatric Surgery
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Português:</strong> A AVANGARD - Centro de Otimização Metabólica oferece 
                      procedimentos cirúrgicos de perda de peso de última geração em Porto Alegre, Brasil. 
                      Nossa equipe multidisciplinar trabalha junto para fornecer cuidados abrangentes 
                      antes, durante e após a cirurgia.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>English:</strong> AVANGARD - Metabolic Optimization Center offers 
                      state-of-the-art weight loss surgical procedures in Porto Alegre, Brazil. 
                      Our multidisciplinary team works together to provide comprehensive care 
                      before, during, and after surgery.
                    </p>
                  </div>
                </section>

                {/* Procedures */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Procedimentos / Procedures
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {procedures.map((procedure, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 card-shadow card-hover">
                        <div className="flex items-center gap-2 mb-3">
                          <Scale className="w-5 h-5 text-[#4A7C59]" />
                          <h3 className="font-semibold text-gray-800">{procedure.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{procedure.description}</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-1 text-gray-500">
                            <CheckCircle className="w-4 h-4 text-[#4A7C59]" />
                            Expected loss: {procedure.weightLoss}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-4 h-4" />
                            Recovery: {procedure.recovery}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Benefits */}
                <section className="bg-white rounded-xl p-6 lg:p-8 card-shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Benefícios / Benefits
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#4A7C59]" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Support Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Serviços de Apoio / Support Services
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {supportServices.map((service, index) => (
                      <div key={index} className="bg-gradient-to-br from-[#4A7C59] to-[#5a9c6d] rounded-xl p-5 text-white">
                        <service.icon className="w-8 h-8 mb-3" />
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-green-100 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Patient Journey */}
                <section className="bg-gradient-to-r from-[#4A7C59] to-[#5a9c6d] rounded-xl p-6 lg:p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Sua Jornada / Your Journey</h2>
                  <div className="grid sm:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">1</span>
                      </div>
                      <p className="text-sm font-medium">Consulta</p>
                      <p className="text-xs text-green-100">Initial</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-sm font-medium">Avaliação</p>
                      <p className="text-xs text-green-100">Evaluation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">3</span>
                      </div>
                      <p className="text-sm font-medium">Preparação</p>
                      <p className="text-xs text-green-100">Prep</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">4</span>
                      </div>
                      <p className="text-sm font-medium">Cirurgia</p>
                      <p className="text-xs text-green-100">Surgery</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">5</span>
                      </div>
                      <p className="text-sm font-medium">Acompanhamento</p>
                      <p className="text-xs text-green-100">Follow-up</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Location Card */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#4A7C59]" />
                    Localização / Location
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="font-medium text-gray-800">AVANGARD</p>
                    <p className="text-gray-600">
                      Centro de Otimização Metabólica<br />
                      Av. Paulista, 1000<br />
                      Porto Alegre, RS, Brazil
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      +55 (51) 99999-9999
                    </div>
                  </div>
                </div>

                {/* Doctor Card */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#4A7C59]" />
                    Médico / Physician
                  </h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/Fotos-308-768x512.jpg" 
                      alt="Dr. AVANGARD"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Dr. AVANGARD</p>
                      <p className="text-sm text-gray-600">Cirurgião Bariátrico</p>
                    </div>
                  </div>
                  <Link 
                    to="/doctors/bariatric-surgeon"
                    className="text-[#4A7C59] font-medium text-sm flex items-center gap-1 mt-4"
                  >
                    Ver Perfil <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* CTA Card */}
                <div className="bg-[#003366] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Pronto para começar?</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Agende uma consulta com nossa equipe hoje.
                  </p>
                  <Link 
                    to="/contact"
                    className="bg-white text-[#003366] font-semibold px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Consulta
                  </Link>
                </div>

                {/* Clinic Photos */}
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Nossa Clínica
                  </h3>
                  <div className="space-y-3">
                    <img 
                      src="/images/avangard2.jpg" 
                      alt="Clinic Reception"
                      className="rounded-lg w-full h-32 object-cover"
                    />
                    <img 
                      src="/images/avangard3.jpg" 
                      alt="Waiting Room"
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
