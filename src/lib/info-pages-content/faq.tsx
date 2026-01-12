import React from 'react';

export const FAQContent = () => {
  return (
    <div className="space-y-6 text-gray-800">
      <section>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-bold">Q1: Are the gold products physical?</h3>
            <p className="leading-relaxed">
              Yes. Gold Nexus offers physical precious metal products sourced from verified
              suppliers.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">Q2: Where do you ship from?</h3>
            <p className="leading-relaxed">
              At this time, orders are fulfilled through suppliers shipping from the United States
              only.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">Q3: Is shipping insured?</h3>
            <p className="leading-relaxed">Yes. All shipments are insured and include tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
