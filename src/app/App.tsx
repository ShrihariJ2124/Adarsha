import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { CoreValues } from './components/CoreValues';
import { Facilities } from './components/Facilities';
import { Academics } from './components/Academics';
import { Community } from './components/Community';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommunityDetailPage, type CommunityPageKey } from './components/CommunityDetailPage';

function getCommunityPageFromHash(hash: string): CommunityPageKey | null {
  const match = hash.match(/^#\/community\/(parents|alumni|faculty)$/);
  return (match?.[1] as CommunityPageKey) ?? null;
}

export default function App() {
  useEffect(() => {
    const isCommunityHash = window.location.hash.startsWith('#/community/');
    if (!isCommunityHash && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const [communityPage, setCommunityPage] = useState<CommunityPageKey | null>(() =>
    getCommunityPageFromHash(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => {
      setCommunityPage(getCommunityPageFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (communityPage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const sectionId = window.location.hash.replace(/^#/, '');
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, [communityPage]);

  return (
    <div
      className="min-h-screen bg-[#fef9f3] bg-[url('/images/bg-image.png')] bg-top bg-[length:100%_auto] bg-repeat-y"
    >
      <Navbar />
      <main>
        {communityPage ? (
          <CommunityDetailPage pageKey={communityPage} />
        ) : (
          <>
            <HeroCarousel />
            <About />
            <MissionVision />
            <CoreValues />
            <Facilities />
            <Academics />
            <Community />
            <Gallery />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
