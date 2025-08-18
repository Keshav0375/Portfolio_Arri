import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // EmailJS Configuration - UPDATED WITH LATEST VALUES
  const EMAILJS_CONFIG = {
    serviceId: 'service_rx5436c',
    templateId: 'template_d2jmtsr', // Updated template ID from your error
    publicKey: 'LkFlfxBiZgxeNm0CE',
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Prepare template parameters (with recipient email)
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject || `Portfolio message from ${formState.name}`,
        message: formState.message,
        email: 'arri@uwindsor.ca', // Recipient email (your email)
      };
      
      console.log('Sending email with params:', templateParams); // Debug log
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('EmailJS response:', response); // Debug log
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      setSubmitStatus('error');
      
      // More specific error messages
      if (error.text) {
        setStatusMessage(`Failed to send: ${error.text}`);
      } else if (error.status === 422) {
        setStatusMessage('Configuration error. Please check EmailJS template settings.');
      } else {
        setStatusMessage('Failed to send message. Please try again or contact me directly.');
      }
      
      // Reset error message after 7 seconds for debugging
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-mono font-semibold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dark-300 p-3 rounded-lg mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:arri@uwindsor.ca" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  arri@uwindsor.ca
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-300 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Ontario, Canada</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-300 p-3 rounded-lg mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">(+1) 647-227-1538</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Keshav0375" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-300 p-3 rounded-lg text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.236-.008-.864-.013-1.695-2.782.603-3.369-1.338-3.369-1.338-.454-1.152-1.11-1.459-1.11-1.459-.908-.618.069-.605.069-.605 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.699 1.026 1.592 1.026 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/keshav-kumar-arri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-300 p-3 rounded-lg text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Status Messages */}
            {submitStatus !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-start animate-fade-in ${
                submitStatus === 'success' 
                  ? 'bg-green-500/10 border border-green-500/30' 
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                )}
                <p className={`text-sm ${
                  submitStatus === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {statusMessage}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 bg-dark-300 border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded focus:outline-none focus:border-primary text-white disabled:opacity-50`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 bg-dark-300 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded focus:outline-none focus:border-primary text-white disabled:opacity-50`}
                  placeholder="Your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded focus:outline-none focus:border-primary text-white disabled:opacity-50"
                  placeholder="Subject of your message (optional)"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full px-4 py-2 bg-dark-300 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded focus:outline-none focus:border-primary text-white resize-none disabled:opacity-50`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded flex items-center justify-center transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-xs">
                Powered by EmailJS • Your data is secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;