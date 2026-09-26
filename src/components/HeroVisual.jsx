import React from 'react';
import { FiCode, FiGlobe, FiSmartphone, FiCpu, FiZap, FiActivity } from 'react-icons/fi';
import { TbBrandOpenai } from 'react-icons/tb';
import './HeroVisual.css';

export const HeroVisual = () => {
  return (
    <div className="hero-visual-container" aria-label="KR Infosoft Technology Ecosystem">
      {/* 1. Ambient Background Glow */}
      <div className="hero-visual-ambient-glow" />

      {/* 2. SVG Constellation Canvas */}
      <svg
        className="hero-visual-svg-canvas"
        viewBox="0 0 540 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#014DAF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0084FF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="orbitStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#014DAF" stopOpacity="0.08" />
          </linearGradient>

          <radialGradient id="centerHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#014DAF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Core Ambient Halo */}
        <circle cx="270" cy="250" r="140" fill="url(#centerHalo)" />

        {/* Orbital Concentric Rings */}
        <g transform="translate(270, 250)">
          <circle
            cx="0"
            cy="0"
            r="185"
            className="orbital-ring orbital-ring-outer"
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            className="orbital-ring orbital-ring-inner"
          />
        </g>

        {/* Cross-Link Mesh Lines (Soft diamond mesh connecting neighboring nodes) */}
        <line x1="120" y1="75" x2="420" y2="75" className="constellation-cross-link" />
        <line x1="420" y1="75" x2="415" y2="415" className="constellation-cross-link" />
        <line x1="415" y1="415" x2="125" y2="415" className="constellation-cross-link" />
        <line x1="125" y1="415" x2="120" y2="75" className="constellation-cross-link" />

        {/* Base Static Spoke Lines from Center (270, 250) to 4 Nodes */}
        {/* Node 1: Software (Top-Left: 120, 75) */}
        <line x1="270" y1="250" x2="120" y2="75" className="constellation-line-base" />
        {/* Node 2: AI (Top-Right: 420, 75) */}
        <line x1="270" y1="250" x2="420" y2="75" className="constellation-line-base" />
        {/* Node 3: Mobile (Bottom-Left: 125, 415) */}
        <line x1="270" y1="250" x2="125" y2="415" className="constellation-line-base" />
        {/* Node 4: Web (Bottom-Right: 415, 415) */}
        <line x1="270" y1="250" x2="415" y2="415" className="constellation-line-base" />

        {/* Dynamic Animated Pulse Lines (Travelling Light Streams) */}
        <line x1="270" y1="250" x2="120" y2="75" className="constellation-line-pulse" />
        <line
          x1="270"
          y1="250"
          x2="420"
          y2="75"
          className="constellation-line-pulse"
          style={{ animationDelay: '0.8s' }}
        />
        <line
          x1="270"
          y1="250"
          x2="125"
          y2="415"
          className="constellation-line-pulse"
          style={{ animationDelay: '1.6s' }}
        />
        <line
          x1="270"
          y1="250"
          x2="415"
          y2="415"
          className="constellation-line-pulse"
          style={{ animationDelay: '2.4s' }}
        />

        {/* Anchors / Terminal Nodes Dots on Canvas */}
        <circle cx="120" cy="75" r="4" fill="#00A3FF" />
        <circle cx="420" cy="75" r="4" fill="#00A3FF" />
        <circle cx="125" cy="415" r="4" fill="#00A3FF" />
        <circle cx="415" cy="415" r="4" fill="#00A3FF" />
      </svg>

      {/* 3. Central Core Hub (KR Infosoft Emblem + Radar Waves) */}
      <div className="central-core-hub">
        <div className="core-pulse-wave" />
        <div className="core-pulse-wave-delayed" />

        <div className="central-core-orb" title="KR Infosoft Core Tech Hub">
          <img
            src="/logo.png"
            alt="KR Infosoft"
            className="central-core-logo"
          />
        </div>
      </div>

      {/* 4. The 4 Orbiting Service Nodes */}
      {/* Node A: Software Development */}
      <a href="#services" className="service-node service-node-software">
        <div className="service-node-icon">
          <FiCode size={20} />
        </div>
        <div>
          <div className="service-node-title">Software</div>
          <div className="service-node-sub">Enterprise & Scalable</div>
        </div>
      </a>

      {/* Node B: AI & Machine Learning */}
      <a href="#services" className="service-node service-node-ai">
        <div className="service-node-icon">
          <FiCpu size={20} />
        </div>
        <div>
          <div className="service-node-title">AI Solutions</div>
          <div className="service-node-sub">LLMs & Automation</div>
        </div>
      </a>

      {/* Node C: Mobile App Engineering */}
      <a href="#services" className="service-node service-node-mobile">
        <div className="service-node-icon">
          <FiSmartphone size={20} />
        </div>
        <div>
          <div className="service-node-title">Mobile Apps</div>
          <div className="service-node-sub">iOS & Android Native</div>
        </div>
      </a>

      {/* Node D: Web Applications */}
      <a href="#services" className="service-node service-node-web">
        <div className="service-node-icon">
          <FiGlobe size={20} />
        </div>
        <div>
          <div className="service-node-title">Web Apps</div>
          <div className="service-node-sub">Modern Cloud Stack</div>
        </div>
      </a>

      {/* 5. Floating Stat & Capability Chips */}
      <div className="floating-stat-chip stat-chip-uptime">
        <span style={{ color: '#10B981', display: 'flex', alignItems: 'center' }}>
          <FiActivity size={14} />
        </span>
        <span>99.99% Uptime</span>
      </div>

      <div className="floating-stat-chip stat-chip-speed">
        <span style={{ color: '#F59E0B', display: 'flex', alignItems: 'center' }}>
          <FiZap size={14} />
        </span>
        <span>4x Faster Delivery</span>
      </div>

      <div className="floating-stat-chip stat-chip-ai">
        <span style={{ color: '#00A3FF', display: 'flex', alignItems: 'center' }}>
          <TbBrandOpenai size={15} />
        </span>
        <span>AI-Powered</span>
      </div>
    </div>
  );
};

export default HeroVisual;
