export default function PricingSection() {
  const plans = [
    {
      name: "Free Plan",
      description: "Free for personal payments.",
      price: "$0",
      period: "/month",
      features: [
        "Up to 100 transactions per month",
        "Basic proud protection",
        "Email support",
      ],
      buttonText: "Get Free Plan",
      highlight: false,
      bg: "bg-white",
      text: "text-gray-900",
      accent: "text-blue-500",
      border: "border-gray-200",
      checkColor: "text-blue-500",
    },
    {
      name: "Advanced",
      description: "Minimal fees for advanced transactions",
      price: "$19",
      period: "/month",
      features: [
        "Up to 1000 transactions per month",
        "Advanced proud protection",
        "Detailed transaction reports",
        "Priority email & chat support",
      ],
      buttonText: "Get Advanced Plan",
      highlight: true,
      bg: "bg-[#0B0F19]",
      text: "text-white",
      accent: "text-white",
      border: "border-transparent",
      checkColor: "text-[#3B82F6]",
    },
    {
      name: "Business",
      description: "Premium business transactions",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited transactions per month",
        "Premium proud protection",
        "Detailed transaction reports",
        "Priority email & chat support",
      ],
      buttonText: "Get Business Plan",
      highlight: false,
      bg: "bg-white",
      text: "text-gray-900",
      accent: "text-blue-500",
      border: "border-gray-200",
      checkColor: "text-blue-500",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#faf9ff] to-[#f5f1ff] py-12 px-6 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wider">
          PRICING
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Simple transparent pricing
        </h2>
        <p className="text-3xl text-gray-900 font-semibold">
          no hidden fees
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-8 border ${plan.border} shadow-[0_8px_35px_rgba(0,0,0,0.05)] ${plan.bg} flex flex-col justify-between`}
          >
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${plan.text}`}>
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-5 text-base">{plan.description}</p>

              <div className="text-5xl font-bold mb-6 flex items-end gap-1">
                <span className={`${plan.text}`}>{plan.price}</span>
                <span className="text-gray-500 text-xl">{plan.period}</span>
              </div>

              <div className="border-t border-gray-200/30 my-5"></div>

              <ul className="space-y-3.5 text-base">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <svg
                      className={`w-5 h-5 ${plan.checkColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`${
                        plan.highlight ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                    : "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
