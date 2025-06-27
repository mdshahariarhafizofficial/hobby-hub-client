import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-secondary dark:text-primary">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us at <strong>HobbyHub</strong>. This policy outlines how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information Collection</h2>
      <p className="mb-4">
        We collect personal details such as your name, email address, and hobby preferences when you register or create a group.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
      <p className="mb-4">
        Your data is used to provide services, personalize your experience, and communicate updates or promotions related to HobbyHub.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement security measures to safeguard your data. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-party Sharing</h2>
      <p className="mb-4">
        We do not sell or share your information with third parties without your consent, except where required by law.
      </p>

      <p className="mt-10 text-sm italic">Updated: June 27, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
