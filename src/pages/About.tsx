import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Award, TrendingUp, ArrowRight } from 'lucide-react';

export default function About() {
  const payechoDesc1 = "PAYECHO SOLUTIONS PRIVATE LIMITED has launched the Payecho.in platform for our channel partners to become a part of the Digital India Initiative to earn additional income by providing a host of utility services etc. to their customers. PAYECHO aims at transcending the gap between physical and digital payments, thus enabling users to perform digital financial transactions through assisted commerce.";
  
  const payechoDesc2 = "This company was started with the vision of creating a platform that will make a whole host of financial services available to consumers, anywhere in India, at their doorstep. The Platform connects thousands of agents & users (like kirana shops, pharmacies, mom-and-pop stores etc.) pan-India to the formal banking system, thus enabling them to provide digital financial services like money transfer and cash withdrawals, among many others to their customers.";
  
  const payechoDesc3 = "In a cash-dominant economy like India, where millions are still excluded from the formal banking system, Payecho works with Banks to empower these unbanked people by giving them the capability to access digital financial services for the very first time. By providing a multitude of digital financial services, Payecho envisions becoming a one-stop shop for agents in their quest of serving the end customer. Thus, the Payecho platform acts as a bridge and creates value for both, the Banks as well as the end users and agents.";

  const tagCloud = [
    { text: "SEND PAYMENTS", bg: "bg-red-50 text-red-700 border-red-200" },
    { text: "REMITTANCES", bg: "bg-orange-50 text-orange-700 border-orange-200" },
    { text: "WITHDRAWAL", bg: "bg-amber-50 text-amber-700 border-amber-200" },
    { text: "LEND CARDS", bg: "bg-yellow-50 text-yellow-800 border-yellow-200" },
    { text: "TRAVEL", bg: "bg-green-50 text-green-700 border-green-200" },
    { text: "INVEST", bg: "bg-teal-50 text-teal-700 border-teal-200" },
    { text: "IDENTITY", bg: "bg-sky-50 text-sky-700 border-sky-200" },
    { text: "ATM", bg: "bg-blue-50 text-blue-700 border-blue-200" },
    { text: "UTILITY", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { text: "SPEND", bg: "bg-purple-50 text-purple-700 border-purple-200" },
    { text: "COLLECTIONS", bg: "bg-pink-50 text-pink-700 border-pink-200" }
  ];

  const rangeServices = [
    { title: "Domestic Money Transfer", desc: "Sending money to any bank account in India instantly." },
    { title: "Aadhaar Enabled Payment System (AePS)", desc: "Cash withdrawal, balance inquiry, and mini-statement services using biometrics." },
    { title: "Utility Bill Payments", desc: "Recharge mobile/DTH, pay electricity, water, gas, and broadband bills." },
    { title: "Travel and Stay Bookings", desc: "Booking flight, train, and bus tickets, along with hotel accommodation." },
    { title: "Insurance", desc: "Offering general, health, and life insurance policies at affordable premiums." },
    { title: "Cash Management Services (CMS)", desc: "Assisting businesses in managing cash collections and disbursements efficiently." },
    { title: "Aadhaar Pay", desc: "Enabling merchants to accept payments using Aadhaar fingerprint verification." },
    { title: "Micro ATM & MPOS", desc: "Enabling card transactions (credit/debit) at retail outlets." }
  ];

  const makesBest = [
    "Robust and secure technology platform",
    "High commission rates and regular payouts",
    "Wide range of services under one roof",
    "Dedicated support and training for agents",
    "Trusted brand with a proven track record"
  ];

  const setsApart = [
    "Focus on financial inclusion in rural areas",
    "Hybrid model (phygital approach)",
    "Constant innovation and service expansion",
    "Strong network of partners and distributors"
  ];

  const expertise = [
    { name: "Money Transfer", color: "bg-red-500 shadow-red-200" },
    { name: "Aadhaar System", color: "bg-sky-500 shadow-sky-200" },
    { name: "Cash Transactions", color: "bg-emerald-500 shadow-emerald-200" },
    { name: "Recharges & Portal", color: "bg-indigo-500 shadow-indigo-200" },
    { name: "All Payments", color: "bg-yellow-500 shadow-yellow-200 text-slate-900" }
  ];

  const timeline = [
    { year: "2024", target: "Platform Launch", desc: "Release of Payecho.in platform for channel partners" },
    { year: "2025", target: "71000+ Agent Outlets", desc: "Rapid expansion of utility payments and money transfers" },
    { year: "2026", target: "12 Lakh+ Agent Outlets", desc: "Massive scale-up covering 12,000+ pin codes in India" }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. Hero / Breadcrumbs Section */}
      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-slate-900 text-white py-12 px-4 relative">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-2">
          <span className="text-gov-saffron text-xs font-bold uppercase tracking-widest">ABOUT OUR PORTAL</span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">About Us / हमारे बारे में</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            PAYECHO SOLUTIONS PRIVATE LIMITED offers a secure assisted commerce platform, bridging the physical and digital payment divides across India.
          </p>
          <div className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <span>&gt;</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. About Payecho intro with tag cloud */}
      <section className="py-16 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block text-center mb-2">WHO WE ARE</span>
          <h2 className="text-2xl md:text-3xl font-black text-gov-blue text-center mb-2">About Payecho / हमारे बारे में जानें</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Paragraphs */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-slate-600 leading-relaxed font-semibold">
              <div className="bg-slate-50 border-l-4 border-gov-saffron p-5 rounded-r-lg shadow-3xs">
                <p>{payechoDesc1}</p>
              </div>
              <div className="bg-slate-50 border-l-4 border-gov-blue p-5 rounded-r-lg shadow-3xs">
                <p>{payechoDesc2}</p>
              </div>
              <div className="bg-slate-50 border-l-4 border-gov-green p-5 rounded-r-lg shadow-3xs">
                <p>{payechoDesc3}</p>
              </div>
            </div>

            {/* Right Tag Cloud Display */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-2xs sticky top-24">
              <h3 className="text-lg font-black text-gov-blue mb-4 border-b border-slate-200 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gov-saffron" />
                <span>Our Keyword Spectrum</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                We encompass end-to-end payment and banking utilities, empowering local merchants with a range of digital tools.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {tagCloud.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1.5 rounded-md text-xs font-bold border shadow-3xs cursor-default transition-all hover:scale-105 ${tag.bg}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Comprehensive Range of Services */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block text-center mb-2">FINANCIAL INTEGRATION</span>
          <h2 className="text-2xl md:text-3xl font-black text-gov-blue text-center mb-2">Comprehensive Range of Services</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rangeServices.map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-5 flex items-start gap-3.5 hover:shadow-sm hover:border-slate-300 transition-all">
                <CheckCircle2 className="w-5 h-5 text-gov-green shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 mb-1">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us CTA box */}
          <div className="mt-12 bg-white rounded-xl p-6 md:p-8 border border-slate-200 text-center max-w-3xl mx-auto shadow-2xs">
            <h3 className="text-lg font-black text-gov-blue mb-2">Join Us In Our Journey / हमारे साथ जुड़ें</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              As we expand our reach and services, we invite you to join us as a retail partner, distributor, or customer. Together, we can drive financial inclusion and create a digital-first India.
            </p>
            <Link 
              to="/signup" 
              className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-xs px-6 py-2.5 rounded shadow border-b-2 border-amber-700 transition-all inline-flex items-center gap-1.5"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Best Partner & What Sets us Apart */}
      <section className="py-16 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* What Makes PAYECHO The Best Business Partner? */}
          <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-3xs">
            <h3 className="text-lg font-black text-gov-blue mb-4 border-b border-slate-200 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-gov-saffron" />
              <span>What Makes PAYECHO The Best Business Partner?</span>
            </h3>
            <ul className="flex flex-col gap-3">
              {makesBest.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-gov-saffron shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Sets PAYECHO Apart? */}
          <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-3xs">
            <h3 className="text-lg font-black text-gov-blue mb-4 border-b border-slate-200 pb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gov-green" />
              <span>What Sets PAYECHO Apart?</span>
            </h3>
            <ul className="flex flex-col gap-3">
              {setsApart.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-gov-green shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 5. End to End Expertise (Circular badges) */}
      <section className="py-16 bg-gradient-to-br from-gov-blue to-slate-900 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block mb-2">END-TO-END CAPABILITIES</span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">We offer our end-to-end expertise in</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-center">
            {expertise.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center font-extrabold text-xs px-3 shadow-lg border border-white/10 text-white ${item.color} hover:scale-105 transition-all text-center leading-tight`}>
                  {item.name}
                </div>
                <span className="text-[11px] font-bold text-slate-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline / Milestones */}
      <section className="py-16 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block text-center mb-2">OUR GROWTH TRACK</span>
          <h2 className="text-2xl md:text-3xl font-black text-gov-blue text-center mb-2">Corporate Milestones / विकास यात्रा</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative pt-4">
            
            {/* Connection Line representing the timeline link */}
            <div className="hidden md:block absolute top-[4.5rem] left-8 right-8 h-1 bg-slate-200 z-0"></div>

            {timeline.map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col items-center text-center relative z-10 hover:shadow-xs hover:border-slate-300 transition-all">
                <span className="text-xs font-bold text-slate-400 block mb-1">YEAR</span>
                <div className="w-14 h-14 bg-gov-blue text-white rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-md mb-4">
                  {step.year}
                </div>
                <h4 className="text-sm md:text-base font-extrabold text-gov-saffron mb-1.5">{step.target}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
