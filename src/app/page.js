import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MotionRoot from './components/MotionRoot';

export default function Home() {
  return (
    <MotionRoot>
      <div className="min-h-dvh">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionRoot>
  );
}
