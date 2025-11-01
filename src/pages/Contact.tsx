import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'ngenzir01@gmail.com',
      description: 'Send us an email anytime',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '0780425482',
      description: 'Weekends+Friday from 8am to 6pm',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Kepler college',
      description: 'Kigali City, KC 24 Ave 16 Kigali',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Online Support',
      description: 'Always here to help',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Browse our comprehensive FAQ and guides',
      action: 'Visit Help Center',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other users in our community',
      action: 'Join Community',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about opportunities, need support, or want to partner with us? 
              We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Embedded Map */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Kigali City, KC 24 Ave 16 Kigali</p>
                  </div>
                </div>

                {/* Support Options */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Other Ways to Get Help</h3>
                  {supportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{option.title}</h4>
                            <p className="text-gray-600 mb-3">{option.description}</p>
                            <button className={`px-4 py-2 ${option.color} text-white text-sm font-medium rounded-lg transition-colors`}>
                              {option.action}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about Unnira Portal
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I apply for opportunities?",
                  answer: "Simply create an account, browse our opportunities, and click 'Apply Now' on any opportunity that interests you. Follow the application instructions provided."
                },
                {
                  question: "Are the opportunities on your platform legitimate?",
                  answer: "Yes, we carefully vet all opportunities and organizations before listing them on our platform. We work only with reputable institutions and companies."
                },
                {
                  question: "Is there a fee to use Unnira Portal?",
                  answer: "No, Unnira Portal is completely free for students and job seekers. We believe everyone should have access to opportunities regardless of their financial situation."
                },
                {
                  question: "How can I track my applications?",
                  answer: "Once you're logged in, visit your dashboard where you can see all your applications, their status, and any updates from the organizations."
                },
                {
                  question: "Can employers post opportunities?",
                  answer: "Yes, employers can create accounts and post opportunities. We review all postings to ensure they meet our quality standards before they go live."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;