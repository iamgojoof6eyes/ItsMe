import { useState } from "react";
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Send,
  Share2,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";
import Logo from "@/assets/R.svg";
import RaunakAvatar from "@/assets/Raunak.svg";

export default function ReachMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity / Hiring",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = "raunak.work18@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Build prefilled mailto link directed to raunak.work18@gmail.com
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Raunak,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSent from Raunak Flix Portfolio`
    )}`;

    // Try posting to Formspree endpoint & trigger mailto fallback
    try {
      await fetch(`https://formspree.io/f/xknkyoky`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });
    } catch (error) {
      console.log("Form API fallback to mailto:", error);
    }

    // Trigger direct mailto dispatch to ensure user can send email immediately
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "Job Opportunity / Hiring",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black px-6 py-3 border-b border-zinc-800/80 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-300">
            Cast & Crew Status: <strong className="text-white">Accepting Inquiries</strong>
          </span>
          <span className="hidden sm:inline-block rounded bg-red-600/20 px-2 py-0.5 text-[10px] font-bold text-red-400 border border-red-800/50">
            DIRECT: {contactEmail}
          </span>
        </div>
      </div>

      {/* Hero Billboard */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
          alt="Reach Me Cast"
          className="h-full w-full object-cover transform scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-3 flex items-center gap-2">
            <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              CAST & CONNECT
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            Reach Out & Collaborate
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-300 text-sm md:text-base">
            Have a project in mind, hiring for full-stack engineering roles, or want to discuss technical architecture? Send a direct message to <span className="text-red-500 font-semibold">{contactEmail}</span>.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Direct Channels & Cast Card */}
        <div className="space-y-6 lg:col-span-1">
          {/* Cast Card */}
          <div className="rounded-xl bg-zinc-900/90 p-6 border border-zinc-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4">
              <img
                src={RaunakAvatar}
                alt="Raunak"
                className="h-16 w-16 rounded-full bg-zinc-800 p-1 border-2 border-red-600 object-cover shadow-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">Raunak</h3>
                <p className="text-xs text-red-500 font-semibold mt-0.5">Lead Architect & Full-Stack Developer</p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  <span>India (Remote Worldwide)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-800/80 pt-4 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Direct Email:</span>
                <a href={`mailto:${contactEmail}`} className="text-red-400 font-bold hover:underline">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Availability:</span>
                <span className="text-emerald-400 font-bold">Open for Hiring / Projects</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Timezone:</span>
                <span className="text-zinc-300 font-semibold">IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <span className="h-3 w-1 bg-red-600 rounded-full inline-block" />
              Direct Communication Channels
            </h4>

            {/* Email Box */}
            <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-800/50">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white">Email Address</p>
                  <p className="text-xs text-zinc-400 truncate">{contactEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/60">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded bg-zinc-800 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-white transition cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded bg-red-600 py-2 text-xs font-semibold text-white hover:bg-red-700 transition cursor-pointer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* GitHub Channel */}
            <a
              href="https://github.com/iamgojoof6eyes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-zinc-900/80 p-4 border border-zinc-800 transition hover:border-zinc-700 group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white group-hover:text-red-500 transition">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-red-400 transition">GitHub Profile</p>
                  <p className="text-xs text-zinc-400">Explore open source repositories</p>
                </div>
              </div>
              <span className="text-xs text-zinc-500 group-hover:text-white transition">→</span>
            </a>

            {/* LinkedIn Channel */}
            <a
              href="https://www.linkedin.com/in/raunakd18/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-zinc-900/80 p-4 border border-zinc-800 transition hover:border-zinc-700 group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-blue-400 group-hover:text-blue-300 transition">
                  <Share2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 transition">LinkedIn Network</p>
                  <p className="text-xs text-zinc-400">Professional background & experience</p>
                </div>
              </div>
              <span className="text-xs text-zinc-500 group-hover:text-white transition">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Netflix Styled Contact Form */}
        <div className="lg:col-span-2">
          <div className="rounded-xl bg-zinc-900/90 p-8 border border-zinc-800 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-red-600" />
                  Transmit Direct Message
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Submitting this form dispatches your message directly to <strong className="text-white">{contactEmail}</strong>.
                </p>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800/50">
                DIRECT TO INBOX
              </span>
            </div>

            {submitted ? (
              <div className="rounded-lg bg-zinc-950 p-8 text-center border border-red-600/60 my-6 animate-fadeIn">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-600/80 mb-4 shadow-[0_0_20px_rgba(229,9,20,0.5)]">
                  <Check className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Transmission Prepared & Dispatched!</h4>
                <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                  Your message has been sent to <span className="text-white font-bold">{contactEmail}</span>. Expect a response within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded bg-red-600 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-red-700 cursor-pointer shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 border border-zinc-800 focus:border-red-600 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 border border-zinc-800 focus:border-red-600 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Inquiry Type / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-md bg-zinc-950 px-4 py-3 text-sm text-white border border-zinc-800 focus:border-red-600 focus:outline-none transition cursor-pointer"
                  >
                    <option value="Job Opportunity / Hiring">Hiring / Full-Stack Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration & Consulting</option>
                    <option value="Tech Stack Discussion">Tech Stack & Architecture Discussion</option>
                    <option value="General Inquiry">General Inquiry / Coffee Chat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Message Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 border border-zinc-800 focus:border-red-600 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-4 font-bold text-white transition hover:bg-red-700 hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Dispatching to {contactEmail}...
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Transmit Email</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
