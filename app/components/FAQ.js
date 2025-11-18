'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Does this work with WhatsApp or just SMS?",
      answer: "Currently, CleanPing works exclusively with SMS text messaging. This ensures the highest delivery rates and works with any phone - no apps required for your cleaners."
    },
    {
      question: "What if my cleaner doesn't realize first?",
      answer: "We send a friendly introductory text explaining the system when you first add a cleaner. The messages are clear and easy to respond to - just 'YES' or 'NO'. Most cleaners love the automated reminders!"
    },
    {
      question: "When will this be available?",
      answer: "CleanPing beta launches in February 2025. The first 50 users on our waitlist will get early access and 50% off for life - just $7.50/month instead of $15/month."
    },
    {
      question: "How is this different from Turno?",
      answer: "Unlike Turno, CleanPing doesn't force you into a marketplace. You keep working with YOUR cleaners at YOUR rates. We just handle the coordination automatically - no middleman, no commission, no complexity."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
