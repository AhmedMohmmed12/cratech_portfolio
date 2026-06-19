import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/cratech-logo.jpg";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => {
    const { t } = useTranslation();
    return {
      meta: [
        { title: t("head_title", { defaultValue: "Cratech — A Digital Future Starts With An Idea" }) },
        { 
          name: "description", 
          content: t("head_desc", { defaultValue: "Cratech: a trio of programmers building bold web, mobile, and digital products from the ground up." }) 
        },
        { property: "og:title", content: t("head_title", { defaultValue: "Cratech — A Digital Future Starts With An Idea" }) },
        { property: "og:description", content: t("head_desc", { defaultValue: "A trio of programmers building bold digital products." }) },
        { property: "og:image", content: logo },
        { name: "twitter:image", content: logo },
      ],
    };
  },
  component: Index,
});

const TIKTOK_URL = "https://www.tiktok.com/@cratech";
const LINKTREE_URL = "https://linktr.ee/cratechx";

function Index() {
  const { t, i18n } = useTranslation();
  const [year] = useState(() => new Date().getFullYear());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { n: "01", t: t("services_list.portfolios.title"), d: t("services_list.portfolios.desc") },
    { n: "02", t: t("services_list.graduation.title"), d: t("services_list.graduation.desc") },
    { n: "03", t: t("services_list.web.title"), d: t("services_list.web.desc") },
    { n: "04", t: t("services_list.mobile.title"), d: t("services_list.mobile.desc") },
    { n: "05", t: t("services_list.ui_ux.title"), d: t("services_list.ui_ux.desc") },
  ];

  const BASE = import.meta.env.BASE_URL;

  const projects = [
    { tag: t("projects.noor.tag"), title: t("projects.noor.title"), desc: t("projects.noor.desc"), img: `${BASE}projects/welcome_page_1780946736543.png` },
    { tag: t("projects.nuzl.tag"), title: t("projects.nuzl.title"), desc: t("projects.nuzl.desc"), img: `${BASE}projects/nuzl_al_shrgiah.png` },
    { tag: t("projects.schedora.tag"), title: t("projects.schedora.title"), desc: t("projects.schedora.desc"), img: `${BASE}projects/Schedora.jpeg` },
    { tag: t("projects.advise_mate.tag"), title: t("projects.advise_mate.title"), desc: t("projects.advise_mate.desc"), img: `${BASE}projects/AdviseMate.png` },
  ];

  const isRtl = i18n.dir() === "rtl";

  return (
    <div dir={i18n.dir()} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 ltr:flex-row rtl:flex-row-reverse">
            <img src={logo} alt="Cratech" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg tracking-tight">CRATECH</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">{t("nav.work")}</a>
            <a href="#services" className="hover:text-foreground transition">{t("nav.services")}</a>
            <a href="#contact" className="hover:text-foreground transition">{t("nav.contact")}</a>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              {t("nav.hire_us")}
              <span aria-hidden className="inline-block transform rtl:rotate-180">→</span>
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 grid-bg radial-fade pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground animate-pulse-dot" />
            <span>{t("hero.available")} · {year}</span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,9vw,8rem)] leading-[1.1] md:leading-[0.92] rtl:tracking-normal tracking-tight text-start relative z-10">
            <span className="block text-silver-gradient pb-2">{t("hero.title_1")}</span>
            <span className="block text-silver-gradient pb-2">{t("hero.title_2")}</span>
            <span className="block pb-2">
              {t("hero.title_3")}{" "}
              <span className="italic font-normal font-body text-muted-foreground">{t("hero.title_idea")}</span>
            </span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-lg text-muted-foreground max-w-xl text-start">
              {t("hero.desc")}
            </p>
            <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                {t("hero.see_work")}
                <span className="inline-block transform rtl:rotate-180 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                {t("hero.start_project")}
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
              <div className="md:text-end text-center">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  ◢ {t("plate.the_crate")}
                </p>
                <p className="mt-3 font-display text-3xl md:text-5xl leading-tight max-w-md">
                  {t("plate.ideas_in")} <br />
                  <span className="text-silver-gradient">{t("plate.products_out")}</span>
                </p>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["3", t("stats.engineers")],
              ["15+", t("stats.projects")],
              ["10+", t("stats.stacks")],
              ["24h", t("stats.reply_time")],
            ].map(([k, v]) => (
              <div key={v} className="border-t border-border pt-4 text-start">
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
          <SectionHeader label={t("work.label")} title={t("work.title")} />
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-border">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors text-start"
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
          <SectionHeader label={t("services.label")} title={t("services.title")} />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-border border border-border">
            {services.map((s, i) => {
              const featured = i < 2;
              return (
                <div
                  key={s.t}
                  className={`relative bg-background p-8 hover:bg-secondary transition-colors group overflow-hidden text-start ${
                    featured ? "lg:col-span-3 md:p-10" : "lg:col-span-2"
                  }`}
                >
                  {featured && <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />}
                  <div className="relative flex items-baseline justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                    <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition rtl:rotate-180">
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
            <div className="relative max-w-3xl text-start">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                ◢ {t("contact.label")}
              </p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.1] md:leading-[0.95]">
                {t("contact.title_1")} <br />
                <span className="text-silver-gradient">{t("contact.title_2")}</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                {t("contact.desc")}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  {t("contact.start_project")}
                  <span className="inline-block transform rtl:rotate-180 transition-transform">→</span>
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
                >
                  {t("contact.watch_tiktok")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-start">
          <div className="flex items-center gap-3 rtl:flex-row-reverse">
            <img src={logo} alt="Cratech" className="h-8 w-8 rounded-full" />
            <span className="font-mono text-xs text-muted-foreground">
              {t("footer.copy", { year })}
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
              {t("footer.tiktok")} ↗
            </a>
            <a href={LINKTREE_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
              {t("footer.linktree")} ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="text-start">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.1] md:leading-[0.95] text-silver-gradient">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 max-w-xs bg-border hidden md:block" />
    </div>
  );
}
