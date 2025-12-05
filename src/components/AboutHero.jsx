import React from 'react';
import { cn } from '../lib/utils';

const AboutHero = () => {
  return (
    <section className="w-full py-20 flex justify-center items-center h-screen relative overflow-hidden">
      <div className={cn(
        "relative w-full h-full overflow-hidden rounded-2xl p-4 md:p-8 shadow-xl",
        "bg-linear-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 backdrop-blur-lg",
        "flex flex-col items-center justify-center h-full"
      )}>
        
        {/* Main Gradform Bubble (Visual Anchor) - Explicitly opaque and static. */}
        <img src="/icons/aboutlogo.png" alt="About Logo" className="h-36 z-50 max-w-[60%] leading-tight opacity-100 flex items-center justify-center object-contain" />

        {/* --- Small, Widely Spaced User Query Bubbles (Total: 30) - Ultra-Subtle Floating --- */}
        {/* Positions are highly separated, and the animation is minimal to prevent overlap. */}
        <div className="absolute inset-0">
            
            <div className="absolute top-[2%] left-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '0.1s' }}>
                How do I apply for a master's abroad?
            </div>
            
            <div className="absolute top-[7%] right-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '0.7s' }}>
                Can someone check my SOP?
            </div>

            <div className="absolute top-[18%] right-[12%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '1.2s' }}>
                Which country is best for data science?
            </div>

            <div className="absolute bottom-[2%] right-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '1.8s' }}>
                Do I need IELTS for Canada?
            </div>

            <div className="absolute bottom-[10%] left-[10%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ maxWidth: '90%', animationDelay: '2.3s' }}>
                Is my profile strong enough?
            </div>

            <div className="absolute bottom-[15%] left-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '2.9s' }}>
                What scholarships can I get?
            </div>
            
            <div className="absolute top-[38%] left-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '3.4s' }}>
                Can you improve my CV?
            </div>

            <div className="absolute top-[12%] right-[22%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '3.9s' }}>
                How do I pick the right university?
            </div>
            
            <div className="absolute top-[22%] left-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '4.5s' }}>
                Should I study in Australia or the UK?
            </div>
            
            <div className="absolute bottom-[38%] left-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '5s' }}>
                Can you guide me step-by-step?
            </div>

            <div className="absolute top-[28%] left-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '5.6s' }}>
                How long does the application process take?
            </div>

            <div className="absolute top-[18%] right-[32%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '6.1s' }}>
                What are the required GPA and GRE scores?
            </div>

            <div className="absolute top-[48%] right-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '6.6s' }}>
                Do you offer interview preparation?
            </div>

            <div className="absolute bottom-[3%] right-[12%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '7.2s' }}>
                How do I fund my studies?
            </div>

            <div className="absolute top-[58%] left-[5%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '7.7s' }}>
                Should I defer my admission?
            </div>
            
            <div className="absolute top-[7%] right-[28%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '8.2s' }}>
                What's the best time to start applying?
            </div>

            <div className="absolute bottom-[28%] left-[2%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '8.8s' }}>
                Which test prep resources are best?
            </div>

            <div className="absolute top-[70%] left-[35%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '9.3s' }}>
                Can I switch my major later?
            </div>

            {/* --- WIDELY SPACED BUBBLES --- */}
            <div className="absolute top-[32%] left-[18%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '9.8s' }}>
                Scholarship deadlines?
            </div>

            <div className="absolute top-[37%] right-[18%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '10.4s' }}>
                Student visa guide?
            </div>

            <div className="absolute top-[52%] left-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '10.9s' }}>
                Post-study work options?
            </div>

            <div className="absolute bottom-[22%] right-[18%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '11.4s' }}>
                Compare universities?
            </div>

            <div className="absolute top-[12%] left-[28%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '12s' }}>
                Online vs. in-person?
            </div>

            <div className="absolute top-[62%] right-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '12.5s' }}>
                Help with LORs?
            </div>

            <div className="absolute bottom-[8%] left-[18%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '13s' }}>
                Career counselling?
            </div>

            <div className="absolute top-[28%] left-[38%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '13.6s' }}>
                Is it worth it?
            </div>
            
            <div className="absolute top-[38%] left-[12%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '14.1s' }}>
                What about internships?
            </div>

            <div className="absolute bottom-[32%] left-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '14.7s' }}>
                Student accommodation?
            </div>

            <div className="absolute bottom-[37%] right-[18%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '15.2s' }}>
                Can I apply for multiple courses?
            </div>

            <div className="absolute top-[32%] right-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '15.8s' }}>
                What is a strong essay?
            </div>

            {/* Additional bubbles to reach 30 */}
            <div className="absolute top-[22%] left-[58%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '16.3s' }}>
                How to write a compelling personal statement?
            </div>
            <div className="absolute bottom-[8%] left-[48%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '16.9s' }}>
                Are online degrees recognized?
            </div>
            <div className="absolute top-[48%] left-[15%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '17.4s' }}>
                What are the visa requirements for Germany?
            </div>
            <div className="absolute bottom-[42%] right-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '18s' }}>
                Tips for securing a research position?
            </div>
            <div className="absolute top-[18%] left-[48%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '18.5s' }}>
                How to prepare for university interviews?
            </div>
            <div className="absolute bottom-[22%] right-[8%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '19.1s' }}>
                What's the cost of living in the US?
            </div>
            <div className="absolute top-[63%] left-[26%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '19.6s' }}>
                Can I get a part-time job while studying?
            </div>
            <div className="absolute top-[28%] left-[68%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '20.2s' }}>
                What are the benefits of a postgraduate degree?
            </div>
            {/* New bubbles */}
            <div className="absolute top-[2%] left-[35%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '20.8s' }}>
                How to choose a thesis topic?
            </div>
            <div className="absolute bottom-[2%] right-[35%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '21.4s' }}>
                Networking tips for international students?
            </div>
            <div className="absolute top-[85%] left-[35%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '22s' }}>
                What are the best student cities?
            </div>
            <div className="absolute bottom[55%] left-[22%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '22.6s' }}>
                Is a PhD worth it?
            </div>
            <div className="absolute top-[70%] right-[15%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '23.2s' }}>
                How to manage study-life balance?
            </div>
            <div className="absolute top-[75%] left-[15%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '23.8s' }}>
                Cultural adaptation tips?
            </div>
            <div className="absolute bottom-[65%] right-[15%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-bl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '24.4s' }}>
                Part-time job regulations?
            </div>
            <div className="absolute top-[15%] right-[55%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tr-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '25s' }}>
                Scholarship essay tips?
            </div>
            <div className="absolute bottom-[15%] left-[55%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-br-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '25.6s' }}>
                Internship opportunities abroad?
            </div>
            <div className="absolute top-[65%] right-[35%] z-20 text-white bg-gray-800/20 border border-gray-700 backdrop-blur-lg p-1 md:p-3 rounded-lg rounded-tl-none shadow-2xl text-[0.6rem] md:text-sm bubble-float" style={{ animationDelay: '26.2s' }}>
                How to write a strong research proposal?
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
