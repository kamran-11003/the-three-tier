"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { MonoLabel } from "../ui/MonoLabel";
import { Button } from "../ui/Button";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section
      id="contact"
      className="py-24 bg-ink border-t border-wire relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <MonoLabel>Contact Us</MonoLabel>
              <h2 className="font-display text-[clamp(36px,4.5vw,64px)] text-paper leading-[1.0] mt-2 font-normal">
                Ready to transform your operations?
              </h2>
              <p className="font-body text-[15px] text-ghost leading-relaxed mt-4 max-w-lg">
                Book a strategy call with our infrastructure engineers and discover
                how to automate your business operations.
              </p>
            </div>

            {formSubmitted ? (
              <div className="border border-signal bg-ash p-8 text-center text-paper max-w-xl">
                <CheckCircle className="h-10 w-10 mx-auto mb-3 text-signal" />
                <h3 className="font-body text-base font-semibold">
                  Message Received
                </h3>
                <p className="font-body text-xs text-ghost mt-1">
                  Our team will contact you shortly to schedule your call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-xl font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-wider text-ghost block"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-ash border border-smoke px-4 py-3 text-paper focus:border-signal focus:outline-none placeholder:text-whisper"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-wider text-ghost block"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-ash border border-smoke px-4 py-3 text-paper focus:border-signal focus:outline-none placeholder:text-whisper"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-[10px] uppercase tracking-wider text-ghost block"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="w-full bg-ash border border-smoke px-4 py-3 text-paper focus:border-signal focus:outline-none placeholder:text-whisper"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-wider text-ghost block"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your operational bottleneck or product dev needs..."
                    className="w-full bg-ash border border-smoke px-4 py-3 text-paper focus:border-signal focus:outline-none placeholder:text-whisper resize-none"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}

            {/* Contact Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-wire text-[11px] font-mono uppercase text-ghost">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-ghost" />
                <span>contact@thethreetier.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-ghost" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ghost" />
                <span>Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Texture Image */}
          <div className="lg:col-span-5 relative flex justify-center w-full aspect-[4/5] max-w-[400px] border border-smoke bg-ash overflow-hidden self-center">
            <Image
              src="/images/contact-bg-texture.jpg"
              alt="Dark Brushed Aluminum Texture"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              loading="lazy"
              className="object-cover opacity-80 animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
