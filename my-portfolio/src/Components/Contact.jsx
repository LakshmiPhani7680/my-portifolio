import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = {
    email: "lakshmiganaputrevu@gmail.com",
    github: "https://github.com/LakshmiPhani7680",
    linkedin: "https://www.linkedin.com/in/lakshmi-phani-putrevu-8b390b187/",
    location: "Hyderabad, India"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSubmitStatus(null);
  };

  return (
    <section id="contact" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          initialize-contact-form
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">contact.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">contactMethods</span> = {"{"}
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="terminal-card p-6 border border-green-400 rounded-md transform hover:scale-102 transition-all duration-300">
                  <h3 className="text-xl text-green-300 font-mono mb-4 flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 group">
                      <span className="code-param">email</span>:{" "}
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-green-300 hover:text-green-200 transition-colors duration-300 group-hover:translate-x-1 inline-flex items-center"
                      >
                        {contactInfo.email}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">→</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="code-param">location</span>:{" "}
                      <span className="text-gray-300">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div className="terminal-card p-6 border border-green-400 rounded-md transform hover:scale-102 transition-all duration-300">
                  <h3 className="text-xl text-green-300 font-mono mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔗</span>
                    Professional Networks
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 group">
                      <span className="code-param">github</span>:{" "}
                      <a 
                        href={contactInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-300 hover:text-green-200 transition-colors duration-300 group-hover:translate-x-1 inline-flex items-center"
                      >
                        GitHub Profile
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">→</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <span className="code-param">linkedin</span>:{" "}
                      <a 
                        href={contactInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-300 hover:text-green-200 transition-colors duration-300 group-hover:translate-x-1 inline-flex items-center"
                      >
                        LinkedIn Profile
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {"}"}
            </div>

            <div className="code-block relative">
              <span className="code-keyword">function</span>{" "}
              <span className="code-function">sendMessage</span>() {"{"}
              <form onSubmit={handleSubmit} className="mt-4 space-y-6 relative">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-green-300 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="code-param">name</span>:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-gray-800/50 border border-green-400/50 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ${
                        focusedField === 'name' ? 'border-green-400 shadow-lg shadow-green-400/20' : ''
                      }`}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-green-300 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="code-param">email</span>:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-gray-800/50 border border-green-400/50 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ${
                        focusedField === 'email' ? 'border-green-400 shadow-lg shadow-green-400/20' : ''
                      }`}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-green-300 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="code-param">subject</span>:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-800/50 border border-green-400/50 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'subject' ? 'border-green-400 shadow-lg shadow-green-400/20' : ''
                    }`}
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div className="relative group">
                  <label className="block text-green-300 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="code-param">message</span>:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="4"
                    className={`w-full bg-gray-800/50 border border-green-400/50 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'message' ? 'border-green-400 shadow-lg shadow-green-400/20' : ''
                    }`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`code-button relative overflow-hidden group ${
                    isSubmitting ? 'opacity-75 cursor-wait' : ''
                  }`}
                >
                  <span className={`inline-flex items-center transition-transform duration-300 ${
                    isSubmitting ? 'translate-y-10' : ''
                  }`}>
                    <span className="code-function">send-message</span>()
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      Processing...
                    </span>
                  )}
                </button>

                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-400/10 text-green-300 border border-green-400/50' 
                      : 'bg-red-400/10 text-red-300 border border-red-400/50'
                  }`}>
                    {submitStatus === 'success' ? (
                      <p className="flex items-center">
                        <span className="text-xl mr-2">✓</span>
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    ) : (
                      <p className="flex items-center">
                        <span className="text-xl mr-2">⚠</span>
                        Oops! Something went wrong. Please try again.
                      </p>
                    )}
                  </div>
                )}
              </form>
              {"}"}
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Available for exciting opportunities and collaborations
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Response time: Usually within 24 hours
                <span className="code-comment">{" */"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;