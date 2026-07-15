import { Icon } from "../components/Layout";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useT } from "../i18n";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { use3DTilt } from "../hooks/use3DTilt";
import { FaReact, FaJava, FaPython, FaDocker, FaAws, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiN8N, SiMake, SiLangchain, SiOrange } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

/**
 * Cycles through an array of phrases with a slide-from-bottom / slide-out-top animation.
 * Each phrase gets a unique gradient color.
 */
function RotatingHeroLine({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % phrases.length);
    setAnimKey((k) => k + 1);
  }, [phrases.length]);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  // Gradient colors for each phrase - matching cover/profile blue & cyan
  const gradients = [
    "from-[#003152] to-[#ADDFF1]",
    "from-[#0b3c5d] to-[#b3e0f2]",
    "from-[#00263f] to-[#99d7f0]",
    "from-[#1c4e70] to-[#c2ebfc]",
  ];

  return (
    <span className="inline-flex overflow-hidden align-bottom" style={{ height: "1.15em" }}>
      <span
        key={animKey}
        className={`hero-rotating-text bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent`}
      >
        {phrases[index]}
      </span>
    </span>
  );
}


const coreProjects = [
  {
    key: "core_project_1",
    tags: ["React JS", "PostgreSQL", "Mysql", "Microservices", "Docker", "TailwindCSS"],
    image: "/ncd-app.png",
  },
  {
    key: "core_project_2",
    tags: ["React JS", "Mysql", "TailwindCSS"],
    image: "/annuaire_certificat.png",
  },
  {
    key: "core_project_3",
    tags: ["Python", "Laravel", "IoT", "AWS", "Flutter"],
    image: "/bbopt_logo.jpg",
  },
];

const services = [
  {
    titleKey: "fullstack_title",
    descKey: "fullstack_desc",
    tags: ["MVC", "Microservices", "API Design", "API REST", "React JS", "PostgreSQL", "Mysql"],
    icon: "layers",
    featured: false,
  },
  {
    titleKey: "ai_agents_title",
    descKey: "ai_agents_desc",
    tags: ["LLMs", "RAG", "LangChain", "OpenAI", "Vector DB"],
    icon: "robot",
    featured: true,
  },
  {
    titleKey: "devops_title",
    descKey: "devops_desc",
    tags: ["Jenkins/GitLab", "Github Actions", "Automation", "Linux", "Docker", "NGINX", "Grafana"],
    icon: "settings_input_component",
    featured: false,
  },
  {
    titleKey: "cloud_title",
    descKey: "cloud_desc",
    tags: ["AWS", "EC2", "IAM", "S3", "Amplify", "IaC"],
    icon: "cloud",
    featured: false,
  },
  {
    titleKey: "automation_title",
    descKey: "automation_desc",
    tags: ["n8n", "Make", "Zapier", "Webhooks", "APIs"],
    icon: "sitemap",
    featured: true,
  },
];

const workflowSteps = [
  { step: "1", titleKey: "workflow_step_1_title", descKey: "workflow_step_1_desc" },
  { step: "2", titleKey: "workflow_step_2_title", descKey: "workflow_step_2_desc" },
  { step: "3", titleKey: "workflow_step_3_title", descKey: "workflow_step_3_desc" },
  { step: "4", titleKey: "workflow_step_4_title", descKey: "workflow_step_4_desc" },
];

