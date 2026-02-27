import { ArrowLeft, GraduationCap, Phone, Quote, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { siteImages } from '../data/siteImages';

export type CommunityPageKey = 'parents' | 'alumni' | 'faculty';
const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const parentsTestimonials = [
  {
    name: 'Parents Feedback',
    relation: 'ಶಾಲೆಯ ಬಗ್ಗೆ ಅಭಿಪ್ರಾಯ',
    image: imagePath('parent-lokeshmurty.png'),
    quote:
      'ಶಿವಲಿಂಗಸ್ವಾಮೀಜಿ ಅವರು ಗ್ರಾಮೀಣ ಭಾಗದ ಮಕ್ಕಳಿಗೆ ಜ್ಞಾನದ ಬೆಳಕನ್ನು ನೀಡಬೇಕು ಎಂಬ ಉದ್ದೇಶದಿಂದ ಆದರ್ಶ ಶಾಲೆ ತೆರೆದು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ನುರಿತ ಶಿಕ್ಷಕರಿಂದ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ನೀಡುತ್ತಿರುವುದರ ಜತೆಗೆ ಶಾಲೆಯಲ್ಲಿ ಕುಡಿಯುವ ನೀರು, ಶೌಚಾಲಯದ ವ್ಯವಸ್ಥೆ, ವಿಶಾಲವಾದ ಆಟದ ಮೈದಾನ, ಆವರಣದ ಸುತ್ತ ಕಾಂಪೌಂಡ್ ನಿರ್ಮಿಸಿ, ಸಸಿಗಳನ್ನು ನೆಟ್ಟು ಒಳ್ಳೆಯ ಪರಿಸರದಲ್ಲಿ ಶಿಕ್ಷಣ ನೀಡುತ್ತಾ ಮಕ್ಕಳ ಸರ್ವಾಂಗೀಣ ಪ್ರಗತಿಗೆ ದಾರಿ ದೀಪವಾಗಿದ್ದಾರೆ.',
  },
];

const alumniTestimonials = [
  {
    name: 'Anil P.',
    detail: 'Batch 2016 • Software Engineer',
    image: siteImages.community.alumni,
    quote:
      'This school gave me discipline and confidence. The foundation I received here still helps me in my career.',
  },
  {
    name: 'Nandini S.',
    detail: 'Batch 2018 • Nursing Professional',
    image: siteImages.community.alumni,
    quote:
      'My teachers encouraged me to dream big. I am proud to return and guide students who are now on the same path.',
  },
  {
    name: 'Karthik V.',
    detail: 'Batch 2014 • Entrepreneur',
    image: siteImages.community.alumni,
    quote:
      'The values and communication skills I learned here shaped my leadership journey and my approach to life.',
  },
];

const facultyMembers = [
  {
    name: 'Nandini S Chandra',
    phone: '9632795749',
    qualification: 'PUC, D.Ed, NST Computer',
    photo: imagePath('FacultyNandini madma.png'),
  },
  {
    name: 'Harshitha Siddaraju',
    phone: '8123823570',
    qualification: 'B.A',
    photo: imagePath('FacultyHarshitha.jpg'),
  },
  {
    name: 'Shivakumar M Lingayya',
    phone: 'Not provided',
    qualification: 'PUC, TCH, B.Com',
    photo: imagePath('FacultyShivakumar sir.png'),
  },
  {
    name: 'Naveeda Parveen',
    phone: '7483511040',
    qualification: 'PUC, JOC, Hindi B.Ed',
    photo: imagePath('FacultyNaveeda madam.png'),
  },
  {
    name: 'Lokeshmurthy S/O M. Mallappa',
    phone: 'Not provided',
    qualification: 'PUC, TCH',
    photo: imagePath('Faculty-Lokesh.png'),
  },
];

const pageMeta = {
  parents: {
    title: 'Parents Section',
    subtitle: 'Parent voices and experiences with the school community',
    icon: Users,
  },
  alumni: {
    title: 'Alumni Section',
    subtitle: 'Former students sharing their memories and achievements',
    icon: GraduationCap,
  },
  faculty: {
    title: 'Faculty Section',
    subtitle: 'Meet our dedicated teachers and their qualifications',
    icon: Users,
  },
} as const;

type CommunityDetailPageProps = {
  pageKey: CommunityPageKey;
};

export function CommunityDetailPage({ pageKey }: CommunityDetailPageProps) {
  const meta = pageMeta[pageKey];
  const Icon = meta.icon;

  return (
    <section className="pt-36 pb-16 lg:pb-24 bg-gradient-to-br from-[#fffaf2]/80 via-white/80 to-[#eef4ff]/80 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#1e3a8a] rounded-full mb-4">
            <Icon className="w-4 h-4" />
            <span className="font-semibold text-sm">{meta.title}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-3">{meta.title}</h2>
          <p className="text-gray-600 text-lg">{meta.subtitle}</p>
        </motion.div>

        {pageKey === 'parents' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {parentsTestimonials.map((parent, index) => (
              <motion.article
                key={parent.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-3"
              >
                <div className="grid lg:grid-cols-[280px_1fr]">
                  <img src={parent.image} alt={parent.name} className="w-full h-72 lg:h-full object-cover" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-[#1e3a8a]">{parent.name}</h3>
                    <p className="text-sm text-[#ea580c] font-semibold mb-3">{parent.relation}</p>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      <Quote className="inline w-4 h-4 mr-1 text-[#1e3a8a]" />
                      {parent.quote}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {pageKey === 'alumni' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {alumniTestimonials.map((alumni, index) => (
              <motion.article
                key={alumni.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={alumni.image} alt={alumni.name} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a]">{alumni.name}</h3>
                  <p className="text-sm text-[#ea580c] font-semibold mb-3">{alumni.detail}</p>
                  <p className="text-gray-600 leading-relaxed">
                    <Quote className="inline w-4 h-4 mr-1 text-[#1e3a8a]" />
                    {alumni.quote}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {pageKey === 'faculty' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.article
                key={faculty.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="w-full h-72 bg-[#f7f9ff] p-2 flex items-center justify-center border-b border-blue-100">
                  <img src={faculty.photo} alt={faculty.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{faculty.name}</h3>
                  <p className="text-gray-700 mb-2">{faculty.qualification}</p>
                  <p className="text-gray-700 inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1e3a8a]" />
                    {faculty.phone}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
