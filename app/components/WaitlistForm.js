'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import SuccessModal from './SuccessModal';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_count: '',
    honeypot: '' // Bot protection
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    // Accept formats: (123) 456-7890, 123-456-7890, 1234567890, +1234567890
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Bot protection: Check honeypot field
    if (formData.honeypot) {
      console.log('Bot detected');
      setStatus('success'); // Fake success for bots
      return;
    }

    // Rate limiting: Prevent submissions faster than 3 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 3000) {
      setStatus('error');
      setErrorMessage('Please wait a moment before submitting again.');
      return;
    }
    setLastSubmitTime(now);

    // Client-side validation
    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    if (formData.property_count && (parseInt(formData.property_count) < 1 || parseInt(formData.property_count) > 1000)) {
      setStatus('error');
      setErrorMessage('Property count must be between 1 and 1000.');
      return;
    }

    try {
      // Check for duplicate email first
      const { data: existingEmail, error: checkError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', formData.email.toLowerCase().trim())
        .maybeSingle();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      if (existingEmail) {
        setStatus('error');
        setErrorMessage('This email is already on the waitlist! Check your inbox for our confirmation email.');
        return;
      }

      // Insert new waitlist entry (removed created_at - let database handle it)
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.toLowerCase().trim(),
            phone: formData.phone ? formData.phone.trim() : null,
            property_count: formData.property_count ? parseInt(formData.property_count) : null
          }
        ])
        .select();

      if (error) throw error;

      setStatus('success');
      setSubmittedName(formData.name);
      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', property_count: '', honeypot: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');

      // User-friendly error messages
      if (error.code === '23505') {
        setErrorMessage('This email is already on the waitlist!');
      } else if (error.message.includes('duplicate')) {
        setErrorMessage('This email is already registered.');
      } else if (error.message.includes('network')) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        setErrorMessage('Oops! Something went wrong. Please try again in a moment.');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStatus('idle');
  };

  return (
    <>
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        userName={submittedName}
      />

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="sr-only">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          required
          disabled={status === 'loading'}
          aria-required="true"
          maxLength="100"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          required
          disabled={status === 'loading'}
          aria-required="true"
          aria-invalid={status === 'error'}
          maxLength="100"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone Number (optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          disabled={status === 'loading'}
          aria-required="false"
          maxLength="20"
        />
      </div>
      <div>
        <label htmlFor="property_count" className="sr-only">How many properties do you manage?</label>
        <input
          type="number"
          id="property_count"
          name="property_count"
          value={formData.property_count}
          onChange={handleChange}
          placeholder="How many properties do you manage?"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          min="1"
          max="1000"
          step="1"
          disabled={status === 'loading'}
          aria-required="false"
        />
      </div>

      {status === 'error' && (
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-full text-center"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#00A699] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={status === 'loading' ? 'Submitting waitlist form' : 'Join the waitlist'}
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist →'}
      </button>

      <p className="text-center mt-6 text-gray-500">
        🎁 Early members get 3 months free + lifetime discount
      </p>
    </form>
    </>
  );
}
