import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Gather all form data automatically
    const formData = new FormData(e.currentTarget);
    
    // Append the hidden field required by the PHP script
    formData.append('tip_obrazca', 'kontakt');

    try {
      const response = await fetch('/poslji.php', {
        method: 'POST',
        body: formData,
      });

      // The PHP script might return a redirect, which fetch follows. 
      // If response.ok is true, it means it worked.
      if (response.ok) {
        setFormStatus('success');
        e.currentTarget.reset(); // Clear the form
        
        // Optional: Reset button after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-zinc-800/30 p-8 rounded-2xl border border-white/5">
      <h3 className="text-xl font-bold mb-6 text-white">Pošljite povpraševanje</h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Ime in priimek <span className="text-lime-500">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required
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
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors resize-none"
            placeholder="Zanima me izdelava..."
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={formStatus === 'submitting' || formStatus === 'success'}
            className={`w-full font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-lime-900/20 flex items-center justify-center group ${
              formStatus === 'success' 
                ? 'bg-green-500 text-white cursor-not-allowed' 
                : 'bg-lime-500 hover:bg-lime-400 disabled:bg-lime-500/50 disabled:cursor-not-allowed text-white'
            }`}
          >
            {formStatus === 'submitting' ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Pošiljanje...
              </span>
            ) : formStatus === 'success' ? (
              <span className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Uspešno poslano!
              </span>
            ) : (
              <>
                Pošlji povpraševanje
                <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          {formStatus === 'error' && (
            <p className="text-red-500 text-sm mt-3 text-center">Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.</p>
          )}
        </div>
      </form>
    </div>
  );
}
