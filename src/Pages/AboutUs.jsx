import React from 'react';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="px-4 md:px-20 py-16 bg-base-100 text-base-content">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-secondary mb-2">About HobbyHub</h2>
        {/* Divider matching text width */}
        <div className="w-60 mx-auto border-b-4 border-primary mb-6"></div>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          HobbyHub is a vibrant online platform designed to connect people through their shared hobbies and interests.
          Whether you're passionate about painting, photography, gaming, cooking, or running — HobbyHub makes it easier
          to find like-minded people, join groups, and enjoy your passions together.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <FaUsers size={48} className="text-secondary mb-4" />
          <h4 className="text-xl font-bold mb-2 text-primary">Community Focused</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to build meaningful communities through hobbies. Meet new people, form friendships,
            and build your own hobby family.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <FaLightbulb size={48} className="text-secondary mb-4" />
          <h4 className="text-xl font-bold mb-2 text-primary">Inspire Creativity</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover new hobbies, learn from others, and share your own experiences. HobbyHub is a space for creativity
            to thrive.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <FaHandsHelping size={48} className="text-secondary mb-4" />
          <h4 className="text-xl font-bold mb-2 text-primary">Easy Collaboration</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Easily create or join hobby groups, plan events, and collaborate on shared interests — all within one platform.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-secondary mb-2">Our Mission</h3>
        <div className="w-48 mx-auto border-b-4 border-primary mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          At HobbyHub, we believe that shared interests bring people closer. Our goal is to eliminate barriers and 
          make hobby-based community building fun, inclusive, and impactful. Whether you're a beginner or an expert,
          HobbyHub welcomes you to explore, connect, and grow together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
