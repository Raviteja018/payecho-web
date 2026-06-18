import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solution from './pages/Solution';
import ChannelPartner from './pages/ChannelPartner';
import Faq from './pages/Faq';
import { ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

// Elegant login placeholder with GIGW government-style notice
function Login() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-2xl shadow-lg font-sans">
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <div className="w-12 h-12 rounded bg-gov-blue text-white flex items-center justify-center shadow">
          <ShieldCheck className="w-7 h-7 text-gov-saffron" />
        </div>
        <h2 className="text-xl font-black text-gov-blue">Secure Agent Login</h2>
        <span className="text-[10px] text-gov-saffron font-bold uppercase tracking-wider">GIGW COMPLIANT SECURE LINK</span>
      </div>

      <div className="bg-amber-50 border border-amber-100 text-[11px] text-amber-800 p-3 rounded-lg mb-6 leading-relaxed flex gap-2">
        <span className="font-bold text-amber-900 shrink-0">⚠️ Notice:</span>
        <p>Always verify the domain in the address bar starts with <strong>localhost</strong> or <strong>payecho.gov.in</strong>. Never share your security PIN.</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); alert("Mock login successful."); }} className="flex flex-col gap-4 text-xs font-semibold">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Enter User ID / Agent Mobile ID</label>
          <input 
            type="text" 
            placeholder="e.g. 9876543210" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Password / सुरक्षा पासवर्ड</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        {/* Captcha representation common to government sites */}
        <div className="flex flex-col gap-2 bg-slate-50 p-3 rounded border border-slate-200">
          <label className="text-slate-700 block">Security Verification Code (CAPTCHA)</label>
          <div className="flex items-center gap-3">
            <span className="bg-slate-200 px-4 py-2 rounded font-black text-sm select-none tracking-widest text-slate-800 line-through decoration-slate-400">
              IN7D8
            </span>
            <input 
              type="text" 
              placeholder="Enter code" 
              className="flex-1 p-2 border border-slate-300 rounded focus:outline-none text-xs uppercase"
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gov-blue hover:bg-gov-blue-dark text-white font-extrabold py-2.5 rounded shadow-sm transition-all text-center mt-2 flex items-center justify-center gap-1.5 border-b-2 border-slate-900"
        >
          <span>Sign In / लॉग इन करें</span>
          <ArrowRight className="w-4 h-4 text-gov-saffron" />
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between text-[11px] font-bold text-slate-500">
        <a href="#reset" className="hover:text-gov-saffron">Forgot Password?</a>
        <Link to="/signup" className="text-gov-blue hover:text-gov-saffron">New Retailer Registration</Link>
      </div>
    </div>
  );
}

// Elegant signup placeholder with GIGW government-style notice
function SignUp() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-2xl shadow-lg font-sans">
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <div className="w-12 h-12 rounded bg-gov-green text-white flex items-center justify-center shadow">
          <UserCheck className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-xl font-black text-gov-blue">Retailer Registration</h2>
        <span className="text-[10px] text-gov-green font-bold uppercase tracking-wider">REGISTER AND START EARNING</span>
      </div>

      <div className="bg-blue-50 border border-blue-100 text-[11px] text-blue-800 p-3 rounded-lg mb-6 leading-relaxed flex gap-2">
        <span className="font-bold text-blue-900 shrink-0">ℹ️ Note:</span>
        <p>Keep your PAN Card and Aadhaar Card details ready for instant biometric e-KYC validation.</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); alert("Mock registration request received."); }} className="flex flex-col gap-4 text-xs font-semibold">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Full Legal Name (as in PAN)</label>
          <input 
            type="text" 
            placeholder="e.g. Rajesh Kumar" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Mobile Number (Aadhaar linked)</label>
          <input 
            type="tel" 
            placeholder="e.g. 9876543210" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Shop / Business Name</label>
          <input 
            type="text" 
            placeholder="e.g. Rajesh Kirana Store" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700">Email Address</label>
          <input 
            type="email" 
            placeholder="e.g. rajesh@gmail.com" 
            className="w-full p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-gov-saffron focus:border-gov-saffron focus:outline-none"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-gov-green hover:bg-emerald-700 text-white font-extrabold py-2.5 rounded shadow-sm transition-all text-center mt-2 flex items-center justify-center gap-1.5 border-b-2 border-emerald-800"
        >
          <span>Submit Request / आवेदन जमा करें</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between text-[11px] font-bold text-slate-500">
        <Link to="/login" className="text-gov-blue hover:text-gov-saffron mx-auto">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
