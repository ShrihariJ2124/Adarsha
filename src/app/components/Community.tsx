import { Users, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { siteImages } from '../data/siteImages';

const communityGroups = [
  {
    icon: Users,
    slug: 'parents',
    title: 'Parents',
    subtitle: 'Our First Learning Partners',
    description:
      'Monthly circle meets, class mentorship, and school-volunteer days keep parents actively involved in every child\'s growth.',
    image: siteImages.community.parents,
    badge: 'Home-School Alliance',
  },
  {
    icon: GraduationCap,
    slug: 'alumni',
    title: 'Alumni',
    subtitle: 'Roots That Keep Giving Back',
    description:
      'Former students return as mentors, speakers, and role models to guide current learners with real-life inspiration.',
    image: siteImages.community.alumni,
    badge: 'Legacy Network',
  },
  {
    icon: Briefcase,
    slug: 'faculty',
    title: 'Faculty',
    subtitle: 'The Driving Force',
    description:
      'Dedicated teachers combine values-based learning, innovation, and personal guidance to shape confident young minds.',
    image: siteImages.community.faculty,
    badge: 'Teaching Excellence',
  },
];

export function Community() {
  return (
    <section id="community" className="py-16 lg:py-24 bg-gradient-to-br from-[#fffaf2]/80 via-white/80 to-[#eef4ff]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">Our Community</h2>
          <p className="text-gray-600 text-lg">Parents, alumni, and faculty building one shared future</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {communityGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[#1e3a8a]">
                    {group.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{group.title}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{group.subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{group.description}</p>
                  <a
                    href={`#/community/${group.slug}`}
                    className="inline-flex items-center gap-2 text-[#ea580c] font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
