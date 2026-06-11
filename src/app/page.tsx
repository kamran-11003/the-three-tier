"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Bot, 
  Cpu, 
  Layers, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Server, 
  Zap, 
  Shield, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  Check,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#05010d] text-[#f3e8ff] cyber-grid selection:bg-[#8b5cf6]/30 selection:text-purple-300">
      
      {/* Background Neon Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-purple-800/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#05010d]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image 
                src="/assets/logo_v4.png" 
                alt="The Three Tier Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white">THE THREE TIER</span>
              <p className="text-[10px] text-purple-400 tracking-widest uppercase -mt-1 font-semibold">Build. Connect. Scale.</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-200">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#solutions" className="hover:text-purple-400 transition-colors">AI Solutions</a>
            <a href="#platform" className="hover:text-purple-400 transition-colors">SaaS Platform</a>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-purple-400 transition-colors">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-[#0b041a] border border-purple-900/30 p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="#services" className="block px-4 py-2 hover:bg-purple-950/40 rounded text-xs">Custom AI</a>
                <a href="#services" className="block px-4 py-2 hover:bg-purple-950/40 rounded text-xs">SaaS Dev</a>
                <a href="#services" className="block px-4 py-2 hover:bg-purple-950/40 rounded text-xs">Automation</a>
              </div>
            </div>
            <a href="#case-studies" className="hover:text-purple-400 transition-colors">Case Studies</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>

          {/* Request Demo Button */}
          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-600 hover:to-purple-500 hover:shadow-purple-900/30"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-purple-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-purple-900/20 bg-[#05010d] px-6 py-4 space-y-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">Home</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">AI Solutions</a>
            <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">SaaS Platform</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">Services</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">Case Studies</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-purple-200 hover:text-white">Pricing</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 py-3 text-center text-sm font-semibold text-white"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* High-tech background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_background_v4.png" 
            alt="Hero Tech Background" 
            fill 
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05010d]/10 via-[#05010d]/80 to-[#05010d]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

              {/* Title */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
                We build <span className="gradient-text-neon font-black">AI systems</span>, automate operations, and launch <span className="text-purple-400">scalable products</span>.
              </h1>

              {/* Subtext */}
              <p className="text-lg text-purple-200 max-w-2xl mx-auto lg:mx-0">
                End-to-end AI, SaaS, and Automation solutions that drive real business impact. We connect state-of-the-art AI orchestration with robust enterprise engineering.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#contact"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-900/20 transition-all hover:scale-[1.02]"
                >
                  Book a Strategy Call
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="#platform"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-purple-800/40 bg-[#0d0720]/40 hover:bg-purple-950/20 px-8 py-4 text-base font-semibold text-purple-200 transition-all hover:border-purple-600/50"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Explore Our Work
                </a>
              </div>
            </div>

            {/* Right Column Cybernetic Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
              
              {/* Character Image Container */}
              <div className="relative w-full max-w-[600px] aspect-[5/4] rounded-3xl overflow-hidden glass-card p-1 shadow-2xl transition-all hover:scale-[1.01]">
                <Image 
                  src="/assets/hero_character_v3.png" 
                  alt="The Three Tier System Overview and Character" 
                  fill 
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-8 border-y border-purple-950/40 bg-[#070314]/50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_background_v4.png" 
            alt="Metrics Background" 
            fill 
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-[#05010d]/40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">50+</p>
              <p className="text-xs tracking-wider text-purple-400 font-semibold uppercase">Projects Delivered</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">30+</p>
              <p className="text-xs tracking-wider text-purple-400 font-semibold uppercase">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">99.9%</p>
              <p className="text-xs tracking-wider text-purple-400 font-semibold uppercase">Uptime Delivered</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">5+</p>
              <p className="text-xs tracking-wider text-purple-400 font-semibold uppercase">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview (The Three Tier Platform) */}
      <section id="platform" className="py-24 relative overflow-hidden">
        {/* Background Image with diagonal positioning */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/cta_background_v3.png" 
            alt="Platform Tech Background" 
            fill 
            className="object-cover opacity-[0.12] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010d]/95 via-[#05010d]/80 to-[#05010d]/95" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Platform Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-700/30 bg-purple-950/20 px-3 py-1 text-xs font-semibold text-purple-400 uppercase">
                Workflow Builder
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                The Three Tier <br />
                <span className="text-purple-400">AI Automation Platform</span>
              </h2>
              <p className="text-purple-200">
                Our platform orchestrates AI models, structured data, and custom business operations to deliver fast, real-time automated workflows. Connect forms, databases, and APIs in minutes.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-purple-100 font-medium">Visual Workflow Builder: Drag and drop custom nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-purple-100 font-medium">Multi-Model Orchestration: Combine GPT-4, Claude, Gemini</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-purple-100 font-medium">Real-Time Performance Monitoring & logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-purple-100 font-medium">Secure Integrations: Custom endpoints, Stripe, Webhooks</span>
                </li>
              </ul>

              <div className="pt-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:shadow-lg"
                >
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column Platform Mockup Image */}
            <div className="lg:col-span-7 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative group rounded-3xl overflow-hidden glass-card border border-purple-500/20 p-2 shadow-2xl transition-all hover:scale-[1.01]">
                <div className="relative w-full aspect-[1.83] overflow-hidden rounded-2xl">
                  <Image 
                    src="/assets/platform_mockup_v2.png" 
                    alt="The Three Tier Platform Workflow Builder Screen" 
                    fill 
                    className="object-cover"
                  />
                </div>
                {/* 3D Platform glow strip */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-purple-500/40 to-transparent blur-md pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Wave Strip */}
      <section className="relative overflow-hidden py-24 border-y border-purple-800/30">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/cta_background_v3.png" 
            alt="CTA Background" 
            fill 
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010d]/90 via-[#05010d]/60 to-[#05010d]/90" />
        </div>
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Let's Build Something Extraordinary</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Tell us about your operational bottlenecks and custom software needs. Let's design, automate, and scale your product together.
          </p>
          <div className="pt-2">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 text-sm font-bold shadow-lg transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Solutions / Features Section */}
      <section id="solutions" className="py-24 relative overflow-hidden">
        {/* Rotated Hero Background for a different structure */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_background_v4.png" 
            alt="Solutions Tech Background" 
            fill 
            className="object-cover opacity-10 rotate-180 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05010d]/90 via-[#05010d]/70 to-[#05010d]/90" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Features */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Intelligent Solutions <br />
                  For Modern Businesses
                </h2>
                <p className="mt-4 text-purple-200">
                  We integrate AI innovations with robust architecture to build stable, scalable systems that accelerate growth.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">AI-Powered Systems</h3>
                    <p className="mt-1 text-sm text-purple-300">
                      Deploy custom fine-tuned LLMs, agentic decision frameworks, and automated cognitive systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Scalable Architecture</h3>
                    <p className="mt-1 text-sm text-purple-300">
                      High-performance microservices, secure API pipelines, and auto-scaling cloud deployments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Enterprise Security</h3>
                    <p className="mt-1 text-sm text-purple-300">
                      Role-based access, comprehensive logs, data encryption at rest and in transit, and GDPR compliance.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column Cube Cluster Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[1.56]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
                <Image 
                  src="/assets/cube_cluster_v2.png" 
                  alt="3D Glowing Cube Cluster representing data cubes" 
                  fill 
                  className="object-contain animate-float"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 border-t border-purple-950/40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/cta_background_v3.png" 
            alt="Services Background" 
            fill 
            className="object-cover opacity-[0.08] rotate-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05010d]/90 via-[#05010d]/60 to-[#05010d]/90" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Services</h2>
              <p className="mt-3 text-purple-300">End-to-end technical execution designed for hyper-growth.</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Custom AI Solutions</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  AI models, autonomous agents, and smart tools trained on your internal data.
                </p>
              </div>
              <a href="#contact" className="mt-6 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">SaaS Product Dev</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Building responsive, premium SaaS MVPs and web applications that scale effortlessly.
                </p>
              </div>
              <a href="#contact" className="mt-6 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Process Automation</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Automate redundant pipelines, connect APIs, and optimize operational work flows.
                </p>
              </div>
              <a href="#contact" className="mt-6 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Web Development</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Premium custom-tailored websites utilizing optimized frameworks for speed and conversions.
                </p>
              </div>
              <a href="#contact" className="mt-6 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 5 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Cloud & DevOps</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Secure serverless cloud setup, automated CI/CD configurations, and containerization.
                </p>
              </div>
              <a href="#contact" className="mt-6 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 relative overflow-hidden">
        {/* Background Image for case studies */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/cta_background_v3.png" 
            alt="Case Studies Background" 
            fill 
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-[#05010d]/80 to-[#05010d]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Case Studies</h2>
              <p className="mt-3 text-purple-300">See how we transform operational logic into measurable growth.</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors">
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-purple-500/10 hover:border-purple-500/35 transition-all duration-300">
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-purple-500/10">
                  <Image 
                    src="/assets/case_aventra_v3.png" 
                    alt="Aventra CRM Automation" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-700/30 bg-purple-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
                      AI Automation
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    Aventra CRM Automation
                  </h3>
                  <p className="text-sm text-purple-300 leading-relaxed">
                    Automated lead scoring, document validation, and custom follow-up chains utilizing custom agents, reducing conversion delays.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 border-t border-purple-900/20 pt-4 mt-2">
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Increase Leads</span>
                      <p className="text-2xl font-black text-white">+160%</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Time Saved</span>
                      <p className="text-2xl font-black text-white">70%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-purple-500/10 hover:border-purple-500/35 transition-all duration-300">
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-purple-500/10">
                  <Image 
                    src="/assets/case_nexora_v3.png" 
                    alt="Nexora Invoice Platform" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-700/30 bg-purple-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
                      SaaS Development
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    Nexora Invoice Platform
                  </h3>
                  <p className="text-sm text-purple-300 leading-relaxed">
                    End-to-end building of a secure, responsive multi-tenant SaaS ledger allowing automated payment generation and invoice matching.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 border-t border-purple-900/20 pt-4 mt-2">
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Accuracy</span>
                      <p className="text-2xl font-black text-white">+98%</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Processing Speed</span>
                      <p className="text-2xl font-black text-white">3x Faster</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-purple-500/10 hover:border-purple-500/35 transition-all duration-300">
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-purple-500/10">
                  <Image 
                    src="/assets/case_docuflow_v3.png" 
                    alt="DocuFlow AI OCR illustration" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-700/30 bg-purple-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
                      Process Automation
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    DocuFlow AI OCR
                  </h3>
                  <p className="text-sm text-purple-300 leading-relaxed">
                    Deploying visual language models to extract complex billing data from raw invoices, eliminating manual transcription errors.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 border-t border-purple-900/20 pt-4 mt-2">
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Manual Work</span>
                      <p className="text-2xl font-black text-white">-80%</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Data Accuracy</span>
                      <p className="text-2xl font-black text-white">99.5%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-purple-950/40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_background_v4.png" 
            alt="Pricing Background" 
            fill 
            className="object-cover opacity-[0.08] -scale-x-100 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05010d]/90 via-[#05010d]/60 to-[#05010d]/90" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="text-purple-300">Choose the perfect tier to align with your building and scaling goals.</p>
            
            {/* Toggle Billing Period */}
            <div className="relative inline-flex items-center rounded-xl bg-purple-950/60 p-1 border border-purple-900/30">
              <button 
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${billingPeriod === "monthly" ? "bg-purple-700 text-white shadow" : "text-purple-400 hover:text-white"}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod("yearly")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all flex items-center gap-1.5 ${billingPeriod === "yearly" ? "bg-purple-700 text-white shadow" : "text-purple-400 hover:text-white"}`}
              >
                Yearly
                <span className="bg-purple-900/80 text-[9px] text-purple-300 px-1.5 py-0.5 rounded font-black uppercase">Save 15%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Tier 1: Startup */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-purple-500/10">
              <div>
                <span className="text-xs font-black tracking-widest text-purple-400 uppercase">Startup</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    {billingPeriod === "monthly" ? "$2,499" : "$2,120"}
                  </span>
                  <span className="text-xs text-purple-400">/ mo</span>
                </div>
                <p className="mt-2 text-xs text-purple-300 leading-relaxed">
                  Best for early stage companies looking to deploy basic AI systems or proof of concepts.
                </p>

                <ul className="mt-6 space-y-3 border-t border-purple-900/20 pt-6 text-xs text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Basic AI Agents Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>SaaS Application MVP Dev</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Basic Operational Automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Standard Email Support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="block w-full rounded-xl border border-purple-800/40 bg-purple-950/20 py-3 text-center text-xs font-bold text-purple-200 hover:bg-purple-950/40 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Tier 2: Growth (Featured) */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border-2 border-purple-500 relative shadow-xl shadow-purple-950/30">
              <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-purple-600 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-black tracking-widest text-purple-400 uppercase">Growth</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    {billingPeriod === "monthly" ? "$6,999" : "$5,949"}
                  </span>
                  <span className="text-xs text-purple-400">/ mo</span>
                </div>
                <p className="mt-2 text-xs text-purple-300 leading-relaxed">
                  Ideal for scaling teams needing production-ready custom AI pipelines and workflow infrastructure.
                </p>

                <ul className="mt-6 space-y-3 border-t border-purple-900/20 pt-6 text-xs text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Everything in Startup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Advanced Multi-Agent Orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Complex SaaS Product Dev & Scalability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Custom Endpoint & Third-party APIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Priority Slack & Call Support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="block w-full rounded-xl bg-purple-600 py-3 text-center text-xs font-bold text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-purple-500/10">
              <div>
                <span className="text-xs font-black tracking-widest text-purple-400 uppercase">Enterprise</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">Custom</span>
                </div>
                <p className="mt-2 text-xs text-purple-300 leading-relaxed">
                  Tailored solutions for enterprises needing dedicated infrastructure, SLAs, and complex systems.
                </p>

                <ul className="mt-6 space-y-3 border-t border-purple-900/20 pt-6 text-xs text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Dedicated Compute & Fine-Tuned Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Full Custom Platform Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Advanced Data Compliance & Auditing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>24/7 Dedicated Support Engineering</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="block w-full rounded-xl border border-purple-800/40 bg-purple-950/20 py-3 text-center text-xs font-bold text-purple-200 hover:bg-purple-950/40 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Contact Tech Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_background_v4.png" 
            alt="Contact Tech Background" 
            fill 
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010d]/95 via-[#05010d]/80 to-[#05010d]/95" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Form */}
            <div className="lg:col-span-7 space-y-8 relative z-10">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Transform Your Business?</h2>
                <p className="mt-3 text-purple-200">Book a call with our experts and discover what we can build together.</p>
              </div>

              {/* Success Notification */}
              {formSubmitted ? (
                <div className="rounded-2xl bg-emerald-950/30 border border-emerald-500/30 p-6 text-center text-emerald-300">
                  <CheckCircle className="h-10 w-10 mx-auto mb-3 text-emerald-400" />
                  <h3 className="font-bold text-white text-lg">Thank You!</h3>
                  <p className="text-sm mt-1">Your message has been sent. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs text-purple-300 font-bold uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-purple-950/20 border border-purple-800/30 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none placeholder:text-purple-400/40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs text-purple-300 font-bold uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl bg-purple-950/20 border border-purple-800/30 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none placeholder:text-purple-400/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs text-purple-300 font-bold uppercase tracking-wider">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full rounded-xl bg-purple-950/20 border border-purple-800/30 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none placeholder:text-purple-400/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs text-purple-300 font-bold uppercase tracking-wider">Tell us about your project...</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="We need to build a custom AI dashboard and automate our lead qualification..."
                      className="w-full rounded-xl bg-purple-950/20 border border-purple-800/30 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none placeholder:text-purple-400/40 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-xl bg-purple-600 hover:bg-purple-500 py-4 text-sm font-bold text-white shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-purple-900/20 text-xs text-purple-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span>contact@thethreetier.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>Worldwide / Remote</span>
                </div>
              </div>
            </div>

            {/* Right Column Cybernetic Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-1 shadow-2xl transition-all hover:scale-[1.01]">
                <Image 
                  src="/assets/contact_character_v3.png" 
                  alt="AI Assistant Contact Detail" 
                  fill 
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By Marquee Strip */}
      <section className="py-12 border-t border-purple-900/20 bg-[#04010f] relative overflow-hidden">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.25em] text-purple-500 uppercase">Trusted by Innovative Companies</p>
        </div>
        {/* Marquee container */}
        <div className="relative flex overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#04010f] to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#04010f] to-transparent pointer-events-none" />
          {/* Track — two copies for seamless loop */}
          <div className="flex animate-marquee shrink-0" style={{gap: '0px'}}>
            {[
              { icon: <Bot className="h-5 w-5" />, name: 'Cloudixa' },
              { icon: <Layers className="h-5 w-5" />, name: 'NEXORA' },
              { icon: <Cpu className="h-5 w-5" />, name: 'Aventra' },
              { icon: <Server className="h-5 w-5" />, name: 'DocuFlow' },
              { icon: <Globe className="h-5 w-5" />, name: 'ResolvAI' },
              { icon: <Zap className="h-5 w-5" />, name: 'QuantumAI' },
              { icon: <Shield className="h-5 w-5" />, name: 'VaultSync' },
              { icon: <Sparkles className="h-5 w-5" />, name: 'Orbita' },
              { icon: <Bot className="h-5 w-5" />, name: 'Cloudixa' },
              { icon: <Layers className="h-5 w-5" />, name: 'NEXORA' },
              { icon: <Cpu className="h-5 w-5" />, name: 'Aventra' },
              { icon: <Server className="h-5 w-5" />, name: 'DocuFlow' },
              { icon: <Globe className="h-5 w-5" />, name: 'ResolvAI' },
              { icon: <Zap className="h-5 w-5" />, name: 'QuantumAI' },
              { icon: <Shield className="h-5 w-5" />, name: 'VaultSync' },
              { icon: <Sparkles className="h-5 w-5" />, name: 'Orbita' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-10 py-2 opacity-50 hover:opacity-90 transition-opacity shrink-0">
                <span className="text-purple-400">{item.icon}</span>
                <span className="text-sm font-bold tracking-widest text-white whitespace-nowrap">{item.name}</span>
                <span className="ml-8 text-purple-800 text-xl font-thin select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-950/30 bg-[#03000b] overflow-hidden">
        {/* Subtle gradient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand Column */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-lg shrink-0">
                  <Image src="/assets/logo_v4.png" alt="The Three Tier" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-sm font-extrabold tracking-wider text-white">THE THREE TIER</p>
                  <p className="text-[10px] text-purple-500 tracking-widest uppercase -mt-0.5">Build. Connect. Scale.</p>
                </div>
              </div>
              <p className="text-xs text-purple-400 leading-relaxed">
                We build custom AI systems, SaaS products, and intelligent automation that drive measurable business growth.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[['LinkedIn', 'L'], ['Twitter/X', 'X'], ['GitHub', 'G']].map(([label, letter]) => (
                  <a key={label} href="#" aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-800/40 bg-purple-950/20 text-[10px] font-black text-purple-400 hover:border-purple-600/50 hover:text-purple-300 hover:bg-purple-900/20 transition-all">
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">Services</h4>
              <ul className="space-y-2.5">
                {['Custom AI Solutions', 'SaaS Product Dev', 'Process Automation', 'Web Development', 'Cloud & DevOps'].map(s => (
                  <li key={s}>
                    <a href="#services" className="text-xs text-purple-400 hover:text-purple-200 transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">Company</h4>
              <ul className="space-y-2.5">
                {[['About Us', '#home'], ['Case Studies', '#case-studies'], ['Pricing', '#pricing'], ['Contact', '#contact']].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-xs text-purple-400 hover:text-purple-200 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">Stay in the Loop</h4>
              <p className="text-xs text-purple-400 leading-relaxed">Get AI & automation insights straight to your inbox. No spam.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg bg-purple-950/20 border border-purple-800/30 px-3 py-2.5 text-xs text-white focus:border-purple-500 focus:outline-none placeholder:text-purple-600"
                />
                <button className="w-full rounded-lg bg-purple-700 hover:bg-purple-600 py-2.5 text-xs font-bold text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-purple-950/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-purple-600">© {new Date().getFullYear()} The Three Tier. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                <a key={l} href="#" className="text-[11px] text-purple-600 hover:text-purple-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
