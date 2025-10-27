export default function SecuritySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <p className="text-xs font-semibold text-purple-600 mb-2">SECURITY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We protect your money at <br /> every step with Easy Pay
          </h2>
        </div>
        <p className="text-gray-500 text-sm md:w-1/4 mt-4 md:mt-0 leading-relaxed">
          Easy Pay ensures your money is protected at every step with advanced encryption,
          real-time monitoring, and multi-factor authentication.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
        <div className="flex flex-col gap-12">
          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 transition-colors">
                <span className="w-3 h-3 bg-blue-600 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Two-factor authentication
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Two-factor authentication ensures added protection by using verification steps.
                </p>
              </div>
            </div>
          </div>

          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-cyan-200 transition-colors">
                <span className="w-3 h-3 bg-cyan-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Biometric access
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Easily and securely log in with biometric features, and facial recognition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-red-200 transition-colors">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Fraud detection and alerts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fraud detection safeguards your money, sending instant alerts for any activity.
                </p>
              </div>
            </div>
          </div>

          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-200 transition-colors">
                <span className="w-3 h-3 bg-orange-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  End-to-end encryption
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  By encryption, protecting your data from unauthorized access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-200 transition-colors">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Transaction notifications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Instant notifications for transaction keeps you informed in managing your finances.
                </p>
              </div>
            </div>
          </div>

          <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-200 transition-colors">
                <span className="w-3 h-3 bg-purple-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  24/7 Protection support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated team is available around the clock to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}