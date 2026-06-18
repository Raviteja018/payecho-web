import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fingerprint, ShieldCheck, CreditCard, RefreshCw, Layers, Landmark, BookOpen, Briefcase, Globe, Search } from 'lucide-react';

export default function Products() {
  const [filter, setFilter] = useState<'ALL' | 'BANKING' | 'UTILITY' | 'TRAVEL' | 'BUSINESS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      id: "dmt",
      category: "BANKING",
      title: "Domestic Money Transfer",
      desc: "Send money to any bank account in India instantly. Available 24x7, 365 days a year, including Sundays and public holidays, with high success rates.",
      icon: <Landmark className="w-6 h-6 text-red-600" />,
      features: ["Instant IMPS / NEFT Settlement", "Supports all public/private banks", "Receipt confirmation SMS", "Secure PIN system"]
    },
    {
      id: "aeps",
      category: "BANKING",
      title: "Aadhaar Enabled Payment System (AePS)",
      desc: "Aadhaar Enabled Payment System allows citizens to perform basic banking transactions like cash withdrawal, deposit, balance check, and mini-statement using Aadhaar and biometrics.",
      icon: <Fingerprint className="w-6 h-6 text-sky-600" />,
      features: ["Biometric verification", "No debit card required", "Connects to bank-linked Aadhaar", "Secure GIGW compliant system"]
    },
    {
      id: "recharge",
      category: "UTILITY",
      title: "Prepaid Recharges",
      desc: "Get instant recharges for your mobile, DTH, data card, and utility bill payments at any Payecho outlet. We offer quick, secure, and convenient payment services.",
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />,
      features: ["All major operators covered", "Instant cashback/incentives", "Failsafe transaction retry", "Digital logs available"]
    },
    {
      id: "bbps",
      category: "UTILITY",
      title: "Bharat BillPay",
      desc: "Pay your utility bills like electricity, water, gas, broadband, landline, and insurance premium easily and securely with Bharat Bill Payment System (BBPS) integration.",
      icon: <Layers className="w-6 h-6 text-gov-green" />,
      features: ["Official NPCI BBPS portal", "Instant bill receipt", "Automatic bill alerts", "Supports 100+ billers"]
    },
    {
      id: "travel",
      category: "TRAVEL",
      title: "Travel & Stay",
      desc: "Book flight, train, and bus tickets, and hotel stays at the best rates. We provide quick and hassle-free booking services for all your travel needs.",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      features: ["IRCTC authorized ticket booking", "Flight & bus aggregators", "Instant discount codes", "Hassle-free refunds"]
    },
    {
      id: "insurance",
      category: "UTILITY",
      title: "Insurance",
      desc: "Protect yourself, your family, and your business with our insurance products. We offer general, health, and life insurance policies at affordable premiums.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      features: ["Life, Health and Vehicle plans", "Affordable monthly premiums", "Quick claim verification", "Underwritten by LIC & major partners"]
    },
    {
      id: "microatm",
      category: "BANKING",
      title: "Micro ATM",
      desc: "Withdraw cash from any debit card at our retail outlets using Micro ATM. It is a small, handheld device that makes cash withdrawal easy and accessible.",
      icon: <CreditCard className="w-6 h-6 text-gov-saffron" />,
      features: ["Supports all major debit cards", "Bluetooth portable device", "Instant commission payout", "Safe PIN entry terminal"]
    },
    {
      id: "cms",
      category: "BUSINESS",
      title: "Cash Management Services",
      desc: "Manage your business cash collections and disbursements efficiently with our cash management services. We help you digitize cash transactions.",
      icon: <Briefcase className="w-6 h-6 text-slate-700" />,
      features: ["Safe cash collections", "Doorstep pickup networks", "Digital ledger tracking", "Corporate payouts"]
    },
    {
      id: "aadhaarpay",
      category: "BANKING",
      title: "Aadhaar Pay",
      desc: "Accept payments from customers using Aadhaar Pay. Customers can pay using their Aadhaar number and fingerprint authentication, without needing a card or phone.",
      icon: <Fingerprint className="w-6 h-6 text-gov-green" />,
      features: ["Merchants receive instant credits", "Cardless/phoneless payments", "High security standards", "Direct settlement"]
    },
    // {
    //   id: "mpos",
    //   category: "BUSINESS",
    //   title: "PINPAD/M-POS",
    //   desc: "Accept card payments at your retail outlet using PINPAD/M-POS. It is a small, portable device that connects to your smartphone and enables secure card payments.",
    //   icon: <Landmark className="w-6 h-6 text-sky-700" />,
    //   features: ["Pocket-sized design", "Connects via Bluetooth", "Secured transactions log", "Low maintenance cost"]
    // }
  ];

  const categories = [
    { code: 'ALL', label: 'All Products' },
    { code: 'BANKING', label: 'Banking & AePS' },
    { code: 'UTILITY', label: 'Bills & Recharges' },
    { code: 'TRAVEL', label: 'Travel & Booking' },
    { code: 'BUSINESS', label: 'Business Solutions' }
  ];

  const filteredServices = services.filter(srv => {
    const matchesCategory = filter === 'ALL' || srv.category === filter;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          srv.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. Hero / Header Banner */}
      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-slate-900 text-white py-12 px-4 relative">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-2">
          <span className="text-gov-saffron text-xs font-bold uppercase tracking-widest">DIGITAL SERVICES CATALOG</span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Products & Services / हमारे उत्पाद और सेवाएं</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            Findi BANKIT offers a wide array of payment, banking, and business tools to empower merchants and ease transactions for citizens.
          </p>
          <div className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <span>&gt;</span>
            <span className="text-white">Products & Services</span>
          </div>
        </div>
      </section>

      {/* 2. Main content with filter and search options */}
      <section className="py-12 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Controls Bar: Search & Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 pb-6 border-b border-slate-100">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
              {categories.map(cat => (
                <button
                  key={cat.code}
                  onClick={() => setFilter(cat.code as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    filter === cat.code 
                      ? 'bg-gov-blue text-white shadow-xs' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-md text-xs focus:ring-2 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
              />
            </div>
          </div>

          {/* Grid Layout of Products */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-3xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 hover:bg-white transition-all duration-300 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-3xs group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="text-[9px] font-extrabold uppercase bg-slate-200 text-slate-700 px-2 py-0.5 rounded tracking-wide border border-slate-300">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-gov-blue mb-2">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="flex flex-col gap-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[11px] font-semibold text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gov-green shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      to="/signup" 
                      className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                    >
                      Register Now
                    </Link>
                    <button 
                      onClick={() => alert(`Details and full specifications of ${service.title} are loading.`)}
                      className="text-xs font-bold text-gov-blue hover:text-gov-saffron flex items-center gap-1 transition-colors"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-500">No products found matching your selection.</p>
              <button 
                onClick={() => { setFilter('ALL'); setSearchQuery(''); }}
                className="mt-3 text-xs font-extrabold text-gov-saffron underline"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Partners list representation */}
      <section className="bg-slate-50 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold block">SERVICE UNDERTAKING</span>
          <h3 className="text-lg font-extrabold text-gov-blue">GIGW Compliant Gateway Integration</h3>
          <p className="text-xs text-slate-500 max-w-xl leading-relaxed mb-6">
            Our systems interface directly with the National Payment Corporation of India (NPCI) and major partner banks under strict government guidelines for physical agent retail counters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-extrabold text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-3xs">
            <span className="px-3 py-1 bg-slate-50 rounded">NPCI API Connected</span>
            <span className="px-3 py-1 bg-slate-50 rounded">SSL Encryption Secured</span>
            <span className="px-3 py-1 bg-slate-50 rounded">AePS Biometric Certified</span>
            <span className="px-3 py-1 bg-slate-50 rounded">ISO 27001 Certified</span>
          </div>
        </div>
      </section>

      {/* 4. Bottom Maroon Banner */}
      <section className="bg-gov-maroon text-white py-10 px-4 border-t-4 border-gov-gold">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mb-1">
              Become a Retailer and earn upto Rs. 1 Lakh per month
            </h2>
            <p className="text-gov-gold-light/85 text-xs font-bold uppercase tracking-wide">
              रिटेलर बनें और हर महीने ₹1 लाख तक कमाएं - पंजीकरण बहुत आसान है!
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/signup" 
              className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-xs md:text-sm px-6 py-2.5 rounded shadow border-b-2 border-amber-700 transition-all flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
