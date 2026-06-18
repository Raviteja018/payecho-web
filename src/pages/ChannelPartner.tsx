import { Users, Info, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChannelPartner() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-slate-900 text-white py-12 px-4 relative">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-2">
          <span className="text-gov-saffron text-xs font-bold uppercase tracking-widest">DISTRIBUTION NETWORK</span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Channel Partner / चैनल पार्टनर</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            Expand your financial business. Partner with Payecho as a Distributor, Master Distributor, or API partner.
          </p>
          <div className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <span>&gt;</span>
            <span className="text-white">Channel Partner</span>
          </div>
        </div>
      </section>

      {/* Main Informative Block */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-gov-saffron shadow-sm">
            <Users className="w-10 h-10" />
          </div>

          <span className="bg-gov-saffron/10 border border-gov-saffron/30 text-gov-saffron font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Registration Opening Soon / पंजीकरण जल्द ही खुलेगा
          </span>

          <h2 className="text-2xl md:text-3xl font-black text-gov-blue leading-tight">
            Become a Distributor or State Head
          </h2>
          
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
            We are currently upgrading our Channel Partner enrollment portal to comply with the latest GIGW guidelines. Applications for Master Distributors, Regional Distributors, and custom API integrations will resume shortly.
          </p>

          {/* List of benefits */}
          <div className="w-full text-left bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mt-6">
            <h3 className="text-base font-extrabold text-gov-blue mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-gov-saffron shrink-0" />
              <span>Distributor Partnership Highlights:</span>
            </h3>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gov-green shrink-0" />
                <span>Supervise and earn commission on all retailers in your designated territory.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gov-green shrink-0" />
                <span>Bulk stock allocations for Micro ATMs, MPOS, and biometric devices.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gov-green shrink-0" />
                <span>Direct portal login with real-time analytics for cash flow and registrations.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gov-green shrink-0" />
                <span>Dedicated Relationship Manager support from corporate headquarters.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/" className="bg-gov-blue hover:bg-gov-blue-dark text-white font-bold text-xs px-6 py-2.5 rounded shadow-sm transition-all">
              Return to Home Page
            </Link>
            <a href="tel:+918062600000" className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs px-6 py-2.5 rounded transition-all">
              Enquire Via Helpline
            </a>
          </div>
        </div>
      </section>

      {/* Standard bottom tricolor bar decoration */}
      <div className="h-2 w-full tricolor-stripe"></div>
    </div>
  );
}
