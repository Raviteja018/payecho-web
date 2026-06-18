import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, CreditCard, Users, Plane } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      id: "corporate",
      title: "Corporate Solutions",
      desc: "Our Corporate Payment & Disbursement Solutions offer the ultimate power of controlling how you spend your business funds. It is simple to use over the internet, at merchant establishments, and for utility services. Enjoy freedom of accessibility for a number of payment services anytime-anywhere. These stored value accounts can be managed remotely and work exactly like corporate banking accounts.",
      theme: "dark-maroon",
      icon: <CreditCard className="w-10 h-10 text-gov-gold" />,
      features: ["Custom Expense Limits", "Manageable Remotely", "Internet & Portal access", "Expense Tracking Reports"],
      badge: "Enterprise Grade"
    },
    {
      id: "government",
      title: "Government Solutions",
      desc: "Our Government Disbursement Solutions are transforming the way government agencies handle payments. We bring modern, digital convenience to everything from child support payments and bus fares to workers' comp disbursements and tax refunds.",
      theme: "light-gold",
      icon: <Landmark className="w-10 h-10 text-gov-blue" />,
      features: ["Direct Benefit Transfer (DBT)", "Pension Disbursements", "Tax Refund Allocations", "Subsidized Payment Passports"],
      badge: "Public Sector Integration"
    },
    {
      id: "campus",
      title: "Campus Solutions/Institution",
      desc: "At Payecho we simplify the life of students with intelligent campus solutions. The Payecho Campus card gives students the convenience of a one card for all their needs — starting from a student identity card to on and off-campus purchases/online payments card.",
      theme: "dark-blue",
      icon: <Users className="w-10 h-10 text-amber-400" />,
      features: ["All-in-one Smart Identity Card", "Library & Lab access", "On-campus digital canteen", "Fee payment utility portal"],
      badge: "Academic Institutions"
    },
    {
      id: "travel",
      title: "Travel Solutions",
      desc: "For those wishing to travel country for a holiday, for business or any other reason, they have the option of availing a debit card from their bank before setting out on their travels. Availing a debit card comes with its perks as with a domestic debit card, the customer will have to spend quite a bit just on withdrawal and transaction charges.",
      theme: "light-silver",
      icon: <Plane className="w-10 h-10 text-gov-green" />,
      features: ["Zero surcharge travel bookings", "Domestic hotel discounts", "Transit & Bus fares integrated", "Insurance coverage add-ons"],
      badge: "Leisure & Business Travel"
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-slate-900 text-white py-12 px-4 relative">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-2">
          <span className="text-gov-saffron text-xs font-bold uppercase tracking-widest">ENTERPRISE & CIVIC SOLUTIONS</span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Solution / व्यावसायिक समाधान</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            Whether you're looking for corporate solutions, government solutions, travel solutions or campus solutions, Findi BANKIT solutions redefine how organizations modernize and transact.
          </p>
          <div className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <span>&gt;</span>
            <span className="text-white">Solution</span>
          </div>
        </div>
      </section>

      {/* 2. Solutions Introduction */}
      <section className="py-16 bg-white px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-gov-saffron uppercase tracking-widest font-black block mb-2">INTELLIGENT FRAMEWORKS</span>
          <h2 className="text-2xl md:text-3xl font-black text-gov-blue mb-2">Our Solutions To Your Imaginations</h2>
          <div className="w-24 h-1 bg-gov-saffron mx-auto mb-16 rounded"></div>

          {/* Solutions Content - Alternating blocks */}
          <div className="flex flex-col gap-16 text-left">
            {solutions.map((sol, idx) => {
              const isEven = idx % 2 === 0;
              
              // Define block themes matching screenshots
              let bgStyle = "";
              let titleStyle = "";
              let descStyle = "";
              let bulletStyle = "";
              let btnStyle = "";

              if (sol.theme === "dark-maroon") {
                bgStyle = "bg-[#4a0e17] text-white border-l-8 border-gov-gold";
                titleStyle = "text-gov-gold";
                descStyle = "text-red-100/90";
                bulletStyle = "bg-gov-gold text-[#4a0e17]";
                btnStyle = "bg-gov-gold hover:bg-yellow-600 text-slate-900 font-extrabold";
              } else if (sol.theme === "dark-blue") {
                bgStyle = "bg-sky-900 text-white border-l-8 border-gov-saffron";
                titleStyle = "text-amber-400";
                descStyle = "text-sky-100/90";
                bulletStyle = "bg-gov-saffron text-sky-900";
                btnStyle = "bg-gov-saffron hover:bg-amber-600 text-white font-extrabold";
              } else if (sol.theme === "light-gold") {
                bgStyle = "bg-gov-gold-light border border-gov-gold/20 text-slate-800 border-l-8 border-gov-blue";
                titleStyle = "text-gov-blue";
                descStyle = "text-slate-600";
                bulletStyle = "bg-gov-blue text-white";
                btnStyle = "bg-gov-blue hover:bg-gov-blue-dark text-white font-extrabold";
              } else { // light-silver
                bgStyle = "bg-slate-50 border border-slate-200 text-slate-800 border-l-8 border-gov-green";
                titleStyle = "text-gov-blue";
                descStyle = "text-slate-600";
                bulletStyle = "bg-gov-green text-white";
                btnStyle = "bg-gov-blue hover:bg-gov-blue-dark text-white font-extrabold";
              }

              return (
                <div 
                  key={sol.id} 
                  className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 ${bgStyle}`}
                >
                  {/* Text Details side */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:col-span-8 lg:order-1' : 'lg:col-span-8 lg:order-2'}`}>
                    <div>
                      {/* Badge and title */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded border border-current/25">
                          {sol.badge}
                        </span>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-black mb-4 ${titleStyle}`}>{sol.title}</h3>
                      <p className={`text-xs md:text-sm leading-relaxed mb-6 ${descStyle}`}>
                        {sol.desc}
                      </p>

                      {/* Bullet list */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-bold">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] ${bulletStyle}`}>
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button 
                        onClick={() => alert(`Redirecting to full registration guidelines for ${sol.title}.`)}
                        className={`text-xs px-6 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5 ${btnStyle}`}
                      >
                        <span>Know More / अधिक जानें</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Graphic Display Side */}
                  <div className={`p-8 lg:p-10 flex items-center justify-center relative overflow-hidden bg-black/5 ${isEven ? 'lg:col-span-4 lg:order-2' : 'lg:col-span-4 lg:order-1'}`}>
                    <div className="w-32 h-32 rounded-full border border-current/10 flex items-center justify-center bg-white/5 backdrop-blur-3xs shadow-inner">
                      {sol.icon}
                    </div>
                    {/* Abstract watermarks */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-current/5 rounded-full pointer-events-none"></div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Grid */}
      <section className="bg-slate-50 py-16 px-4 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs text-gov-saffron font-black uppercase tracking-widest">COMPLIANCE ASSURED</span>
          <h3 className="text-xl font-extrabold text-gov-blue">Security, Trust, and High Performance</h3>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Our systems utilize secure end-to-end encryption frameworks to integrate corporate, civic, travel, and campus systems. We ensure all micro-payment triggers execute instantly with zero leakage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-bold">256-Bit SSL Secured</span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-bold">PCI-DSS Compliant</span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-bold">GIGW Certified</span>
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
