import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does TradeEase ensure document compliance?',
    answer: 'Our platform automatically validates trade documents against country-specific requirements and provides real-time compliance checks to ensure all paperwork meets international standards.'
  },
  {
    question: 'What kind of support is available for new users?',
    answer: 'We provide 24/7 customer support, detailed documentation, video tutorials, and personalized onboarding sessions to help you get started quickly and efficiently.'
  },
  {
    question: 'How does the distributor verification process work?',
    answer: 'All distributors undergo a rigorous verification process including business registration checks, financial assessment, and reference verification to ensure reliability.'
  },
  {
    question: 'What are the pricing plans available?',
    answer: 'We offer flexible pricing plans starting from ₹2,999/month, with features tailored to different business sizes and needs. Custom enterprise plans are also available.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}