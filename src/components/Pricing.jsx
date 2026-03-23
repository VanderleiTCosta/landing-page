import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 landing pages',
      'Basic templates',
      'Email support',
      'Community access',
      '1 GB storage',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Best for growing businesses',
    features: [
      'Unlimited landing pages',
      'Premium templates',
      'Priority support',
      'Advanced analytics',
      '100 GB storage',
      'Custom domain',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'Unlimited storage',
      'SLA guarantee',
      'White-label options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>/month</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check
                      size={20}
                      className={plan.highlighted ? 'text-blue-200' : 'text-blue-600'}
                    />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
