import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mutijima Pacifique',
      role: 'Founder & CEO',
      image: '',
      bio: 'Passionate about connecting global talent with opportunities. 10+ years in education technology.'
    },
    {
      name: 'Herve Ngenzi Rutayisire',
      role: 'Co-Founder & Head of Operations',
      image: '',
      bio: 'Expert in program management . Former scholarship recipient.'
    },
    {
      name: 'Eric Tuyishime',
      role: 'Co-Founder & Tech Leader',
      image: '',
      bio: 'Leading our technical innovation to create seamless user experiences for global opportunities.'
    },
    {
      name: 'Queen',
      role: 'Mentor',
      image: '',
      bio: 'An employer worldwide. Business and organizations support and mentor specialist.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize access to global education and career opportunities by connecting talented individuals with life-changing programs worldwide.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where geographical boundaries don\'t limit educational and career aspirations, where every individual has access to opportunities that match their potential.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, inclusivity, innovation, and impact. We believe in transparent processes, equal opportunities, cutting-edge technology, and measurable positive outcomes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-500">Unnira Portal</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to break down barriers and create pathways to success for students, 
                graduates, and professionals worldwide through accessible, transparent, and impactful opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Unnira Portal was born from a simple yet powerful observation: talented individuals 
                    around the world were missing out on life-changing opportunities simply because they 
                    didn't know where to look or how to access them.
                  </p>
                  <p>
                    Founded in 2023, we started with a vision to create a centralized platform where 
                    students could discover scholarships, graduates could find career opportunities, 
                    and employers could connect with global talent.
                  </p>
                  <p>
                    Today, we've helped thousands of individuals transform their lives through education 
                    and career opportunities, building bridges across continents and creating a truly 
                    global community of learners and achievers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Team collaboration and innovation"
                  className="rounded-2xl shadow-xl"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-orange-100">Lives Changed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core principles guide everything we do, from the opportunities we curate 
                to the relationships we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate professionals dedicated to creating opportunities and 
                empowering individuals to achieve their dreams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                      loading="lazy"
                      width="192"
                      height="192"
                    />
                    <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-orange-500 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-orange-200 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Be part of a global community that's breaking down barriers and creating 
                opportunities for everyone. Your journey to success starts here.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;