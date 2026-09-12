'use client';

import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare, Phone, Copy, Check, AlertCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const { personal } = portfolioData;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Web3Forms Access Key is not activated yet. Please check your Gmail to activate.');
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something Amazing Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Contact Details</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Have a project idea, open role, or collaboration in mind? Feel free to drop a message or reach out directly!
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300">
                {/* Email Item */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{personal.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                {personal.phone && (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/60 border border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>{personal.phone}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(personal.phone!, 'phone')}
                      className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}

                {/* Location Item */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{personal.location}</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h4 className="text-sm font-bold text-white mb-4">Connect on Socials</h4>
              <div className="flex flex-wrap gap-3">
                {personal.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-medium glass-card rounded-xl text-gray-300 hover:text-white hover:border-indigo-500/50 transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    {s.platform}
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  {errorMsg ? (
                    <>
                      <div className="p-4 rounded-full bg-amber-500/10 text-amber-400">
                        <AlertCircle className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Action Required to Receive Emails</h3>
                      <p className="text-xs text-amber-300/90 max-w-sm leading-relaxed">
                        {errorMsg}
                      </p>
                      <p className="text-xs text-gray-400 max-w-md">
                        Please check your Gmail inbox (or Spam/Promotions folder) for an email from Web3Forms and click <strong>"Activate Access Key"</strong>.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                      <p className="text-xs text-gray-400 max-w-sm">
                        Thank you for reaching out, Vansh will get back to you shortly.
                      </p>
                    </>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMsg(null);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700/80 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700/80 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Collaboration"
                      className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700/80 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700/80 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
