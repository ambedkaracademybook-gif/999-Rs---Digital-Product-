import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Zap, ArrowRight, Lock, Download, Smartphone } from 'lucide-react';
import { CheckoutFormState } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<CheckoutFormState>({
    fullName: '',
    email: '',
    phone: '',
    targetExam: 'All Groups',
    paymentMethod: 'upi',
    upiApp: 'gpay',
  });

  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone) return;

    setStep('processing');
    const generatedId = `TNPSC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

    setTimeout(() => {
      setStep('success');
    }, 1200);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl text-left my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {step === 'form' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Lock className="h-3.5 w-3.5" />
              <span>Instant Digital Access Enrollment</span>
            </div>

            <h3 className="font-display text-2xl font-black text-white">
              Get TNPSC Complete System
            </h3>

            <div className="mt-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Total Payable Amount</div>
                <div className="font-display text-2xl font-black text-white tabular-nums">
                  ₹999 <span className="text-xs font-normal text-neutral-400 line-through">₹4,999</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded">
                  Save ₹4,000 (80% OFF)
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Vignesh"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email Address (for materials) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Primary Target Exam
                </label>
                <select
                  value={form.targetExam}
                  onChange={(e: any) => setForm({ ...form, targetExam: e.target.value })}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="All Groups">All Groups (Group 1 + Group 2/2A + Group 4)</option>
                  <option value="Group 4">Group 4 (VAO & Junior Assistant)</option>
                  <option value="Group 2/2A">Group 2 / 2A (Sub-Registrar & Assistants)</option>
                  <option value="Group 1">Group 1 (Deputy Collector & DSP)</option>
                </select>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Preferred Payment Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: 'upi' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition ${
                      form.paymentMethod === 'upi'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: 'card' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition ${
                      form.paymentMethod === 'card'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: 'netbanking' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition ${
                      form.paymentMethod === 'netbanking'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    NetBanking
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-6 py-4 text-base font-black text-black transition shadow-[0_0_20px_rgba(229,184,59,0.4)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Pay ₹999 & Get Instant Access</span>
                  <ArrowRight className="h-4 w-4 stroke-[3]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> 256-bit Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-amber-400" /> Instant Access
                </span>
              </div>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="py-12 text-center">
            <div className="h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white">Securing Your Access...</h4>
            <p className="text-xs text-neutral-400 mt-1">Configuring your digital materials and preparation roadmap.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-4">
            <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle className="h-10 w-10" />
            </div>

            <div className="text-xs uppercase font-mono text-emerald-400 font-bold mb-1">
              ORDER CONFIRMED
            </div>
            <h3 className="font-display text-2xl font-black text-white">
              Welcome to the System!
            </h3>
            <p className="mt-1 text-xs text-neutral-300">
              Access credentials and download links sent to <span className="text-amber-400 font-bold">{form.email}</span>.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Reference ID:</span>
                <span className="font-mono text-white font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Enrolled Package:</span>
                <span className="text-white font-semibold">TNPSC Complete Preparation System</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Paid Amount:</span>
                <span className="text-amber-400 font-bold tabular-nums">₹999 (Saved ₹4,000)</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Included Categories:</span>
                <span className="text-neutral-200">Group 1 • Group 2/2A • Group 4</span>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <button
                onClick={() => {
                  alert(`Access Granted! Welcome ${form.fullName}. Your download links and dashboard portal are now unlocked.`);
                  handleReset();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-400 transition"
              >
                <span>Open Digital Learning Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => {
                  alert(`Receipt ${orderId} saved for ${form.email}`);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white transition"
              >
                <Download className="h-4 w-4" />
                <span>Download Payment Receipt</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
