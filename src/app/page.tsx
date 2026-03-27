import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-white/20">
      
      {/* Navigation - Glassmorphic & Minimal */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-display font-medium tracking-widest text-brand-white">
            CREONITY
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="mailto:connect@creonity.com" className="hover:text-brand-white transition-colors hidden sm:block">
              connect@creonity.com
            </Link>
            <Link href="/dashboard" className="text-brand-white hover:text-zinc-300 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Massive Background Image - Center aligned, filling the background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 mix-blend-screen opacity-60">
          <Image 
            src="/images/elegant-hero.png" 
            alt="Elegant line art collaboration" 
            fill
            className="object-cover object-center md:object-contain scale-150 md:scale-125"
            priority
          />
          {/* Vignette overlay to ensure text remains readable */}
          <div className="absolute inset-0 bg-brand-black/60 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
        </div>

        {/* Soft elegant gradient glow in the background */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none -z-20"></div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center">
          
          <div className="space-y-10 fade-in-up relative z-20 max-w-4xl">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-widest uppercase text-zinc-300 w-full">
              <span className="w-12 h-[1px] bg-zinc-500"></span>
              India's first auction platform
              <span className="w-12 h-[1px] bg-zinc-500"></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-light leading-[1.05] tracking-tight text-glow drop-shadow-2xl">
              Where value <br />
              <span className="text-zinc-300 italic">meets</span> <br />
              creation.
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              The creator economy is broken. We're fixing it with a seamless, transparent marketplace designed for high-end collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
              <Link href="https://demo.brand.creonity.com" className="inline-flex items-center justify-center font-sans font-medium px-12 py-5 text-lg rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                For Brands
              </Link>
              <Link href="https://demo.creator.creonity.com" className="inline-flex items-center justify-center font-sans font-medium px-12 py-5 text-lg rounded-full border border-white/30 hover:border-white/80 hover:bg-white/5 hover:scale-105 transition-all duration-300 group bg-brand-black/40 backdrop-blur-sm">
                For Creators
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-32 md:py-48 px-6 border-t border-white/5 relative overflow-hidden flex items-center min-h-[80vh]">
        {/* Massive Background Problem Illustration */}
        <div className="absolute inset-0 w-full h-full opacity-25 pointer-events-none -z-10 mix-blend-screen">
          <Image 
            src="/images/elegant-problem.png" 
            alt="Broken system abstraction" 
            fill
            className="object-cover md:object-contain object-center scale-150 md:scale-110"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 max-w-2xl mb-12 lg:mb-0">
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light leading-[1.1] drop-shadow-xl">
              The landscape <br/>is fragmented, <br/>
              <span className="text-zinc-400 italic">opaque</span>, <br/>and broken.
            </h2>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: "01", title: "Opaque Pricing", desc: "No standard rates. Brands dictate fixed prices, leaving creators with zero negotiation power." },
              { num: "02", title: "Delayed Payments", desc: "Creators chase invoices for weeks. No escrow, no structure, no financial guarantees." },
              { num: "03", title: "No Unified Workspace", desc: "Brands juggle countless tools—Slack, Drive, email, spreadsheets—for a single campaign." },
              { num: "04", title: "No Legal Structure", desc: "Agreements made over informal chats. No solid contracts, no clear usage rights, no real protection." }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-sm font-display text-zinc-600 mb-6 group-hover:text-white transition-colors">{item.num}</div>
                <h3 className="text-2xl font-display font-light mb-4">{item.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 md:py-48 px-6 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-32 relative z-10">
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-light mb-8 leading-[1.1]">
              A unified ecosystem.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light">
              One elegant platform. Every tool you need. A transparent auction marketplace that works seamlessly for both sides.
            </p>
          </div>

          <div className="space-y-32">
            {/* For Brands */}
            <div className="relative group min-h-[60vh] flex flex-col justify-center bg-brand-black/40 p-8 md:p-16 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm">
              {/* Massive Illustration Background */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none -z-10 mix-blend-screen">
                <Image 
                  src="/images/elegant-brand.png" 
                  alt="Brand workflow" 
                  fill
                  className="object-cover object-center scale-125 transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-black/60 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="text-xs font-medium tracking-widest uppercase text-white mb-16 border-b border-white/20 pb-4">
                  The Brand Experience
                </div>
                <div className="space-y-12 pl-6 border-l border-white/20">
                  {[
                    { step: "Post", desc: "Launch an auction with your precise brief and budget parameters." },
                    { step: "Review", desc: "Compare creator proposals, deliverables, and pricing side-by-side in a clean interface." },
                    { step: "Secure", desc: "Sign digital agreements instantly. Funds are held securely in escrow until delivery." }
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-shadow duration-500"></div>
                      <h4 className="font-display text-4xl font-light mb-4 drop-shadow-md">{item.step}</h4>
                      <p className="text-zinc-300 font-light text-xl leading-relaxed drop-shadow-md">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* For Creators */}
            <div className="relative group min-h-[60vh] flex flex-col justify-center items-end bg-brand-black/40 p-8 md:p-16 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm">
              {/* Massive Illustration Background */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none -z-10 mix-blend-screen">
                <Image 
                  src="/images/elegant-creator.png" 
                  alt="Creator workflow" 
                  fill
                  className="object-cover object-center scale-125 transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-black/60 bg-gradient-to-l from-brand-black via-brand-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-xl text-right">
                <div className="text-xs font-medium tracking-widest uppercase text-white mb-16 border-b border-white/20 pb-4">
                  The Creator Experience
                </div>
                <div className="space-y-12 pr-6 border-r border-white/20">
                  {[
                    { step: "Showcase", desc: "Connect social APIs and build a portfolio that highlights your true value." },
                    { step: "Bid", desc: "Discover open auctions. Submit your bespoke price and deliverables." },
                    { step: "Deliver", desc: "Execute the campaign, sign the deal, and have your funds released instantly." }
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -right-[29px] top-2 w-3 h-3 rounded-full bg-zinc-400 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-500"></div>
                      <h4 className="font-display text-4xl font-light mb-4 drop-shadow-md">{item.step}</h4>
                      <p className="text-zinc-300 font-light text-xl leading-relaxed drop-shadow-md">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES & STATS */}
      <section className="py-32 md:py-48 px-6 bg-brand-black relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Massive Background Auction Illustration */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none -z-10 mix-blend-screen">
          <Image 
            src="/images/elegant-auction.png" 
            alt="Auction engine network" 
            fill
            className="object-cover md:object-contain object-center scale-150 md:scale-125"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <div className="lg:col-span-7 space-y-12 relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light leading-[1.1] mb-8 drop-shadow-xl">
                The Auction <br/><span className="text-zinc-400 italic">Engine</span>
              </h2>
              <div className="space-y-12 max-w-xl">
                <div>
                  <h4 className="text-3xl font-display font-light mb-4">Creator Power</h4>
                  <p className="text-zinc-300 font-light text-xl leading-relaxed">Creators set their own price, finally gaining real leverage in negotiations.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-light mb-4">Value Wins</h4>
                  <p className="text-zinc-300 font-light text-xl leading-relaxed">Brands evaluate every bid holistically—prioritizing overall value over merely the lowest price.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 relative z-10 bg-brand-black/40 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md">
              {[
                { label: "Wallet & Escrow", desc: "Secure transaction management." },
                { label: "e-Agreements", desc: "Legally binding digital contracts." },
                { label: "No Hidden Fees", desc: "Transparent 5% + 5% model." },
                { label: "Deep Analytics", desc: "Real-time performance tracking." }
              ].map((feature, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-12 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-20 transition-all duration-500 mb-6"></div>
                  <h4 className="text-2xl font-display font-light mb-3">{feature.label}</h4>
                  <p className="text-zinc-400 font-light text-lg">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalist Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-white/10 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-light mb-4">4M+</div>
              <div className="text-xs tracking-widest uppercase text-zinc-500">Active Creators</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-light mb-4">25%</div>
              <div className="text-xs tracking-widest uppercase text-zinc-500">CAGR Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-light mb-4">$5.9B</div>
              <div className="text-xs tracking-widest uppercase text-zinc-500">Market Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="py-40 px-6 relative overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.02] blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-light mb-12">
            The future runs on <br />
            <span className="italic text-zinc-500">Creonity.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
            <Link href="/brand-dashboard" className="elegant-button-primary">
              Enter Brand Dashboard
            </Link>
            <Link href="/dashboard" className="elegant-button">
              Enter Creator Dashboard
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-light text-zinc-500">
            <div className="font-display tracking-widest uppercase text-white">
              Creonity
            </div>
            <div>
              Fair, transparent transactions at scale.
            </div>
            <Link href="mailto:connect@creonity.com" className="hover:text-white transition-colors">
              connect@creonity.com
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
