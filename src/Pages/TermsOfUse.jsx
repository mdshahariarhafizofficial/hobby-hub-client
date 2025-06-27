import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-secondary dark:text-primary">Terms of Use</h1>
      <p className="mb-4">
        Welcome to <strong>HobbyHub</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of the Platform</h2>
      <p className="mb-4">
        HobbyHub is a platform to discover, join, and create hobby-based groups. You may not use our services for any unlawful purpose or violate any community guidelines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account. You agree not to impersonate others or post misleading content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Group Content</h2>
      <p className="mb-4">
        Group owners are responsible for the accuracy and legality of the content they post. We reserve the right to remove content that violates our policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access at any time if you violate our Terms.
      </p>

      <p className="mt-10 text-sm italic">Updated: June 27, 2025</p>
    </div>
  );
};

export default TermsOfUse;
