import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.");
        }
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Prišlo je do napake pri povezavi. Prosimo, preverite internetno povezavo.");
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-800/30 p-8 rounded-2xl border border-lime-500/30 h-full flex flex-col items-center justify-center text-center"
      >
        <div className="bg-lime-500/10 p-4 rounded-full mb-6">
          <CheckCircle size={48} className="text-lime-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Hvala za povpraševanje!</h3>
        <p className="text-gray-300 text-lg">
          Vaše sporočilo je bilo uspešno poslano. <br />
          <span className="text-lime-400 font-medium">Kmalu vas bomo kontaktirali.</span>
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm text-gray-500 hover:text-white underline transition-colors"
        >
          Pošlji novo sporočilo
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-zinc-800/30 p-8 rounded-2xl border border-white/5">
      <h3 className="text-xl font-bold mb-6 text-white">Pošljite povpraševanje</h3>
      
      {status === 'error' && (
        <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start">
          <AlertCircle className="text-red-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
          <p className="text-red-200 text-sm">{errorMessage}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Ime in priimek <span className="text-lime-500">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
            placeholder="Janez Novak"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">E-mail naslov <span className="text-lime-500">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
            placeholder="janez@primer.si"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Telefonska številka</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
            placeholder="040 123 456"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Vaše sporočilo <span className="text-lime-500">*</span></label>
          <textarea 
            id="message" 
            name="message"
            required
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors resize-none"
            placeholder="Zanima me izdelava..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-lime-500 hover:bg-lime-400 disabled:bg-lime-500/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-lime-900/20 flex items-center justify-center group"
        >
          {status === 'submitting' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Pošiljam...
            </span>
          ) : (
            <>
              Pošlji povpraševanje
              <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