const techStickers = [
  { name: "React", icon: FaReact, color: "text-[#61dafb]", glow: "hover:shadow-[0_8px_20px_rgba(97,218,251,0.25)] hover:border-[#61dafb]/40" },
  { name: "TypeScript", icon: null, color: "text-[#3178c6]", glow: "hover:shadow-[0_8px_20px_rgba(49,120,198,0.25)] hover:border-[#3178c6]/40", isTS: true },
  // { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", glow: "hover:shadow-[0_8px_20px_rgba(51,153,51,0.25)] hover:border-[#339933]/40" },
  { name: "Java", icon: FaJava, color: "text-[#007396]", glow: "hover:shadow-[0_8px_20px_rgba(0,115,150,0.25)] hover:border-[#007396]/40" },
  { name: "Python", icon: FaPython, color: "text-[#3776ab]", glow: "hover:shadow-[0_8px_20px_rgba(55,118,171,0.25)] hover:border-[#3776ab]/40" },
  { name: "Docker", icon: FaDocker, color: "text-[#2496ed]", glow: "hover:shadow-[0_8px_20px_rgba(36,150,237,0.25)] hover:border-[#2496ed]/40" },
  { name: "PostgreSQL", icon: FaDatabase, color: "text-[#4169e1]", glow: "hover:shadow-[0_8px_20px_rgba(65,105,225,0.25)] hover:border-[#4169e1]/40" },
  { name: "AWS", icon: FaAws, color: "text-[#ff9900]", glow: "hover:shadow-[0_8px_20px_rgba(255,153,0,0.25)] hover:border-[#ff9900]/40" },
  { name: "Git", icon: FaGitAlt, color: "text-[#f05032]", glow: "hover:shadow-[0_8px_20px_rgba(240,80,50,0.25)] hover:border-[#f05032]/40" },
  { name: "n8n", icon: SiN8N, color: "text-[#ff6c37]", glow: "hover:shadow-[0_8px_20px_rgba(255,108,55,0.25)] hover:border-[#ff6c37]/40" },
  { name: "OpenAI", icon: RiOpenaiFill, color: "text-[#74aa9c]", glow: "hover:shadow-[0_8px_20px_rgba(116,170,156,0.25)] hover:border-[#74aa9c]/40" },
  { name: "Make", icon: SiMake, color: "text-[#ea2b6f]", glow: "hover:shadow-[0_8px_20px_rgba(234,43,111,0.25)] hover:border-[#ea2b6f]/40" },
  { name: "LangChain", icon: SiLangchain, color: "text-[#139985]", glow: "hover:shadow-[0_8px_20px_rgba(19,153,133,0.25)] hover:border-[#139985]/40" },
];

