import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronRight,
  Menu,
  X,
  Target,
  TrendingUp,
  Award,
  Stethoscope,
  UserCheck,
  GraduationCap,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div>
                <div className="text-lg font-bold text-gray-900">HDRI</div>
                <div className="text-xs text-gray-600">Since 1985</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#programs" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</a>
                <a href="#impact" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Impact</a>
                <a href="#contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <a href="#contact" className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">Get Help</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#programs" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <a href="#contact" className="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700">Get Help</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Lives Through 
                <span className="text-teal-600"> Community Care</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 40 years, HDRI has been dedicated to youth development, substance abuse intervention, 
                and community health programs in Kolkata and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#programs" className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center">
                  Our Programs
                </a>
                <a href="#contact" className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center">
                  Get Support
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image.png" 
                alt="HDRI community outreach program with migrant workers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-teal-600">40+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About HDRI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Human Development & Research Institute is a pioneering NGO founded in 1985 in Kolkata, 
              committed to enhancing community well-being through comprehensive health and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-teal-50 rounded-xl hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Community development through medical, educational, financial, and rehabilitation programs 
                aimed at enhancing quality of life for all.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Focus</h3>
              <p className="text-gray-600">
                Combating drug and alcohol abuse, HIV/STI prevention, youth development, 
                and supporting vulnerable communities.
              </p>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-xl hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Impact</h3>
              <p className="text-gray-600">
                Serving over 20,000 individuals through targeted interventions, 
                rehabilitation services, and community outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to address critical community health and development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Substance Abuse Intervention</h3>
              <p className="text-gray-600 mb-4">
                Anti-drug initiatives targeting students and youth, providing prevention education and early intervention support.
              </p>
              <a href="#contact" className="text-teal-600 font-medium flex items-center hover:text-teal-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">STD/HIV/AIDS Intervention</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare services for migrant workers, including STI treatments and general healthcare since 1997.
              </p>
              <a href="#contact" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <UserCheck className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rehabilitation Services</h3>
              <p className="text-gray-600 mb-4">
                IRCA (Integrated Rehabilitation Centre for Addicts) offering de-addiction and mental health programs.
              </p>
              <a href="#contact" className="text-green-600 font-medium flex items-center hover:text-green-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Policy</h3>
              <p className="text-gray-600 mb-4">
                Academic research on substance abuse, policy development, and publication of evidence-based reports.
              </p>
              <a href="#contact" className="text-purple-600 font-medium flex items-center hover:text-purple-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <GraduationCap className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Education</h3>
              <p className="text-gray-600 mb-4">
                Educational programs focused on health awareness, prevention strategies, and community empowerment.
              </p>
              <a href="#contact" className="text-orange-600 font-medium flex items-center hover:text-orange-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Women's Health</h3>
              <p className="text-gray-600 mb-4">
                Specialized services for women, including reproductive health education and support programs.
              </p>
              <a href="#contact" className="text-pink-600 font-medium flex items-center hover:text-pink-700">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact" className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Four decades of dedicated service to the community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-teal-100">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20K+</div>
              <div className="text-teal-100">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-teal-100">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Reach out to us for support, information, or to learn more about our programs. 
                We're here to help you or your loved ones.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91-033-25333003</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hdri.cal6@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">IRCA De-addiction Centre</div>
                    <div className="text-gray-600">43/C, 1st Floor, Jorabagan, Kolkata</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Operating Hours</div>
                    <div className="text-gray-600">Tuesday - Saturday: 10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  >
                    <option>General Inquiry</option>
                    <option>Program Information</option>
                    <option>Rehabilitation Services</option>
                    <option>Research Collaboration</option>
                    <option>Emergency Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div>
                  <div className="text-lg font-bold">HDRI</div>
                  <div className="text-sm text-gray-400">Since 1985</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Human Development & Research Institute - Transforming lives through compassionate care and community development.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#programs" className="block text-gray-400 hover:text-white transition-colors">Our Programs</a>
                <a href="#impact" className="block text-gray-400 hover:text-white transition-colors">Impact</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Substance Abuse Treatment</div>
                <div className="text-gray-400">HIV/STI Prevention</div>
                <div className="text-gray-400">Mental Health Support</div>
                <div className="text-gray-400">Community Outreach</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <div className="space-y-2">
                <div className="text-gray-400">24/7 Support Line</div>
                <div className="text-white font-semibold">+91-033-25333003</div>
                <div className="text-gray-400">hdri.cal6@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Human Development & Research Institute. All rights reserved. | Serving the community since 1985.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;