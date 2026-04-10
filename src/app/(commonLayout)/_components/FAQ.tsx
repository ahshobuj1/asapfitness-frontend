'use client';

import {useState} from 'react';
import {Plus, Minus} from 'lucide-react';

const faqData = [
  {
    question: 'What is this platform about?',
    answer:
      "This platform is a fitness coaching marketplace where users exchange training sessions and advice directly without money. It connects people who appreciate each other's fitness goals and want to swap coaching skills fairly.",
  },
  {
    question: 'Do I need to pay to exchange services?',
    answer:
      'No, the platform is built on exchanging services directly without the need for financial transactions.',
  },
  {
    question: 'Who can join the platform?',
    answer:
      'Anyone who is passionate about fitness and willing to share their skills or learn from others can join.',
  },
  {
    question: 'Is the platform responsible for service quality or disputes?',
    answer:
      'Users are responsible for their own exchanges. We provide the platform for connection but do not mediate disputes.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
        <span className="text-primary">Frequently</span>{' '}
        <span className="text-[#1A202C]">Asked Questions</span>
      </h2>

      <div className="flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer">
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0 w-6 h-6 rounded-full border border-slate-900 flex items-center justify-center">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-slate-900" strokeWidth={2} />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-900" strokeWidth={2} />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
