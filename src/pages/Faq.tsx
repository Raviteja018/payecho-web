import { HelpCircle, Phone, Mail } from 'lucide-react';

export default function Faq() {
  const commonQuestions = [
    {
      q: "What is Aadhaar Enabled Payment System (AePS)?",
      a: "AePS is a bank-led model which allows online interoperable financial transaction at PoS (Micro ATM) through the Business Correspondent of any bank using Aadhaar authentication. You can withdraw cash, deposit cash, check balances, or get statements."
    },
    {
      q: "What is the maximum limit for AePS cash withdrawal?",
      a: "The maximum cash withdrawal limit through AePS is set by your bank, usually capped at ₹10,000 per transaction or up to ₹50,000 per day depending on the bank linking parameters and biometric guidelines."
    },
    {
      q: "How secure are the transactions on the Payecho portal?",
      a: "All transactions are secured with industry-grade 256-bit encryption and integrate directly with NPCI endpoints. Biometric scans prevent identity theft, making AePS transactions extremely secure."
    },
    {
      q: "How can I register as a Retailer on the portal?",
      a: "You can click on the 'Register Now' or 'Sign Up' links, fill in your business name, mobile number, PAN, and Aadhaar card details. Our team will verify your business and activate your digital login credentials."
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-slate-900 text-white py-12 px-4 relative">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-2">
          <span className="text-gov-saffron text-xs font-bold uppercase tracking-widest">HELP AND SUPPORT</span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">FAQ's / अक्सर पूछे जाने वाले प्रश्न</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            Find answers to frequently asked questions about banking agent operations, payouts, and AePS guidelines.
          </p>
          <div className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <span>&gt;</span>
            <span className="text-white">FAQ's</span>
          </div>
        </div>
      </section>

      {/* Main FAQ Block */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center flex flex-col items-center gap-3 mb-12">
            <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-2xs">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-gov-blue">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              If your query is not listed below, please connect with our toll-free customer desk or drop us an email.
            </p>
          </div>

          {/* Simple Accordion list representation */}
          <div className="flex flex-col gap-4">
            {commonQuestions.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors">
                <h3 className="text-sm md:text-base font-bold text-gov-blue flex gap-2 items-start mb-2">
                  <span className="text-gov-saffron">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Helpline Callout */}
          <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-lg relative overflow-hidden">
            {/* Subtle Ashoka Chakra watermark representation */}
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-white/5 rounded-full -mr-16 -mb-16 pointer-events-none"></div>

            <div className="flex flex-col gap-2">
              <span className="text-gov-saffron text-xs font-black uppercase tracking-widest">STILL HAVE QUESTIONS?</span>
              <h3 className="text-lg font-bold">Contact Our Customer Support Unit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our customer grievance cell is open 24/7/365 to resolve your operational query or transaction status.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a 
                href="tel:+917816046799" 
                className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-xs px-6 py-2.5 rounded shadow border-b-2 border-amber-700 transition-all flex items-center gap-1.5 w-full md:w-auto justify-center"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Helpline: +91 78160 46799</span>
              </a>
              <a 
                href="mailto:payecho.in@gmail.com" 
                className="text-xs text-slate-300 hover:text-white font-semibold flex items-center gap-1.5 justify-center"
              >
                <Mail className="w-4 h-4 text-gov-saffron" />
                <span>payecho.in@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Standard bottom tricolor bar decoration */}
      <div className="h-2 w-full tricolor-stripe"></div>
    </div>
  );
}
