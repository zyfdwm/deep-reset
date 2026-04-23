"use client";

import { useState } from "react";

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [roomType, setRoomType] = useState<"twin" | "single" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal" | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    country: "Australia"
  });

  const getPrice = () => roomType === "single" ? "AUD 2,350" : "AUD 2,200";
  const isFormValid = formData.firstName.trim() !== "" && 
                      formData.lastName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.whatsapp.trim() !== "";

  return (
    <div className="w-full bg-white border border-primary/20 rounded-3xl shadow-sm overflow-hidden">
      {/* Steps Header */}
      <div className="grid grid-cols-3 border-b border-primary/20">
        {[
          { n: 1, label: "Choose Room" },
          { n: 2, label: "Your Details" },
          { n: 3, label: "Payment" },
        ].map(({ n, label }, i) => {
          const isActive = step >= n;
          const isDone = step > n;
          return (
            <div
              key={n}
              className={`flex items-center justify-center gap-2.5 py-5 text-[10px] font-bold tracking-widest uppercase transition-colors
                ${i < 2 ? "border-r border-primary/20" : ""}
                ${isActive ? "bg-primary/5 text-primary" : "text-neutral/30"}
              `}
            >
              <span
                className={`inline-flex w-5 h-5 rounded-full items-center justify-center text-[10px] font-bold shrink-0
                  ${isDone ? "bg-primary text-white" : isActive ? "bg-primary text-white" : "border-2 border-current"}
                `}
              >
                {isDone ? "✓" : n}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="p-8 md:p-12">
        {/* STEP 1: CHOOSE ROOM */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 md:mb-8">
              <p className="opacity-80 font-medium text-sm md:text-base">Both options include the full retreat experience. Choose what suits you best.</p>
              <div className="md:hidden flex self-start items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">
                &larr; Swipe to see more &rarr;
              </div>
            </div>

            <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide md:pb-0">
              {/* Twin Room */}
              <div
                className={`shrink-0 w-[85vw] md:w-auto snap-center border-2 rounded-2xl p-5 md:p-8 cursor-pointer transition-all ${roomType === "twin" ? "border-primary bg-primary/5" : "border-secondary/30 hover:border-primary/50"}`}
                onClick={() => setRoomType("twin")}
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${roomType === "twin" ? "border-primary" : "border-secondary/50"}`}>
                    {roomType === "twin" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] rounded-full font-bold uppercase tracking-widest">Save AUD 150</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-4">Twin share</h3>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2 font-bold">AUD 2,200 <span className="text-sm md:text-base font-normal opacity-60">/ person</span></div>
                <p className="opacity-60 text-xs md:text-sm mb-3 md:mb-6 border-b border-secondary/30 pb-3 md:pb-6 font-medium">Shared room with another participant</p>
                <ul className="space-y-1.5 md:space-y-3 opacity-80 text-[11px] md:text-sm font-medium leading-snug">
                  <li>• 4 nights accommodation</li>
                  <li>• All Ayurvedic meals</li>
                  <li>• Daily yoga practice</li>
                  <li>• 1-hr Ayurvedic massage</li>
                  <li>• Sound Bath Journey</li>
                  <li>• Family Constellation Workshop</li>
                </ul>
              </div>

              {/* Single Room */}
              <div
                className={`shrink-0 w-[85vw] md:w-auto snap-center border-2 rounded-2xl p-5 md:p-8 cursor-pointer transition-all ${roomType === "single" ? "border-primary bg-primary/5" : "border-secondary/30 hover:border-primary/50"}`}
                onClick={() => setRoomType("single")}
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${roomType === "single" ? "border-primary bg-primary text-white" : "border-secondary/50"}`}>
                    {roomType === "single" && <span className="text-xs">✓</span>}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-4">Single room</h3>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2 font-bold">AUD 2,350 <span className="text-sm md:text-base font-normal opacity-60">/ person</span></div>
                <p className="opacity-60 text-xs md:text-sm mb-3 md:mb-6 border-b border-secondary/30 pb-3 md:pb-6 font-medium">Your own private sanctuary</p>
                <ul className="space-y-1.5 md:space-y-3 opacity-80 text-[11px] md:text-sm font-medium leading-snug">
                  <li>• 4 nights accommodation</li>
                  <li>• All Ayurvedic meals</li>
                  <li>• Daily yoga practice</li>
                  <li>• 1-hr Ayurvedic massage</li>
                  <li>• Sound Bath Journey</li>
                  <li>• Family Constellation Workshop</li>
                </ul>
              </div>
            </div>

            <button
              className={`w-full py-4 rounded-full text-white font-bold tracking-wide transition-all ${roomType ? "bg-primary hover:bg-opacity-90 shadow-md" : "bg-neutral/30 cursor-not-allowed"}`}
              disabled={!roomType}
              onClick={() => setStep(2)}
            >
              CONTINUE TO YOUR DETAILS &rarr;
            </button>
          </div>
        )}

        {/* STEP 2: YOUR DETAILS */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-2xl mx-auto">
            <div className="bg-tertiary/40 p-4 md:p-6 rounded-xl mb-6 md:mb-10 border border-secondary/30 flex justify-between items-center text-xs md:text-sm">
              <span className="opacity-80 font-medium">{roomType === "single" ? "Single room" : "Twin share"}</span>
              <span className="font-bold">{getPrice()}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">Your details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2">First Name *</label>
                <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-white border border-secondary/40 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" placeholder="John" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2">Last Name *</label>
                <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-white border border-secondary/40 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" placeholder="Doe" required />
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <label className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2">Email Address *</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-secondary/40 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" placeholder="john@example.com" required />
            </div>

            <div className="mb-4 md:mb-6">
              <label className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2">WhatsApp Number *</label>
              <input type="tel" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-white border border-secondary/40 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium" placeholder="+61..." required />
            </div>

            <div className="mb-8 md:mb-10">
              <label className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2">Country</label>
              <select value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full bg-white border border-secondary/40 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none font-medium text-neutral">
                <option>Australia</option>
                <option>Indonesia</option>
                <option>United States</option>
                <option>Other</option>
              </select>
            </div>

            <button
              className={`w-full py-4 rounded-full text-white font-bold tracking-wide transition-all mb-4 ${isFormValid ? "bg-primary hover:bg-opacity-90 shadow-md" : "bg-neutral/30 cursor-not-allowed"}`}
              disabled={!isFormValid}
              onClick={() => setStep(3)}
            >
              CONTINUE TO PAYMENT &rarr;
            </button>
            <button
              className="w-full py-4 rounded-full border-2 border-secondary/40 text-neutral font-bold tracking-wide hover:bg-secondary/10 transition-all"
              onClick={() => setStep(1)}
            >
              &larr; Back
            </button>
          </div>
        )}

        {/* STEP 3: PAYMENT */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-2xl mx-auto">
            <div className="bg-tertiary/40 p-4 md:p-6 rounded-xl mb-6 md:mb-10 border border-secondary/30 space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
              <div className="flex justify-between">
                <span className="opacity-80">{roomType === "single" ? "Single room" : "Twin share"}</span>
                <span className="font-bold">{getPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Name</span>
                <span className="font-bold">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="border-t border-secondary/30 pt-4 flex justify-between font-bold text-base">
                <span>Total</span>
                <span>{getPrice()}</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-4">Payment method</h3>
            <p className="opacity-80 text-xs md:text-sm mb-6 md:mb-8 font-medium">Select how you'd like to complete your booking.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              <div
                className={`border-2 rounded-2xl p-4 md:p-6 text-center cursor-pointer transition-all ${paymentMethod === "stripe" ? "border-blue-500 bg-blue-50/50" : "border-secondary/40 hover:border-blue-300"}`}
                onClick={() => setPaymentMethod("stripe")}
              >
                <div className="text-blue-600 font-bold text-xl mb-2">Stripe</div>
                <div className="font-bold text-sm mb-1">Credit / Debit Card</div>
                <div className="text-xs opacity-60 font-medium">Visa, Mastercard, Amex</div>
              </div>

              <div
                className={`border-2 rounded-2xl p-4 md:p-6 text-center cursor-pointer transition-all ${paymentMethod === "paypal" ? "border-blue-500 bg-blue-50/50" : "border-secondary/40 hover:border-blue-300"}`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <div className="text-[#003087] font-bold text-xl mb-2">PayPal</div>
                <div className="font-bold text-sm mb-1">PayPal</div>
                <div className="text-xs opacity-60 font-medium">PayPal account or card</div>
              </div>
            </div>

            <p className="text-center text-[10px] font-bold tracking-widest uppercase opacity-60 mb-6">You'll be redirected to a secure checkout page.</p>

            <button
              className={`w-full py-4 rounded-full text-white font-bold tracking-wide transition-all mb-4 ${paymentMethod ? "bg-primary hover:bg-opacity-90 shadow-md" : "bg-neutral/30 cursor-not-allowed"}`}
              disabled={!paymentMethod}
              onClick={() => alert("Redirecting to dummy payment gateway...")}
            >
              SECURE CHECKOUT &rarr;
            </button>
            <button
              className="w-full py-4 rounded-full border-2 border-secondary/40 text-neutral font-bold tracking-wide hover:bg-secondary/10 transition-all"
              onClick={() => setStep(2)}
            >
              &larr; Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
