import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const colorMap = {
  blue: "from-blue-600 to-blue-400",
  green: "from-green-600 to-green-400",
  gray: "from-gray-700 to-gray-500",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kumarsneh35@gmail.com",
      link: "mailto:kumarsneh35@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7007635233",
      link: "tel:+917007635233",
      color: "green"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/sneh011",
      link: "https://github.com/sneh011",
      color: "gray"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/snehkumar",
      color: "blue"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm actively seeking opportunities for internships and fresher roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all group"
                >
                  <div className={`p-3 bg-gradient-to-br ${colorMap[item.color]} rounded-lg text-white mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/sneh011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 bg-gray-900 text-white rounded-lg"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/snehkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 bg-blue-600 text-white rounded-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold">Message Sent!</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "subject"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={field.toUpperCase()}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                ))}

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex justify-center items-center"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Looking for a Developer?</h3>
          <a
            href="mailto:kumarsneh35@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium"
          >
            <Mail className="w-5 h-5 mr-2" /> Email Me Directly
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
