import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      '5,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    name: 'Professional',
    price: '99',
    features: [
      '50,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '299',
    features: [
      'Unlimited API calls',
      'Custom AI models',
      '24/7 dedicated support',
      'Full analytics suite',
      'Custom integrations',
      'SLA guarantee',
    ],
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 border border-gray-200'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-1 text-xl text-opacity-75">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`h-5 w-5 ${plan.popular ? 'text-indigo-200' : 'text-indigo-600'} mr-3`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-lg ${
                    plan.popular
                      ? 'bg-white text-indigo-600 hover:bg-gray-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  } transition`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}