import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Opportunities: React.FC = () => {
  const externalLinks = [
    {
      id: 1,
      title: 'Kepler-Bachelor’s degree in Business Analytics',
      description: 'Equips students with data-driven decision-making, analytical, and business intelligence skills to solve real-world organizational challenges.',
      image: './src/assets/Kepler_Logo.png',
      url: 'https://keplercollege.ac.rw/apply-form/',
    },
    {
      id: 2,
      title: 'Career Opportunities Hub',
      description: 'Explore job openings and internships from top companies.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      url: 'https://example-career-site.com',
    },
    {
      id: 3,
      title: 'Study Abroad Programs',
      description: 'Discover international education opportunities and programs.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      url: 'https://example-study-abroad-site.com',
    },
    {
      id: 4,
      title: 'Professional Development',
      description: 'Access training and certification programs for career growth.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      url: 'https://example-professional-dev-site.com',
    },
    {
      id: 5,
      title: 'Kepler-Bachelor’s degree in Project Management',
      description: 'prepares students to plan, execute, and lead successful projects by combining leadership, strategic thinking, and practical management skills.',
      image: './src/assets/Kepler_Logo.png',
      url: 'https://keplercollege.ac.rw/apply-form/',
    },
    {
      id: 6,
      title: 'Networking Platform',
      description: 'Connect with professionals and build your network globally.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      url: 'https://example-networking-site.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Explore{' '}
                <span className="text-orange-500 relative">
                  Opportunities
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-200 rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover external resources and platforms that can help you find scholarships, jobs, and educational opportunities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* External Links Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {externalLinks.map((link) => (
                <div
                  key={link.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{link.description}</p>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors group-hover:shadow-md"
                    >
                      Visit Site
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              These external resources are just the beginning. Create an account to access personalized opportunities and get notified about new openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Opportunities;