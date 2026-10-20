"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.reply || data.error);
    } catch (err) {
      setResponse("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center my-8">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-3 tracking-wide">
            Hacktoberfest 2026 • Open-Source Edition
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
            ⚡ OpenMentor AI
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            Intelligent Open-Source Code Reviewer & Contributor Assistant
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Powered by Open-Weight <span className="text-teal-400 font-medium">GPT-OSS-20B</span> via Groq High-Speed Inference
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows="5"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Paste your code snippet, error stack trace, or technical question here..."
            className="w-full p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition text-sm font-mono leading-relaxed"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 font-semibold rounded-xl transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10 cursor-pointer text-sm md:text-base"
          >
            {loading ? "Analyzing Code with Open-Weight AI..." : "Analyze Code & Get Expert Guidance 🚀"}
          </button>
        </form>

        {/* Output Container */}
        {response && (
          <div className="mt-8 p-6 md:p-8 bg-slate-800/95 rounded-2xl border border-slate-700 shadow-2xl">
            <div className="border-b border-slate-700 pb-3 mb-5">
              <h2 className="text-base font-bold text-teal-400 flex items-center gap-2">
                💡 OpenMentor Analysis & Recommendations:
              </h2>
            </div>
            
            <div className="text-slate-200 text-sm md:text-base leading-relaxed space-y-3 font-sans">
              <ReactMarkdown
                components={{
                  h2: ({node, ...props}) => <h2 className="text-lg font-bold text-teal-300 mt-6 mb-2 tracking-wide" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-base font-semibold text-blue-300 mt-4 mb-1" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 my-2 text-slate-300" {...props} />,
                  li: ({node, ...props}) => <li className="pl-1" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-white" {...props} />,
                  hr: ({node, ...props}) => <hr className="border-slate-700/80 my-5" {...props} />,
                  pre: ({node, ...props}) => <pre className="bg-slate-900/90 p-4 rounded-xl overflow-x-auto border border-slate-700/80 text-xs md:text-sm font-mono text-emerald-300 my-3" {...props} />,
                  code: ({node, ...props}) => <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300 text-xs font-mono" {...props} />,
                }}
              >
                {response}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}