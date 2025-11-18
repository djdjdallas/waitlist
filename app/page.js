import WaitlistForm from "./components/WaitlistForm";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Clean<span className="text-red-600">Ping</span>
              </span>
            </div>
            <div className="hidden md:block">
              <a
                href="#waitlist"
                className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-sm"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stop Missed Cleanings Before They{" "}
                <span className="text-red-600">Ruin Your Reviews</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automated SMS coordinator that syncs your calendar, texts your
                cleaners, and gets confirmation. Never lose $300-700 on a missed
                cleaning again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#waitlist"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Join Waitlist - Free
                </a>
              </div>

              <div className="bg-teal-100 rounded-lg p-4 inline-block">
                <p className="text-sm font-semibold text-gray-800">
                  🎁 First 50 beta users get 50% off for life
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                27 hosts already joined
              </p>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="bg-gray-100 rounded-2xl p-4 flex-1">
                      <p className="text-sm text-gray-800">
                        Hi Maria! You have a cleaning at Sunset Villa on Dec 15
                        (checkout 11am). Can you confirm?
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Reply YES or NO
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-blue-500 rounded-2xl p-4 max-w-xs">
                      <p className="text-sm text-white">YES</p>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="bg-gray-100 rounded-2xl p-4 flex-1">
                      <p className="text-sm text-gray-800">
                        Perfect! Confirmed. See you then! 👍
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* If You've Ever Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            If You've Ever...
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Problems */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Forgotten to text your cleaner
                  </h3>
                  <p className="text-gray-600 text-sm">
                    And arrived to see guests checking into a dirty property
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Lost $300-700 on a missed cleaning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Refunds, chargebacks, and angry 1-star reviews
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Manually tracked cleaning schedules
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Spreadsheets, sticky notes, and constant stress
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-lg">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Worried about your cleaner's reliability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No confirmation means no peace of mind
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="text-gray-700 italic mb-3">
                  "I had $800 for month when my cleaner didn't show up and I
                  didn't realize until the guests texted the photos of the mess
                  floor again."
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Sarah M. - Denver Host
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="text-gray-700 italic mb-3">
                  "I spend 2 hours every week just coordinating cleanings. It's
                  the LEAST FUN of hosting and I'm always stressed about it."
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Mike S. - Austin Host
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How CleanPing Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How CleanPing Works
            </h2>
            <p className="text-xl text-gray-600">
              Set it once, forget forever. CleanPing handles all your cleaning
              coordination automatically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Step 1 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Sync Your Calendar
              </h3>
              <p className="text-gray-600">
                Connect your Airbnb/VRBO calendar. CleanPing automatically knows
                when cleanings are needed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Auto-SMS Your Cleaner
              </h3>
              <p className="text-gray-600">
                Smart SMS sent at the perfect time with all the details your
                cleaner needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Get Confirmation
              </h3>
              <p className="text-gray-600">
                Receive instant confirmation when your cleaner accepts. No more
                wondering if it's handled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hosts Choose CleanPing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Hosts Choose CleanPing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Use Your Own Cleaners
              </h3>
              <p className="text-gray-600 text-sm">
                Keep working with cleaners you trust. No marketplace lock-in or
                forced switching.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Simple, Fair Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                $15/month for your first property. $10 for each additional. No
                hidden fees or commission.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SMS That Actually Works
              </h3>
              <p className="text-gray-600 text-sm">
                Reliable SMS delivery with smart timing that cleaners will
                actually see and respond to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One missed cleaning costs more than a year of CleanPing
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-teal-100 text-teal-800 px-6 py-2 rounded-full text-sm font-semibold">
                BETA SPECIAL - 50% OFF FOR LIFE
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                $15<span className="text-2xl text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">
                First property • $10/month for additional properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* What's Included */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited SMS coordination
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Calendar sync (Airbnb/VRBO)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Confirmation tracking
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Multiple cleaner support
                  </li>
                </ul>
              </div>

              {/* Compare the Cost */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Compare the Cost:
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">One missed cleaning</span>
                    <span className="font-bold text-red-600">$300-700</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cleaning (full year)</span>
                    <span className="font-bold text-gray-600">$180</span>
                  </div>
                  <div className="border-t border-gray-200 my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">
                      You save:
                    </span>
                    <span className="font-bold text-green-600">$120-520</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#waitlist"
                className="inline-block bg-red-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Join the Waitlist – Beta Launches January 2026
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Be among the first 50 to get 50% off for life
            </p>
            <p className="text-sm text-gray-500">
              27 hosts already joined • Beta launches January 2026
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">
                Clean<span className="text-[#00A699]">Ping</span>
              </span>
              <p className="text-gray-400 mt-2">
                Stop missing cleanings again.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="mailto:hello@cleanping.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 CleanPing. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Powered by{" "}
              <a href="#" className="text-gray-400 hover:text-white">
                Claude Code
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
