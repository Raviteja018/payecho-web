import React from 'react';
import { ShieldCheck, Phone, MapPin, Download, Calculator, Mail } from 'lucide-react';
import payechoLogo from '../assets/payecho_logo.png';

export default function Footer() {
  const products = [
    "Domestic Money Transfer",
    "AePS",
    "Prepaid Recharges",
    "Bharat BillPay",
    "Travel & Stay",
    "Insurance",
    "Cash Management Service",
    "Aadhaar Pay",
    "PINPAD/M-POS"
  ];

  const company = [
    "Home",
    "About Us",
    "Our Team",
    "Career",
    "Retailer",
    "API Partner",
    "Distributor",
    "Contact Us",
    "Corporate"
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: (
        <svg className="w-4 h-4 text-sky-600 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H7v3h2v9h3v-9h2.72l.42-3H12V6c0-.55.45-1 1-1h1.5V2H12c-2.21 0-4 1.79-4 4v2z" />
        </svg>
      ), 
      path: "#" 
    },
    { 
      name: "Twitter (X)", 
      icon: (
        <svg className="w-4 h-4 text-slate-800 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      path: "#" 
    },
    { 
      name: "Linkedin", 
      icon: (
        <svg className="w-4 h-4 text-blue-700 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
        </svg>
      ), 
      path: "#" 
    },
    { 
      name: "Youtube", 
      icon: (
        <svg className="w-4 h-4 text-red-600 fill-current" viewBox="0 0 24 24">
          <path d="M23 12s0-3.85-.46-5.59a3 3 0 0 0-2.11-2.11C18.69 4 12 4 12 4s-6.69 0-8.43.46a3 3 0 0 0-2.11 2.11C1 8.15 1 12 1 12s0 3.85.46 5.59a3 3 0 0 0 2.11 2.11C5.31 20 12 20 12 20s6.69 0 8.43-.46a3 3 0 0 0 2.11-2.11C23 15.85 23 12 23 12zm-14 3.5v-7l6.5 3.5z" />
        </svg>
      ), 
      path: "#" 
    },
    { 
      name: "Instagram", 
      icon: (
        <svg className="w-4 h-4 text-pink-600 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      path: "#" 
    },
  ];

  const legalPolicies = [
    "PRIVACY POLICY",
    "CUSTOMER GRIEVANCE",
    "CANCELLATION & REFUND POLICY",
    "CUSTOMER PROTECTION",
    "TERMS & CONDITIONS",
    "TRADE PARTNERS",
    "SCHEME DETAILS",
    "PARTNER REGISTRATION FOOTAGE AND GUIDELINES"
  ];

  return (
    <footer className="w-full bg-[#f8fafc] text-slate-700 font-sans border-t border-slate-200 mt-auto">
      {/* Tricolor transition line */}
      <div className="h-1 w-full tricolor-stripe"></div>

      {/* Main Footer Links Block */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: Corporate Details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <img src={payechoLogo} className="h-14 w-auto object-contain bg-white/50 p-1 rounded" alt="Payecho Logo" />
          </div>
          
          <div className="text-xs text-slate-500 flex flex-col gap-2">
            <p><span className="font-bold text-slate-600">CIN No. :</span> U62011TS2026PTC209048</p>
            <p><span className="font-bold text-slate-600">Company :</span> PAYECHO SOLUTIONS PVT LTD</p>
            
            <div className="flex items-start gap-2 mt-2">
              <MapPin className="w-4 h-4 text-gov-saffron shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-600 block">Our Address:</strong>
                Flat NO.301, 3rd Floor, Nukala Residency, VIP Hills, Hyderabad, Telangana 500081
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <Phone className="w-4 h-4 text-gov-green shrink-0" />
              <p><strong className="text-slate-600">Phone:</strong> +91 78160 46799</p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4 text-sky-600 shrink-0" />
              <p><strong className="text-slate-600">E-mail:</strong> payecho.in@gmail.com</p>
            </div>
          </div>


        </div>

        {/* Col 2: Products & Services */}
        <div>
          <h3 className="text-sm font-bold text-gov-blue uppercase tracking-wider border-b-2 border-gov-saffron pb-1.5 mb-4 inline-block">
            Products & Services
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs font-semibold">
            {products.map((item, idx) => (
              <li key={idx} className="hover:text-gov-saffron transition-colors">
                <a href={`#services/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  • {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Company */}
        <div>
          <h3 className="text-sm font-bold text-gov-blue uppercase tracking-wider border-b-2 border-gov-saffron pb-1.5 mb-4 inline-block">
            Company
          </h3>
          <ul className="flex flex-col gap-2 text-xs font-semibold">
            {company.map((item, idx) => (
              <li key={idx} className="hover:text-gov-saffron transition-colors">
                <a href={`#company/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  • {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Follow Us */}
        <div>
          <h3 className="text-sm font-bold text-gov-blue uppercase tracking-wider border-b-2 border-gov-saffron pb-1.5 mb-4 inline-block">
            Follow Us
          </h3>
          <div className="flex flex-col gap-3.5">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.path}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-gov-saffron transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-white shadow-2xs border border-slate-100 flex items-center justify-center shrink-0">
                  {social.icon}
                </span>
                <span>{social.name}</span>
              </a>
            ))}
            <a 
              href="#blog" 
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-gov-saffron transition-colors"
            >
   
            </a>

          </div>
        </div>
      </div>

      {/* Policy and Legal Bar (Full Width Center) */}
      <div className="bg-slate-100 py-6 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold text-slate-500 text-center">
          {legalPolicies.map((policy, idx) => (
            <React.Fragment key={idx}>
              <a href={`#${policy.toLowerCase().replace(/[^a-z]/g, '-')}`} className="hover:text-gov-blue transition-colors">
                {policy}
              </a>
              {idx < legalPolicies.length - 1 && <span className="text-slate-300">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Download & Copyright Strip */}
      <div className="bg-gov-blue text-white py-4 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* App download buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#download-agent" 
              className="bg-gov-blue-dark border border-white/20 hover:border-white/50 px-3 py-1.5 rounded flex items-center gap-2 text-[10px] font-bold tracking-tight transition-all"
            >
              <Download className="w-4 h-4 text-gov-saffron" />
              <div className="text-left">
                <span className="block text-[8px] text-slate-400 -mb-0.5">DOWNLOAD APP FOR</span>
                <span className="text-white">Payecho Agent</span>
              </div>
            </a>
            
            <a 
              href="#download-customer" 
              className="bg-gov-blue-dark border border-white/20 hover:border-white/50 px-3 py-1.5 rounded flex items-center gap-2 text-[10px] font-bold tracking-tight transition-all"
            >
              <Download className="w-4 h-4 text-gov-green" />
              <div className="text-left">
                <span className="block text-[8px] text-slate-400 -mb-0.5">DOWNLOAD APP FOR</span>
                <span className="text-white">Payecho Customer</span>
              </div>
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-center md:text-right flex flex-col gap-0.5 text-[11px] text-slate-300">
            <p>© PAYECHO 2026. ALL RIGHTS RESERVED.</p>
            <p className="text-[10px] text-slate-400">
              Developed & Maintained by GIGW Compliance Digital Team. Content provided by PAYECHO SOLUTIONS PRIVATE LIMITED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
