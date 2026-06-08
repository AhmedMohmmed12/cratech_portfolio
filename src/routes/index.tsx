import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/cratech-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cratech — A Digital Future Starts With An Idea" },
      { name: "description", content: "Cratech: a trio of programmers building bold web, mobile, and digital products from the ground up." },
      { property: "og:title", content: "Cratech — A Digital Future Starts With An Idea" },
      { property: "og:description", content: "A trio of programmers building bold digital products." },
      { property: "og:image", content: logo },
      { name: "twitter:image", content: logo },
    ],
  }),
  component: Index,
});

const TIKTOK_URL = "https://www.tiktok.com/@cratech";
const LINKTREE_URL = "https://linktr.ee/cratechx";

const services = [
  { n: "01", t: "Company Portfolios", d: "Polished portfolio sites that present your company's work, team, and services with intent." },
  { n: "02", t: "Graduation Projects", d: "End-to-end builds for students — from idea and proposal to a working, defendable product." },
  { n: "03", t: "Web Development", d: "Production-grade websites and web apps with modern stacks — fast, accessible, and built to scale." },
  { n: "04", t: "Mobile Apps", d: "Cross-platform mobile experiences that feel native, perform smoothly, and ship on time." },
  { n: "05", t: "UI / UX Design", d: "Interfaces designed with intent — clear hierarchy, deliberate motion, and pixel discipline." },
];

const projects = [
  { tag: "WEB · AI", title: "Noor — Medical AI", desc: "AI-based breast cancer detection platform with patient management and radiologist dashboard.", img: "/projects/welcome_page_1780946736543.png" },
  { tag: "WEB · CORPORATE", title: "Nuzl Al-Sharqiya", desc: "Modern corporate website for a leading contracting, construction, and heavy equipment leasing firm in Saudi Arabia.", img: "/projects/nuzl_al_shrgiah.png" },
  { tag: "WEB · CORPORATE", title: "Schedora", desc: "Smart fully responsive appointment booking platform that allows users to easily schedule sessions with service providers.", img: "/projects/Schedora.jpeg" },
];

function Index() {
  const [year] = useState(() => new Date().getFullYear());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Cratech" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg tracking-tight">CRATECH</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Hire us
            <span aria-hidden>→</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 grid-bg radial-fade pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground animate-pulse-dot" />
            <span>Available for new projects · {year}</span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,9vw,8rem)] leading-[0.92] tracking-tight">
            <span className="block text-silver-gradient">A DIGITAL</span>
            <span className="block text-silver-gradient">FUTURE STARTS</span>
            <span className="block">
              WITH AN <span className="italic font-normal font-body text-muted-foreground">idea.</span>
            </span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-lg text-muted-foreground max-w-xl">
              Cratech is a trio of programmers shipping production-ready web, mobile, and brand
              experiences. We work small, decide fast, and build like it's our own product.
            </p>
            <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                See our work →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                Start a project
              </a>
            </div>
          </div>

          {/* Big logo plate */}
          <div className="mt-20 relative rounded-3xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
              <img
                src={logo}
                alt="Cratech logo"
                className="h-40 w-40 md:h-56 md:w-56 rounded-full ring-1 ring-border shadow-2xl"
              />
              <div className="md:text-right">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  ◢ The Crate
                </p>
                <p className="mt-3 font-display text-3xl md:text-5xl leading-tight max-w-md">
                  Ideas go in. <br />
                  <span className="text-silver-gradient">Products come out.</span>
                </p>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["3", "Engineers in the crate"],
              ["30+", "Projects shipped"],
              ["10+", "Stacks mastered"],
              ["24h", "Avg. reply time"],
            ].map(([k, v]) => (
              <div key={v} className="border-t border-border pt-4">
                <div className="font-display text-3xl md:text-4xl">{k}</div>
                <div className="text-sm text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader label="◢ 001 / Selected Work" title="Things we built." />
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-border">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors"
              >
                <div className="aspect-[16/10] rounded-xl border border-border bg-card overflow-hidden relative grid-bg mb-6">
                  {p.img ? (
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-20 w-20 md:h-28 md:w-28 border border-foreground/30 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                    </div>
                  )}
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground max-w-md">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader label="◢ 002 / Services" title="What's in the crate." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-border border border-border">
            {services.map((s, i) => {
              const featured = i < 2;
              return (
                <div
                  key={s.t}
                  className={`relative bg-background p-8 hover:bg-secondary transition-colors group overflow-hidden ${
                    featured ? "lg:col-span-3 md:p-10" : "lg:col-span-2"
                  }`}
                >
                  {featured && <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />}
                  <div className="relative flex items-baseline justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                    <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </div>
                  <h3 className={`relative mt-6 font-display ${featured ? "text-2xl md:text-3xl text-silver-gradient" : "text-xl"}`}>
                    {s.t}
                  </h3>
                  <p className={`relative mt-3 text-sm text-muted-foreground leading-relaxed ${featured ? "max-w-md" : ""}`}>
                    {s.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative rounded-3xl border border-border bg-card p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                ◢ 004 / Let's build
              </p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95]">
                Got an idea? <br />
                <span className="text-silver-gradient">Let's open the crate.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                Tell us what you're building. We'll reply within 24 hours with honest thoughts and
                next steps.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Start a project →
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
                >
                  Watch us on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cratech" className="h-8 w-8 rounded-full" />
            <span className="font-mono text-xs text-muted-foreground">
              © {year} CRATECH — A DIGITAL FUTURE STARTS WITH AN IDEA
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
              TikTok ↗
            </a>
            <a href={LINKTREE_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
              Linktree ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[0.95] text-silver-gradient">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 max-w-xs bg-border hidden md:block" />
    </div>
  );
}
