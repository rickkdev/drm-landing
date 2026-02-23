import React from "react";
import Head from "next/head";

const WIPPage = () => {
  return (
    <>
      <Head>
        <title>OpenQ - Developer Intelligence</title>
        <meta name="description" content="Developer data infrastructure for AI and growth" />
      </Head>
      
      <main className="bg-[#0a0a0f] min-h-screen text-white">
        {/* Nav */}
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">OpenQ</div>
            <a href="mailto:hello@openq.dev" className="text-sm text-white/60 hover:text-white transition">
              Get in touch →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-white/5 rounded-full border border-white/10">
              Developer Intelligence Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The developer data layer<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                for the AI era
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
              High-quality source code datasets for LLM training. Developer intelligence for growth teams. 
              Built on the largest index of open source activity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition">
                Explore Services
              </a>
              <a href="mailto:hello@openq.dev" className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The invisible funnel is gone</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                AI changed how developers learn and build. They no longer visit docs—they ask assistants. 
                Usage is up, but the conversion path disappeared. Dev tooling companies need new strategies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl mb-4">📉</div>
                <h3 className="font-semibold mb-2">Funnel Collapse</h3>
                <p className="text-sm text-white/60">
                  Developers get answers from AI, not docs. No website visit means no conversion moment.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-semibold mb-2">Invisible Users</h3>
                <p className="text-sm text-white/60">
                  npm installs, CLI usage, CI pipelines—adoption happens anonymously, impossible to attribute.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl mb-4">💸</div>
                <h3 className="font-semibold mb-2">Revenue Disconnect</h3>
                <p className="text-sm text-white/60">
                  Usage grows while revenue stalls. The value is real but no longer priced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do</h2>
              <p className="text-white/60">Three ways we help companies leverage developer data</p>
            </div>

            {/* Service 1: LLM Training Data */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-2">LLM Training Data</h3>
                  <p className="text-white/60 text-sm">Source code provision for code generation models</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-purple-400">→</span>
                      <div>
                        <strong>Curated source code datasets</strong>
                        <p className="text-sm text-white/60">High-quality, licensed code filtered for training language models</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">→</span>
                      <div>
                        <strong>Framework-specific collections</strong>
                        <p className="text-sm text-white/60">React, Python, Rust—organized by ecosystem, stack, and patterns</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">→</span>
                      <div>
                        <strong>Quality signals included</strong>
                        <p className="text-sm text-white/60">Stars, forks, maintainer reputation, test coverage, documentation quality</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2: Model Fine-tuning */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-2">Fine-tuning Support</h3>
                  <p className="text-white/60 text-sm">Finding the right repos for domain-specific models</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-blue-400">→</span>
                      <div>
                        <strong>Repo discovery for your domain</strong>
                        <p className="text-sm text-white/60">Find repositories matching specific technologies, patterns, or coding styles</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400">→</span>
                      <div>
                        <strong>Developer-centric model training</strong>
                        <p className="text-sm text-white/60">Data pipelines optimized for code completion, refactoring, and generation tasks</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400">→</span>
                      <div>
                        <strong>Open source model support</strong>
                        <p className="text-sm text-white/60">Datasets formatted for CodeLlama, StarCoder, and other OS models</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3: GTM for Dev Tooling */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Developer GTM</h3>
                  <p className="text-white/60 text-sm">Go-to-market strategy for dev tooling companies</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-emerald-400">→</span>
                      <div>
                        <strong>Find your actual users</strong>
                        <p className="text-sm text-white/60">Identify developers using your tool from GitHub activity, dependency graphs, and contribution patterns</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400">→</span>
                      <div>
                        <strong>De-anonymize adoption</strong>
                        <p className="text-sm text-white/60">Connect npm downloads and anonymous usage to real developers and companies</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400">→</span>
                      <div>
                        <strong>Rebuild the funnel</strong>
                        <p className="text-sm text-white/60">New attribution models for the AI era—when docs are no longer the entry point</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Infrastructure */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on real developer data</h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              We index public GitHub activity, dependency graphs, and contribution patterns 
              to build the most comprehensive view of the open source ecosystem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/5">
                <div className="text-3xl font-bold text-purple-400">100M+</div>
                <div className="text-sm text-white/60">Repositories indexed</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5">
                <div className="text-3xl font-bold text-blue-400">50M+</div>
                <div className="text-sm text-white/60">Developer profiles</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5">
                <div className="text-3xl font-bold text-emerald-400">1B+</div>
                <div className="text-sm text-white/60">Commits analyzed</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5">
                <div className="text-3xl font-bold text-orange-400">10M+</div>
                <div className="text-sm text-white/60">Dependencies mapped</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
            <p className="text-white/60 mb-8">
              Whether you're training models, finding users, or rebuilding your GTM strategy—we can help.
            </p>
            <a 
              href="mailto:hello@openq.dev" 
              className="inline-block px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition"
            >
              hello@openq.dev
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <div>© 2024 OpenQ. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
              <a href="https://github.com/OpenQDev" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default WIPPage;
