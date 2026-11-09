"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Copy } from "lucide-react";

/**
 * Password Strength is an isolated interactive example for the UiKit UI Lab.
 * It does not depend on other unmerged feature branches or replace existing kits.
 * Copy the HTML + Tailwind snippet and adapt its behavior to your application.
 */
const snippet = "<label for=\"password\" class=\"block text-sm font-bold\">Password</label><input id=\"password\" type=\"password\" minlength=\"8\" class=\"mt-2 w-full rounded-xl border border-slate-300 px-4 py-3\"/>";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const [password,setPassword] = useState('');
const [visible,setVisible] = useState(false);
const strength = [password.length>=8,/[a-z]/.test(password)&&/[A-Z]/.test(password),/[0-9]/.test(password),/[^A-Za-z0-9]/.test(password)].filter(Boolean).length;

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#111936]">
      <header className="border-b border-[#e8edf4] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-black tracking-[-.04em]">
            <span className="grid size-10 place-items-center rounded-xl bg-[#1546ff] text-xl text-white">U</span>
            <span className="text-xl">UiKit <span className="font-medium text-[#7c8ca5]">/ UI Lab</span></span>
          </Link>
          <Link href="/ui-lab" className="inline-flex items-center gap-2 text-sm font-bold text-[#1546ff] hover:underline">
            <ArrowLeft size={16} /> All experiments
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-12 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-[#e2f8ea] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#087a50]">Forms / experiment</p>
            <h1 className="text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Password Strength<span className="text-[#1546ff]">.</span></h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#566681]">See a live password strength indicator and guidelines.</p>
          </div>
          <button type="button" onClick={copySnippet} className="inline-flex items-center gap-2 rounded-xl bg-[#1546ff] px-5 py-3 font-bold text-white transition hover:bg-[#0038d6]">
            {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? "Copied" : "Copy HTML + Tailwind"}
          </button>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)]">
          <section aria-label="Interactive component preview" className="min-w-0 overflow-hidden rounded-[26px] border border-[#e0e7f1] bg-white shadow-[0_18px_60px_rgba(35,65,123,.06)]">
            <div className="flex items-center justify-between border-b border-[#ecf0f6] px-6 py-4">
              <span className="flex items-center gap-2 text-sm font-bold"><span className="size-2.5 rounded-full bg-[#1dc97a]" /> Live preview</span>
              <span className="rounded-lg bg-[#edf3ff] px-3 py-1 text-xs font-bold text-[#1546ff]">Interactive</span>
            </div>
            <div className="min-h-[430px] bg-[linear-gradient(rgba(24,64,150,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,64,150,.04)_1px,transparent_1px)] bg-[size:24px_24px] p-6 sm:p-9">
              <div className="mx-auto max-w-md space-y-4"><label className="block text-sm font-bold" htmlFor="demo-pass">Create a password</label><input id="demo-pass" type={visible?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" className="w-full rounded-xl border border-[#ccd6e7] bg-white px-4 py-3 outline-blue-500"/><button type="button" onClick={()=>setVisible(!visible)} className="text-sm font-bold text-[#1546ff]">{visible?'Hide password':'Show password'}</button><div className="grid grid-cols-4 gap-2">{[1,2,3,4].map(n=><span key={n} className={`h-2 rounded-full ${strength>=n?['','bg-rose-400','bg-orange-400','bg-blue-500','bg-emerald-500'][strength]:'bg-slate-200'}`}/>)}</div><p className="text-sm text-[#51617f]">Strength: {['Very weak','Weak','Fair','Good','Strong'][strength]}</p><ul className="list-inside list-disc space-y-1 text-xs text-[#51617f]"><li>At least 8 characters</li><li>Mix uppercase and lowercase</li><li>Include a number or symbol</li></ul></div>
            </div>
          </section>

          <section aria-label="Copyable HTML source" className="min-w-0 overflow-hidden rounded-[26px] border border-[#e0e7f1] bg-white shadow-[0_18px_60px_rgba(35,65,123,.06)]">
            <div className="flex items-center justify-between border-b border-[#ecf0f6] px-6 py-4">
              <h2 className="text-sm font-black">HTML + Tailwind CSS</h2>
              <button type="button" onClick={copySnippet} className="flex items-center gap-2 text-xs font-bold text-[#1546ff]"><Copy size={14}/> Copy</button>
            </div>
            <div className="p-4">
              <pre className="max-h-[530px] min-h-[320px] overflow-auto rounded-xl bg-[#192439] p-5 text-[12px] leading-6 text-[#d8e6ff]"><code>{snippet}</code></pre>
              <p className="mt-4 text-xs leading-6 text-[#61718b]">Paste into a project with Tailwind CSS installed. The live preview uses React state for interactive behavior; copied HTML is markup and styling.</p>
            </div>
          </section>
        </div>
        <div className="mt-8 rounded-2xl border border-[#dfe7f2] bg-[#f0f6ff] p-6">
          <h2 className="text-base font-black">Implementation notes</h2>
          <p className="mt-2 text-sm leading-7 text-[#52647e]">This is an isolated UI example. The starter-kit registry and your own component designs remain untouched. To connect actions to real data, add your own event handlers, validation and API calls.</p>
          <Link href="/starter-kits" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1546ff]">Open Starter Kits <ArrowRight size={16}/></Link>
        </div>
      </div>
    </main>
  );
}