function TiltProjectCard({ project }: { project: any }) {
  const t = useT();
  const tilt = use3DTilt(6);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="group relative aspect-4/3 overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated md:aspect-square cursor-pointer"
    >
      <img src={project.image} alt={t(project.key + "_title")} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 sm:p-8"
      >
        <h3 className="font-headline-md mb-2 text-white">{t(project.key + "_title")}</h3>
        <p className="mb-4 line-clamp-2 font-body-md text-white/80">{t(project.key + "_desc")}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 border border-white/20 px-3 py-1 font-label-sm text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  useRevealOnScroll();
  const t = useT();
  const profileTilt = use3DTilt(8);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="developer-grid-hero" />
      <main className="relative z-10">
        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-8 sm:px-margin-desktop sm:py-12 md:py-20">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-surface-container px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-label-sm text-text-muted">{t("available")}</span>
              </div>

              <h1 className="mb-6 max-w-xl leading-[1.1] font-display-lg text-on-surface">
                {t("heroLine1")}{" "}
                <span className="text-on-surface/50"></span>
                <RotatingHeroLine
                  phrases={[
                    t("heroRotate1"),
                    t("heroRotate2"),
                    t("heroRotate3"),
                    t("heroRotate4"),
                  ]}
                />
                <span className="text-on-surface/50">.</span>
              </h1>

              <p className="mb-8 max-w-lg text-[16px] md:text-[17px] font-body-lg text-text-muted">{t("heroLead")}</p>

              <div className="flex flex-wrap gap-3">
                <Link to="/works" className="rounded-full bg-primary-container px-5 py-3 text-sm font-label-md text-on-primary-container sm:px-6">
                  {t("works")}
                </Link>
                <Link to="/contact" className="rounded-full border border-black/10 bg-surface-container px-5 py-3 text-sm font-label-md text-on-surface sm:px-6">
                  {t("contact")}
                </Link>
                <a href="/CV_Exaucé_Umba.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-surface-container px-5 py-3 text-sm font-label-md text-on-surface transition hover:bg-surface-container-highest sm:px-6">
                  {t("download_cv")}
                </a>
              </div>

              <div className="mt-12 max-w-xl">
                <p className="mb-4 font-label-sm uppercase tracking-wider text-text-muted text-xs">Technologies & Outils</p>
                <div className="flex flex-wrap gap-2.5">
                  {techStickers.map((tech, idx) => {
                    const rotClass = idx % 3 === 0 ? "hover:rotate-2" : idx % 3 === 1 ? "hover:-rotate-2" : "hover:rotate-1";
                    return (
                      <div
                        key={tech.name}
                        className={`flex items-center gap-2 rounded-xl border border-on-surface/5 bg-surface-elevated/70 px-3 py-1.5 font-label-md text-on-surface backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-elevated cursor-default shadow-xs ${tech.glow} ${rotClass}`}
                      >
                        {tech.isTS ? (
                          <span className="font-bold text-[9px] bg-[#3178c6] text-white px-1 py-0.5 rounded-xs leading-none">TS</span>
                        ) : tech.icon ? (
                          <tech.icon className={`text-[15px] ${tech.color}`} />
                        ) : null}
                        <span className="text-xs font-semibold">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <div
                ref={profileTilt.ref}
                onMouseMove={profileTilt.onMouseMove}
                onMouseLeave={profileTilt.onMouseLeave}
                style={profileTilt.style}
                className="relative"
              >
                {/* Glow behind */}
                <div className="absolute -bottom-10 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                
                {/* Image */}
                <img src="/moi.png" alt="Exaucé Umba" className="relative h-72 w-full max-w-md rounded-3xl object-cover object-top sm:h-96 md:h-[400px] lg:h-[420px] lg:w-[420px]" />
                
                {/* Gradient overlay to fade out the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none rounded-b-3xl" />
                
                {/* Overlay Card - centered on the bottom boundary line */}
                <div
                  style={{ transform: "translate3d(-50%, 50%, 30px)" }}
                  className="absolute bottom-0 left-1/2 z-10 w-[85%] max-w-[300px] rounded-2xl bg-surface-elevated/85 border border-on-surface/10 p-3 sm:p-4 text-center text-on-surface backdrop-blur-md shadow-xl"
                >
                  <p className="mb-3 font-body-md text-on-surface text-xs sm:text-sm">{t("heroLead_short")}</p>
                  <Link to="/contact" className="inline-block rounded-full bg-primary px-5 py-2 text-xs sm:text-sm font-label-md text-on-primary shadow-md transition-transform hover:scale-95">
                    {t("emailMe")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENTS / PARTENAIRES ─────────────────────────── */}
        {/* <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-10 sm:px-margin-desktop border-y border-on-surface/5 bg-surface-elevated/20 rounded-2xl my-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <span className="font-label-sm uppercase tracking-widest text-text-muted text-xs lg:whitespace-nowrap">
              {t("trusted_by")}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              
              
              <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default">
                <SiOrange className="text-2xl text-[#FF7900] transition-transform group-hover:scale-110" />
                <span className="font-sans font-bold text-lg text-on-surface tracking-tight ">Orange</span>
              </div>

             
              <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default">
                <img src="/videray.png" alt="videray" className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm tracking-widest text-on-surface">VIDERAY</span>
                  <span className="text-[8px] tracking-widest text-text-muted">TECHNOLOGIES</span>
                </div>
              </div>

             
              <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default">
                <img src="/logo-occ.png" alt="occ" className="w-8 " />
                <div className="flex flex-col">
                  <span className="font-sans font-black text-base leading-none text-on-surface">OCC</span>
                  <span className="text-[7px] font-medium tracking-wide text-text-muted leading-tight">OFFICE CONGOLAIS DE CONTRÔLE</span>
                </div>
              </div>

              
              <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default">
                <img src="/industry.png" alt="minint" className="w-8 " />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xs tracking-tight text-on-surface">MINISTÈRE DE L'INDUSTRIE</span>
                  <span className="text-[8px] font-semibold text-primary tracking-widest">RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</span>
                </div>
              </div>

            </div>
          </div>
        </section> */}

        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop">
          <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="font-headline-lg">{t("core_projects")}</h2>
            <Link to="/works" className="group flex items-center gap-2 font-label-md text-text-muted transition-colors hover:text-on-surface">
              {t("github_repo")}
              <Icon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {coreProjects.map((project) => (
              <TiltProjectCard project={project} key={project.key} />
            ))}
          </div>
        </section>

        <section className="reveal mx-auto max-w-container-max-width px-margin-desktop py-16">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <div className="flex aspect-square flex-col justify-between rounded-xl bg-surface-elevated border border-black/10 p-8 md:aspect-auto">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <Icon name="terminal" className="text-4xl text-on-surface" />
                  <Icon name="check_circle" className="text-green-600" />
                </div>
                <h4 className="font-headline-md mb-4 text-on-surface">{t("modern_tech_stack")}</h4>
                <p className="font-body-md text-text-muted">{t("modern_tech_stack_desc")}</p>
              </div>
              <div className="mt-8 flex gap-2 overflow-hidden">
                {["AWS", "Github Action", "Docker"].map((tag) => (
                  <div key={tag} className="rounded border border-black/10 px-3 py-1 text-xs font-bold text-on-surface">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex aspect-square flex-col justify-between rounded-xl border border-white/10 bg-surface-elevated p-8 md:aspect-auto">
              <Icon name="code" className="mb-8 text-4xl text-on-surface/20" filled />
              <p className="font-headline-md mb-8 leading-snug">{t("quote_block")}</p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary-container">
                  <img src="/profile_facebook.jpg" alt="" className="h-full w-full object-cover object-top rounded-full" />
                </div>
                <div>
                  <p className="font-label-md font-bold">{t("engineer_name")}</p>
                  <p className="font-label-sm text-text-muted">{t("engineer_role")}</p>
                </div>
              </div>
            </div>

            <div className="flex aspect-square flex-col items-center justify-center rounded-xl border border-white/10 bg-surface-container-high p-8 text-center md:aspect-auto">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 p-6">
                <span className="font-display-lg">99.9%</span>
              </div>
              <p className="font-headline-md mb-2">{t("uptime_delivery")}</p>
              <div className="flex items-center gap-2 text-primary">
                <Icon name="bolt" className="text-[18px]" />
                <span className="font-label-md uppercase tracking-widest">{t("automation_first")}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop sm:py-24">
          <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
            <span className="font-label-sm uppercase tracking-widest text-text-muted">{t("expertise")}</span>
            <p className="max-w-2xl font-headline-lg">{t("expertise_desc")} <span className="text-primary">{t("expertise_desc1")}</span> <span>{t("expertise_desc2")}</span></p>
          </div>
          <div className="flex flex-wrap justify-center gap-gutter">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl p-8 transition-all ${service.featured
                  ? "z-10 scale-[1.03] border border-primary/30 bg-primary-container shadow-2xl shadow-primary/20"
                  : "group border border-primary/20 bg-surface-container hover:border-primary/30"
                  }`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.featured ? "bg-primary/20" : "bg-surface-container-highest"
                      }`}
                  >
                    <Icon
                      name={service.icon}
                      className={service.featured ? "text-on-primary-container" : "text-primary"}
                    />
                  </div>
                </div>
                <h3 className={`font-headline-md mb-4 ${service.featured ? "text-on-primary-container" : "text-on-surface"}`}>
                  {t(service.titleKey)}
                </h3>
                <p className={`mb-8 font-body-md ${service.featured ? "text-on-primary-container/80" : "text-text-muted"}`}>
                  {t(service.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 font-label-sm ${service.featured ? "bg-primary/20 text-on-primary-container" : "bg-primary/10 text-primary"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal relative overflow-hidden bg-surface-container-lowest py-16 sm:py-24">
          <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile sm:px-margin-desktop">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:gap-12">
              <span className="font-label-sm uppercase tracking-widest text-text-muted">
                Engineering Process
              </span>
              <div className="max-w-3xl">
                <h2 className="mb-6 font-headline-lg">
                  {t("workflow_step_1_title")} <span className="text-primary">{t("workflow_step_2_title")}</span>
                </h2>
                <p className="font-body-lg text-text-muted">{t("workflow_step_1_desc")}</p>
              </div>
            </div>
            <div className="space-y-4">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/8"
                >
                  <div className="flex items-start gap-8">
                    <span className="font-display-lg opacity-20 transition-opacity group-hover:opacity-100">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-headline-md mb-2">{t(item.titleKey)}</h3>
                      <p className="max-w-2xl font-body-md text-text-muted">{t(item.descKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mx-auto mb-16 max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop sm:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated p-8 text-center sm:p-16">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_-20%,#7430f733,transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="mb-12 font-display-lg">
                {t("start_project")} <br className="hidden md:block" />
              </h2>
              <Link to="/contact" className="inline-block rounded-full bg-primary px-12 py-4 font-label-md text-on-primary transition-transform hover:scale-105">
                {t("start_project")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
