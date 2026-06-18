import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, CheckCircle, Smartphone, Fingerprint, CreditCard, Briefcase, Landmark } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);

  const networkCities = [
    { name: "Delhi NCR", top: "26%", left: "41%", type: "Main Transit Hub", color: "bg-gov-saffron", isMajor: true },
    { name: "Kolkata", top: "46%", left: "70%", type: "East Zone HQ", color: "bg-sky-400", isMajor: true },
    { name: "Pune", top: "62%", left: "26%", type: "AePS Hub", color: "bg-gov-green", isMajor:true },
    { name: "Hyderabad", top: "66%", left: "44%", type: "Corporate HQ / मुख्य कार्यालय", color: "bg-sky-400", isMajor: true },
    { name: "Chennai", top: "77%", left: "49%", type: "South Zone HQ", color: "bg-gov-green", isMajor: true },
  ];

  const slides = [
    {
      title: "Aadhaar Enabled Payment System",
      highlight: "Cash Withdrawal",
      desc: "Withdraw cash from your bank account using Aadhaar card at your nearest retail merchant. Fast, secure, and convenient. Enjoy digital banking at your doorstep.",
      badge: "Up to ₹12.5* Commission",
      features: ["Cash Withdrawal", "Cash Deposit", "Mini Statement", "Balance Inquiry"],
      bg: "from-sky-700 via-gov-blue to-slate-900"
    },
    {
      title: "Domestic Money Transfer",
      highlight: "Instant Safe Remittances",
      desc: "Send money instantly to any bank account in India. Available 24x7, 365 days a year, including Sundays and public holidays. Over 99% success rate.",
      badge: "Highest Success Rate",
      features: ["Instant IMPS Transfer", "NEFT Supported", "Secure PIN Verification", "Instant Receipt"],
      bg: "from-teal-700 via-slate-800 to-gov-blue-dark"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const otherServices = [
    {
      title: "Micro ATM",
      sub: "Micro ATM Machine / Card Machine",
      desc: "Withdraw cash from any debit card at our retail outlets using Micro ATM. It is a small, handheld device that makes cash withdrawal easy and accessible.",
      icon: <CreditCard className="w-8 h-8 text-gov-saffron" />,
    },
    {
      title: "Cash Management Services",
      sub: "Authorized Cash Collection Service",
      desc: "Manage your business cash collections and disbursements efficiently with our cash management services. We help you digitize cash transactions.",
      icon: <Briefcase className="w-8 h-8 text-gov-green" />,
    },
    {
      title: "Aadhaar Pay",
      sub: "Aadhaar Payment Service from Shop",
      desc: "Accept payments from customers using Aadhaar Pay. Customers can pay using their Aadhaar number and fingerprint authentication, without needing a card or phone.",
      icon: <Fingerprint className="w-8 h-8 text-sky-600" />,
    }
  ];

  const partners = [
    { name: "State Bank of India", symbol: "SBI", desc: "National Banking Partner", color: "border-sky-300 text-sky-800" },
    { name: "Razorpay", symbol: "R", desc: "Payment Gateway Partner", color: "border-blue-300 text-blue-800" },
    { name: "Life Insurance Corporation", symbol: "LIC", desc: "Insurance Underwriter", color: "border-yellow-400 text-yellow-800" },
    { name: "ICICI Bank", symbol: "ICICI", desc: "Settlement API Provider", color: "border-amber-400 text-amber-800" }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. Hero Banner Slider Section */}
      <section className="relative overflow-hidden text-white min-h-[420px] flex items-center">
        {/* Slide backgrounds with transition */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bg} transition-all duration-1000 ease-in-out`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40"></div>
        
        {/* Tricolor design overlay accent at bottom of banner */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="w-1/3 bg-gov-saffron"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-gov-green"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <span className="bg-gov-saffron/90 text-white font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-gov-saffron flex items-center gap-1.5 shadow-md">
              <Award className="w-3.5 h-3.5" />
              {slides[currentSlide].badge}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {slides[currentSlide].title} <br />
              <span className="text-amber-400">{slides[currentSlide].highlight}</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-200 max-w-xl leading-relaxed">
              {slides[currentSlide].desc}
            </p>

            <div className="flex flex-wrap gap-2.5 mt-2">
              <Link 
                to="/signup" 
                className="bg-gov-saffron hover:bg-amber-600 text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-md shadow-md transition-all border-b-2 border-amber-700 flex items-center gap-1.5"
              >
                <span>Register Now / अभी पंजीकरण करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+918062600000" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-md transition-all border border-white/25 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-gov-saffron" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column App Display / Features List */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8"></div>
              
              <h3 className="text-lg font-bold border-b border-white/20 pb-3 mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-amber-400" />
                <span>Available Services</span>
              </h3>
              
              <ul className="flex flex-col gap-3">
                {slides[currentSlide].features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold">
                    <CheckCircle className="w-5 h-5 text-gov-green shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Graphic indicating high payout commission in the screenshot */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center bg-black/10 -mx-6 -mb-6 p-4 rounded-b-xl">
                <div>
                  <span className="text-[9px] text-slate-300 block uppercase font-bold tracking-wider">RETAILER COMMISSIONS</span>
                  <span className="text-xl font-black text-gov-saffron">UP TO ₹12.5k / MONTH</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gov-green/20 flex items-center justify-center border border-gov-green/30">
                  <Fingerprint className="w-6 h-6 text-gov-green" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-gov-saffron w-6' : 'bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. Top Interactive Main Action Cards */}
      <section className="py-12 bg-white px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-20 relative z-20">
          
          {/* Card 1: Domestic Money Transfer */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Landmark className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gov-blue mb-2">Domestic Money Transfer</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Transfer cash immediately to any bank account in India. Robust network channels guarantee secure remittances at low charges.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <Link to="/products" className="flex-1 text-center bg-gov-blue text-white font-bold text-xs py-2 rounded shadow-sm hover:bg-gov-blue-dark transition-colors">
                Read More
              </Link>
              <Link to="/signup" className="flex-1 text-center border border-gov-blue text-gov-blue font-bold text-xs py-2 rounded hover:bg-slate-50 transition-colors">
                Register
              </Link>
            </div>
          </div>

          {/* Card 2: AePS Cash Withdrawal */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Fingerprint className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-gov-blue mb-2">Aadhaar Enabled Payment (AePS)</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Withdraw cash, deposit cash, check balance, or get mini statement using customer Aadhaar and fingerprint authentication.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <Link to="/products" className="flex-1 text-center bg-gov-blue text-white font-bold text-xs py-2 rounded shadow-sm hover:bg-gov-blue-dark transition-colors">
                Read More
              </Link>
              <Link to="/signup" className="flex-1 text-center border border-gov-blue text-gov-blue font-bold text-xs py-2 rounded hover:bg-slate-50 transition-colors">
                Register
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Other Services */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block mb-2">EXPAND YOUR BUSINESS</span>
          <h2 className="text-2xl md:text-3xl font-black text-gov-blue mb-2">Our Other Services / हमारी अन्य सेवाएं</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {otherServices.map((srv, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center mb-5">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{srv.title}</h3>
                <span className="text-[10px] text-gov-saffron font-bold block mb-3 uppercase tracking-wider">{srv.sub}</span>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  {srv.desc}
                </p>
                <Link to="/products" className="text-xs text-gov-blue hover:text-gov-saffron font-bold transition-all flex items-center gap-1">
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Network (Statistics and Map representation) */}
      <section className="py-20 bg-gradient-to-br from-gov-blue to-slate-900 text-white relative px-4 overflow-hidden border-b-4 border-gov-saffron">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Giant glowing saffron circle in backdrop to represent Indian Sun */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gov-saffron/15 rounded-full blur-3xl -mr-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Network Stats */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-black text-gov-saffron uppercase tracking-widest bg-gov-saffron/10 border border-gov-saffron/20 px-3 py-1 rounded-full self-start">
              NATIONWIDE FINANCIAL REACH
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              OUR NETWORK / हमारा नेटवर्क
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
              Payecho empowers rural merchants, kirana stores, and digital entrepreneurs to serve as physical banking outlets. By simplifying complex banking processes, we make cash accessible to crores of citizens.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-slate-400 text-[10px] md:text-xs block font-bold uppercase tracking-wider">RETAIL MERCHANTS</span>
                <span className="text-2xl md:text-3xl font-black text-gov-saffron">258000+</span>
                <span className="text-slate-500 text-[10px] block font-semibold mt-0.5">Empowered Entrepreneurs</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] md:text-xs block font-bold uppercase tracking-wider">DAILY TRANSACTIONS</span>
                <span className="text-2xl md:text-3xl font-black text-gov-saffron">2.6 MN+</span>
                <span className="text-slate-500 text-[10px] block font-semibold mt-0.5">Processed Daily Securely</span>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 text-[10px] md:text-xs block font-bold uppercase tracking-wider">ACTIVE CONSUMERS</span>
                <span className="text-2xl md:text-3xl font-black text-gov-saffron">37.20 MN+</span>
                <span className="text-slate-500 text-[10px] block font-semibold mt-0.5">Served Nationwide</span>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 text-[10px] md:text-xs block font-bold uppercase tracking-wider">PIN CODES POWERED</span>
                <span className="text-2xl md:text-3xl font-black text-gov-saffron">12000+</span>
                <span className="text-slate-500 text-[10px] block font-semibold mt-0.5">Across Indian Districts</span>
              </div>
            </div>

            <div className="pt-6">
              <Link 
                to="/signup" 
                className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-xs md:text-sm px-8 py-3 rounded-md shadow-lg transition-all border-b-2 border-amber-700 inline-flex items-center gap-2"
              >
                <span>Become a Payecho Partner Today! / आज ही पार्टनर बनें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Graphic representation of India Map outlining digital nodes */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[350px]">
            {/* Visual India Map Representation utilizing modern CSS nodes */}
            <div className="w-80 h-80 rounded-full border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-xs">
              <div className="absolute inset-4 rounded-full border border-white/5 bg-slate-900/40"></div>
              
              {/* Saffron White Green central radial glow */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-gov-green/10 via-white/5 to-gov-saffron/10 flex items-center justify-center border border-white/10">
                <Landmark className="w-12 h-12 text-slate-300" />
              </div>

              {/* Glowing node points indicating major states */}
              {networkCities.map((city, idx) => {
                const isHovered = hoveredCity === idx;
                const showLabel = city.isMajor || isHovered;
                // Move tooltips to the left for cities on the eastern/right side of the map to prevent overflow
                const labelPositionClass = parseFloat(city.left) > 60 ? 'right-4' : 'left-4';
                
                return (
                  <div
                    key={idx}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ top: city.top, left: city.left }}
                  >
                    <div 
                      className="relative flex items-center justify-center cursor-pointer group"
                      onMouseEnter={() => setHoveredCity(idx)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      {/* Outer pulsing ring */}
                      <span className={`w-3 h-3 rounded-full animate-ping absolute opacity-75 ${city.color}`}></span>
                      {/* Inner solid dot */}
                      <span className={`w-2.5 h-2.5 rounded-full border border-white/40 shadow-xs relative z-20 transition-all duration-300 group-hover:scale-125 ${city.color} ${city.isMajor ? 'scale-110 ring-2 ring-white/10' : ''}`}></span>
                      
                      {/* Tooltip or static major city label */}
                      {showLabel && (
                        <div 
                          className={`absolute ${labelPositionClass} top-1/2 -translate-y-1/2 bg-slate-900/95 text-white border border-white/20 rounded-md px-1.5 py-0.5 whitespace-nowrap z-30 transition-all duration-300 shadow-md ${
                            isHovered 
                              ? 'scale-105 border-gov-saffron text-amber-400 font-extrabold' 
                              : 'scale-90 text-slate-300 font-bold opacity-80'
                          }`}
                        >
                          <p className="text-[8px] tracking-tight leading-none">{city.name}</p>
                          {isHovered && (
                            <p className="text-[6px] text-slate-400 mt-0.5 leading-none font-medium">{city.type}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Partners Section */}
      <section className="py-12 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold block mb-1">SETTLEMENT & BANKING INTEGRATION</span>
          <h2 className="text-xl font-extrabold text-gov-blue mb-8">Our Partners / हमारे भागीदार</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center hover:shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 font-extrabold text-sm mb-2 shadow-2xs text-gov-blue">
                  {partner.symbol}
                </div>
                <span className="text-xs font-bold text-slate-800">{partner.name}</span>
                <span className="text-[9px] text-slate-400">{partner.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Become a Retailer CTA Banner (Maroon banner at bottom) */}
      <section className="bg-gov-maroon text-white py-10 px-4 border-t-4 border-gov-gold">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-center lg:text-left">
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
              className="bg-gov-saffron hover:bg-amber-600 text-white font-extrabold text-xs md:text-sm px-6 py-2.5 rounded shadow-md border-b-2 border-amber-700 transition-all flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+918062600000" 
              className="bg-transparent hover:bg-white/10 text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-gov-gold" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
