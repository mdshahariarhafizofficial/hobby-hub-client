import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-secondary">Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how <strong>HobbyHub</strong> uses cookies and similar technologies to enhance your browsing experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit our site. They help us remember your preferences and improve usability.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Essential Cookies – Necessary for core functionality</li>
        <li>Analytics Cookies – Help us understand user behavior</li>
        <li>Preference Cookies – Save your settings and choices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Managing Cookies</h2>
      <p className="mb-4">
        You can manage cookie preferences through your browser settings. Disabling cookies may affect the functionality of our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy periodically. Continued use of the site implies acceptance of these changes.
      </p>

      <p className="mt-10 text-sm italic">Updated: June 27, 2025</p>
    </div>
  );
};

export default CookiePolicy;
