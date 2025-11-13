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
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#00A699]/10 rounded-full mb-8">
              <span className="text-[#00A699] font-medium text-sm">
                🎯 Automate Your Airbnb Cleaning Schedule
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ping your cleaner.
              <br />
              <span className="text-[#00A699]">Every. Single. Time.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
              Never miss a cleaning with automatic SMS pings.
              <br className="hidden sm:block" />
              The text your cleaner actually wants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#waitlist"
                className="w-full sm:w-auto bg-[#00A699] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl"
              >
                Get Early Access
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#00A699] transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <p className="mt-8 text-gray-500">
              Join 500+ Airbnb hosts who never miss a cleaning
            </p>
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

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00A699] to-[#008c82] rounded-2xl p-12 text-center text-white shadow-2xl">
            <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-2xl sm:text-3xl font-medium mb-6">
              "I used to spend 20 minutes a day texting my cleaners. Now it's completely automated. CleanPing has saved me hours every week!"
            </blockquote>
            <p className="text-xl text-[#00A699]/20 font-semibold">
              - Sarah M., Superhost with 5 properties
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get Early Access
            </h2>
            <p className="text-xl text-gray-600">
              Join the waitlist and be the first to automate your cleaning schedule
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="How many properties do you manage?"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00A699] focus:outline-none text-lg"
                min="1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#00A699] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl"
            >
              Join the Waitlist →
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            🎁 Early members get 3 months free + lifetime discount
          </p>
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
