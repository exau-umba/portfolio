import { Icon } from "../components/Layout";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useT } from "../i18n";
import { use3DTilt } from "../hooks/use3DTilt";

export function AboutPage() {
  useRevealOnScroll();
  const t = useT();

  const skillFullstackTilt = use3DTilt(6);
  const skillDevopsTilt = use3DTilt(6);
  const skillCloudTilt = use3DTilt(6);
  const skillExpertiseTilt = use3DTilt(6);
  const skillAiAgentsTilt = use3DTilt(6);
  const skillAutomationTilt = use3DTilt(6);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background selection:bg-primary-container selection:text-on-primary-container relative">
      <div className="developer-dot-pattern" />
      <main className="pb-16 pt-16 sm:pb-24 relative z-10">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="mx-auto mb-16 max-w-container-max-width px-4 sm:px-6 md:px-margin-desktop sm:mb-24 md:mb-32">
          {/* Photo centrée en haut sur mobile, à droite sur desktop */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">

            {/* Photo — apparaît en PREMIER sur mobile */}
            <div className="reveal order-1 md:order-2 md:shrink-0 md:basis-2/5 lg:basis-5/12">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-full">
                {/* Cercle décoratif derrière */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-primary/10 blur-[60px] sm:h-64 sm:w-64 sm:blur-[80px]" />
                <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-tertiary/10 blur-[40px] sm:h-48 sm:w-48" />
                {/* Carte photo */}
                <div className="glass-card relative overflow-hidden rounded-full p-1.5 shadow-2xl shadow-primary/10">
                  <img
                    src="/profile_facebook.jpg"
                    alt="Exaucé Umba"
                    className="aspect-square w-full rounded-full object-cover object-top"
                  />
                  {/* Badge disponible */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-on-surface/10 bg-background/90 px-4 py-2 backdrop-blur-md whitespace-nowrap">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="font-label-sm text-on-surface text-xs">{t("available")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Texte — apparaît en SECOND sur mobile */}
            <div className="reveal order-2 md:order-1 md:flex-1 text-center md:text-left">
              <span className="mb-3 block font-label-sm uppercase tracking-widest text-primary text-xs sm:text-sm">
                {t("about_role")}
              </span>
              <h1 className="font-display-lg mb-6 leading-[1.1] [text-shadow:0_0_20px_rgba(0,82,204,0.3)]">
                {t("about_heading")}
              </h1>
              <div className="space-y-4 font-body-md md:font-body-lg text-on-surface/80">
                <p>{t("about_paragraph1")}</p>
                <p>{t("about_paragraph2")}</p>
              </div>
              {/* Contacts rapides */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 text-sm">
                <a href="/CV_Exaucé_Umba.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20 transition-all font-label-sm">
                  <Icon name="download" className="text-[18px]" />
                  <span>{t("download_cv")}</span>
                </a>
                <a href="mailto:umbaexauce233@gmail.com" className="flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface-container px-4 py-2 text-on-surface hover:bg-surface-container-high transition-colors">
                  <Icon name="mail" className="text-[18px] text-primary" />
                  <span className="font-label-sm hidden xs:inline">{t("email_val")}</span>
                  <span className="font-label-sm xs:hidden">Email</span>
                </a>
                <a href="tel:+243829084314" className="flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface-container px-4 py-2 text-on-surface hover:bg-surface-container-high transition-colors">
                  <Icon name="phone" className="text-[18px] text-primary" />
                  <span className="font-label-sm">{t("phone_val")}</span>
                </a>
                <a href="https://linkedin.com/in/exau-umba" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface-container px-4 py-2 text-on-surface hover:bg-surface-container-high transition-colors">
                  <Icon name="link" className="text-[18px] text-primary" />
                  <span className="font-label-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPÉTENCES TECHNIQUES ─────────────────────────── */}
        <section className="mx-auto mb-16 max-w-container-max-width px-4 sm:px-6 md:px-margin-desktop sm:mb-24 md:mb-32">
          <div className="reveal mb-10 md:mb-16 flex flex-col items-center text-center">
            <h2 className="font-headline-lg mb-4">{t("technical_proficiency")}</h2>
            <p className="max-w-2xl font-body-md text-on-surface/60">{t("technical_proficiency_lead")}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {/* Ligne 1 : Fullstack (5) & DevOps (7) */}
            <div
              ref={skillFullstackTilt.ref}
              onMouseMove={skillFullstackTilt.onMouseMove}
              onMouseLeave={skillFullstackTilt.onMouseLeave}
              style={skillFullstackTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-5 cursor-pointer"
              data-delay="100"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
                    <Icon name="layers" />
                  </div>
                  <h3 className="font-headline-md mb-3">{t("fullstack_title")}</h3>
                  <p className="mb-6 text-text-muted text-sm sm:text-base">{t("fullstack_desc")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React/Next.js", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"].map((tag) => (
                    <span key={tag} className="rounded-full border border-on-surface/10 bg-surface-container px-3 py-1 font-label-sm text-on-surface text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={skillDevopsTilt.ref}
              onMouseMove={skillDevopsTilt.onMouseMove}
              onMouseLeave={skillDevopsTilt.onMouseLeave}
              style={skillDevopsTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-7 cursor-pointer"
              data-delay="200"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
                    <Icon name="settings_input_component" />
                  </div>
                  <h3 className="font-headline-md mb-3">{t("devops_title")}</h3>
                  <p className="text-text-muted text-sm sm:text-base">{t("devops_desc")}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"].map((tag) => (
                    <span key={tag} className="rounded-full border border-on-surface/10 bg-surface-container px-3 py-1 font-label-sm text-on-surface text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ligne 2 : AI Agents (7) & Workflows (5) */}
            <div
              ref={skillAiAgentsTilt.ref}
              onMouseMove={skillAiAgentsTilt.onMouseMove}
              onMouseLeave={skillAiAgentsTilt.onMouseLeave}
              style={skillAiAgentsTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-7 cursor-pointer"
              data-delay="250"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
                    <Icon name="robot" />
                  </div>
                  <h3 className="font-headline-md mb-3">{t("ai_agents_title")}</h3>
                  <p className="text-text-muted text-sm sm:text-base">{t("ai_agents_desc")}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["LLMs (GPT, Claude)", "RAG", "LangChain", "Vector DB (Pinecone, PGVector)", "Semantic Search"].map((tag) => (
                    <span key={tag} className="rounded-full border border-on-surface/10 bg-surface-container px-3 py-1 font-label-sm text-on-surface text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={skillAutomationTilt.ref}
              onMouseMove={skillAutomationTilt.onMouseMove}
              onMouseLeave={skillAutomationTilt.onMouseLeave}
              style={skillAutomationTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-5 cursor-pointer"
              data-delay="300"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
                    <Icon name="sitemap" />
                  </div>
                  <h3 className="font-headline-md mb-3">{t("automation_title")}</h3>
                  <p className="mb-6 text-text-muted text-sm sm:text-base">{t("automation_desc")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["n8n", "Make", "Zapier", "API Integration", "Webhooks"].map((tag) => (
                    <span key={tag} className="rounded-full border border-on-surface/10 bg-surface-container px-3 py-1 font-label-sm text-on-surface text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ligne 3 : Cloud (5) & Focus Expertise (7) */}
            <div
              ref={skillCloudTilt.ref}
              onMouseMove={skillCloudTilt.onMouseMove}
              onMouseLeave={skillCloudTilt.onMouseLeave}
              style={skillCloudTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-5 cursor-pointer"
              data-delay="350"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
                    <Icon name="cloud" />
                  </div>
                  <h3 className="font-headline-md mb-3">{t("cloud_title")}</h3>
                  <p className="mb-6 text-text-muted text-sm sm:text-base">{t("cloud_desc")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Serverless", "Cloudflare"].map((tag) => (
                    <span key={tag} className="rounded-full border border-on-surface/10 bg-surface-container px-3 py-1 font-label-sm text-on-surface text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={skillExpertiseTilt.ref}
              onMouseMove={skillExpertiseTilt.onMouseMove}
              onMouseLeave={skillExpertiseTilt.onMouseLeave}
              style={skillExpertiseTilt.style}
              className="reveal glass-card flex flex-col justify-between rounded-xl p-6 sm:p-8 sm:col-span-1 lg:col-span-7 cursor-pointer"
              data-delay="400"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="font-headline-md mb-5 text-on-surface">{t("expertise_focus")}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="check_circle" className="mt-0.5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-label-md text-on-surface">{t("system_security")}</h4>
                      <p className="text-xs sm:text-sm text-text-muted">{t("system_security_desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check_circle" className="mt-0.5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-label-md text-on-surface">{t("performance_tuning")}</h4>
                      <p className="text-xs sm:text-sm text-text-muted">{t("performance_tuning_desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="shield" className="mt-0.5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-label-md text-on-surface">{t("cybersecurity_interest")}</h4>
                      <p className="text-xs sm:text-sm text-text-muted">{t("cybersecurity_interest_desc")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CV DÉTAILLÉ ────────────────────────────────────── */}
        <section className="mx-auto max-w-container-max-width px-4 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

            {/* Colonne gauche – Expérience & Formation */}
            <div className="lg:col-span-8 space-y-14">

              {/* Expériences */}
              <div className="reveal">
                <h2 className="font-headline-lg mb-8 flex items-center gap-3">
                  <Icon name="work" className="text-primary text-[24px] sm:text-[28px]" />
                  <span>{t("exp_title")}</span>
                </h2>
                <div className="relative border-l-2 border-on-surface/10 pl-6 sm:pl-8 ml-2 sm:ml-3 space-y-10 sm:space-y-12">
                  {[
                    {
                      date: t("exp_videray_date"), title: t("exp_videray_title"),
                      company: t("exp_videray_company"),
                      desc: [t("exp_videray_desc1"), t("exp_videray_desc2"), t("exp_videray_desc3")]
                    },
                    {
                      date: t("exp_orange_date"), title: t("exp_orange_title"),
                      company: t("exp_orange_company"),
                      desc: [t("exp_orange_desc1"), t("exp_orange_desc2")]
                    },
                    {
                      date: t("exp_magic_date"), title: t("exp_magic_title"),
                      company: t("exp_magic_company"),
                      desc: [t("exp_magic_desc1")]
                    },
                    {
                      date: t("exp_osc_date"), title: t("exp_osc_title"),
                      company: t("exp_osc_company"),
                      desc: [t("exp_osc_desc1"), t("exp_osc_desc2"), t("exp_osc_desc3")]
                    },
                  ].map((exp, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[2.75rem] sm:-left-[3.25rem] top-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                      </span>
                      <span className="font-label-sm text-primary uppercase tracking-wider text-xs">{exp.date}</span>
                      <h3 className="font-headline-md mt-1 text-lg sm:text-xl">{exp.title}</h3>
                      <p className="text-on-surface font-semibold mb-3 text-sm sm:text-base">{exp.company}</p>
                      <ul className="list-disc pl-4 space-y-1.5 text-text-muted text-sm">
                        {exp.desc.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div className="reveal" data-delay="100">
                <h2 className="font-headline-lg mb-8 flex items-center gap-3">
                  <Icon name="school" className="text-primary text-[24px] sm:text-[28px]" />
                  <span>{t("edu_title")}</span>
                </h2>
                <div className="relative border-l-2 border-on-surface/10 pl-6 sm:pl-8 ml-2 sm:ml-3 space-y-10 sm:space-y-12">
                  {[
                    {
                      date: t("edu_unikin_date"), title: t("edu_unikin_title"),
                      school: t("edu_unikin_school"), desc: []
                    },
                    {
                      date: t("edu_odc_date"), title: t("edu_odc_title"),
                      school: t("edu_odc_school"),
                      desc: [t("edu_odc_desc1"), t("edu_odc_desc2"), t("edu_odc_desc3")]
                    },
                  ].map((edu, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[2.75rem] sm:-left-[3.25rem] top-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                      </span>
                      <span className="font-label-sm text-primary uppercase tracking-wider text-xs">{edu.date}</span>
                      <h3 className="font-headline-md mt-1 text-lg sm:text-xl">{edu.title}</h3>
                      <p className="text-on-surface font-semibold mb-3 text-sm sm:text-base">{edu.school}</p>
                      {edu.desc.length > 0 && (
                        <ul className="list-disc pl-4 space-y-1.5 text-text-muted text-sm">
                          {edu.desc.map((d, j) => <li key={j}>{d}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite – Infos, Certifs, Langues, Refs */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10">

              {/* Informations personnelles */}
              <div className="reveal glass-card rounded-2xl p-5 sm:p-6 border border-on-surface/10" data-delay="150">
                <h3 className="font-headline-md mb-5 flex items-center gap-2 text-base sm:text-lg">
                  <Icon name="badge" className="text-primary" />
                  <span>{t("personal_info_title")}</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  {[
                    [t("birth_date"), t("birth_date_val")],
                    [t("birth_place"), t("birth_place_val")],
                    [t("gender"), t("gender_val")],
                    [t("nationality"), t("nationality_val")],
                    [t("civil_status"), t("civil_status_val")],
                  ].map(([label, value], i) => (
                    <div key={i} className="flex justify-between gap-2 border-b border-on-surface/10 pb-2 last:border-b-0 last:pb-0">
                      <span className="text-text-muted shrink-0">{label}</span>
                      <span className="font-semibold text-on-surface text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="reveal space-y-4" data-delay="200">
                <h3 className="font-headline-md flex items-center gap-2 text-base sm:text-lg">
                  <Icon name="verified" className="text-primary" />
                  <span>{t("certifications_heading")}</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: t("cert_aws_educate"), date: t("cert_aws_educate_date"), url: "https://www.credly.com/badges/2147c0a5-5d6f-4d57-bc94-4d1df1376255/public_url" },
                    { title: t("cert_n8n"), date: t("cert_n8n_date") },
                    { title: t("cert_docker"), date: t("cert_docker_date") },
                    { title: t("cert_devops"), date: t("cert_devops_date") },
                    { title: t("cert_angular"), date: t("cert_angular_date") },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-on-surface/10 bg-surface-container p-3 sm:p-4 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <Icon name="workspace_premium" className="text-primary text-[20px] mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-label-md text-on-surface text-sm">{cert.title}</h4>
                          <p className="text-xs text-text-muted mt-0.5">{cert.date}</p>
                        </div>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-label-sm text-xs text-primary hover:underline shrink-0 flex items-center gap-1 border border-primary/20 bg-primary-container/20 rounded-full px-3 py-1 hover:bg-primary-container/30 transition-colors"
                        >
                          <span>{t("verify_badge")}</span>
                          <Icon name="open_in_new" className="text-[12px]" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-center">
                  <a
                    href="https://www.credly.com/users/exauce-umba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label-md text-sm text-primary hover:underline transition-all"
                  >
                    <span>{t("view_all_credly")}</span>
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                </div>
              </div>

              {/* Langues */}
              <div className="reveal space-y-4" data-delay="250">
                <h3 className="font-headline-md flex items-center gap-2 text-base sm:text-lg">
                  <Icon name="translate" className="text-primary" />
                  <span>{t("languages_heading")}</span>
                </h3>
                <div className="space-y-3">
                  {[
                    { label: t("lang_french"), val: 100 },
                    { label: t("lang_lingala"), val: 100 },
                    { label: t("lang_english"), val: 80 },
                  ].map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-label-md text-on-surface text-sm">{lang.label}</span>
                        <span className="font-label-sm text-text-muted text-xs">{lang.val}%</span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${lang.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Références */}
              <div className="reveal space-y-4" data-delay="300">
                <h3 className="font-headline-md flex items-center gap-2 text-base sm:text-lg">
                  <Icon name="contacts" className="text-primary" />
                  <span>{t("references_heading")}</span>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Alain Mangana", role: t("ref_manager"), org: "Orange RDC", phone: "+243 898 900 520", mail: "alain.mangana@orange.cd" },
                    { name: "Daniel Omotete", role: t("ref_trainer"), org: "Orange RDC", phone: "+243 898 900 384", mail: "omotetedan2@gmail.com" },
                    { name: "Hance Mazimi", role: t("ref_pm"), org: "Videray Technologies", phone: "+243 999 060 230", mail: "hance.mazimi@videray-drc.cd" },
                  ].map((ref, i) => (
                    <div key={i} className="rounded-xl border border-on-surface/10 bg-surface-container p-3 sm:p-4">
                      <h4 className="font-semibold text-on-surface text-sm">{ref.name}</h4>
                      <p className="text-xs text-primary mt-0.5">{ref.role}</p>
                      <p className="text-xs text-text-muted">{ref.org}</p>
                      <div className="mt-2 space-y-0.5">
                        <p className="text-xs text-text-muted flex items-center gap-1">
                          <Icon name="phone" className="text-[14px]" />{ref.phone}
                        </p>
                        <p className="text-xs text-text-muted flex items-center gap-1">
                          <Icon name="mail" className="text-[14px]" />{ref.mail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
