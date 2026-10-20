# ⚡ OpenMentor AI

> An intelligent, open-source AI mentor built for **Hacktoberfest 2026**. Designed to assist beginners, students, and open-source contributors in reviewing code, debugging errors, and accelerating their open-source contributions.

---

## 🎯 Features
- **Executive Summaries**: High-level, bulleted breakdown of complex programming concepts.
- **Key Differences & Analysis**: Deep comparison of data structures, algorithms, and libraries.
- **Clean Code Examples**: Minimal, syntax-highlighted snippets ready to use.
- **Open-Source Tips**: Direct, practical advice for making meaningful GitHub pull requests.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown Rendering**: `react-markdown`
- **AI Inference**: [Groq Cloud High-Speed LPU](https://groq.com/)
- **Core Model**: `openai/gpt-oss-20b` (Open-Weight Model)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🤖 Models and AI Disclosure (Mandatory Section)
In strict compliance with the Hacktoberfest Hack Day Chittagong rulebook:
1. **Open-Weight Model**: Uses `openai/gpt-oss-20b` running on hosted inference via Groq Cloud API for real-time natural language reasoning.
2. **Proprietary Models**: None used.
3. **AI Coding Assistants**: VS Code was used with LLM assistance for boilerplate design, code structure refinement, and debugging.

---

## 🚀 Local Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/openmentor-ai.git
   cd openmentor-ai