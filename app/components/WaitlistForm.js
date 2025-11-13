'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_count: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            property_count: formData.property_count ? parseInt(formData.property_count) : null,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', property_count: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          You're on the list!
        </h3>
        <p className="text-xl text-gray-600 mb-6">
          We'll send you an email when CleanPing launches.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#00A699] font-semibold hover:underline"
        >
          Add another email →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          required
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          required
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <input
          type="number"
          name="property_count"
          value={formData.property_count}
          onChange={handleChange}
          placeholder="How many properties do you manage?"
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
          min="1"
          disabled={status === 'loading'}
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-full text-center">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#00A699] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist →'}
      </button>

      <p className="text-center mt-6 text-gray-500">
        🎁 Early members get 3 months free + lifetime discount
      </p>
    </form>
  );
}
