import React from 'react';
import { FiClock, FiDollarSign, FiHeadphones, FiLayers, FiShield, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const differentiators = [
  {
    icon: FiClock,
    title: "100% On-Time Delivery",
    tagline: "Agile 2-week sprints with verifiable milestones",
    description: "We enforce strict sprint cadence and code velocity tracking so your software launches exactly when promised, every single time."
  },
  {
    icon: FiDollarSign,
    title: "Transparent, Fixed Pricing",
    tagline: "No hidden charges or surprise invoices",
    description: "Detailed scope definitions and crystal-clear milestone contracts. You only pay for verified, tested deliverables you sign off on."
  },
  {
    icon: FiHeadphones,
    title: "Dedicated Direct Support",
    tagline: "Direct Slack/WhatsApp access to lead engineers",
    description: "No dealing with junior account intermediaries. Speak directly with senior architects who know your codebase inside out."
  },
  {
    icon: FiLayers,
    title: "Modern, Scalable Tech Stacks",
    tagline: "Cloud-native, zero legacy debt architecture",
    description: "We build on enterprise-standard frameworks (React, Next.js, Node, Python, Flutter, AWS) designed to scale effortlessly to millions of users."
  },
  {
    icon: FiShield,
    title: "Post-Launch Warranty & Care",
    tagline: "Ongoing security, backups & bug fixes",
    description: "Every deployment includes complimentary 30-day post-launch warranty support, automated backups, and 24/7 server health monitors."
  }
];


export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-navy-section position-relative">
      {/* Background blade decorative elements */}
      <div
        className="position-absolute pointer-events-none d-none d-lg-block"
        style={{
          top: '-15%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(30, 167, 255, 0.12) 0%, transparent 60%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
          transform: 'rotate(25deg)'
        }}
      />

      <div className="container-xl position-relative" style={{ zIndex: 2 }}>
        <SectionHeading
          title="Why Companies Trust Us Over"
          highlight="Other IT Vendors"
          subtitle="We combine technical mastery with obsessive project management to ensure your software is delivered on-budget, on-time, and built to dominate."
          dark={true}
        />

        <div className="row g-4 justify-content-center">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={idx < 2 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-6"}>
                <div
                  className="card-hover-lift h-100 p-4 p-lg-4 rounded-4 position-relative"
                  style={{
                    backgroundColor: 'var(--navy-card-bg)',
                    border: '1px solid var(--navy-card-border)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Top Blade Accent */}
                  <div
                    className="d-inline-flex align-items-center justify-content-center text-white mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--accent-gradient)',
                      boxShadow: '0 4px 15px rgba(30, 167, 255, 0.25)'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="h5 fw-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <div
                    className="small fw-semibold mb-3 d-flex align-items-center gap-1"
                    style={{ color: 'var(--primary-light)', fontSize: '0.82rem' }}
                  >
                    <FiCheckCircle size={14} />
                    <span>{item.tagline}</span>
                  </div>

                  <p className="small mb-0" style={{ color: '#C0CFEA', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
