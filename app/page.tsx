export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Contract Review
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Analyze Freelance Contracts for{' '}
          <span className="text-[#58a6ff]">Red Flags Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload any contract and get an AI-powered breakdown of problematic clauses, unfair payment terms, and IP ownership traps — with severity scoring — before you sign.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Instant Access — $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚩</div>
            <h3 className="font-semibold text-white mb-1">Red Flag Detection</h3>
            <p className="text-sm text-[#8b949e]">Automatically surfaces clauses that put you at risk — non-competes, unlimited revisions, liability traps.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-white mb-1">Payment Term Analysis</h3>
            <p className="text-sm text-[#8b949e]">Spot late payment clauses, kill fees, and net-90 traps that hurt your cash flow.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold text-white mb-1">IP Ownership Check</h3>
            <p className="text-sm text-[#8b949e]">Know exactly who owns your work. Detect work-for-hire clauses and IP assignment overreach.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads',
              'AI red flag detection & scoring',
              'Payment term analysis',
              'IP ownership breakdown',
              'Detailed PDF reports',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Analyzing Contracts
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support PDF, DOCX, and plain text contracts. Simply upload your file and the AI will parse and analyze it within seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my contract data kept private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your contracts are processed securely and never stored permanently or used to train AI models. Each analysis session is isolated.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does this replace a lawyer?</h3>
            <p className="text-sm text-[#8b949e]">No — it's a first-pass tool to help you spot issues fast. For high-stakes contracts, always consult a qualified attorney. Think of it as your smart pre-screening assistant.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Freelance Contract Analyzer. Not legal advice.
      </footer>
    </main>
  );
}
