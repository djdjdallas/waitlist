'use client';

export default function SuccessModal({ isOpen, onClose, userName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-2xl bg-white px-8 py-10 text-center shadow-2xl transition-all w-full max-w-md">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h3 className="text-3xl font-bold text-gray-900 mb-3" id="modal-title">
            Welcome to CleanPing!
          </h3>

          {userName && (
            <p className="text-lg text-gray-700 mb-4">
              Thanks, <span className="font-semibold text-[#00A699]">{userName}</span>!
            </p>
          )}

          <p className="text-gray-600 mb-2">
            You're officially on the waitlist.
          </p>

          {/* Special Offer Badge */}
          <div className="bg-gradient-to-r from-[#00A699] to-[#008c82] rounded-lg p-4 my-6">
            <p className="text-white font-bold text-lg mb-1">
              🎁 Early Bird Special
            </p>
            <p className="text-white text-sm">
              First 50 users get <span className="font-bold">50% off for life</span>
            </p>
          </div>

          {/* What's Next */}
          <div className="text-left bg-gray-50 rounded-lg p-4 mb-6">
            <p className="font-semibold text-gray-900 mb-2">What happens next?</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#00A699] mr-2">✓</span>
                <span>Check your email for confirmation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A699] mr-2">✓</span>
                <span>We'll notify you when beta launches in February 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A699] mr-2">✓</span>
                <span>Get early access to exclusive features</span>
              </li>
            </ul>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#00A699] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#008c82] transition-colors shadow-lg hover:shadow-xl"
          >
            Got it, thanks!
          </button>

          {/* Social Share */}
          <p className="mt-4 text-sm text-gray-500">
            Know other Airbnb hosts? Share CleanPing with them!
          </p>
        </div>
      </div>
    </div>
  );
}
