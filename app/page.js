import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Clean<span className="text-[#00A699]">Ping</span>
              </span>
            </div>
            <div className="hidden md:block">
              <a
                href="#waitlist"
                className="bg-[#00A699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#008c82] transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Missed Cleanings Before They Ruin Your Reviews
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              One missed cleaning costs $300+. CleanPing auto-texts your cleaner at checkout and confirms they're coming. $15/mo. No marketplace. No complexity.
            </p>

            {/* 3 Bullet Points */}
            <div className="max-w-2xl mx-auto mb-10 space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <p className="text-lg text-gray-700">
                  <strong className="font-semibold text-gray-900">Automatic Calendar Sync</strong> – Detects checkouts from Airbnb/VRBO
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <p className="text-lg text-gray-700">
                  <strong className="font-semibold text-gray-900">SMS to Your Cleaners</strong> – Works with your existing team (no marketplace lock-in)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <p className="text-lg text-gray-700">
                  <strong className="font-semibold text-gray-900">Job Confirmation</strong> – Cleaner replies YES/NO, you get instant notification
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#waitlist"
                className="w-full sm:w-auto bg-[#00A699] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl"
              >
                Join the Waitlist – Beta Launches February 2025
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 italic text-lg mb-2">
                  "We completely overlooked a booking and scrambled to arrange cleaning just before the next guest arrived!"
                </p>
                <p className="text-gray-500 text-sm">
                  — Reddit host, r/airbnb_hosts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Problem Every Airbnb Host Faces
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p className="flex items-start">
                <span className="text-2xl mr-3">😰</span>
                <span>You get a new booking. You manually text your cleaner. Again.</span>
              </p>
              <p className="flex items-start">
                <span className="text-2xl mr-3">⏰</span>
                <span>It's midnight when the booking comes in. You'll text them tomorrow... and forget.</span>
              </p>
              <p className="flex items-start">
                <span className="text-2xl mr-3">🤦</span>
                <span>Your guest arrives to a dirty property. 1-star review incoming.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Set it once. Forget forever.
            </h2>
            <p className="text-xl text-gray-600">
              CleanPing works on autopilot so you don't have to
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A699] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Connect Your Calendar
              </h3>
              <p className="text-gray-600 text-lg">
                Link your Airbnb calendar in seconds. We sync with all bookings automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A699] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Add Your Cleaner
              </h3>
              <p className="text-gray-600 text-lg">
                Enter your cleaner's phone number and set your preferences. Done.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A699] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Relax & Repeat
              </h3>
              <p className="text-gray-600 text-lg">
                New booking? CleanPing automatically texts your cleaner. Every. Single. Time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Built for busy hosts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Instant SMS Notifications
              </h3>
              <p className="text-gray-600 text-lg">
                Your cleaner gets a text the moment you get a booking. No apps to download, no accounts to create.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Scheduling
              </h3>
              <p className="text-gray-600 text-lg">
                Customizable lead times ensure your cleaner has enough notice. Same-day booking? Back-to-back guests? We've got you covered.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Multi-Property Support
              </h3>
              <p className="text-gray-600 text-lg">
                Manage multiple properties and cleaners from one dashboard. Scale your hosting business effortlessly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Confirmation Tracking
              </h3>
              <p className="text-gray-600 text-lg">
                Know when your cleaner receives and confirms each job. Peace of mind, automated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border-2 border-[#00A699] p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                $15<span className="text-2xl text-gray-600">/month</span>
              </div>
              <p className="text-xl text-gray-600">for your first property</p>
              <p className="text-lg text-gray-500 mt-2">$10/month for each additional property</p>
            </div>

            <div className="bg-gradient-to-r from-[#00A699] to-[#008c82] rounded-xl p-6 text-center mb-8">
              <p className="text-2xl font-bold text-white mb-2">🎁 First 50 Beta Users</p>
              <p className="text-3xl font-bold text-white">50% off for life</p>
              <p className="text-xl text-white/90 mt-2">Just $7.50/month</p>
            </div>

            <div className="text-center">
              <a
                href="#waitlist"
                className="inline-block bg-[#00A699] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl"
              >
                Join the Waitlist – Beta Launches February 2025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600">
              Be among the first 50 beta users and get 50% off for life
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">
                Clean<span className="text-[#00A699]">Ping</span>
              </span>
              <p className="text-gray-400 mt-2">
                The text your cleaner actually wants.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#00A699] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00A699] transition-colors">
                Terms
              </a>
              <a href="mailto:hello@cleanping.com" className="text-gray-400 hover:text-[#00A699] transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CleanPing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
