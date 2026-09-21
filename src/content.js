// =====================================================================
//  TANTRO — SITE CONTENT
//  Edit text, services, industries, and contact details here.
//  Changes here flow through the entire site.
// =====================================================================

import {
  Cpu, Network, Activity, Brain, Gauge, ShieldCheck,
  Factory, Pill, UtensilsCrossed, Zap, Droplets, Wind,
  Workflow, Warehouse, Building2, Car, CircuitBoard, Leaf,
} from 'lucide-react'

export const brand = {
  name: 'TANTRO',
  tagline: 'Think next-gen industry. Think Tantro.',
  domain: 'tantro.in',
  email: 'hello@tantro.in',
  location: 'Bengaluru, India',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products', href: '#products' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Industry 5.0 / Ready',
  headline: ['Engineering the', 'industrial future.'],
  sub: 'TANTRO builds the intelligence layer for modern industry — automation, IIoT, digital twins, and AI-driven systems that make operations efficient, safer, and future-ready.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'Explore services', href: '#services' },
  stats: [
    { value: '24/7', label: 'Real-time telemetry' },
    { value: '5.0',  label: 'Industry readiness' },
    { value: '∞',    label: 'Scalable by design' },
  ],
}

export const about = {
  index: '/01',
  eyebrow: 'About',
  title: 'Technology that arrives before its time.',
  vision: 'To shape an industrial future where humanity lives, thinks, and thrives beyond its limits — through technology that arrives before its time.',
  mission: 'We empower industries and engineers alike with the knowledge and systems that accelerate the journey to Industry 5.0 — making operations more efficient, safer, and built for what comes next.',
  pillars: [
    { label: 'Trust',       note: 'Engineering-grade rigor' },
    { label: 'Intelligence',note: 'AI-native by default' },
    { label: 'Growth',      note: 'Sustainable scale' },
  ],
}

export const services = {
  index: '/02',
  eyebrow: 'Services',
  title: 'A full-stack for modern industry.',
  sub: 'From the sensor on the shop floor to the model in the cloud — we design, deploy, and operate the systems that run tomorrow\'s plants.',
  items: [
    {
      icon: Gauge,
      name: 'Industrial Solutions',
      blurb: 'Real-time data acquisition, intelligent sensors and controllers, centralized control rooms, and hardened operations — the physical backbone of a smart plant.',
      bullets: ['Edge sensing & SCADA', 'Centralized control rooms', 'Safer, auditable operations'],
      accent: 'azure',
    },
    {
      icon: Network,
      name: 'Digital Transformation',
      blurb: 'IIoT fabrics, digital twins, and cloud-native intelligence that turn machine data into measurable decisions across the enterprise.',
      bullets: ['IIoT & digital twin', 'AI-driven decisioning', 'Cloud & edge infrastructure'],
      accent: 'violet',
    },
    {
      icon: Brain,
      name: 'Technical Consulting',
      blurb: 'Strategic planning, deployment, and continuous monitoring — the technical partner that takes your roadmap from whiteboard to production.',
      bullets: ['Roadmap & architecture', 'Deployment & integration', 'Monitoring & advisory'],
      accent: 'teal',
    },
  ],
  capabilities: [
    { icon: Cpu,         label: 'Industrial Automation' },
    { icon: Network,     label: 'IIoT Platforms' },
    { icon: Activity,    label: 'Digital Twin' },
    { icon: Brain,       label: 'AI Industrial Intelligence' },
    { icon: ShieldCheck, label: 'OT Security' },
    { icon: Workflow,    label: 'MES / SCADA' },
  ],
}

export const industries = {
  index: '/03',
  eyebrow: 'Industries',
  title: 'Built for the sectors that build the world.',
  sub: 'From precision manufacturing to smart infrastructure, our systems adapt to the real constraints of your industry.',
  items: [
    { icon: Factory,          label: 'Manufacturing' },
    { icon: Pill,             label: 'Pharma' },
    { icon: UtensilsCrossed,  label: 'Food & Beverage' },
    { icon: Zap,              label: 'Energy' },
    { icon: Droplets,         label: 'Water' },
    { icon: Wind,             label: 'HVAC' },
    { icon: Workflow,         label: 'Process Plants' },
    { icon: Warehouse,        label: 'Warehousing' },
    { icon: Building2,        label: 'Smart Buildings' },
    { icon: Car,              label: 'Automotive' },
    { icon: CircuitBoard,     label: 'Semiconductor' },
    { icon: Leaf,             label: 'Sustainability' },
  ],
}

export const products = {
  index: '/04',
  eyebrow: 'Products',
  title: 'What we\'re building next.',
  sub: 'A focused product line is in active R&D — purpose-built hardware and software for the next decade of industrial intelligence.',
  items: [
    {
      code: 'TX-01',
      name: 'Edge Telemetry Node',
      status: 'In development',
      blurb: 'Rugged, multi-protocol edge device for deterministic data capture across brownfield and greenfield plants.',
    },
    {
      code: 'TX-02',
      name: 'Twin Engine',
      status: 'Concept',
      blurb: 'Real-time digital twin runtime with physics-informed models and plug-in AI controllers.',
    },
    {
      code: 'TX-03',
      name: 'Signal Cortex',
      status: 'Research',
      blurb: 'AI layer that converts raw plant signals into prescriptive actions, anomaly calls, and operator guidance.',
    },
  ],
}

export const knowledge = {
  index: '/05',
  eyebrow: 'Knowledge Hub',
  title: 'Where curiosity meets credibility.',
  body: 'Empowering through knowledge, this space connects ideas with impact. From emerging tech trends to real-world deployments, we share research-backed insights, use cases, and perspectives — free, open, and built to inspire students, educators, and professionals alike.',
  // Replace these with real posts once your blog is live
  posts: [
    {
      tag: 'Digital Twin',
      title: 'Why physics-informed twins will outperform pure ML in industrial settings.',
      read: '6 min read',
    },
    {
      tag: 'IIoT',
      title: 'The case for protocol-agnostic edge gateways in brownfield plants.',
      read: '4 min read',
    },
    {
      tag: 'Industry 5.0',
      title: 'Human-centric automation: what 5.0 actually means for the shop floor.',
      read: '8 min read',
    },
  ],
}

export const whyTantro = {
  index: '/06',
  eyebrow: 'Why Tantro',
  title: 'Engineering-grade. Investor-grade.',
  points: [
    {
      k: '01',
      title: 'Outcomes over outputs',
      body: 'We are measured by plant uptime, OEE gains, and cost saved — not by dashboards shipped.',
    },
    {
      k: '02',
      title: 'Built for Industry 5.0',
      body: 'Our stack is designed from day one for human-centric, AI-native, resilient manufacturing.',
    },
    {
      k: '03',
      title: 'Local depth, global standards',
      body: 'Rooted in Bengaluru\'s engineering talent, deployed to global plants with enterprise-grade rigor.',
    },
    {
      k: '04',
      title: 'Knowledge as a product',
      body: 'We open-source our thinking so the industry — and the next generation of engineers — can move faster.',
    },
  ],
}

export const contact = {
  index: '/07',
  eyebrow: 'Contact',
  title: 'Let\'s build something that lasts.',
  sub: 'Tell us about your plant, your ambition, or just say hello. We usually respond within one business day.',
}
