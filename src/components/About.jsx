import MagicBento from './MagicBento'; // Re-import MagicBento
import AboutHero from './AboutHero'; // Import the new AboutHero component
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Import the hook
import ValueCard from './ValueCard'; // Import the new ValueCard component
import { Link } from 'react-router-dom'; // Import Link for navigation
import InquiriesForm from './InquiriesForm'; // Import the InquiriesForm component
import ValueReveal from './ValueReveal'; // Import the new ValueReveal component

// Import icons for ValueCard components
import gradformIcon from '/icons/gradform-icon.png';
import pinnacleIcon from '/icons/pinnacle.png';
import compassIcon from '/icons/compass session.png';
import vaultIcon from '/icons/vault.png';
import ascendIcon from '/icons/ascend.png';

const About = () => {
  const [whatIsGradformRef, whatIsGradformIsIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [builtByStudentsRef, builtByStudentsIsIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <>
      <AboutHero /> {/* Add the new AboutHero component here */}
      <section className="w-full py-20 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div ref={whatIsGradformRef} className={`transition-opacity duration-1000 ${whatIsGradformIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bricolage-24pt font-semibold mb-6 text-white text-center">What is Gradform?</h2>
            <MagicBento glowColor="0, 0, 205"> {/* Medium Blue */}
              <p className="text-lg text-blue-100 leading-relaxed text-justify">
                At Gradform, we see ourselves as a trusted partner for students who dream of studying abroad. The process of international university admissions can be exciting but also confusing, with so many choices and requirements along the way. Our role is to bring clarity by offering clear strategies, personal guidance, and curated pathways that match your goals and ambitions.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
                We believe every student deserves more than just information. You deserve genuine support and a mentor who understands both the challenges and opportunities of building a future overseas. From exploring programs and countries to preparing strong applications and finally settling into your new home, we are here to walk beside you at every step.
              </p>
            </MagicBento>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-20 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div ref={builtByStudentsRef} className={`transition-opacity duration-1000 ${builtByStudentsIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bricolage-24pt font-semibold mb-6 text-white text-center">Built by Students, For Students</h2>
            <MagicBento glowColor="0, 0, 205"> {/* Medium Blue */}
              <h3 className="text-3xl font-bricolage-24pt font-semibold mb-4 text-white">Our Story</h3>
              <p className="text-lg text-blue-100 leading-relaxed text-justify">
                Gradform began with something very simple. We were students, just like you, trying to figure out how to study abroad. We remember sitting in front of our laptops late at night, scrolling through endless information, feeling uncertain about who to trust and how to make the right choices. At times, the process seemed designed to be confusing.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
                What started as our own struggle grew into an idea. If we felt this lost, then so did many others. That idea slowly became a mission, and today it lives as Gradform; a platform created to make the admissions journey clear, structured, and supportive.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
                From the beginning, our focus has been the same. We bring clarity where there is confusion, integrity where there is doubt, and precision where every decision matters. Step by step, we shaped a process that guides rather than overwhelms. It respects the uniqueness of every student while staying professional, organized, and reliable.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
                We are not outsiders looking in. We are people who have walked this path ourselves and turned those experiences into something meaningful for others. Gradform exists so that no student has to face this journey alone or in the dark.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
                When you choose Gradform, you are choosing more than a service. You are choosing partners who understand, mentors who care, and a process designed with one goal in mind: to help you move forward with confidence, knowing that every step is supported and every decision is informed.
              </p>
            </MagicBento>
          </div>
        </div>
      </section>

      {/* Our Values Section - New Design */}
      <section className="w-full py-20 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bricolage-24pt font-semibold mb-12 text-white text-center">Our Values</h2>
          <ValueReveal
            title="Clarity"
            description="We demystify the complex admissions process, providing clear, actionable guidance tailored to your academic journey."
            delay={0.1}
          />
          <ValueReveal
            title="Integrity"
            description="Honesty and trustworthiness are at the core of every interaction, ensuring reliable and ethical support."
            delay={0.3}
            reverse={true}
          />
          <ValueReveal
            title="Empowerment"
            description="We empower you with the knowledge and tools to confidently navigate your path to global education."
            delay={0.5}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bricolage-24pt font-semibold mb-12 text-white">Why Choose Gradform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ValueCard 
              title="Personalized Roadmaps" 
              description="Receive a custom-tailored plan that aligns with your unique academic profile and career aspirations." 
              icon="/images/why-gradform-icons/personalizedroadmaps.png" 
              delay="0.1s" 
            />
            <ValueCard 
              title="Expert Mentorship" 
              description="Benefit from the insights of mentors who have successfully navigated international admissions." 
              icon="/images/why-gradform-icons/expertmentorship.png" 
              delay="0.3s" 
            />
            <ValueCard 
              title="Holistic Support" 
              description="From application to visa, we provide end-to-end assistance for a seamless transition abroad." 
              icon="/images/why-gradform-icons/holisticsupport.png" 
              delay="0.5s" 
            />
            <ValueCard 
              title="Global Opportunities" 
              description="Unlock access to a vast network of universities and programs worldwide." 
              icon="/images/why-gradform-icons/globalopportunities.png" 
              delay="0.7s" 
            />
            <ValueCard 
              title="Future-Proofing Your Career" 
              description="Gain a competitive edge with strategic advice for post-study career success." 
              icon="/images/why-gradform-icons/futureproofing.png" 
              delay="0.9s" 
            />
            <ValueCard 
              title="Community & Resources" 
              description="Join a thriving community and access exclusive resources to support your journey." 
              icon="/images/why-gradform-icons/communities.png" 
              delay="1.1s" 
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 bg-blue-800/30 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bricolage-24pt font-semibold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join thousands of students who have successfully achieved their study abroad dreams with Gradform.
          </p>
          <Link to="/plans" className="bg-white text-[#0000CD] px-5 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-xl font-semibold inline-block">
            Explore Our Plans
          </Link>
        </div>
      </section>

      {/* General Inquiries Form */}
      <section className="w-full py-20 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <InquiriesForm />
        </div>
      </section>

    </>
  );
};

export default About;
