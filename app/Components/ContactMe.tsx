"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setFeedbackMessage('');
    setMessageType('');

    try {
      await emailjs.sendForm(
        'service_n48isse',
        'template_ta17ray',
        form.current,
        'mQ9vfBIRQCcrF8OSc'
      );
      setFeedbackMessage('Your message has been sent successfully!');
      setMessageType('success');
      form.current.reset();
    } catch (error) {
      setFeedbackMessage('Failed to send the message. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">
            Start a <span className="text-gradient">Project</span>
          </h2>
          <p className="text-gray-400 text-center mb-10">Ready to bring your ideas to life? Let's discuss your project.</p>

          {feedbackMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-xl mb-6 text-center font-medium ${messageType === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
            >
              {feedbackMessage}
            </motion.div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="group">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="group">
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};