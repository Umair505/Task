import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-3 sm:mb-4 tracking-widest uppercase">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto px-4 leading-tight">
            Why choose Easy Pay for effortless payments?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-0">
          {/* Feature 1 - Instant payments */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12h6M9 16h6M13 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-6-6z" />
                <path d="M13 2v6h6" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Instant payments
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Send money to friends or family in real-time, for free.
            </p>
          </div>

          {/* Feature 2 - No hidden fees */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path d="M9 14l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              No hidden fees
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Clear and simple pricing. Always be aware of your costs.
            </p>
          </div>

          {/* Feature 3 - Digital wallet */}
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
                <rect x="5" y="9" width="14" height="8" rx="2" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Digital wallet
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Store money securely and make fast transfers or purchases.
            </p>
          </div>

          {/* Feature 4 - Secure transactions */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18M7 15h.01M11 15h2" />
                <circle cx="17" cy="15" r="1.5" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Secure transactions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              End-to-end encryption for all transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;