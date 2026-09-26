import React from 'react';
import SectionHeading from './SectionHeading';
import industriesData from '../data/industries';
import {
  FiActivity,
  FiCreditCard,
  FiShoppingBag,
  FiTruck,
  FiHome,
  FiBookOpen,
  FiCpu,
  FiCompass
} from 'react-icons/fi';

const iconMap = {
  FiActivity: FiActivity,
  FiCreditCard: FiCreditCard,
  FiShoppingBag: FiShoppingBag,
  FiTruck: FiTruck,
  FiHome: FiHome,
  FiBookOpen: FiBookOpen,
  FiCpu: FiCpu,
  FiCompass: FiCompass
};

export const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-xl">
        <SectionHeading
          title="Tailored Solutions Across Diverse"
          highlight="Industry Verticals"
          subtitle="Every industry has distinct regulatory requirements, architectural challenges, and customer demands. Here is how we engineer competitive advantage."
        />

        <div className="row g-3 g-md-4">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || FiCpu;

            return (
              <div key={ind.id} className="col-sm-6 col-lg-3">
                <div
                  className="card-glass card-hover-lift p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white mb-3"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--accent-gradient)'
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="h6 fw-bold mb-2" style={{ color: 'var(--text)' }}>
                      {ind.title}
                    </h3>

                    <p className="small mb-0" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {ind.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
