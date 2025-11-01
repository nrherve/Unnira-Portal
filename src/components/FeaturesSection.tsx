import React from 'react';
import { GraduationCap, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'For Students',
      description: 'Discover scholarships, exchange programs, and educational opportunities worldwide.',
      benefits: ['Global Scholarships', 'Study Abroad Programs', 'Academic Grants', 'Research Opportunities'],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Briefcase,
      title: 'For Graduates',
      description: 'Find career opportunities, internships, and professional development programs.',
      benefits: ['Career Opportunities', 'Professional Training', 'Internship Programs', 'Skill Development'],
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      icon: Building2,
      title: 'For Employers',
      description: 'Connect with talented individuals and post opportunities to reach global talent.',
      benefits: ['Talent Acquisition', 'Global Reach', 'Skilled Candidates', 'Easy Posting'],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Opportunities for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a student seeking education, a graduate looking for career growth, 
            or an employer searching for talent, we have something for you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`${feature.color} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to="/opportunities"
                      className={`inline-flex items-center px-6 py-3 ${feature.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 group-hover:shadow-md`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students, graduates, and employers who have found success through our platform.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;