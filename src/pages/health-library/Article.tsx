import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Bookmark, Printer } from 'lucide-react';

const articlesData: Record<string, {
  title: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  date: string;
}> = {
  'hip-pain': {
    title: '5 Causes of Women\'s Hip Pain',
    category: 'Orthopedic Health',
    readTime: '5 min read',
    image: '/images/nurse-talking-to-female-patient-healthy-highlight.jpg',
    author: 'Dr. Michael Kelvin',
    date: 'January 15, 2026',
    content: `
      <p>You might not be shaking your hips the same way people do in music videos, but hip pain can still thwart women's everyday lives—whether you're dancing, gardening or just walking. While you might think you're too young to be concerned about hip pain, it is common for women of all ages, and it's important to see your healthcare provider to ensure it is, in fact, hip pain you're feeling rather than thigh, buttock or lower back pain.</p>
      
      <h2>1. Arthritis</h2>
      <p>Osteoarthritis is the most common form of arthritis and occurs when the protective cartilage that cushions the ends of your bones wears down over time. In the hip, this can cause pain, stiffness, and reduced range of motion. Women are particularly susceptible to osteoarthritis, especially after menopause.</p>
      
      <h2>2. Bursitis</h2>
      <p>Bursae are small, fluid-filled sacs that cushion the bones, tendons and muscles near your joints. When these become inflamed—often due to repetitive activities or prolonged pressure—you may experience sharp, intense pain in the hip area.</p>
      
      <h2>3. Hip Fractures</h2>
      <p>As women age, the risk of hip fractures increases, particularly for those with osteoporosis. A hip fracture is a serious injury that requires immediate medical attention and often surgery.</p>
      
      <h2>4. Tendonitis</h2>
      <p>Tendons are the thick bands that attach muscles to bones. When these become irritated or inflamed, usually from overuse, you may experience pain in the hip and groin area.</p>
      
      <h2>5. Hip Labral Tear</h2>
      <p>The labrum is a ring of cartilage that follows the outside rim of the socket of your hip joint. Athletes and people who perform repetitive twisting movements are at higher risk for this injury.</p>
      
      <h2>When to See a Doctor</h2>
      <p>If you experience persistent hip pain that doesn't improve with rest, or if the pain interferes with your daily activities, it's time to consult with an orthopedic specialist. Early diagnosis and treatment can help prevent further damage and improve your quality of life.</p>
    `
  },
  'back-pain': {
    title: 'A Real Pain in the Back',
    category: 'Orthopedic Health',
    readTime: '6 min read',
    image: '/images/avangard4.jpg',
    author: 'Dr. Michael Kelvin',
    date: 'January 10, 2026',
    content: `
      <p>In the movie Spider-Man: No Way Home, Spider-Men Tobey Maguire and Andrew Garfield share a scene where they complain about their backs being stiff from "all the swinging." Though it's supposed to be a joke about getting older, they make a good point—even superheroes experience back pain. In fact, studies show that 80% of Americans will experience back pain at some point in their lives.</p>
      
      <h2>Common Causes of Back Pain</h2>
      
      <h3>Lifestyle and Risk Factors</h3>
      <p>Back problems are more common among people who:</p>
      <ul>
        <li>Are overweight or obese</li>
        <li>Have poor posture</li>
        <li>Lift heavy objects improperly</li>
        <li>Have sedentary lifestyles</li>
        <li>Smoke</li>
        <li>Are over 30 years old</li>
      </ul>
      
      <h3>Medical Conditions</h3>
      <p>Several medical conditions can cause back pain:</p>
      <ul>
        <li><strong>Herniated discs:</strong> When the soft material inside a disc pushes through a crack in the tougher exterior</li>
        <li><strong>Spinal stenosis:</strong> Narrowing of the spaces within your spine</li>
        <li><strong>Osteoarthritis:</strong> Breakdown of cartilage in the joints and discs in the neck and lower back</li>
        <li><strong>Osteoporosis:</strong> Bones becoming brittle and porous</li>
      </ul>
      
      <h2>Prevention Tips</h2>
      <p>While not all back pain can be prevented, you can reduce your risk by:</p>
      <ul>
        <li>Maintaining a healthy weight</li>
        <li>Exercising regularly to strengthen back and core muscles</li>
        <li>Practicing good posture</li>
        <li>Using proper lifting techniques</li>
        <li>Quitting smoking</li>
      </ul>
      
      <h2>When to Seek Medical Attention</h2>
      <p>Most back pain improves with self-care and time. However, contact your doctor if your back pain:</p>
      <ul>
        <li>Persists past a few weeks</li>
        <li>Is severe and doesn't improve with rest</li>
        <li>Spreads down one or both legs</li>
        <li>Causes weakness, numbness or tingling in one or both legs</li>
        <li>Is accompanied by unexplained weight loss</li>
      </ul>
    `
  },
  'joint-sounds': {
    title: 'Assessing Joint Sounds and Health',
    category: 'Orthopedic Health',
    readTime: '4 min read',
    image: '/images/medicos.png',
    author: 'Dr. Michael Kelvin',
    date: 'January 5, 2026',
    content: `
      <p>What's That Sound? Clicking, cracking, grinding, popping, snapping — these are all common and generally harmless sounds our joints can make. It's a natural part of aging, and the sound could be the result of one of these conditions:</p>
      
      <h2>Why Joints Make Noise</h2>
      
      <h3>Cartilage Wear</h3>
      <p>As cartilage wears away, your bones grind or rub each other. This causes the sound you are hearing. While this can be alarming, it's a normal part of the aging process.</p>
      
      <h3>Tight Muscles and Tendons</h3>
      <p>Tight muscles and tendons can make sounds when moving over bone or as they return to their original position. This is particularly common in the knees and shoulders.</p>
      
      <h3>Gas Bubbles</h3>
      <p>When you pop or crack a joint like your knuckles, you're releasing nitrogen gas bubbles that have built up in the joint fluid. This is harmless and doesn't cause arthritis as commonly believed.</p>
      
      <h2>When to Be Concerned</h2>
      <p>While most joint sounds are harmless, you should consult a doctor if the sound is accompanied by:</p>
      <ul>
        <li>Pain or swelling</li>
        <li>Reduced range of motion</li>
        <li>Joint instability</li>
        <li>Locking or catching sensations</li>
      </ul>
      
      <h2>Maintaining Joint Health</h2>
      <p>To keep your joints healthy:</p>
      <ul>
        <li>Stay active with low-impact exercises</li>
        <li>Maintain a healthy weight</li>
        <li>Strengthen the muscles around your joints</li>
        <li>Stay hydrated</li>
        <li>Eat a balanced diet rich in omega-3 fatty acids</li>
      </ul>
    `
  },
  'carpal-tunnel': {
    title: 'Carpal Tunnel Syndrome',
    category: 'Orthopedic Health',
    readTime: '6 min read',
    image: '/images/Fotos-308-768x512.jpg',
    author: 'Dr. Michael Kelvin',
    date: 'December 28, 2025',
    content: `
      <p>More than eight million people are affected by carpal tunnel syndrome annually. While many people attribute the cause to long days at a keyboard, its origins are generally more difficult to define.</p>
      
      <h2>What is Carpal Tunnel Syndrome?</h2>
      <p>The carpal tunnel is a narrow area composed of bones and ligaments on the side of your palm. Carpal tunnel syndrome is caused by pressure on the median nerve in that area, which can present as numbness, tingling and weakness in the hand and arm.</p>
      
      <h2>Symptoms</h2>
      <ul>
        <li>Numbness or tingling in the thumb, index, middle, and ring fingers</li>
        <li>Weakness in the hand</li>
        <li>Dropping objects due to weakness</li>
        <li>Pain that radiates up the arm</li>
        <li>Symptoms that worsen at night</li>
      </ul>
      
      <h2>Risk Factors</h2>
      <p>Just as some people are smaller than others, some have smaller carpal tunnels, which increases the risk. Other risk factors include:</p>
      <ul>
        <li>Women are three times more likely to develop carpal tunnel</li>
        <li>Diabetes and other metabolic disorders</li>
        <li>Rheumatoid arthritis</li>
        <li>Thyroid disorders</li>
        <li>Pregnancy</li>
        <li>Repetitive hand use</li>
      </ul>
      
      <h2>Treatment Options</h2>
      <p>Treatment depends on severity and may include:</p>
      <ul>
        <li><strong>Non-surgical:</strong> Wrist splinting, NSAIDs, corticosteroid injections</li>
        <li><strong>Surgical:</strong> Carpal tunnel release surgery to relieve pressure on the median nerve</li>
      </ul>
      
      <h2>Prevention</h2>
      <p>To reduce your risk:</p>
      <ul>
        <li>Take frequent breaks from repetitive tasks</li>
        <li>Maintain proper wrist position while typing</li>
        <li>Use ergonomic equipment</li>
        <li>Keep hands warm</li>
        <li>Do hand and wrist exercises</li>
      </ul>
    `
  },
  'hip-replacement': {
    title: 'Do You Need A Hip Replacement?',
    category: 'Orthopedic Health',
    readTime: '8 min read',
    image: '/images/avangard2.jpg',
    author: 'Dr. Michael Kelvin',
    date: 'December 20, 2025',
    content: `
      <p>According to a 2017 report in the Proceedings of the National Academy of Sciences, hip replacements increased 30% between 2007 and 2017. And though we might consider this surgery for older adults, there's been a spike in hip replacements in those between the ages of 45 and 54.</p>
      
      <h2>Conditions That May Require Hip Replacement</h2>
      
      <h3>Osteoarthritis</h3>
      <p>This "wear-and-tear" arthritis thins cartilage and is the most common reason for hip replacement. As the cartilage wears away, bone rubs against bone, causing pain and stiffness.</p>
      
      <h3>Rheumatoid Arthritis</h3>
      <p>An autoimmune disease that causes inflammation that can damage cartilage and bone.</p>
      
      <h3>Osteonecrosis</h3>
      <p>When blood supply to the ball portion of the hip joint is reduced, the bone can collapse and deform.</p>
      
      <h3>Hip Fractures</h3>
      <p>Serious breaks in the hip bone that may require replacement rather than repair.</p>
      
      <h2>Signs You May Need Hip Replacement</h2>
      <ul>
        <li>Hip pain that persists despite pain medication</li>
        <li>Pain that worsens with walking, even with a cane or walker</li>
        <li>Pain that interferes with sleep</li>
        <li>Difficulty going up or down stairs</n        <li>Trouble rising from a seated position</li>
        <li>Inability to participate in activities you enjoy</li>
      </ul>
      
      <h2>The Procedure</h2>
      <p>During hip replacement surgery, the damaged parts of the hip joint are removed and replaced with artificial components made of metal, ceramic, or plastic. The procedure typically takes 1-2 hours.</p>
      
      <h2>Recovery</h2>
      <p>Most patients stay in the hospital for 1-3 days after surgery. Physical therapy begins immediately to help you regain strength and mobility. Full recovery typically takes 3-6 months.</p>
    `
  },
};

export default function Article() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articlesData[articleId] : null;

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/health-library" className="btn-primary">
          Back to Health Library
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Article Header */}
      <div className="bg-gradient-to-br from-[#003366] to-[#0066CC] text-white">
        <div className="px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/health-library" className="hover:text-white">Health Library</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{article.title}</span>
            </nav>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-blue-200 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8 pb-8 border-b">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t">
              <Link 
                to="/health-library" 
                className="inline-flex items-center gap-2 text-[#003366] font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Health Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
