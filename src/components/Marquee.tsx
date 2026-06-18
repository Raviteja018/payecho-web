import { AlertCircle } from 'lucide-react';

export default function Marquee() {
  return (
    <div className="govt-marquee-container relative flex items-center h-10 overflow-hidden font-sans text-xs md:text-sm">
      {/* Ticker title in saffron */}
      <div className="bg-gov-saffron text-white font-bold px-4 h-full flex items-center z-10 shadow-md whitespace-nowrap">
        <span>LATEST UPDATE / नवीनतम समाचार</span>
      </div>
      
      {/* Moving text */}
      <div className="flex-1 overflow-hidden relative w-full h-full flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-slate-700 hover:[animation-play-state:paused] cursor-pointer">
          <span className="flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-gov-saffron shrink-0" />
            ⚠️ Alert: Protect yourself from financial fraud. Do not share your banking password, card details, UPI PIN or OTP with anyone. Payecho never asks for confidential details.
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gov-green"></span>
            Announcement: Payecho agent network has crossed 12 Lakh+ active outlets across rural and urban India!
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gov-saffron"></span>
            Digital India: Supporting rural financial inclusion via Aadhaar Enabled Payment System (AePS) cash withdrawals.
          </span>
        </div>
      </div>
    </div>
  );
}
