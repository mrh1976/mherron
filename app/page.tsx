"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    budget: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: `Marketing Challenge: ${formData.challenge}\n\nBudget: ${formData.budget}\n\nCompany: ${formData.company}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thanks for your request! I\'ll review it and send you a calendar link within 24 hours if I think I can help.');
        setFormData({ name: '', email: '', company: '', challenge: '', budget: '' });
      } else {
        setFormStatus('error');
        setFormMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send request. Please try again.');
    }
  };

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Track active section
  useEffect(() => {
    const sections = ['services', 'work', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation, Hero, Stats sections... (keeping your existing code) */}
      
      {/* TESTIMONIALS SECTION - FIXED */}
      <section className="py-24 md:py-32 px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] leading-[1.05] tracking-[-2.5px] text-[#2a2927]">
              What People Say<span className="text-yellow-400">.</span>
            </h2>
          </div>

          <div className="bg-[#2a2927] text-white rounded-2xl p-12 md:p-14 mb-6 relative text-center">
            <div className="absolute top-5 left-8 text-[80px] md:text-[90px] leading-none text-yellow-400 font-serif">"</div>
            <p className="text-[18px] md:text-[22px] leading-[1.6] mb-8 max-w-[800px] mx-auto relative z-10">
              Mike is second to none as a marketing leader. He keeps teams aligned, stakeholders informed, and stays focused on outcomes that matter. His command of the CMO role is universally impressive, and his honesty, transparency, and execution consistently show in the results.
            </p>
            <p className="font-[600] text-[16px] md:text-[17px] mb-1">CEO & Co-Founder</p>
            <p className="text-[#b0b0b0] text-[14px] md:text-[15px]">Web3 Infrastructure Company</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-8 relative hover:border-yellow-400 transition-colors">
              <div className="absolute top-5 left-6 text-[40px] leading-none text-yellow-400 font-serif">"</div>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#2a2927] mb-5 pl-10">
                Working with Mike means being part of something that actually feels like a team. More than that, it feels like a movement toward something great. He has a natural ability to bring people together, align them, and push them to become more than what they were when they started. A lot of that comes from how he operates himself. Mike is always pushing to stay ahead, whether that's through learning, experimenting, challenging the status quo, or simply building something on his own time. That mindset carries through to everyone around him. What really stands out is how he connects leadership to results. He is not afraid of a KPI. In fact, he leans into them. And if they are not there, he makes sure they are. That clarity and accountability make every organization he is part of better.
              </p>
              <p className="font-[600] text-[14px] md:text-[15px] text-[#2a2927]">John Geletka</p>
              <p className="text-[#6b6b6b] text-[13px] md:text-[14px] mt-1">Founder, Geletka+</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 relative hover:border-yellow-400 transition-colors">
              <div className="absolute top-5 left-6 text-[40px] leading-none text-yellow-400 font-serif">"</div>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#2a2927] mb-5 pl-10">
                Mike was great to work with. He always came prepared, understood the bigger picture, and knew how to keep things moving without creating unnecessary noise. A lot of people can bring ideas, but Mike is one of the few who can also execute and keep everyone aligned along the way. He understands partnerships, branding, and how to make programs successful. More importantly, he is someone people trust and enjoy working with.
              </p>
              <p className="font-[600] text-[14px] md:text-[15px] text-[#2a2927]">Brian Oates</p>
              <p className="text-[#6b6b6b] text-[13px] md:text-[14px] mt-1">Executive Director of Corporate Sales, New England Patriots</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 relative hover:border-yellow-400 transition-colors">
              <div className="absolute top-5 left-6 text-[40px] leading-none text-yellow-400 font-serif">"</div>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#2a2927] mb-5 pl-10">
                I've worked with Mike in different chapters of our careers, and what has always been consistent is the way he shows up. He's smart, direct, dependable, and knows how to get things done. He has a strong marketing mind, but he also understands people, clients, and how to navigate real business challenges. Mike brings energy, ideas, and leadership to the table, and he has a way of making the people around him better. Any company would be better off having him in the room.
              </p>
              <p className="font-[600] text-[14px] md:text-[15px] text-[#2a2927]">Mark Skroch</p>
              <p className="text-[#6b6b6b] text-[13px] md:text-[14px] mt-1">SVP Client Leadership, RAPP</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 relative hover:border-yellow-400 transition-colors">
              <div className="absolute top-5 left-6 text-[40px] leading-none text-yellow-400 font-serif">"</div>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#2a2927] mb-5 pl-10">
                Mike completely transformed how we think about our brand and positioning. This wasn't just a rebrand, he helped us define our ideal customer, sharpen our messaging, and build a strategic foundation behind everything we do. The end result is a brand that finally feels aligned with who we are, how we serve our clients and has already given stronger inbound interest. I was genuinely blown away by the depth and quality of his work and very grateful for his efforts.
              </p>
              <p className="font-[600] text-[14px] md:text-[15px] text-[#2a2927]">Emily Landon</p>
              <p className="text-[#6b6b6b] text-[13px] md:text-[14px] mt-1">Founder, The Tech Recruiter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections (Portfolio, About, etc.) ... */}
    </main>
  );
}
