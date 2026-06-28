import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import SectionHeader from '../SectionHeader';
import { personalInfo } from '../../data/portfolioData';

const EMAILJS_SERVICE_ID = 'service_ykglagt';
const EMAILJS_TEMPLATE_ID = 'template_h9y3p3c';
const EMAILJS_PUBLIC_KEY = '0FU3dHHQHrc13NGJn';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof typeof formData, string>> = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      nextErrors.name = 'Name is required.';
    } else if (name.length < 2 || !/^[a-zA-Z\s.'-]+$/.test(name)) {
      nextErrors.name = 'Enter a valid name.';
    }

    if (!email) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!message) {
      nextErrors.message = 'Message is required.';
    } else if (message.length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    return nextErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error('Please fix the highlighted fields.');
      return;
    }

    setLoading(true);
    setSubmitted(false);

    try {
      // Map form's "subject" field to EmailJS template variable "title"
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        title: formData.subject.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully. I'll get back to you soon.");
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-band py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      
      {/* Decorative gradient blur in background */}
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-accent/5 dark:from-primary/5 dark:to-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something Together"
          description="Have a project in mind or looking to hire a full-stack engineer? Drop me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-5 sm:p-6 md:p-8"
          >
            <div className="space-y-6">
              <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white text-left">
                Contact Information
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-left">
                Feel free to reach out via email, phone, or connect on my social channels. I reply within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 pt-4 text-left">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800/60 hover:border-primary/20 transition-all duration-300">
                  <div className="p-3.5 rounded-xl bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800/60 hover:border-secondary/20 transition-all duration-300">
                  <div className="p-3.5 rounded-xl bg-secondary/10 dark:bg-secondary/15 text-secondary dark:text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-secondary dark:hover:text-purple-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800/60 hover:border-accent/20 transition-all duration-300">
                  <div className="p-3.5 rounded-xl bg-accent/10 dark:bg-accent/15 text-accent dark:text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Connect on Socials
              </h4>
              <div className="flex items-center space-x-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-slate-950 transition-all duration-300 border border-slate-200/50 dark:border-slate-800">
                  <FaGithub size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-slate-950 transition-all duration-300 border border-slate-200/50 dark:border-slate-800">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-5 sm:p-6 md:p-8 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/70 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-1 transition-all text-sm ${
                      errors.name
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light focus:ring-primary dark:focus:ring-primary-light'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs font-semibold text-rose-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/70 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-1 transition-all text-sm ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light focus:ring-primary dark:focus:ring-primary-light'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs font-semibold text-rose-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry / Project Pitch"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary-light focus:ring-1 focus:ring-primary dark:focus:ring-primary-light transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and requirements..."
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3.5 rounded-2xl border bg-white/70 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-1 transition-all text-sm resize-none ${
                    errors.message
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                      : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light focus:ring-primary dark:focus:ring-primary-light'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs font-semibold text-rose-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitted && (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
                  Thanks, your message was sent successfully.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="glow-btn w-full flex items-center justify-center space-x-2 py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-extrabold uppercase tracking-wider text-xs"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send size={14} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
